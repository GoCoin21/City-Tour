import React from "react";
import { Button } from "../components/payment/styles/style";
import useRazorpay from "react-razorpay";
export default function PayBtn(){
    const Razorpay = useRazorpay()
    const payment = (e) => {
        e.preventDefault()

        const options = {
            key: "rzp_test_adXO6V7Lu5KzpP",
            amount : "500",
            currency : "INR",
            name : "GoCoin21",
            description: "Test transaction for Ecommerce Shop",
            image : "https://previews.123rf.com/images/javiart/javiart1706/javiart170600490/80892167-shoe-logo.jpg",
            order_id : "order_JGZ6tStJgblyuz",
            handler : function(response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            prefill : {
                name : "Alen Mutum",
                email : "abc@example.com",
                contact : "8798486521"
            },
            notes : {
                address : "Mantripukhri,Imphal"
            },
            theme : {
                color:  "#258ae8",
                backdrop_color : "#000"
            }
        };
        const pay = new Razorpay(options);
        pay.on('payment.failed',function(response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        })
        pay.open();
    }
    

    return (
        <Button onClick={payment}>Place Order</Button>
    )
}