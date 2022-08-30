import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";

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
            res.status(200).send("You are loggend in")
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

export {createUser, login}