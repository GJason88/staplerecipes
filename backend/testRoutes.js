import express from 'express';
import { queryTestTable } from './queries.js';

const router = express.Router();

router.get('/recipes', async (req, res) => {
    try {
        const jsonResponse = await queryTestTable();
        res.json(jsonResponse);
    }
    catch (e) {
        res.status(400).send('Invalid JSON string');
    }
});

export default router;
