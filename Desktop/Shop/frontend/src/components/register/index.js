import React from "react";
import { Container,Form,Name,Email,Password,Button } from "./styles/style";
export default function Register({children}){
	return <Container>{children}</Container>
}
Register.Form = function RegForm({children,...restProps}){
	return <Form {...restProps}>{children}</Form>
}
Register.Name = function RegName({...restProps}){
	return <Name {...restProps}/>
}
Register.Email = function RegEmail({...restProps}){
	return <Email {...restProps}/>
}
Register.Password = function RegPassword({...restProps}){
	return <Password {...restProps}/>
}

Register.Button = function RegisterBtn({children}){
	return <Button>{children}</Button>
}