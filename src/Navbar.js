import React from "react";
import { NavStyles } from "./Style";
import { NavItem } from "./NavItem"

export class Navbar extends React.Component {

    render() {
        return (
            <NavStyles>
                <NavItem navLogo="SP" item1="halo" item2="halo" item3="halo" />
            </NavStyles>
        )
    }
}