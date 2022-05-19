import React from "react";
import { Container,Image,Title,Rate,Price} from "./styles/style";
export default function Cart({children}){
	return <Container>{children}</Container>
}

Cart.Image = function CartImg({children,...restProps}){
	return <Image {...restProps}/>
}
Cart.Title = function CartTitle({children}){
	return <Title>{children}</Title>
}
Cart.Rating = function CartRate({children}){
	return <Rate>{children}</Rate>
}
Cart.Price = function CartPrice({children}){
	return <Price>{children}</Price>
}