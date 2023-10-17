import { Router } from 'express';
import { toolController } from '../controllers/Tool.controller.js';

const tool = Router();

tool.get('/tools', toolController.getTools);

tool.get('/tool/categories', toolController.getCategories);

tool.post('/tool', toolController.createTool);

tool.post('/tool/category', toolController.createCategory);

tool.delete('/tool/:id', toolController.deleteTool);

tool.delete('/tool/category/:id', toolController.deleteCategory);

export default tool;
