import express from 'express';
import cors from 'cors';
import recipes from './routes/recipes.js';
import tools from './routes/tools.js';
import ingredients from './routes/ingredients.js';

const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:3001',
}));

app.use(recipes);
app.use(tools);
app.use(ingredients);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

export default app;
