import React from "react";
import { Container,Title,InfoSub,Call,InfoLoc,InfoFax } from "./styles/style";

export default function Info({children}){
	return <Container>{children}</Container>
}
Info.Title = function InfoTitle({children}){
	return <Title>{children}</Title>
}
Info.SubTitle = function SubTitle({children}){
	return <InfoSub>{children}</InfoSub>
}
Info.Call = function InfoCall({children}){
	return <Call>{children}</Call>
}
Info.Location = function Location({children}){
	return <InfoLoc>{children}</InfoLoc>
}
Info.Fax = function Fax({children}){
	return <InfoFax>{children}</InfoFax>
}