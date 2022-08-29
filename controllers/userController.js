import UserModel from "../models/userModel.js";

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

export {createUser}