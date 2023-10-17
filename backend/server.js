import express from 'express';
import cors from 'cors';
import recipe from './src/routes/Recipe.route.js';
import tool from './src/routes/Tool.route.js';
import ingredient from './src/routes/Ingredient.route.js';

const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:3001',
}));

app.use(recipe);
app.use(tool);
app.use(ingredient);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

export default app;
