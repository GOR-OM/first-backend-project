import { Allusers, Createuser, Userbyid } from "../controllers/user.js";
import {User} from "../models/users.js";
import express from "express";

const router = express.Router();



router.get("/user/all", Allusers);

// Dynamic url

router.get("/userid/:id", Userbyid);


router.post("/user/new", Createuser);




export default router;