import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

const authenticateToken = async (req, res, next) => {

    try {
        const token = req.cookies.token;

        if(token){
            jwt.verify(token, process.env.JWT_SECRET_KEY, (err) => {

                if(err){
                    res.redirect("/login")
                }else{
                    next()
                }
            })
        }
        else{
            res.redirect("/login")
        }
    }
     catch (error) {
        res.status(401).json({
            succeeded : false,
            error : "Not Authorized!"
        })
     }
        

}

const checkUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if(token){
            jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
                if(err){
                    res.locals.user = null
                    next()
                }
                else{
                    const user = await UserModel.findById(decoded.userId)
                    res.locals.user = user
                    next()
                }
            })
        }
        else{
            res.locals.user = null
            next()
        }
        
    } catch (error) {
        
    }
}


export { authenticateToken, checkUser }