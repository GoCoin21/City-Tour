import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
 display : flex;
 align-items : center;
 justify-content : flex-start;
 font-size: 35px;
 margin-left: 70px;
 margin-top: 5px;
 @media only screen and (max-width:768px){
     display:flex;
     flex-direction : column;
 }
`
export const Logo = styled(Link)`
border : none;
text-decoration:none;
margin-top:9px;
margin-left : 70px;

@media only screen and (max-width:768px){
    margin-right : 390px;
    margin-left : 0px;
}
`
export const Input = styled.input`
border: 1px solid #bec1c4;
background-color: #fff;
color : #cbcdd1;
padding : 2px;
text-align : left;
width: 340px;
margin-left: 250px;
height: 43px;
margin-top:9px;
font-size : 14px;
line-height : 1.5;
border-radius : 1px;
text-decoration:none;

@media only screen and (max-width : 768px){
    display : none;
}
`
export const Button = styled.button`
border : 1px solid #000;
background-color : #000;
color : #fff;
margin : 0;
margin-top:9px;
height: 43px;
width: 95px;
text-transform : uppercase;
border-radius:1px;
cursor : pointer;

@media only screen and (max-width:768px){
    display : none;
}
`
export const Content = styled.div`
display : flex;
justify-content : flex-end;

`
export const Register = styled(Link)`
font-size : 15px;
color : #000;
text-transform : uppercase;
text-decoration:none;
margin-top:9px;
margin-left : 170px;
cursor : pointer;
font-weight : 500;
font-family: 'Inter', sans-serif;
font-family: 'Karla', sans-serif;
`
export const Login = styled(Link)`
font-size : 15px;
color : #000;
margin-top:9px;
margin-left : 39px;
text-transform : uppercase;
text-decoration:none;
font-weight : 500;
cursor : pointer;
font-family: 'Inter', sans-serif;
font-family: 'Karla', sans-serif;
`
export const Icon = styled(Link)`
font-size : 25px;
border : none;
color : #000;
text-decoration:none;
margin-top:9px;
margin-left : 39px;
margin-right : 70px;

@media only screen and (max-width:768px){
    margin-right : 0px;
}
`
export const DropDown = styled.button`
display : flex;
align-items : center;
justify-content : space-between;
margin : 0;
font-size : 18px;
margin-left : 100px;
margin-top:10px;
background-color:#fff;
color : #000;
border : 1px solid gray;
width : 150px;
height : 40px;
cursor:pointer;
`