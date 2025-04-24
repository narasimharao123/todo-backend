 import mongoose from "mongoose";

 const todoSchama = new mongoose.Schema({
    name: {type: String, required:true},
    description: {type: String, required:true},
    status: {type: String, enum:["completed", "pending"], default: "pending"},
 },{timestamps:true}
)

export default mongoose.model("todo", todoSchama)