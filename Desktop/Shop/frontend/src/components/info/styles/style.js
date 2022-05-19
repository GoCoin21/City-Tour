import styled from "styled-components";

export const Container = styled.div`
display : flex;
align-items : center;
justify-content : space-around;
margin : 0;
margin-top : 90px;
@media only screen and (max-width:768px){
    margin-left:105px;
}
`
export const Title = styled.span`
font-size : 24px;
color: #000;
text-decoration : none;
text-transform : capitalize;
font-family: 'Roboto', sans-serif;
text-align:center;
font-weight : bold;

`
export const InfoSub = styled.span`
color : #000;
text-decoration : none;
font-size: 14px;

`
export const Call = styled.i`
width : 80px;
height : 50px;
`
export const InfoLoc =  styled.i`
width : 90px;
height : 50px;

@media only screen and (max-width:768px){
    margin-left:20px;
}

`
export const InfoFax =  styled.i`
width : 80px;
height : 50px;

@media only screen and (max-width:768px){
    margin-left:70px;
}
`