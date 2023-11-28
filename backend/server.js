import express from 'express';
import cors from 'cors';
import recipe from './src/routes/Recipe.route.js';
import tool from './src/routes/Tool.route.js';
import ingredient from './src/routes/Ingredient.route.js';
import nutrient from './src/routes/Nutrient.route.js';
import {
    adminAuth,
    userAuth,
} from './src/middlewares/authorization.middleware.js';
import review from './src/routes/Review.route.js';

const app = express();
const port = 3000;

app.use(
    cors({
        origin: 'http://localhost:3001',
    })
);

app.use('/admin', adminAuth);
app.use('/review', userAuth); // still need to find a way to verify that a user can only update, delete their own data, and create with their own uid

app.use(recipe);
app.use(tool);
app.use(ingredient);
app.use(nutrient);
app.use(review);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

export default app;
