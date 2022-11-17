import React from 'react';
import {NavLink} from "react-router-dom"
import logo from "../images/llocalsonly.png"

function NavBar () {
    return (
        <nav>
            <div>
                <img src={logo} alt="test" style={{width: 300}}></img>
            </div>
            <div className="nav-links">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/recommendations">Recommendations</NavLink>
                <NavLink to="/new">Submit Your Own!</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;