import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import validator  from "validator";

const { Schema } = mongoose;

const userSchema = new Schema({
    userName : {
        type : String,
        required : [true, "User Name is required!"],
        validate : [validator.isAlphanumeric, "Only Alphanumeric characters!"]
    },
    email :  {
        type : String,
        required : [true, "Email is required!"],
        unique : true,
        validate : [validator.isEmail, "Valid email is required!"]
    },
    password : {
        type : String,
        required : [true, "Password is required!"],
        minLength : [8, "At least 8 characters!"]
    }
},
{
    timestamps : true
});

userSchema.pre("save", function(next) {
    const user = this;
    bcrypt.hash(user.password, 10, (err, hash) => {
        user.password = hash;
        next();
    })
})

const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel