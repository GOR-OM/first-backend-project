import  Jwt from "jsonwebtoken";

export const sendCookies = (res,user,Statuscode=200,message) => {
    const token = Jwt.sign({_id: user._id},process.env.JWT_SECRET,);

    res.status(Statuscode)
            .cookie("token", token, {
                httpOnly: true,
                maxAge: 60 * 60 * 1000, // 1 hour
                sameSite : process.env.NODE_ENV === "DEVLOPMENT" ? "lax" : "none",  
                secure : process.env.NODE_ENV === "DEVLOPMENT" ? false : true,
            })
            .json({
                success: true,
                message,
            });
    }