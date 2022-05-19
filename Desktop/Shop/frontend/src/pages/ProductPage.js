import React, { useEffect, useState } from "react"
import { Product } from "../components"
import { Container } from "../components/product/styles/style"
import HeaderPage from "./HeaderPage"
import SubHeaderPage from "./SubHeaderPage";
import "./product.css";
import "./placeorder.css";
import { useNavigate, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingError/loading";
import { listProductDetails } from "../redux/Actions/productAction";
import { addItem } from "../redux/Actions/cartAction";
import  Alert  from "@mui/material/Alert";
import Toast from "./Toast";
export default function ProductPage({match}){
	const [quantity,setQuantity] = useState(1)
	const [popup,setPopup] = useState("")
	const {productId} = useParams()
	const history = useNavigate()
	const dispatch = useDispatch()
	//const path = `/shopcart/${productId}?qty=${quantity}`
	const productDetails = useSelector((state) => state.productDetails)
	const toast = (e) => (
		<Alert severity="success" color="info">Added to Cart! - check it out</Alert>
	)
	const addQuantity = (e) => {
		e.preventDefault()
		dispatch(addItem(productId,quantity))
		//history(`/shopcart/${productId}?quantity=${quantity}`)
		
	}
	
    const {loading,err,product} = productDetails
	
	const handleChange = (e) => {
		setQuantity(e.target.value);
	}
	
	// const addToCart = (e) => {
		// e.preventDefault()
		// history(path)
	// }
       useEffect(() => {
		dispatch(listProductDetails(productId))
	   },[dispatch,productId])
			
		
			
	
	return(
	
	<>
		<HeaderPage/>
		<SubHeaderPage/>
		{loading ? (
			<LoadingSpinner/>
		) : 
			err ? (
				<h1>{err}</h1>
			) : (
				<Container>
			<Product.Image>
				<img className="main" src={product.image} alt={product.name}/>
			</Product.Image>
			<Product.Desc>
			<h4>{product.name}</h4>
				<p className="para" style={{marginBottom:"50px"}}>
				{product.description}
				</p>
				</Product.Desc>
			
				{product.inStock > 0 ? (
				<div className="prop">
				
				<Product.SubProp>
				<span>Reviews</span>
				<span>${product.numReviews}</span>
			</Product.SubProp>
			<Product.SubProp>
				<span>Price</span>
				<span>${product.price}</span>
				
			</Product.SubProp>
			<Product.SubProp>
			<span>Quantity</span>
			<span>
					<select className="dropdown" value={quantity} onChange={handleChange}>
					{[...Array(product.inStock).keys()].map((x) => (
						<option key={x+1} value={x+1}>
							{x+1}
						</option>
					))}
					  
					</select>
				</span>
			</Product.SubProp>
			<Product.SubProp>
				<span>Status</span>
				
				{product.inStock > 0 ? (
					<span>In Stock</span>	
				): (
					<span>unavailable</span>
				)}
				</Product.SubProp>
				<Product.SubProp>
					<Product.Button onClick={addQuantity} value={popup}>
						ADD TO CART	
					</Product.Button>
				</Product.SubProp>
				
				
				<a className="order"  href="/shippingpage">Place Order</a>

				</div>
				
			): null}
			
		</Container>
			
		)}
		
	</>
	)
}