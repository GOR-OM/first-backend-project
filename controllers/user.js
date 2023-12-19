import {User} from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendCookies } from "../utils/features.js";
export const Allusers = async (req, res) => {

};

export const Userbyid = async (req, res) => {
    
};

export const RegisterUser = async (req, res) => {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if(user){
        res.status(400).json({ message: "User already exists" });
    }

    
    user  = await User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
    });
    
    sendCookies(res,user,201,"User created successfully");
    

};
    

export const login = async (req, res) => {

   const  {email,password} = req.body;
   let user = await User.findOne({email}).select("+password");
    if(!user){
         res.status(404).json({
            success:false,
            message:"Invalid Emial or Password"
        });
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
        res.status(404).json({
            success:false,
            message:"Invalid Emial or Password"
        });
    }

    sendCookies(res,user,200,`Wlcome ${user.name}`);


    
};

export const getMyProfile =  (req, res) => {
    
    res.status(200).json({
        success:true,
        user : req.user ,
    });
};

export const logout = (req, res) => {
    res.status(200)
    .clearCookie("token")
    .json({
        success:true,
        message:"Logout successfully",
    });
};