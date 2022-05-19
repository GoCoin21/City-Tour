import React, { useState } from "react";
import { SubHeader } from "../components";
import { Container } from "../components/subheader/styles/style";
import {useDispatch, useSelector} from "react-redux";
import {SiTrustedshops} from "react-icons/si";
import {GiShoppingBag} from "react-icons/gi";
import {IoMdArrowDropdown} from "react-icons/io";
import "./subheader.css";
import { Link, useNavigate } from "react-router-dom";
import {logout} from "../redux/Actions/userAction";
export default function SubHeaderPage(){
	const [dropdown,setDropdown] = useState(false);
    const toggle = () => {
		setDropdown(!dropdown)
	}
	const dispatch = useDispatch()
	const history = useNavigate()

	const handleLogout = () => {
		dispatch(logout())
	}
	const userLogin = useSelector((state) => state.userLogin)
	const cart = useSelector((state) => state.cart)
	const {userInfo} = userLogin
	const {cartItems} = cart
	return (
		<Container>
			<SubHeader.Logo to="/">
               <SiTrustedshops/>
			</SubHeader.Logo>

			<SubHeader.Input type="search" placeholder="Search" autoFoucs/>
			<SubHeader.Button>Search</SubHeader.Button>
               
				
				
				{userInfo ? (
				<SubHeader.Dropdown onClick={toggle}>
				
					Hi,{userInfo.name}<IoMdArrowDropdown/>
					
					{dropdown && (
						<div className="drop">
							<Link className="link" to="/profile">Profile</Link>
							<Link className="link" to="#" onClick={handleLogout}>Logout</Link>
						</div>
				)}
					
				</SubHeader.Dropdown>
				) : (
					<>
						<SubHeader.Register to="/registerpage">Register</SubHeader.Register>
				        <SubHeader.Login to="/loginpage">Login</SubHeader.Login>
						</>
				)
				}
				
			<SubHeader.Shop to="/shopcart">
               <span style={{backgroundColor:"red",width:"50px",color:"white"}}>{cartItems.length}</span>   
			   <GiShoppingBag style={{marginLeft:"5px"}}/>
			</SubHeader.Shop>
		</Container>
	)
}