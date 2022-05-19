import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Cart from "../components/cart";
import { Container } from "../components/cart/styles/style";
import {useDispatch,useSelector} from "react-redux"
import {listProduct} from "../redux/Actions/productAction"
export default function SingleCart(props){
	const {keyword,pageNumber} = props
	const dispatch = useDispatch()
	const productList = useSelector((state) => state.productList)
	const {products} = productList

	useEffect(() => {
       dispatch(listProduct(keyword,pageNumber))
	},[dispatch,keyword,pageNumber])
   return(
	   <Container>
	  {products.map((product) => (
		  <div key={product._id}>
		<Link to={`/products/${product._id}`}>
		   <Cart.Image src={product.image} alt={product.name}/>
		   <Cart.Title>{product.name}</Cart.Title>
		</Link>
	

		<Cart.Rating>{product.rating}</Cart.Rating>
		<Cart.Price>${product.price}</Cart.Price>
		</div>
	  ))}
	    
	   </Container>
   )

}