import { ethers } from 'ethers'

if (!process.env.PRIVATE_KEY) {
  throw new Error('PRIVATE_KEY must be set')
}

export interface EVMCallRequest {
  address: string
  fnDeclaration: string[]
  fnName: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: any[]
  txParams: object
  RPC: string
}

async function getProvider(RPC: string): Promise<ethers.JsonRpcProvider> {
  try {
    const provider = new ethers.JsonRpcProvider(RPC) as ethers.JsonRpcProvider
    return provider
  } catch (error) {
    console.error('Error getting provider:', error)
    throw error
  }
}

async function getSigner(
  provider: ethers.JsonRpcProvider,
): Promise<ethers.Signer> {
  try {
    const sk = process.env.PRIVATE_KEY as string
    const signer = new ethers.Wallet(sk, provider) as ethers.Signer
    return signer
  } catch (error) {
    console.error('Error getting signer:', error)
    throw error
  }
}

async function evmCall(call: EVMCallRequest): Promise<string> {
  try {
    const provider = await getProvider(call.RPC)
    const signer = await getSigner(provider)

    let contract: ethers.Contract = new ethers.Contract(
      call.address,
      call.fnDeclaration,
      provider,
    ) as ethers.Contract
    contract = contract.connect(signer) as ethers.Contract

    // Old way of doing it (Ethers v5):
    // const tx: PopulatedTransaction = await contract.populateTransaction[call.fnName](...call.args, call.txParams);

    // New way of doing it (Ethers v6):
    const tx = (await contract[call.fnName].populateTransaction(
      ...call.args,
      call.txParams,
    )) as ethers.ContractTransaction

    const txHash = (await signer.sendTransaction(
      tx,
    )) as ethers.TransactionResponse

    return txHash.hash as string
  } catch (error) {
    console.error('Error calling EVM:', error)
    throw error
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function evmRead(call: EVMCallRequest): Promise<any> {
  try {
    const provider = await getProvider(call.RPC)
    const contract: ethers.Contract = new ethers.Contract(
      call.address,
      call.fnDeclaration,
      provider,
    ) as ethers.Contract
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = (await contract[call.fnName](...call.args)) as any
    return result
  } catch (error) {
    console.error('Error reading EVM:', error)
    throw error
  }
}

async function confirmTx(
  txHash: string,
  RPC: string,
  timeout?: number,
): Promise<void> {
  try {
    const provider = await getProvider(RPC)
    await provider.waitForTransaction(txHash, 1, timeout)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const receipt = await provider.getTransactionReceipt(txHash)
  } catch (error) {
    console.error('Error confirming transaction:', error)
    throw error
  }
}

export async function callAndConfirm(
  call: EVMCallRequest,
  timeout?: number,
): Promise<void> {
  try {
    const txHash = await evmCall(call)
    await confirmTx(txHash, call.RPC, timeout)
  } catch (error) {
    console.error('Error calling and confirming EVM:', error)
    throw error
  }
}
