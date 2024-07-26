import axios from 'axios';

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
// TODO: Make this work without electron freaking out about "No exports main defined in package.json"
export async function generateCid(jsonBlob: any): Promise<string> {
    // const node = await IPFS.create();
    // const { cid } = await node.add(JSON.stringify(jsonBlob));
    // await node.stop();
    // return cid.toString();
    return await pinJsonToIPFS(jsonBlob);
}