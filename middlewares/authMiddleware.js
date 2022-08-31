import jwt from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {

    try {
        const token = req.cookies.token;

        if(token){
            jwt.verify(token, process.env.JWT_SECRET_KEY, (err) => {

                if(err){
                    console.log("error", err.message)
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


export { authenticateToken }