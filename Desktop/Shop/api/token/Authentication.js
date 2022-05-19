const jwt = require("jsonwebtoken")
const User = require("../models/User")
const router = require("express").Router()

router.post("/api/auth",async (req,res,next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split("")[1]

    if(token){
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.user = await User.findOne(decoded.id).select("-password")
            next()
        }catch(err){
            res.status(401).send(err)

        }
    }if(!token){
        res.status(401)
        throw new Error("Not authorize,no token")
    }
}
)
router.post("/api/admin",(req,res,next) => {
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(401)
        throw new Error("Not authorized as an Admin")
    }
})

module.exports = router;