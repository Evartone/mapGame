import styled from "styled-components";

export const  Container = styled.div <{ size: number, left: number, Top: number , sidePos: number}>`

     width:${props => props.size}px; 
     height:${props => props.size}px; 
     position: absolute;
     left:${props =>props.left}px; 
     top: ${props =>props.Top}px; 
     background-image: url('src/assets/char.png'); 
     background-position: 0px ${props => props.sidePos}px; 

`; 
