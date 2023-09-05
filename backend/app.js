import express from 'express';
import cors from 'cors';
import router from './testRoutes.js';

const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:3001',
}));

app.use('/', router);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

export default app;
