import React, { useEffect } from "react";
import { PlaceOrder } from "../components";
import { Container } from "../components/placeorder/styles/style";
import {BsFillPersonFill} from "react-icons/bs"
import {FaTruckMoving} from "react-icons/fa"
import {MdLocationOn} from "react-icons/md"
import HeaderPage from "./HeaderPage";
import SubHeaderPage from "./SubHeaderPage";
import useRazorpay from "react-razorpay";
import "./order.css";
import { orderDetails,payOrder } from "../redux/Actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { queryByTestId } from "@testing-library/react";
import { ORDER_CREATE_RESET } from "../redux/Constant/orderConstant";
import { Link } from "react-router-dom";
export default function PlaceOrderPage({history}){
  
    
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin
    const {cartItems} = cart

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }
    
    cart.itemPrice = addDecimals(
        cartItems.reduce((acc,item) => acc + item.price * item.qty,0)
    ) 
    cart.shippingPrice = addDecimals(cart.itemPrice > 100 ? 0 : 100)
    cart.taxPrice = addDecimals(Number((0.15 * cart.itemPrice).toFixed(2)))
    cart.totalPrice = (
        Number(cart.itemPrice) + 
        Number(cart.shippingPrice) + 
        Number(cart.taxPrice)
    ).toFixed(2)
    const createOrder = useSelector((state) => state.orderCreate)
    const {order,success,err} = createOrder

    useEffect(() => {
        if(success){
            history.push(`/order/${order._id}`)
            dispatch({type : ORDER_CREATE_RESET})
        }
    },[history,dispatch,success,order])




    const Razorpay = useRazorpay()
    const payment = (e) => {
        e.preventDefault()

        const options = {
            key: "rzp_test_adXO6V7Lu5KzpP",
            amount : "500",
            currency : "INR",
            name : "GoCoin21",
            description: "Test transaction for Ecommerce Shop",
            image : "https://previews.123rf.com/images/javiart/javiart1706/javiart170600490/80892167-shoe-logo.jpg",
            order_id : "order_JGZ6tStJgblyuz",
            handler : function(response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            prefill : {
                name : "Alen Mutum",
                email : "abc@example.com",
                contact : "8798486521"
            },
            notes : {
                address : "Mantripukhri,Imphal"
            },
            theme : {
                color:  "#258ae8",
                backdrop_color : "#000"
            }
        };
        const pay = new Razorpay(options);
        pay.on('payment.failed',function(response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        })
        pay.open();
    }
    const placeOrder = () => {
        dispatch(
            createOrder({
                orderItems : cart.cartItems,
                shippingAddress : cart.shippingAddress,
                paymentMethod : cart.paymentMethod,
                itemPrice : cart.itemPrice,
                shippingPrice : cart.shippingPrice,
                taxPrice : cart.taxPrice,
                totalPrice : cart.totalPrice
            })
        )
    }
    return (
        
        <>
        <HeaderPage/>
        <SubHeaderPage/>
        <Container>
            <PlaceOrder.Order>
                <PlaceOrder.Icon>
                  <BsFillPersonFill style={{marginTop : "15px", width:"50px"}}/>
                </PlaceOrder.Icon>
                
                <PlaceOrder.Info>
                    <span style={{fontFamily:"Josefin Sans,sans-serif",fontWeight:"bold"}}>Customer</span>
                    <br/>
                    <p style={{fontFamily:"Josefin Sans,sans-serif"}}>{userInfo.name}</p>
                    <p style={{fontFamily:"Josefin Sans,sans-serif"}}>{userInfo.email}</p>
                </PlaceOrder.Info>
            </PlaceOrder.Order>
            
            <PlaceOrder.Order>

                <PlaceOrder.Icon>
                  <FaTruckMoving style={{marginTop : "15px", width:"50px"}} />
                </PlaceOrder.Icon>
                <PlaceOrder.Info>
                    <span style={{fontFamily:"Josefin Sans,sans-serif",fontWeight:"bold"}}>Order Info</span>
                    <br/>
                    <p style={{fontFamily:"Josefin Sans,sans-serif"}}>Shipping : {cart.shippingAddress.country}</p>
                    <p style={{fontFamily:"Josefin Sans,sans-serif"}}>Pay Method : {cart.paymentMethod}</p>
                </PlaceOrder.Info>
            </PlaceOrder.Order>


            <PlaceOrder.Order>
                <PlaceOrder.Icon>
                  <MdLocationOn style={{marginTop : "15px", width:"50px"}}/>
                </PlaceOrder.Icon>
                <PlaceOrder.Info>
                    <span style={{fontFamily:"Josefin Sans,sans-serif",fontWeight:"bold"}}>Deliver to</span>
                    <br/>
                    <p style={{fontFamily:"Josefin Sans,sans-serif"}}>
                       Address : {cart.shippingAddress.city},{""}
                       {cart.shippingAddress.address},{""}
                       {cart.shippingAddress.code}
                    </p>
                </PlaceOrder.Info>
            </PlaceOrder.Order>
            <div className="item">
            {cartItems.length === 0 ? (
               <p>Your cart is empty</p>
            ) : (
                <>
                {cartItems.map((item,index) => (
                    <PlaceOrder.Item key={index}>
                <PlaceOrder.Image>
                    <img className="product" src={item.image} alt={item.name}/>
                    <Link to={`/products/${item.product}`}>
                    <PlaceOrder.Name>{item.name}</PlaceOrder.Name>
                    </Link>
                </PlaceOrder.Image>
                <PlaceOrder.Quantity>
                    <span>Quantity</span>
                    <h4>{item.qty}</h4>
                </PlaceOrder.Quantity>
                <PlaceOrder.Price>
                    <span>SUBTOTAL</span>
                    <h4>{item.qty * item.price}</h4>
                </PlaceOrder.Price>
            </PlaceOrder.Item>
                ))}
                </>   
            )}
        
            </div>
        
            <PlaceOrder.Button onClick={payment}>Place Order</PlaceOrder.Button>
            <table style={{"marginTop":"150px","marginRight" : "50px","marginLeft" : "50px","backgroundColor" : "darkseagreen"}}>
                <tbody>
                    <tr>
                        <td>
                            <strong>Product</strong>
                        </td>
                        <td>${cart.itemPrice}</td>
                    </tr>
                    <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>${cart.shippingPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>${cart.taxPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>${cart.totalPrice}</td>
                </tr>
                </tbody>
            </table>
        </Container>
        </>
    )
}