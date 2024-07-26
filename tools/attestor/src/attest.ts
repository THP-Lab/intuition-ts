import {EVMCallRequest, callAndConfirm, evmRead} from './common/evm';
import { pinJsonToIPFS, generateCid } from './common/ipfs';

import { ethers } from 'ethers';

if (!process.env.EVM_RPC || !process.env.ATTESTEUR_ADDRESS || !process.env.MULTIVAULT_ADDRESS || !process.env.PRIVATE_KEY) {
    throw new Error('EVM_RPC and ATTESTEUR_ADDRESS and MULTIVAULT_ADDRESS and PRIVATE_KEY must be set');
}

function createAtomRequest(ipfsHash: string): EVMCallRequest {
    return {
        RPC: process.env.EVM_RPC as string,
        address: process.env.ATTESTEUR_ADDRESS as string,
        fnName: 'createAtom',
        fnDeclaration: ['function createAtom(bytes calldata atomUri) external payable returns (uint256)'],
        args: [ethers.toUtf8Bytes(ipfsHash)],
        txParams: {
            gasLimit: 500000,
            value: "10000000000000000",
        },
    }
}

function depositAtomRequest(atomId: string, depositAmount: string): EVMCallRequest {
    return {
        RPC: process.env.EVM_RPC as string,
        address: process.env.ATTESTEUR_ADDRESS as string,
        fnName: 'depositAtom',
        fnDeclaration: ['function depositAtom(address receiver, uint256 atomId) external payable returns (uint256)'],
        args: [atomId],
        txParams: {
            gasLimit: 500000,
            value: depositAmount,
        },
    }
}

async function getAtomIdFromURI(uri: string): Promise<string> {
    const call : EVMCallRequest = {
        RPC: process.env.EVM_RPC as string,
        address: process.env.MULTIVAULT_ADDRESS as string,
        fnName: 'atomsByHash',
        fnDeclaration: ['function atomsByHash(bytes32 calldata atomUri) external view returns (uint256)'],
        args: [hashURI(uri)],
        txParams: {},
    }
    return await evmRead(call) as string;
}


export async function attest(json: object): Promise<string> {
    try {
        // Check if already exists without Pinata
        const cid = await generateCid(json);
        const atomId = await getAtomIdFromURI(cid);

        if (typeof atomId === 'bigint' && atomId !== 0n) {
            console.log("Atom already exists: ", atomId, "for CID", cid);
            return cid;
        }

        const ipfsHash = await pinJsonToIPFS(json);
        console.log('IPFS Hash:', ipfsHash);

        const call = createAtomRequest(ipfsHash);

        const txHash = await callAndConfirm(call);

        // const atomId = await getAtomIdFromURI(ipfsHash);
        console.log("Atom ID:", atomId);
        return ipfsHash;
    } catch (error) {
        console.error('Error attesting:', error);
        throw error;
    }
}

export async function depositAtomURI(atomUri: string): Promise<string> {
    try {
        const atomId = await getAtomIdFromURI(atomUri);
        console.log('Atom ID:', atomId);

        return await depositAtom(atomId);
    } catch (error) {
        console.error('Error depositing atom:', error);
        throw error;
    }
}

export async function depositAtom(atomId: string): Promise<string> {
    try {
        // TODO: Move this to env/config file or UI
        const depositAmount = "10000000000000000";

        const call = depositAtomRequest(atomId, depositAmount);

        const txHash = await callAndConfirm(call);
        console.log("Transaction confirmed: ", txHash);
        return atomId;
    } catch (error) {
        console.error('Error depositing atom:', error);
        throw error;
    }
}

function hashURI(uri: string): string {
    return ethers.keccak256(ethers.toUtf8Bytes(uri));
}