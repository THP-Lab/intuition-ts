import axios from 'axios';

import { CID } from 'multiformats/cid';
import * as dagCbor from '@ipld/dag-cbor';
import { sha256 } from 'multiformats/hashes/sha2';

if (!process.env.PINATA_API_KEY || !process.env.PINATA_API_SECRET) {
    throw new Error('PINATA_API_KEY and PINATA_API_SECRET must be set');
}

export async function pinJsonToIPFS(json: object): Promise<string> {
    try {
        const pinataApiKey = process.env.PINATA_API_KEY;
        const pinataSecretApiKey = process.env.PINATA_API_SECRET;

        const response = await axios.post('https://api.pinata.cloud/pinning/pinJSONToIPFS', json, {
            headers: {
                pinata_api_key: pinataApiKey,
                pinata_secret_api_key: pinataSecretApiKey,
            },
        });

        if (response.status === 200) {
            return response.data.IpfsHash;
        } else {
            throw new Error('Failed to pin JSON to IPFS');
        }
    } catch (error) {
        console.error('Error pinning JSON to IPFS:', error);
        throw error;
    }
}

// This can be used to check the CID locally without pinning to IPFS
export async function generateCid(jsonBlob: object): Promise<string> {
    const bytes = dagCbor.encode(jsonBlob);
    const hash = await sha256.digest(bytes);
    const cid = CID.create(1, dagCbor.code, hash);
    return cid.toString();
  }