import express from 'express';
import { queryTestTable } from './queries.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const jsonResponse = await queryTestTable();
        res.json(jsonResponse);
    }
    catch (e) {
        console.log(e);
        res.status(400).send('Invalid JSON string');
    }
});

export default router;
