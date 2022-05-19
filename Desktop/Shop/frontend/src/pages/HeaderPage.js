import React from "react";
import {FiFacebook,FiInstagram,FiLinkedin,FiYoutube} from "react-icons/fi";
import { Header } from "../components";
import { Container } from "../components/header/styles/style";


export default function HeaderPage(){

	return (
		<Container>
		
			<Header.Number>
			+255 768 356 890
			</Header.Number>

		<Header.Email>info@zpunet.com</Header.Email>
		<Header.Social>
		<Header.Icon>
			<FiFacebook/>
		</Header.Icon>	
		
		<Header.Icon>
		<FiInstagram/>
		</Header.Icon>
 
		<Header.Icon>
		<FiLinkedin/>
		</Header.Icon>
 			
		<Header.Icon>
		<FiYoutube/>
		</Header.Icon>
 			
			
		
		</Header.Social>
		</Container>
	)
}