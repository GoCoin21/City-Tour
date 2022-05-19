import React, { useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { Shop } from "../components";
import { Container } from "../components/shop/styles/style";
import HeaderPage from "./HeaderPage";
import SubHeaderPage from "./SubHeaderPage";
import useRazorpay from "react-razorpay";
import "./shop.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem,removeCart} from "../redux/Actions/cartAction";
import {FaTimesCircle} from "react-icons/fa";
import axios from "axios";
export default function ShopCart({match,location,history}){
	const dispatch = useDispatch()
	const {productId} = useParams()
	const quantity = window.location.search ? Number(window.location.search.split("=")[1]): 1;

	const cart = useSelector((state) => state.cart)
	const {cartItems} = cart
    
	
	const total = cartItems.reduce((a,i) =>  a + i.quantity * i.price,0).toFixed(2)
   
	useEffect(() => {
		if(productId){
			dispatch(addItem(productId,quantity))
			//axios.get(`/api/products/${productId}`)
		}
	},[dispatch,productId,quantity])

	const removeHandler = (id) => {
		dispatch(removeCart(id))
	}
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
    

	return(
	<>
	  <HeaderPage/>
	  <SubHeaderPage/>
	  {cartItems.length === 0 ? (

		<Container>
		
			<Shop.Info>Your cart is empty</Shop.Info>
			<Shop.Button href="/">Shopping Now</Shop.Button>
			
		</Container>
	  )
	  :(
		  <>
		<Shop.Total>
		Total Cart Products
		<Link to="/shopcart">
          ({cartItems.length})
		</Link>
		</Shop.Total>
		{cartItems.map((item) => (
			<div>
			<Shop.Items key={item.id}>
			<div onClick={() => removeHandler(item.product)}>
				<FaTimesCircle/>
			</div>
			 <Shop.Image>
				<img className="product" src={item.image} alt={item.name}/>

				<Shop.Name>
				<Link to={`/products/${item.id}`}>
                  {item.name}
				</Link>
				</Shop.Name>

				</Shop.Image>
			<Shop.Quantity>
				<span>Quantity</span>
				<select value={item.qty} onChange={(e) => dispatch(addItem(item.product,Number(e.target.value)))}>
				{[...Array(item.inStock).keys()].map((x) => (
                    <option key={x+1} value={x+1}>
				       {x+1}
				    </option>
				))}
				
				</select>
			</Shop.Quantity>
			<Shop.Price>
				<span>SUBTOTAL</span>
				<h4>{item.price}</h4>
			</Shop.Price>
		</Shop.Items>
		</div>
		))}
		<Shop.TotalPrice>
			<span>TOTAL</span>
			<h3>${total}</h3>
		</Shop.TotalPrice>
		
		<Shop.Pay onClick={payment}>BUY NOW</Shop.Pay>

		</>
	  )}
</>
)}