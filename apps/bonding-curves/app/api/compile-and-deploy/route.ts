import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'
import { createPublicClient, createWalletClient, http, Chain } from 'viem'
import { promises as fs } from 'fs'

const execAsync = promisify(exec)

// Custom chain configuration for our Anvil instance
const localChain = {
  id: 31337,
  name: 'Local Anvil',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://localhost:8545'] },
    public: { http: ['http://localhost:8545'] },
  },
} as const satisfies Chain

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const content = formData.get('content') as string

    if (!file || !content) {
      return NextResponse.json(
        { error: 'File and content are required' },
        { status: 400 }
      )
    }

    // Ensure contracts directory exists
    const contractsPath = path.join(process.cwd(), 'contracts', 'examples')
    await fs.mkdir(contractsPath, { recursive: true })

    // Save the file to the contracts directory
    const filePath = path.join(contractsPath, file.name)
    await writeFile(filePath, content)

    try {
      // Compile the contract
      const { stdout, stderr } = await execAsync('forge build')
      console.log('Compilation output:', stdout)
      if (stderr) console.error('Compilation errors:', stderr)
    } catch (error) {
      console.error('Compilation failed:', error)
      return NextResponse.json(
        { error: 'Contract compilation failed' },
        { status: 500 }
      )
    }

    // Get the contract artifacts
    const contractName = path.parse(file.name).name
    const artifactPath = path.join(
      process.cwd(),
      'out',
      `examples/${file.name}/${contractName}.json`
    )

    let artifact
    try {
      const artifactContent = await fs.readFile(artifactPath, 'utf8')
      artifact = JSON.parse(artifactContent)
    } catch (error) {
      console.error('Failed to read artifact:', error)
      return NextResponse.json(
        { error: 'Failed to read contract artifact' },
        { status: 500 }
      )
    }

    // Deploy the contract
    const publicClient = createPublicClient({
      chain: localChain,
      transport: http('http://localhost:8545'),
    })

    const walletClient = createWalletClient({
      chain: localChain,
      transport: http('http://localhost:8545'),
      account: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', // Default Anvil account
    })

    try {
      const hash = await walletClient.deployContract({
        abi: artifact.abi,
        bytecode: artifact.bytecode as `0x${string}`,
        args: ['Example Curve', 1000000000000000000n], // name and multiplier
      })

      const receipt = await publicClient.waitForTransactionReceipt({ hash })

      if (!receipt.contractAddress) {
        throw new Error('No contract address in receipt')
      }

      return NextResponse.json({ address: receipt.contractAddress })
    } catch (error) {
      console.error('Deployment failed:', error)
      return NextResponse.json(
        { error: 'Contract deployment failed' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
} 