import React from "react";
import logo from './logo.svg';



function Navbar() {
    return(
        <div className="logo-container">
           <img src={logo} alt="logo" width='100px' />
        </div>
    )
}

export default Navbar;