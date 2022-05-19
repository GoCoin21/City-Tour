import React from "react";
import { Container,Card,Image } from "./styles/style";
export default function Footer({children}){
	return <Container>{children}</Container>
}

Footer.Card = function FooterCard({children}){
	return <Card>{children}</Card>
}
Footer.Image = function FooterImg({...restProps}){
	return <Image {...restProps}/>
}