import { Router } from "express";
import  validatorJWT  from "../middlewares/validator-token";
import { getTasks,getTaskById, createTask, updateTask, deleteTask } from "../services/task";

const routerTask = Router();

routerTask.get('/',getTasks);
routerTask.get('/:id',getTaskById);
routerTask.post('/',createTask);
routerTask.put('/',updateTask);
routerTask.delete('/',deleteTask);

export default routerTask;