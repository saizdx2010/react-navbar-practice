import React from 'react';
import { NavLinks, NavLinksContainer } from './Style';


export class NavItem extends React.Component {
    render() {
        return (
            <>
                <span className="navbar-logo">{this.props.navLogo}</span>
                <NavLinksContainer>
                    <NavLinks>{this.props.item1}</NavLinks>
                    <NavLinks>{this.props.item2}</NavLinks>
                    <NavLinks>{this.props.item3}</NavLinks>
                </NavLinksContainer>
            </>
        )
    }
}