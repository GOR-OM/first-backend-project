import task from '../models/task.js';
import Task from '../models/task.js';


export const newTasks = async (req, res, next) => {
    const { title, description} = req.body;  
    const task = await Task.create({
        title,
        description,
        user : req.user,
    }); 

    res.status(201)
    .json({
        success : true,
        message : "task created successfully",
    });
};

export const getMyTasks = async (req, res, next) => {
    const userID = req.user._id;
    const tasks = await Task.find({user : userID});

    res.status(200)
    .json({
        success : true,
        tasks,
    });
};

export const updateTasks = async (req, res, next) => {
    
    const {id} = req.params;
    const tasks = await Task.findById(id);
    if(!tasks){
        res.status(404)
        .json({
            success : false,
            message : "task not found",
        });
    }
    tasks.isCompleted = !tasks.isCompleted;
    tasks.save();


    res.status(200)
    .json({
        success : true, 
        message : "task updated successfully",
    });
};

export const deleteTask = async (req, res, next) => {
    const {id} = req.params;
    const tasks = await Task.findById(id);
    if(!tasks){
        res.status(404)
        .json({
            success : false,
            message : "task not found",
        });
    }
    await tasks.deleteOne(); 
    res.status(200)
    .json({
        success : true,
        message : "task deleted successfully",
    });
};