import styled from "styled-components"

export const Container = styled.div`
display : flex;
align-items : center;
justify-content : space-around;
margin : 0;
background-color :  #999d9e;
margin-top : 175px;
@media only screen and (max-width:768px){
    width:527px;
}
`
export const Card = styled.div`
width : 80px;
height : 80px;
margin-top : 30px;
border : none;
`
export const Image = styled.img`

height : 70px;
`