import React from "react";
import { useNavigate } from "react-router-dom";
const Card1=()=>{
    const navigate=useNavigate();
    return(
        <>
        <div className="card1-cont">
            <div className="card1-writeup">
                <p>We are the World Best IT Company</p>
                <h1>Welcome to Nexus</h1>
                <h1>Technical</h1>
                <p>Are you ready to take your business to the next level with cutting-edge<br/> IT solutions?Look no further!At Nexus Technical , we specialize in<br/> providing innovative IT solutions and services tailored to meet your<br/> unique needs.</p>
                <div className="card1-button">
                    <button className="but1" onClick={()=>navigate("/contact")}>Connect Now</button>
                    <button onClick={()=>navigate("/about")}>Learn More</button>
                </div>
            </div>
            <div className="card1-image">
                <img src="https://st2.depositphotos.com/37221134/44731/v/450/depositphotos_447313024-stock-illustration-business-woman-practicing-meditation-and.jpg" width="300" height="300" alt="not found"/>
            </div>
        </div>

        </>
    )
};
export default Card1;