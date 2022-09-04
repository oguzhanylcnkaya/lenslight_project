import express from 'express';
import dotenv from 'dotenv';
import conn from './db/db.js'
import pageRoute from './routes/pageRoute.js'
import photoRoute from './routes/photoRoute.js'
import userRoute from './routes/userRoute.js'
import cookieParser from "cookie-parser";
import {checkUser} from './middlewares/authMiddleware.js'

//for use dotenv
dotenv.config();

//connection to the DB
conn();

const app = express()
const port = process.env.PORT;

//ejs template engine
app.set("view engine", "ejs")

//static file middleware
app.use(express.static('public'))

// for read that sending request body
app.use(express.json())

// for read that sending form on ejs page
app.use(express.urlencoded({extended : true}))

app.use(cookieParser())

//routes

app.use("*", checkUser)

app.use("/", pageRoute)
app.use("/photos", photoRoute)
app.use("/users", userRoute)

app.listen(port, () => {
    console.log(`Application running on port ${port}`)
})