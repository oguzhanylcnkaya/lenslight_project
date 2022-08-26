import express from 'express';

const app = express()
const port = 3000;

//ejs template engine
app.set("view engine", "ejs")

//static file middleware
app.use(express.static('public'))

// app.get("/", (req,res) => {
//     // res.send("INDEX 1")

//     //ejs ile html render etmek için
//     res.render("index")
// })

doRender("/", "index");
doRender("/blog", "blog");
doRender("/about", "about");
doRender("/contact", "contact");
doRender("/gallery", "gallery");
doRender("/projects", "projects");
doRender("/services", "services");

function doRender(extension, pageName) {
    app.get(extension, (req,res) => {
        res.render(pageName)
    })
}

app.listen(port, () => {
    console.log(`Application running on port ${port}`)
})