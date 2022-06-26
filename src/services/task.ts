import { request,response } from "express";

const getTasks = (_req = request,res = response) =>{    
    return res.send('pong');
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
