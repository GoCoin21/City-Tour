import React from "react";
import { Ship,Form,Address,City,Code,Country,Button } from "./styles/style"; 
export default function Shipping({children}){
    return (
        <Ship>{children}</Ship>
    )
}
Shipping.Form = function RegForm({children,...restProps}){
	return <Form {...restProps}>{children}</Form>
}
Shipping.Address = function ShipAddress({...restProps}){
	return <Address {...restProps}/>
}
Shipping.City = function ShipCity({...restProps}){
	return <City {...restProps}/>
}
Shipping.Code = function ShipCode({...restProps}){
	return <Code {...restProps}/>
}

Shipping.Country = function ShipCountry({...restProps}){
	return <Country {...restProps}/>
}

Shipping.Button = function ShipBtn({children}){
	return <Button>{children}</Button>
}