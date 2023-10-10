// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Check if the request has a body and the required properties
        if (req.body && typeof req.body.name === 'string') {
            const { name } = req.body;
            res.status(200).json({ message: `Hello ${name} from POST request!` });
        } else {
            res.status(200).json({ message: 'Hello from POST (no data)!' });
        }
    } else if (req.method === 'GET') {
        // Handle GET request
        res.status(200).json({ message: 'Hello from GET request!' });
    } else {
        // Handle other HTTP methods
        res.status(400).json({ message: 'Invalid HTTP method' });
    }
}

