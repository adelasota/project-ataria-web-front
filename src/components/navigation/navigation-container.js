import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const NavigationContainer = props => {
    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">HOME</NavLink>
                </div>
                <div className="nav-link-wrapper">
                     <NavLink to="/about-us" activeClassName="nav-link-active">ABOUT</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/contact" activeClassName="nav-link-active">CONTACTO</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/e-shop" activeClassName="nav-link-active">COLLECTION</NavLink>
                </div>
                
                
                
            </div>

            <div className="right-side">
                <h2>clothes & accessories</h2>
            </div>

        </div>
    );
    
};

export default NavigationContainer;
//{true ? <button>E-Shop Manager</button> : null} debajo del ultimo div