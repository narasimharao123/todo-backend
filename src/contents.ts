
import dotenv from "dotenv";

dotenv.config();
const EnvConfig = () => {
  const temp = { 
    PORT: process.env.PORT || 5001,
    TODO_URL: process.env.TODO_URL || "mongodb://localhost:27017/todo",
    NODE_ENV: process.env.NODE_ENV || "development" };
    return temp
};

export default EnvConfig;