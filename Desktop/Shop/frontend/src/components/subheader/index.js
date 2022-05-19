import React from "react";
import { Container,Logo,Input,Button,Content,Register,Login,Icon,DropDown} from "./styles/style";

export default function SubHeader({children}){
	return (
		<Container>{children}</Container>
	)
}

SubHeader.Logo = function SubLogo({children,...restProps}){
	return <Logo {...restProps}>{children}</Logo>
}
SubHeader.Input = function SubInput({...restProps}){
	return <Input {...restProps}/>
}
SubHeader.Button = function SubButton({children,...restProps}){
	return <Button {...restProps}>{children}</Button>
}
SubHeader.Content = function SubContent({children}){
	return <Content>{children}</Content>
}
SubHeader.Register = function RegisterBtn({children,...restProps}){
	return <Register {...restProps}>{children}</Register>
}
SubHeader.Login = function LoginBtn({children,...restProps}){
	return <Login {...restProps}>{children}</Login>
}
SubHeader.Shop = function SubIcon({children,...restProps}){
   return <Icon {...restProps}>{children}</Icon>
}
SubHeader.Dropdown = function SubDropdown({children,...restProps}){
	return <DropDown {...restProps}>{children}</DropDown>
}