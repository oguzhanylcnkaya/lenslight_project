import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName : "lenslight_project",
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(res => {
        console.log("Connected to the DB");
    })
    .catch(err => {
        console.log("err", err)
    })
}

export default conn;