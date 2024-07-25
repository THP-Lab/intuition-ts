import {EVMCallRequest, callAndConfirm} from './common/evm';
import { pinJsonToIPFS } from './common/ipfs';

if (!process.env.EVM_RPC || !process.env.ATTESTEUR_ADDRESS) {
    throw new Error('EVM_RPC and ATTESTEUR_ADDRESS must be set');
}

export async function attest(json: object): Promise<string> {
    try {
        const ipfsHash = await pinJsonToIPFS(json);

        const call : EVMCallRequest = {
            RPC: process.env.EVM_RPC as string,
            address: process.env.ATTESTEUR_ADDRESS as string,
            fnName: 'attest',
            fnDeclaration: ['function attest(string memory _ipfsHash) public'],
            args: [ipfsHash],
            txParams: {
                gasLimit: 500000,
            },
        }

        const txHash = await callAndConfirm(call);
        return ipfsHash;
    } catch (error) {
        console.error('Error attesting:', error);
        throw error;
    }
}