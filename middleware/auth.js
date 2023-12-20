import jwt from "jsonwebtoken";
import {User} from "../models/users.js";

export const  isAuth = async (req, res, next) => {
    const { token } = await req.cookies;
    if (!token) {
        res.status(401).json({
            success: false,
            message: "You are not authorized to access this route",
        });
    }

    const  decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);
    next();
};