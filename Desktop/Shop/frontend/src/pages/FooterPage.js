import React from "react";
import { Footer } from "../components";
import { Container } from "../components/footer/styles/style";

export default function FooterPage(){
	return (
		<Container>
			<Footer.Card>
				<Footer.Image style={{height : "45px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png" alt="master card"/>
			</Footer.Card>

			<Footer.Card>
				<Footer.Image style={{height : "45px"}} src="https://pbs.twimg.com/media/EfTZlEnWAAMn1lX.png" alt="paypal"/>
			</Footer.Card>

			<Footer.Card>
				<Footer.Image style={{height : "45px"}} src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/American-Express-icon.png" alt="american express"/>
			</Footer.Card>

			<Footer.Card>
				<Footer.Image style={{height : "45px"}} src="https://icons-for-free.com/iconfiles/png/512/cash+checkout+discover+network+online+shopping+payment+method-1320191225548835050.png" alt="discover"/>
			</Footer.Card>

			<Footer.Card>
				<Footer.Image style={{height : "45px",width:"50px"}}src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="visa"/>
			</Footer.Card>

		</Container>
	)
}