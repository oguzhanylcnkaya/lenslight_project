import mongoose from "mongoose";

const {Schema} = mongoose

const photoSchema = new Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    description  : {
        type : String,
        required : true,
        trim : true
    },
    uploadedAt : {
        type : Date,
        default : Date.now
    },
    user:{
        type : Schema.Types.ObjectId,
        ref : "UserModel"
    }
})

const PhotoModel = mongoose.model("PhotoModel", photoSchema)

export default PhotoModel