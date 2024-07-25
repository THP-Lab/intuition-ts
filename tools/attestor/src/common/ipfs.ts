import axios from 'axios';

if (!process.env.PINATA_API_KEY || !process.env.PINATA_SECRET_API_KEY) {
    throw new Error('PINATA_API_KEY and PINATA_SECRET_API_KEY must be set');
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