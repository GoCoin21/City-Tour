import React from "react"
import { ImgContainer,Title,Subtitle,Input,Button,Content} from "./styles/style"

export default function Mail({children}){
   return (
	   <ImgContainer>{children}</ImgContainer>
   )
}
Mail.Content = function MailContent({children}){
	return <Content>{children}</Content>
}
Mail.Title = function HeadTitle({children}){
	return <Title>{children}</Title>
}
Mail.SubTitle = function SubTitle({children}){
	return <Subtitle>{children}</Subtitle>
}
Mail.Input = function MailInput({...restProps}){
	return <Input {...restProps}/>
}
Mail.Button = function MailButton({children,...restProps}){
	return <Button {...restProps}>{children}</Button>
}