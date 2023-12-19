import  express, { Router }  from "express";
import { newTasks, getMyTasks, updateTasks,deleteTask } from "../controllers/task.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();



router.post('/new' ,isAuth, newTasks); 
router.post('/my' ,isAuth, getMyTasks); 
router.route("/:id").put(isAuth,updateTasks).delete(isAuth,deleteTask);



export default router;