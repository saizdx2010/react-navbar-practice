import React from "react";


export class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav className="navbar-container">
                <span className="navbar-logo">SP</span>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        )
    }
}