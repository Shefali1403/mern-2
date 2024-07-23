import React from "react";
import { NavLink } from "react-router-dom";
 import "./Navbar.css"; 
 import { useAuth } from "../store/Auth";
const Navbar=()=>{
    const {isLoggedIn}=useAuth();
    return(
        <>
        <header>
            <div className="container">
                <div className="logo-brand"><h1>Nexus</h1></div>
                <nav>
                <ul className="list-none" style={{ listStyleType: 'none' }}>

                        <li><NavLink to="/" className="no-underline text-black">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/service">Service</NavLink></li>
                        {isLoggedIn ?  <li><NavLink to="/logout">Logout</NavLink></li> : <>  <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/signup">Sign up</NavLink></li> </>}
                    </ul>
                </nav>
            </div>
        </header>

        </>
    )
}
export default Navbar;