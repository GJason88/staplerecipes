import bodyParser from 'body-parser';
import { Router } from 'express';
import { toolController } from '../controllers/Tool.controller.js';
import { adminAuth } from '../middlewares/authorization.middleware.js';

const tool = Router();
const jsonParser = bodyParser.json();

tool.get('/tools', toolController.getTools);

tool.get('/tool/categories', toolController.getCategories);

tool.post('/admin/tool', jsonParser, toolController.createTool);

tool.post('/admin/tool/category', toolController.createCategory);

tool.put('/admin/tool/:id', jsonParser, toolController.updateTool);

tool.delete('/admin/tool/:id', toolController.deleteTool);

tool.delete('/admin/tool/category/:id', toolController.deleteCategory);

export default tool;
