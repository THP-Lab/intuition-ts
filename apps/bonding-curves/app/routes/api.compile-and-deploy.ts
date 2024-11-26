import { json } from '@remix-run/node'
import type { ActionFunction } from '@remix-run/node'
import { writeFile, readFile } from 'fs/promises'
import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'
import {
  createPublicClient,
  createWalletClient,
  http,
  parseEther,
  custom,
} from 'viem'
import { foundry } from 'viem/chains'
import { promises as fs } from 'fs'

const execAsync = promisify(exec)

const ANVIL_URL = 'http://0.0.0.0:8545'
const ANVIL_ACCOUNT = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'

// Custom chain config for local Anvil
const localFoundry = {
  ...foundry,
  rpcUrls: {
    default: {
      http: [ANVIL_URL],
    },
    public: {
      http: [ANVIL_URL],
    },
  },
}

export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    let content = formData.get('content') as string

    if (!file || !content) {
      return json(
        { error: 'File and content are required' },
        { status: 400 }
      )
    }

    // Ensure contracts directory exists
    const contractsPath = path.join(process.cwd(), 'contracts', 'examples')
    await fs.mkdir(contractsPath, { recursive: true })

    // Copy BaseCurve.sol to examples directory
    const baseCurvePath = path.join(process.cwd(), 'contracts', 'BaseCurve.sol')
    const baseCurveContent = await readFile(baseCurvePath, 'utf8')
    await writeFile(path.join(contractsPath, 'BaseCurve.sol'), baseCurveContent)

    // Save the curve file to the contracts directory
    const filePath = path.join(contractsPath, file.name)
    await writeFile(filePath, content)

    try {
      // Compile the contract with verbose output
      const { stdout, stderr } = await execAsync('forge build --force --sizes')
      console.log('Compilation output:', stdout)
      if (stderr) console.error('Compilation errors:', stderr)

      // List the out directory to debug
      const outDir = path.join(process.cwd(), 'out')
      const outFiles = await fs.readdir(outDir, { recursive: true })
      console.log('Output directory contents:', outFiles)
    } catch (error) {
      console.error('Compilation failed:', error)
      return json(
        { error: 'Contract compilation failed' },
        { status: 500 }
      )
    }

    // Get the contract artifacts
    const contractName = path.parse(file.name).name
    const artifactPath = path.join(
      process.cwd(),
      'out',
      file.name,
      `${contractName}.json`
    )

    console.log('Looking for artifact at:', artifactPath)

    let artifact
    try {
      const artifactContent = await fs.readFile(artifactPath, 'utf8')
      artifact = JSON.parse(artifactContent)

      // Log the artifact structure for debugging
      console.log('Contract artifact:', {
        hasAbi: !!artifact.abi,
        abiLength: artifact.abi?.length,
        hasBytecode: !!artifact.bytecode,
        bytecodeLength: artifact.bytecode?.object?.length,
      })

      // Verify constructor exists
      const constructor = artifact.abi.find(
        (item: any) => item.type === 'constructor'
      )
      console.log('Constructor:', constructor)

    } catch (error) {
      console.error('Failed to read artifact:', error)
      return json(
        { error: 'Failed to read contract artifact' },
        { status: 500 }
      )
    }

    // Configure transport with more lenient settings
    const transport = http(ANVIL_URL, {
      timeout: 60000,
      retryCount: 5,
      retryDelay: 2000,
      batch: false,
    })

    const publicClient = createPublicClient({
      chain: localFoundry,
      transport,
    })

    const walletClient = createWalletClient({
      chain: localFoundry,
      transport,
      account: ANVIL_ACCOUNT,
    })

    try {
      // Test connection to Anvil
      console.log('Testing Anvil connection...')
      const chainId = await publicClient.getChainId()
      console.log('Connected to chain:', chainId)

      // Deploy the contract
      console.log('Deploying contract...')
      console.log('Contract ABI:', JSON.stringify(artifact.abi, null, 2))

      const hash = await walletClient.deployContract({
        abi: artifact.abi,
        bytecode: artifact.bytecode.object as `0x${string}`,
        args: [],
      })

      console.log('Waiting for deployment receipt...')
      const receipt = await publicClient.waitForTransactionReceipt({ hash })

      if (!receipt.contractAddress) {
        throw new Error('No contract address in receipt')
      }

      console.log('Contract deployed at:', receipt.contractAddress)

      // Clean up temporary files
      await fs.rm(path.join(contractsPath, 'BaseCurve.sol'))
      await fs.rm(filePath)

      return json({ address: receipt.contractAddress })
    } catch (error) {
      console.error('Deployment failed:', error)
      return json(
        { error: error instanceof Error ? error.message : 'Contract deployment failed' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error:', error)
    return json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
} 