import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import logo from "../images/logo.png";
import logoBackground from "../images/logo_grande.png";


const Logo = () => {
    return (
        <div className="header-first-div">
            <div className="logo-background-container">
                <img src={logoBackground} alt="logo background" className="logo-background" />
            </div>
            <img src={logo} alt="main logo" className="logo" />
            <h1 className="header-heading"> AUDI Racing Team </h1>
        </div>
    )
}

const Nav = () => {
    return (
        <div className="header-second-div">
            <i className="fas fa-bars"></i>
        </div>
    )
}

const DesktopNav = () => {
    return (
        <nav className="desktop-header-second-div">
            <ul className="header-desktop-nav">
                <Router>
                    <li><Link to="/" className="teams selected">Teams</Link></li>
                    <li className="drivers"><Link to="/">Drivers</Link></li>
                    <li className="calendar"><Link to="/">Calendar</Link></li>
                </Router>
            </ul>
        </nav>
    )
}

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Nav />
            <DesktopNav />
        </header>
    )
}

export default Header;