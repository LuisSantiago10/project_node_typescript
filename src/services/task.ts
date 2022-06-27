import { request,response } from "express";
import Task from '../models/task';

const getTasks = async(_req = request,res = response) =>{
    const tasks =  await Task.findAll({raw:true});
    return res.status(200).json({
        tasks
        });
}
const getTaskById = (_req = request,res = response) =>{    
    return res.send('pong');
}

const createTask = () =>{

}

const updateTask = () =>{
    
}
const deleteTask = () =>{
    
}

export {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}
