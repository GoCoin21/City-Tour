import styled from "styled-components"

export const Container = styled.div`
display : grid;
grid-template-columns : repeat(3,minmax(0,1fr));

background-color : #b3e3ce;
width: 1200px;
height: 150px;
margin-left: 90px;
margin-top: 20px;
border : none;
`
export const Order = styled.div`
display: flex;
align-items : center;
justify-content : space-between;
width: 150px;
margin-left: 120px;
margin-top: 30px;
height : 90px;
`
export const Icon = styled.div`
border : 1px solid #184a34;
border-radius : 50%;
background-color :  #b3e3ce;
color: #184a34;

width : 50px;
height : 50px;

text-align:center; 
`
export const Info = styled.div`
display : flex;
flex-direction : column;
text-align:left;
justify-content : center;
width : 150px;
`
export const Item = styled.div`
display : flex;
align-items : center;
justify-content : center;
flex-direction : row;
background-color : #fff;
width: 150px;
height: 150px;
margin-left: 420px;
margin-top: 50px;

`
export const Image = styled.div`
display : flex;
margin-right : 250px;
`
export const Name = styled.span`
color : #000;
font-size : 18px;
letter-spacing : 1.5;
font-weight : 500;
margin-top : 90px;
margin-left: 75px;
font-family : "Josefin Sans",sans-serif;

`
export const Quantity = styled.div`
display : flex;
flex-direction : column;
line-height : 1.5;
align-items : center;
justify-content : center;
margin-right: 55px;
span{
    color : black;
    font-size : 14px;
    text-decoration : none;
    text-transform : uppercase;
}
h4{
    diplay : flex;
    align-items : center;
    justify-content : center;
    text-align:center;
    color : #000;
    background-color : #fff;
    width: 150px;
    height: 50px;
    font-size: 18px;
    font-style : bold;
}
`
export const Price = styled.div`
margin-bottom : 45px;
span{
    color : black;
    font-size : 14px;
    text-decoration : none;
    text-transform : uppercase;
}
h4{
    color : #000;
    font-style : bold;
    
}
`
export const Button = styled.button`
color : #fff;
background-color : #23de27;
display : flex;
align-items : center;
justify-content : center;
margin : 0;
margin-left: 650px;
margin-top: 60px;
width: 150px;
height: 50px;
border : none;
text-align:center;
text-transform : uppercase;
font-family: 'Open Sans', sans-serif;
cursor : pointer;
`