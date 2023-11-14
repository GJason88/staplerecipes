import bodyParser from 'body-parser';
import { Router } from 'express';
import { toolController } from '../controllers/Tool.controller.js';

const tool = Router();
const jsonParser = bodyParser.json();

tool.get('/tools', toolController.getTools);

tool.get('/tool/categories', toolController.getCategories);

tool.post('/tool', jsonParser, toolController.createTool);

tool.post('/tool/category', toolController.createCategory);

tool.put('/tool/:id', jsonParser, toolController.updateTool);

tool.delete('/tool/:id', toolController.deleteTool);

tool.delete('/tool/category/:id', toolController.deleteCategory);

export default tool;
