import React from "react";
import { NavLink } from "react-router-dom";
const Error=()=>{
    return(
        <>
       <section id="error-page">
       <div className="error-container content">
        <h2 className="header">404</h2>
        <h4>Sorry! Page not found</h4>
        <p>Oops! It seems like the page you're trying to access dose't exist. If you <br/> believe there's an issue, feel free to report it, and we'll look into it.</p>
        <div className="btns">
            <NavLink to="/" className="btns-b">return home</NavLink>
            <NavLink to="/contact" className="btns-b">report problem</NavLink>
        </div>
       </div>

       </section>

        </>
    )
}
export default Error;