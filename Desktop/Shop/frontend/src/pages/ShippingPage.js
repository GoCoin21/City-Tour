import React, { useState } from "react";
import { Shipping } from "../components";
import { Ship } from "../components/shipping/styles/style";
import HeaderPage from "./HeaderPage";
import SubHeaderPage from "./SubHeaderPage";
import {shipAddress}  from "../redux/Actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ShippingPage(){
    const cart = useSelector((state) => state.cart)
    const {shippingAddress} = cart;
    const [address,setAddress] = useState(shippingAddress.address)
    const [city,setCity] = useState(shippingAddress.city)
    const [code,setCode] = useState(shippingAddress.code)
    const [country,setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()
    const history = useNavigate()
    
    // set the state for the type value
    const handleAddress = (e) => {
        e.preventDefault()
        setAddress(e.target.value)
    }
    const handleCity = (e) => {
        e.preventDefault()
        setCity(e.target.value)
    }
    const handleCode = (e) => {
        e.preventDefault()
        setCode(e.target.value)
    }
    const handleCountry = (e) => {
        e.preventDefault()
        setCountry(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(shipAddress({address,code,city,country}))
        history("/placeorderpage")
    }
    return(
        <>
            <HeaderPage/>
            <SubHeaderPage/>
            <Ship>
                <Shipping.Form onSubmit={handleSubmit}>
                    <Shipping.Address value={address} onChange={handleAddress} type="text" placeholder="Enter Address" required autoFocus/>
                    <Shipping.City type="text" value={city} onChange={handleCity} placeholder="Enter City" required autoFocus/>
                    <Shipping.Code type="text" value={code} onChange={handleCode} placeholder="Enter Postal Code" required autoFocus/>
                    <Shipping.Country type="text" value={country} onChange={handleCountry} placeholder="Enter Country" required autoFocus/>
                    <Shipping.Button type="submit">CONTINUE</Shipping.Button>
                </Shipping.Form>
            </Ship>
        </>
    )
}