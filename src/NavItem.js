import React from 'react';
import { NavLinks, NavLinksContainer, NavLogo } from './Style';


export class NavItem extends React.Component {
    render() {
        return (
            <>
                <NavLogo>{this.props.navLogo}</NavLogo>
                <NavLinksContainer>
                    <NavLinks>{this.props.item1}</NavLinks>
                    <NavLinks>{this.props.item2}</NavLinks>
                    <NavLinks>{this.props.item3}</NavLinks>
                </NavLinksContainer>
            </>
        )
    }
}