import { Allusers, RegisterUser, Userbyid,login } from "../controllers/user.js";
import {User} from "../models/users.js";
import express from "express";

const router = express.Router();



router.get("/all", Allusers);

router.post("/new", RegisterUser);
router.post("/login", login);




// Dynamic url

router.get("/userid/:id", Userbyid);






export default router;