import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/login";
import { Container } from "../components/login/styles/style";
import HeaderPage from "./HeaderPage";
import SubHeaderPage from "./SubHeaderPage";
import { login } from "../redux/Actions/userAction";
import LoadingSpinner from "../components/LoadingError/loading";
import { Link } from "react-router-dom";
export default function LoginPage({location,history=[]}){

	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
    const dispatch = useDispatch()
	const redirect = window.location.search ? window.location.search.split("=")[1] : "/"

	const userLogin = useSelector((state) => state.userLogin)
	const {loading,userInfo} = userLogin

	useEffect(() => {
		if(userInfo){
			history.push(redirect)
		}
	},[userInfo,redirect,history])

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(login(email,password))
	}
	const handleEmail = (e) => {
		e.preventDefault()
		setEmail(e.target.value)
	}
	const handlePassword = (e) => {
        e.preventDefault()
		setPassword(e.target.value)
	}
 	return (
		<>
		<HeaderPage/>
		<SubHeaderPage/>
		{loading && <LoadingSpinner/>}
		<Container>
			<Login.Form onSubmit={handleSubmit}>
			<Login.Email type="email" value={email} onChange={handleEmail} placeholder="Email" required autoFocus/>
				<Login.Password type="password" value={password} onChange={handlePassword} placeholder="Password" required autoFocus/>
				<Login.Button type="submit">LOGIN</Login.Button>
				<Link style={{textDecoration:"none"}} to = {redirect ? `/register?redirect=${redirect}` : "/register"}>
				<span  style={{textDecoration : "none",marginTop:"5px",fontFamily:"Roboto,sans-serif"}}>Don't Have An Account <span style={{color : "gray",textDecoration:"none"}}>Register</span></span>
				</Link>
			</Login.Form>
		</Container>
		</>
	)
}