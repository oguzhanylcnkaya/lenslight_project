import express from 'express';
import dotenv from 'dotenv';
import conn from './db/db.js'
import pageRoute from './routes/pageRoute.js'
import photoRoute from './routes/photoRoute.js'

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

//routes
app.use("/", pageRoute)
app.use("/photos", photoRoute)

// app.get("/", (req,res) => {
//     // res.send("INDEX 1")

//     //ejs ile html render etmek için
//     res.render("index")
// })

app.listen(port, () => {
    console.log(`Application running on port ${port}`)
})