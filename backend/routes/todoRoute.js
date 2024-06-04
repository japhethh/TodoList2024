import { todoAdd,todoGet } from '../controllers/todoController.js';
import express from 'express'

const todoRouter = express.Router()

todoRouter.post("/add",todoAdd)
todoRouter.get("/get",todoGet)

export default todoRouter;
