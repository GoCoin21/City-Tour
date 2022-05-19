import React from "react";
import "./cart.css"
import SingleCart from "./SingleCart";
import {products} from "../data/Product"
import { useSelector } from "react-redux";
export default function CartList(){
    
    

	return (
		<div className="cartlist">
	
         {products.map((product) => (
			 <SingleCart key={product.id}/>
		 ))}
		
		</div>
	)
}