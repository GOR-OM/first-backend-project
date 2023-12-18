import express  from "express";
import RouterUser from "./routes/user.js";
export const app= express();
import { config } from "dotenv";
app.use(RouterUser)
const router = express.Router();

config({
    path: "./data/config.env"
});

// using middleware

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

