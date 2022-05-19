import React from "react";
import { Container,Image,Desc,Prop,SubProp,Button,Review,RevContent} from "./styles/style";

export default function Product({children}){
	return (
		<Container>{children}</Container>
	)
}

Product.Image = function ProdImg({children}){
	return <Image>{children}</Image>
}
Product.Desc = function ProdDesc({children}){
	return <Desc>{children}</Desc>
}
Product.Prop = function ProdProp({children}){
	return <Prop>{children}</Prop>
}
Product.SubProp = function ProdProp({children}){
	return <SubProp>{children}</SubProp>
}
Product.Button = function ProdBtn({children,...restProps}){
	return <Button {...restProps}>{children}</Button>
}
Product.Reviews = function ProdReview({children}){
	return <Review>{children}</Review>
}
Product.RevContent = function Content({children}){
	return <RevContent>{children}</RevContent>
}