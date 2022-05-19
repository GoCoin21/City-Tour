import styled from "styled-components";

export const Container = styled.div`
display : flex;
align-items: center;
justify-content : center;
margin-top: 70px;
margin-left: 490px;
width: 370px;
height: 422px;

border : 1px solid transparent;
border-radius : 2px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const Form = styled.form`
display : flex;
flex-direction : column;
align-items : center;
justify-content : center;
margin-bottom : 70px;
`
export const Name = styled.input`
width : 330px;
height : 55px;
text-align: left;
margin : 0;
border-radius : 5px;
border : 1px solid grey;
color : #d5dadb;
background-color : #fff;
font-size : 14px;
font-weight : 500;
font-style:bold;
font-family: 'Open Sans', sans-serif;
`
export const Email = styled.input`
width : 330px;
height : 55px;
text-align: left;
margin : 0;
margin-top : 19px;
border-radius : 5px;
border : 1px solid grey;
color : #d5dadb;
background-color : #fff;
font-size : 14px;
font-family: 'Open Sans', sans-serif;
`
export const Password = styled.input`
width : 330px;
height : 55px;
text-align: left;
margin : 0;
margin-top : 19px;
border-radius : 5px;
border : 1px solid grey;
color : #d5dadb;
background-color : #fff;
font-size : 14px;
font-family: 'Open Sans', sans-serif;
`
export const Button = styled.button`
width : 340px;
height : 55px;
background-color : #13f70f;
text-align : center;
color : #fff;
border : transparent;
border-radius : 9px;
margin-top : 19px;
border-radius : 3px;
text-decoration:none;
text-transform : uppercase;
cursor: pointer;
`