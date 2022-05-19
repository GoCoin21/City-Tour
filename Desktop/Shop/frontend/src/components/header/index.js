import React from "react";
import { Container,Span,Email,Social,Icon,Content} from "./styles/style";

export default function Header({children}){
	return (
		<Container>{children}</Container>
	)

	
}
Header.Content = function HeadContent({children}){
	return <Content>{children}</Content>
}
Header.Number = function HeadNum({children}){
	return <Span>{children}</Span>
}
Header.Email = function HeadMail({children}){
	return <Email>{children}</Email>
}
Header.Icon = function HeadIcon({children}){
	return <Icon>{children}</Icon>
}
Header.Social = function HeadSocial({children}){
	return <Social>{children}</Social>
}