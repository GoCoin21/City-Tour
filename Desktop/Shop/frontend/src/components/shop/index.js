import React from "react";
import { Container,Info,Button,Total,TPrice,Item,Image,Name,Quantity,Price,Pay} from "./styles/style";
export default function Shop({children}){
	return (
		<Container>{children}</Container>
	)
}
Shop.Info = function ShopInfo({children}){
	return <Info>{children}</Info>
}
Shop.Total = function ShopTotal({children}){
	return <Total>{children}</Total>
}
Shop.Button = function ShopBtn({children,...restProps}){
	return <Button {...restProps}>{children}</Button>
}
Shop.Items = function ShopItem({children}){
	return <Item>{children}</Item>
}
Shop.Image = function ShopImg({children}){
	return <Image>{children}</Image>
}
Shop.Name = function ShopName({children}){
	return <Name>{children}</Name>
}
Shop.Quantity = function ShopQt({children}){
	return <Quantity>{children}</Quantity>
}
Shop.Price = function ShopPrice({children}){
	return <Price>{children}</Price>
}
Shop.TotalPrice = function TotalPrice({children}){
	return <TPrice>{children}</TPrice>
}
Shop.Pay = function ShopPay({children,...restProps}){
	return <Pay {...restProps}>{children}</Pay>
}