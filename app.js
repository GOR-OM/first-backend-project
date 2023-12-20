import express  from "express";
import RouterUser from "./routes/user.js";
import taskRouter from "./routes/task.js";
export const app= express();
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
const router = express.Router();

config({
    path: "./data/config.env"
});

// using middleware

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : process.env.FRONTEND_URL,
    method : ["GET", "POST", "PUT", "DELETE"],
    credentials : true,
    

}))

//route json pachi use karva nu che 
app.use("/api/v1/users" ,RouterUser);
app.use("/api/v1/task" , taskRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

