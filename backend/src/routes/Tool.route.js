import bodyParser from 'body-parser';
import { Router } from 'express';
import { toolController } from '../controllers/Tool.controller.js';
import { adminAuth } from '../middlewares/authorization.middleware.js';

const tool = Router();
const jsonParser = bodyParser.json();

tool.get('/tools', toolController.getTools);

tool.get('/tool/categories', toolController.getCategories);

tool.post('/tool', jsonParser, adminAuth, toolController.createTool);

tool.post('/tool/category', adminAuth, toolController.createCategory);

tool.put('/tool/:id', adminAuth, jsonParser, toolController.updateTool);

tool.delete('/tool/:id', adminAuth, toolController.deleteTool);

tool.delete('/tool/category/:id', adminAuth, toolController.deleteCategory);

export default tool;
