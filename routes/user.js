import { Allusers, RegisterUser, Userbyid,login, getMyProfile, logout } from "../controllers/user.js";
import { isAuth } from "../middleware/auth.js";
import {User} from "../models/users.js";
import express from "express";

const router = express.Router();



router.get("/all", Allusers);

router.post("/new", RegisterUser);
router.post("/login", login);
router.get("/me", isAuth ,  getMyProfile);
router.get("/logout", isAuth , logout);




// Dynamic url

router.get("/userid/:id", Userbyid);






export default router;