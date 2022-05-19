const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRouter = require("./routes/user")
const productRouter = require("./routes/product")
const orderRouter = require("./routes/order")
const auth = require("./token/Authentication")
const admin = require("./token/generateToken")

dotenv.config()
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(console.log("Database Connected")).catch((err) => console.log(err))


const app = express()
app.use(express.json())
//API 

app.use("/api/users",userRouter)
app.use("/api/products",productRouter)
app.use("/api/orders",orderRouter)
app.use("/api/auth",auth)
app.use('/api/admin',admin)
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})
