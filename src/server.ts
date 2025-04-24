 import express from "express";
 import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
 import todoRoutes from "./routes/todoRoute";

 import { Request, Response } from 'express';
import EnvConfig from "./contents";

   const app = express();
    const PORT = EnvConfig().PORT;

    console.log(EnvConfig().PORT)


    //middelware
    app.use(cors())
    app.use(bodyParser.json())

    //create health check route
    app.get("/", (req:Request, res:Response) => {   
        res.status(201).json({todo:[], message:"API is working"});
    })

    //Routes
    app.use("/api", todoRoutes)

    //DB connection
mongoose
.connect(EnvConfig().TODO_URL as string)

.then(() =>{
    console.log("DB connected")
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })

})
.catch((error) => {
    console.log("DB connection failed", error.message)
})
