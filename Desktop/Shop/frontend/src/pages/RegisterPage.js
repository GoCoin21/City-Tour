import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Register } from "../components";
import { Container } from "../components/register/styles/style";
import HeaderPage from "./HeaderPage";
import SubHeaderPage from "./SubHeaderPage";
import { register } from "../redux/Actions/userAction";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingError/loading";
import axios from "axios";
export default function RegisterPage({location,history}){

	const [name,setName] = useState("")
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")

	const handleName = (e) => {
       e.preventDefault()
       setName(e.target.value)
	}
	const handleEmail = (e) => {
		e.preventDefault()
		setEmail(e.target.value)
	}
	const handlePassword = (e) => {
		e.preventDefault()
		setPassword(e.target.value)
	}
	const dispatch = useDispatch()
	const redirect = window.location.search ? window.location.search.split("=")[1] : "/"
	const userRegister = useSelector((state) => state.userRegister)
	const {loading,userInfo} = userRegister;

	useEffect(() => {
		if(userInfo){
			history.push(redirect)
		}
	},[userInfo,history,redirect])

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(register(name,email,password))
		
	}
	return (<>
	<HeaderPage/>
		<SubHeaderPage/>
		{loading && <LoadingSpinner/>}
		<Container>
			<Register.Form onSubmit={handleSubmit}>
				<Register.Name type="text" value={name} onChange={handleName} placeholder="Username" required autoFocus/>
				<Register.Email type="email" value={email} onChange={handleEmail} placeholder="Email" required autoFocus/>
				<Register.Password type="password" value={password} onChange={handlePassword} placeholder="Password" required autoFocus/>
				<Register.Button type="submit">REGISTER</Register.Button>
				<Link style={{textDecoration:"none"}} to={redirect ? `/login?redirect=${redirect}` : "/login"}>
				<span style={{marginTop:"5px",fontFamily:"Roboto,sans-serif"}}>I have Account <strong style={{textDecoration:"none",color:"grey"}}>Login</strong></span>
				</Link>
				
			</Register.Form>
			
		</Container>
		</>
	)
}