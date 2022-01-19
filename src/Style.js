import styled from "styled-components";

const NavStyles = styled.nav`
    display: flex;
    flex-direction : row;
    justify-content : space-between;
    width: 100%;
    height: 70px;
    align-items: center;
    background: black;
    color: white;
    font-size: 1.4rem;
    
    
    `

const NavLogo = styled.span`
        margin: 0 50px;
    `

const NavLinksContainer = styled.ul`
    list-style: none;
    display: flex;  
    
    margin: 0 50px;
    `

const NavLinks = styled.li`
    
    margin: 10px;
`



export { NavStyles, NavLinksContainer, NavLinks, NavLogo }