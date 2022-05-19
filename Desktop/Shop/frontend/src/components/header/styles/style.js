import styled from "styled-components";


export const Container = styled.div`
  display : flex;
  justify-content : space-around;
  background-color : #13bf0d;
  color : #fff;
  height : 40px;
  width : 100%;
  border : none;
  @media only screen and (max-width:768px){
    width:527px
  }
`
export const Content = styled.section`
display : flex;
margin : 10px;
`
export const Span = styled.span`
color : #fff;
margin : 10px;
margin-left : 90px;
font-size : 14px;
font-weight : 200;
text-decoration : none;

`
export const Email = styled.span`
font-family: 'Inter', sans-serif;
font-family: 'Josefin Sans', sans-serif;
color : #fff;
margin : 10px;
font-size : 14px;
width : 750px;

@media only screen and (max-width:768px){
  margin : 13px;
  width : 170px;
}
`
export const Icon = styled.i`
display : inline-block;
margin-right:28px;
`
export const Social = styled.div`
display : flex;
align-items : center;
margin-left : 150px;
margin-right : 50px;
justify-content : space-between;
cursor : pointer;

@media only screen and (max-width : 768px){
  display : none;
}
`