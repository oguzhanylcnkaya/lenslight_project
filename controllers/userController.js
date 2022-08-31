import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json({
            succeded: true,
            user,
            message : "The user was created successfully!"
        })
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
};

const login = async (req, res) => {
    try {
        const {userName, password} = req.body

        const user = await UserModel.findOne({userName});
        let isPasswordSame = false;

        if(user){
            isPasswordSame = await bcrypt.compare(password, user.password)
        }
        else{
            return res.status(401).json({
                succeded: false,
                error : "There is no such user!"
            })
        }

        if(isPasswordSame){
            const token = createToken(user._id)
            res.cookie("token", token, {
                httpOnly : true,
                maxAge : 1000 * 60 *60 *24
            })

            res.redirect("/users/dashboard")
        }
        else{
            res.status(401).json({
                succeded: false,
                error : "Password are not match!"
            })
        }

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

const createToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET_KEY, {
        expiresIn : "1d"
    })
}

const getDashboardPage = (req, res) => {
    res.render("dashboard", {
        link : "dashboard"
    })
}

export {createUser, login, getDashboardPage}