import React from "react";
import { BrowserRouter as Router,Routes,Route, useParams} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import ShippingPage from "./pages/ShippingPage";
import ShopCart from "./pages/ShopCart";
export default function App(){


	return (
	<Router>
			<Routes>
				<Route exact path="/" element={<Home/>}/>
				<Route exact path="/registerpage" element={<RegisterPage/>}/>
                <Route exact path="/loginpage" element={<LoginPage/>}/>
				<Route exact path='/shopcart' element={<ShopCart/>}/>
				<Route exact path='/products/:productId' element={<ProductPage/>}/>
				<Route exact path="/shippingpage" element={<ShippingPage/>}/>
				<Route exact path="/placeorderpage" element={<PlaceOrderPage/>}/>
				</Routes>
				</Router>
	
		
	)
}