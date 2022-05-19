import styled from  "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 90px;

align-items : center;
line-height : 2.5;
height: 400px;
width: 370px;
margin-top: 50px;
margin-left: 55px;
border : 1px solid #f5f0f0;
background-color : #fff;
border-radius : 1px;
text-decoration:none;
@media only screen and (max-width:768px){
    display : flex;
    flex-direction : column;
    margin-left : 80px;
}
`
export const Image = styled.img`
border : none;
padding : 3px;
margin-top : 11px;

background-color : #dcf0f7;
object-fit : cover;
width: 340px;
height: 250px;
`
export const Title = styled.h4`
color : #000;
font-size : 14px;
letter-spacing : 2px;
margin-left: 1px;
margin-top: 3px;
text-decoration:none;
text-transform : capitalize;
line-height : 1px;
font-family: 'Josefin Sans', sans-serif;
`
export const Rate = styled.span`
color : #000;
font-size : 14px;
margin-right : 50px;
font-family: 'Righteous', cursive;
`
export const Price = styled.span`
color : #000;
font-size : 24px;
font-family: 'Righteous', cursive;
font-weight: 900;
margin-right : 260px;
`