import React from "react";
import {Nav, NavLogo, NavLink, Bars, NavMenu, } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/index" 
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  activeStyle={{ color: 'black' }}
                >
                    About
                </NavLink>
                <NavLink 
                  to="/contact" 
                  activeStyle={{ color: 'black' }}
                >
                    Contact
                </NavLink>
                <NavLink 
                  to="/signin" 
                >
                    Sign In
                </NavLink>
                <NavLink to="/signup">Sign Up</NavLink>                
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;