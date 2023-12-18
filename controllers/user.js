import {User} from "../models/users.js";


export const Allusers = async (req, res) => {

    const users = await User.find();
    // console.log(req.query);
    // const keyword = req.query.keyword;
    // console.log(keyword);

    res.json({
        sucess: true,
        users,
    })
};

export const Userbyid = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        sucess: true,
        user,
    })
};

export const Createuser = async (req, res) => {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password,
    });

    res.status(201).json({
        sucess: true,
        message: "User Created",
    })
};