import React from "react";
import { Container,Form,Email,Password,Button } from "./styles/style";
export default function Login({children}){
	<Container>{children}</Container>
}
Login.Form = function LogForm({children,...restProps}){
	return <Form {...restProps}>{children}</Form>
}
Login.Email = function LogEmail({...restProps}){
	return <Email {...restProps}/>
}
Login.Password = function RegPassword({...restProps}){
	return <Password {...restProps}/>
}

Login.Button = function RegisterBtn({children}){
	return <Button>{children}</Button>
}