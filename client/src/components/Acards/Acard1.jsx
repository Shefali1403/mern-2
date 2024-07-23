import React, { useState } from "react";
import { useAuth } from "../../store/Auth";
import { useEffect  } from "react";
import { useNavigate } from "react-router-dom";
const Acard1=()=>{
    const[about, setAbout]=useState("");
    const[loged, setloged]=useState(false);
    const {userdata}=useAuth();
    useEffect(() => {
        if (userdata) {
            setloged(true);
            setAbout(userdata.username);
        }
    }, [userdata]);
    const navigate=useNavigate();
    return(
        <>
        <div className="card1-cont">
            <div className="card1-writeup">
        {(loged)? <> <p>Hey! {about}</p></>: <p>Hey</p> }
                <p>Welcome Nexus Technical</p>
                <h1>Why Choose Us?</h1>
                <p>Expertise:Our team consistes of experienced IT professionals who are <br/> passionate about staying up-to-date with the latest industry trends.</p>
                <p>Customization: We understand that every business is unique. That's why <br/>we create solutions that are tailored to your specific needs and goals.</p>
                <p>Customer-Centric Approach: We prioritize your satisfaction and provide <br/> top-notch support to address your IT concerns.</p>
                <p>Affordability:We offer competitive pricing without compromising on the<br/>quality of our services.</p>
                <p>Reliability:Count on us to be there when you need us. We're committed<br/>to ensuring your IT environment is realible and available 24/7.</p>
                <div className="card1-button">
                    <button className="but1" onClick={()=>navigate("/contact")}>Connect Now</button>
                    <button onClick={()=>navigate("/about")}>Learn More</button>
                </div>
            </div>
            <div className="card1-image">
                <img src="https://www.shutterstock.com/image-vector/girl-laptop-sitting-on-chair-600nw-1502127389.jpg" width="300" height="300" alt="not found"/>
            </div>
        </div>

        </>
    )
};
export default Acard1;