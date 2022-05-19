import React from "react";
import { Mail } from "../components";
import { ImgContainer } from "../components/mail/styles/style";
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';
export default function Email(){

	 const popup =  () => (
		<Popup trigger={<button className="button">Trigger</button>} position="right center">
          <div>Successfully Subscribed</div>
		</Popup>
	 )
	return (
		<ImgContainer>
		<Mail.Content>
	    	<Mail.Title>Do you need more tips?</Mail.Title>
			<Mail.SubTitle>Sign up free and get the latest tips.</Mail.SubTitle>
		</Mail.Content>
			
			<Mail.Input type="email" placeholder="Your Email..." autoFocus/>
			<Mail.Button onClick={popup}>yes, I want!</Mail.Button>
           
		</ImgContainer>
	)
}