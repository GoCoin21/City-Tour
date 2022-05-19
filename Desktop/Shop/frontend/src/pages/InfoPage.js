import React from "react";
import { Info } from "../components";
import { Container } from "../components/info/styles/style";
import {BsFillTelephoneFill} from "react-icons/bs";
import {ImLocation2} from "react-icons/im";
import {FaFax} from "react-icons/fa";
export default function InfoPage(){
	return (
		<Container>
			<Info.Call>
             <BsFillTelephoneFill style={{border:"1px solid green" ,borderRadius:"80px",width:"80px",height :"80px"}}/>
			 <Info.Title>Call Us 24x7</Info.Title>
			 <br/>
			 <Info.SubTitle>9863 738 691</Info.SubTitle>
			</Info.Call>

			<Info.Location>
              <ImLocation2 style={{border:"1px solid green" ,borderRadius:"80px",width:"80px",height :"80px"}}/>
			  <Info.Title>Headquarter</Info.Title>
			  <br/>
			 <Info.SubTitle>Asuha Nijiro Pepsi</Info.SubTitle>
			</Info.Location>

			<Info.Fax>
			<FaFax style={{border:"1px solid green" ,borderRadius:"80px",width:"80px",height :"80px"}}/>
			<Info.Title >Fax</Info.Title>
			<br/>
			 <Info.SubTitle>0736 230 063</Info.SubTitle>
			</Info.Fax>
		</Container>
	)
}