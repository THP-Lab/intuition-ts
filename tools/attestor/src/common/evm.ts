import { ethers } from "ethers";

if (!process.env.PRIVATE_KEY) {
    throw new Error('PRIVATE_KEY must be set');
}

export interface EVMCallRequest {
    address: string;
    fnDeclaration: string[];
    fnName: string;
    args: any[];
    txParams: object;
    RPC: string;
}

async function getProvider(RPC: string): Promise<ethers.JsonRpcProvider> {
    try {
        const provider = new ethers.JsonRpcProvider(RPC) as ethers.JsonRpcProvider;
        return provider;
    } catch (error) {
        console.error('Error getting provider:', error);
        throw error;
    }
}

async function getSigner(provider: ethers.JsonRpcProvider): Promise<ethers.Signer> {
    try {
        const sk = process.env.PRIVATE_KEY as string;
        const signer = new ethers.Wallet(sk, provider) as ethers.Signer;
        return signer;
    } catch (error) {
        console.error('Error getting signer:', error);
        throw error;
    }
}

async function evmCall(call: EVMCallRequest): Promise<string> {
    try {
        const provider = await getProvider(call.RPC);
        console.log('Provider:', provider);
        const signer = await getSigner(provider);
        console.log("Signer:", signer);

        let contract: ethers.Contract = new ethers.Contract(call.address, call.fnDeclaration, provider) as ethers.Contract;
        console.log("Contract:", contract);
        contract = contract.connect(signer) as ethers.Contract;
        console.log("Contract connected:", contract);

        // Old way of doing it (Ethers v5):
        // const tx: PopulatedTransaction = await contract.populateTransaction[call.fnName](...call.args, call.txParams);

        // New way of doing it (Ethers v6):
        const tx = await contract[call.fnName].populateTransaction(...call.args, call.txParams) as ethers.ContractTransaction;
        console.log("Transaction:", tx);
        
        const txHash = await signer.sendTransaction(tx) as ethers.TransactionResponse;
        console.log("Transaction Hash:", txHash.hash);

        return txHash.hash as string;
    } catch (error) {
        console.error('Error calling EVM:', error);
        throw error;
    }
}

export async function evmRead(call: EVMCallRequest): Promise<any> {
    try {
        const provider = await getProvider(call.RPC);
        let contract: ethers.Contract = new ethers.Contract(call.address, call.fnDeclaration, provider) as ethers.Contract;
        const result = await contract[call.fnName](...call.args) as any;
        console.log("Result:", result);
        return result;
    } catch (error) {
        console.error('Error reading EVM:', error);
        throw error;
    }
}

async function confirmTx(txHash: string, RPC: string, timeout?: number): Promise<void> {
    try {
        const provider = await getProvider(RPC);
        await provider.waitForTransaction(txHash, 1, timeout);
        const receipt = await provider.getTransactionReceipt(txHash);
        console.log('TX RECEIPT AFTER CONFIRMATION:', receipt);
    } catch (error) {
        console.error('Error confirming transaction:', error);
        throw error;
    }
}

export async function callAndConfirm(call: EVMCallRequest, timeout?: number): Promise<void> {
    try {
        const txHash = await evmCall(call);
        console.log('Transaction Hash:', txHash);
        await confirmTx(txHash, call.RPC, timeout);
        console.log('Transaction confirmed');
    } catch (error) {
        console.error('Error calling and confirming EVM:', error);
        throw error;
    }
}