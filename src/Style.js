import styled from "styled-components";

const NavStyles = styled.nav`
    display: flex;
    flex-direction : row;
    justify-content : space-around;
    width: 100%;
    height: 70px;
    align-items: center;
    background: black;
    color: white;
    
    
    
`

const NavLinksContainer = styled.ul`
    list-style: none;
    display: flex;  
    float: right;
`

const NavLinks = styled.li`
    margin: 10px;
    
`



export { NavStyles, NavLinksContainer, NavLinks }