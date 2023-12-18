import {User} from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
    
    const token = jwt.sign({_id: user._id},process.env.JWT_SECRET,);

    res.status(201)
            .cookie("token", token, {
                httpOnly: true,
                maxAge: 60 * 60 * 1000, // 1 hour
            })
            .json({
                success: true,
                message: "User created successfully",
            });
    

};
    

export const login = async (req, res) => {
    
};
