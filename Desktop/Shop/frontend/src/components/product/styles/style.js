import styled from "styled-components"

export const Container = styled.div`
display : grid;
grid-gap : 10px;
grid-template-columns : repeat(1,1fr);
margin : 0;
@media only screen and (max-width:768px){
	display:flex;
	flex-direction:column;
	width:527px;
}
`
export const Image = styled.div`
width : 100px;
height : 80px;
border : 1px solid transparent;

`
export const Desc = styled.div`
display : flex;
flex-direction : column;
align-items : flex-start;
justify-content : center;
margin-top : 30px;
width: 600px;
letter-spacing : 1px;
margin-right: 50px;
margin-left : 500px;

h4{
	font-size : 24px;
	color : #000;
}

p{
color : #666;
font-size : 14px;
line-height : 25px;
font-family : "Josefin Sans",sans-serif;
margin-bottom : 115px;
}
@media only screen and (max-width:768px){
	margin-left : 50px;
	margin-top:350px;
	width:0px;
	p{
		width:300px;
	}
	h4{
		width:300px;
	}
}
`

export const Prop = styled.div`
display : flex;
align-items : center;
justify-content : space-between;
border : 1px solid rgba(0,0,0,0.1);
border-radius : 3px;
margin : 0;
margin-left : 405px;
width: 320px;
height: 55px;
background-color : #fff;
font-weight : 500;
font-family : "Josefin Sans",sans-serif;
`
export const SubProp = styled.div`
display : flex;
align-items : center;
justify-content : space-between;
border : 1px solid rgba(0,0,0,0.1);
border-radius : 3px;
margin : 0;
margin-left : 405px;
width: 320px;
height: 55px;
background-color : #fff;
font-weight : 500;
font-family : "Josefin Sans",sans-serif;
 @media only screen and (max-width : 768px){
	 margin-left : 35px;
	
 }
`
export const Button = styled.button`
width : 1500px;
height : 57px;
cursor:pointer;
text-align : center;
text-transform : uppercase;
color : #fff;
margin : 0;
background-color : #000;
border : 1px solid black;
border-radius : 5px;
&:hover{
	background-color : #07fc03;
	transition : all 0.5s ease-in-out;
}
`
export const Review = styled.div`
display : flex;
flex-direction : column;
align-items : flex-start;
justify-content : flex-start;
height : 150px;
margin-left : 110px;

`
export const RevContent =styled.div`
display : flex;
flex-direction : column;
justify-content : flex-start;
border-radius : 3px;
width : 500px;
border : 1px solid rgba(0,0,0,0.1);
background-color : #ebeae8;
margin-bottom : 45px;
`