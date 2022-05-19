const Product = require("../models/Product")
const auth = require("../token/Authentication")
const admin = require("../token/Authentication")
const asyncHandler = require("express-async-handler")
const router = require("express").Router()



router.get("/",asyncHandler(async(req,res) => {
    const pageSize = 12
    const page = Number(req.query.pageNumber) || 1
    const keyword = req.query.keyword ? {
        name : {
            $regex : req.query.keyword,
            $options : "i"
        }
    } : {}
    const count = await Product.countDocuments({...keyword})
    const products = await Product.find({...keyword}).limit(pageSize).skip(pageSize*(page-1)).sort({_id:-1})
    res.json({products,page,pages:Math.ceil(count/pageSize)})
}))
// get all the products without search and pegination
router.get("/all",auth,admin,asyncHandler(async (req,res) => {
    const products = await Product.find({}).sort({_id : -1})
    res.json(products)
})
)
// get a product
router.get("/:id",asyncHandler(async (req,res) => {
    
    const product = await Product.findById(req.params.id)
   
    if(product){
        
        res.json(product)
    }else{
        res.status(404)
        throw new Error("Product doesn't exist")
    }
})
)
//Delete a product.
router.delete("/:id",auth,admin,asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        await product.remove()
        res.status(200).json("Deleted Successfully")
    }else{
        res.status(404)
        throw new Error("Product not found")
    }
})
)
// Create a product

router.post("/",auth,admin,asyncHandler(async (req,res) => {
    const {name,description,image,price,inStock} = req.body
    const productExist = await Product.findOne({name})

    if(productExist){
        res.status(400)
        throw new Error("Product already exists")
    }else{
        const product = await Product.create({
            name,
            description,
            image,
            price,
            inStock,
            user: req.user._id
        })
        if(product){
            const createProduct = await product.save()
            res.status(201).json(createProduct)
        }else{
            res.status(400)
            throw new Error("Invalid Product data")
        }
    }
})
)
// Update a Product.
router.put("/:id",auth,admin,asyncHandler(async(req,res) => {
    const {name,description,price,image,inStock} = req.body;
    const product = await Product.findById(req.params.id);

    if(product){
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.image = image || product.image;
        product.inStock = inStock || product.inStock;

        const updateProcduct = await product.save()
        res.json(updateProcduct)
    }else{
        res.status(404)
        throw new Error("Product not found")
    }
})
)
module.exports = router;