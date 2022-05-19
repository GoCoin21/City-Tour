const router = require("express").Router()
const auth = require("../token/Authentication")
const admin = require("../token/Authentication")
const Order = require("../models/Order")
// create ORDER

router.post("/",auth,async (req,res) => {
   const {orderItems,shippingAddress,paymentMethod,itemsPrice,taxPrice,shippingPrice,totalPrice} = req.body;

   if(orderItems && orderItems.length === 0){
       res.status(400)
       throw new Error("No order items")
       return;
   }else{
       const order = new Order({
           orderItems,
           user : req.user._id,
           shippingAddress,
           paymentMethod,
           itemsPrice,
           taxPrice,
           shippingPrice,
           totalPrice
       })
       const createOrder = await Order.save()
       res.status(201).json(createOrder)
   }
})
// Admin get all orders.
router.get("/all",auth,admin,async(req,res) => {
    const order = await Order.find({})
    .sort({_id : -1})
    .populate("user", "id name email")
  res.json(order)
})

// User Login orders.
router.get("/",auth,async(req,res) => {
    const order = await Order.findById(req.user._id).sort({_id:-1})
    res.json(order)
})
//Get a order by ID
router.get("/:id",auth,async(req,res) => {
    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
    )
    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error("Order not found")
    }
})
// Payment when ordered
router.put("/:id/pay",auth,async(req,res) => {
    const order = await Order.findById(req.params.id)

    if(order){
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
            id : req.body._id,
            status : req.body.status,
            update_time : req.body.update_time,
            email_address : req.body.email_address
        }
        const updateOrder = await order.save()
        res.json(updateOrder)
    }else{
        res.status(404)
        throw new Error("Order not found")
    }
})

//When the order is deliverd.
router.put("/:id/deliverd",auth,async(req,res) => {
    const order = await Order.findById(req.params.id)

    if(order){
        order.isDelivered = true;
        order.deliveredAt = Date.now();

        const updateOrder = await order.save()
        res.json(updateOrder)
    }else{
        res.status(404)
        throw new Error("Order not found")
    }
})
module.exports = router;