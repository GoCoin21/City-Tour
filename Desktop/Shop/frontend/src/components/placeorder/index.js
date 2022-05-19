import React from "react";
import { Container,Order,Icon,Info,Item,Image,Name,Quantity,Price,Button} from "./styles/style";
export default function PlaceOrder({children}){
    return <Container>{children}</Container>
}
PlaceOrder.Order = function OrderComp({children}){
    return <Order>{children}</Order>
}

PlaceOrder.Icon = function PlaceIcon({children}){
    return <Icon>{children}</Icon>
}
PlaceOrder.Info = function PlaceInfo({children}){
    return <Info>{children}</Info>
}
PlaceOrder.Item = function PlaceItem({children}){
    return <Item>{children}</Item>
}
PlaceOrder.Image = function PlaceImg({children}){
    return <Image>{children}</Image>
}
PlaceOrder.Name = function PlaceName({children}){
    return <Name>{children}</Name>
}
PlaceOrder.Quantity = function PlaceQuantity({children}){
    return <Quantity>{children}</Quantity>
}
PlaceOrder.Price = function PlacePrice({children}){
    return <Price>{children}</Price>
}
PlaceOrder.Button = function PlaceBtn({children,...restProps}){
    return <Button {...restProps}>{children}</Button>
}