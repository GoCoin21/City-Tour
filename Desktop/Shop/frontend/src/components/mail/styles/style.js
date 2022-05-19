import styled from "styled-components"

export const ImgContainer = styled.div`
background-image : url(${require("../../../images/shoe-leg.jpg")});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
height : 400px;
margin-top : 500px;
@media only screen and (max-width : 768px){
  margin-top:2300px;
  width : 520px;
}
`
export const Content = styled.div`
  text-align: center;
  position: absolute;
  margin-top: 150px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`
export const Title = styled.h3`
color : #fff;
text-align:center;
font-size : 24px;
margin-left :20px;
text-transform : uppercase;
`
export const Subtitle = styled.h4`
color : #fff;
text-align:center;

font-size : 14px;
@media only screen and (max-width:768px){
  margin-left : 15px;
}
`
export const Input = styled.input`
border: 1px solid #bec1c4;
background-color: #fff;
color : #cbcdd1;
padding : 2px;
text-align : center;
width: 450px;
margin-left: 470px;
height: 43px;
margin-top:250px;
font-size : 14px;
line-height : 1.5;
border-radius : 50px;
text-decoration:none;

@media only screen and (max-width : 768px){
  width : 340px;
  margin-left : 95px;

}
`
export const Button = styled.button`

background-color : #13bf0d;
color : #fff;
margin : 0;
margin-right : 25px;
margin-top:9px;
height: 43px;
width: 155px;
text-transform : uppercase;
cursor : pointer;
border-radius : 50px;
text-transform : uppercase;
@media only screen and (max-width:768px){
  margin-left:195px;
}
`