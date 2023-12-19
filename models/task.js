import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    name : String,
    title : {
        type : String,
        required : true,
    },
    description :{
        type : String,
        required : true,
    },
    isCompleted : {
        type : Boolean,
        default : false,
    },
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },

    
});

const task = mongoose.model("task", userSchema);

export default task;
