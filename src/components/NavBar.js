import React from 'react';
import {NavLink} from "react-router-dom"

function NavBar (){
    return(
        <nav>
            {/* IN NAV: Home | Recommendations | About  */}
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/recommendations">Recommendations</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default NavBar;