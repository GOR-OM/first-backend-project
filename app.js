import express  from "express";
import RouterUser from "./routes/user.js";
import taskRouter from "./routes/task.js";
export const app= express();
import { config } from "dotenv";
import cookieParser from "cookie-parser";

const router = express.Router();

config({
    path: "./data/config.env"
});

// using middleware

app.use(express.json());
app.use(cookieParser());

//route json pachi use karva nu che 
app.use("/api/v1/users" ,RouterUser);
app.use("/api/v1/task" , taskRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

