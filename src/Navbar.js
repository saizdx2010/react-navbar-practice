import React from "react";
import { NavStyles } from "./Style";

export class Navbar extends React.Component {

    render() {
        return (
            <NavStyles>
                <span className="navbar-logo">SP</span>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </NavStyles>
        )
    }
}