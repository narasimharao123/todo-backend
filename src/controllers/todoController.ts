 
import { Request, Response } from 'express';
import todoModel from '../models/todoModel';

export const getAllTodos = async (_req:Request, res:Response) => {
    const todos = await todoModel.find();
    res.json(todos)
}

export const createTodo = async (req:Request, res:Response) => {
    const {name, description, status} = req.body
    const todo = new todoModel({name, description, status});
    await todo.save();
    res.status(201).json(todo);
}

export const updateTodo = async(req:Request, res:Response)=>{
    const {id}=req.params;
    const updated = await todoModel.findByIdAndUpdate(id, req.body,
        {new:true}
    )
    res.status(200).json(updated)
}

export const deleteTodo = async(req:Request, res:Response)=>{
    const {id}=req.params;
    await todoModel.findByIdAndDelete(id)
    res.status(200).json({message:"todo deleted"})
}