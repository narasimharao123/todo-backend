import { Router, Request, Response } from "express";

import { getAllTodos, createTodo, updateTodo, deleteTodo } from "../controllers/todoController";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("API is working");
  });

router.get("/todos", getAllTodos);
router.post("/todos", createTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);
router.get("/Test", (req: Request, res: Response) => {
    res.send("Test route is working");
})
export default router;