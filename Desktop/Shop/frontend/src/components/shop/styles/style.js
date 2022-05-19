import styled from "styled-components";

export const Container = styled.div`
margin : 0;
display : flex;
align-items : center;
justify-content : center;
background-color : #d3dded;
width: 1200px;
height: 70px;
margin-left: 110px;
margin-top : 30px;
border-radius : 5px;

`
export const Info = styled.span`
font-size: 14px;
text-decoration : none;
color : #1c57b0;
font-family : 'Open Sans', sans-serif;
margin-right : 70px;
`
export const Total = styled.div`
margin : 0;
display : flex;
align-items : center;
justify-content : center;
background-color : #a6dedd;
width: 1200px;
height: 70px;
margin-left: 130px;
margin-top : 30px;
border-radius : 5px;
@media only screen and (max-width:768px){
    width : 300px;
}
`
export const TPrice = styled.div`
margin : 0;
display : flex;
align-items : center;
justify-content : center;
background-color : #fff;
color : #000;
width: 1200px;
height: 70px;
margin-left: 110px;
margin-top : 30px;
border-radius : 5px;

`
export const Button = styled.a`
text-align : center;
color : #fff;
text-transform : uppercase;
margin:0;
text-decoration : none;
width : 190px;
height: 30px;
padding-top: 15px;
border-radius : 5px;
background-color : #366946;
`
export const Item = styled.div`
display : flex;
align-items : center;
justify-content : center;
flex-direction : row;
background-color : #fff;
width: 1200px;
height: 250px;
margin-left : 109px;
border : 1px solid transparent;
border-radius : 2px;
box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
@media only screen and (max-width:768px){
    width : 300px;
    height : 470px;
    display : flex;
    flex-direction : column;
    margin-left:130px;

}
`
export const Image = styled.div`
display : flex;
flex-direction:column;
margin-right : 250px;

`
export const Name = styled.span`
color : #000;
font-size : 18px;
letter-spacing : 1.5;
font-weight : 500;
margin-top : 90px;
margin-left: 25px;
font-family : "Josefin Sans",sans-serif;
@media only screen and (max-width:768px){
    margin-left:275px;
    margin-top:0px;
}
`
export const Quantity = styled.div`
display : flex;
flex-direction : column;
line-height : 1.5;
align-items : center;
justify-content : center;
margin-right: 55px;
@media only screen and (max-width:768px){
    margin-left:55px;
}
span{
    color : grey;
    font-size : 12px;
    text-decoration : none;
    text-transform : uppercase;
}
select{
    diplay : flex;
    align-items : center;
    justify-content : space-between;
    color : #000;
    background-color : #fff;
    width: 150px;
    height: 50px;
    border: 1px solid gray;
    border-radius: 5px;
    font-size: 18px;
}
`
export const Price = styled.div`
@media only screen and (max-width:768px){
    margin-left:15px;
    h4{
        margin-left:15px;
    }
}
span{
    color : grey;
    font-size : 12px;
    text-decoration : none;
    text-transform : uppercase;
}
h4{
    color : #000;
    font-style : bold;
}
`
export const Pay = styled.button`
display : flex;
align-items : center;
justify-content : center;
margin : 0;
margin-top: 30px;
margin-left: 490px;
width: 470px;
height: 50px;
color : #fff;
border: 1px solid gray;
border-radius: 5px;
background-color : #35e825;
text-transform : uppercase;
cursor : pointer;

@media only screen and (max-width:768px){
    width: 370px;
    margin-left:100px;
}
`