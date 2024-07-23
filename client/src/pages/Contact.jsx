import React, { useState } from "react";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Contact=()=>{
    const[user, setUser]=useState({
        username:"",
        email:"",
        message:"",
    })
    const[comUser, comSetuser]=useState(true);
    const {userdata}=useAuth();
    if(comUser && userdata){
        setUser({
            username:userdata.username,
            email:userdata.email,
            message:"",
        });
        comSetuser(false);
    }
    const inputval=(e)=>{
        let name=e.target.name;
        let val=e.target.value;
        setUser({
            ...user,
            [name]:val,
        })
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(user);
        try {
       const response= await fetch('http://localhost:8000/api/form/contact',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(user),

       })
       if(response.ok){
        const data= await response.json();
        console.log(data);
        setUser({
            username:"",
        email:"",
        message:"",
        })
        toast.success("Message saved!");
       }
            
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>
               <div className="card1-cont card3-cont">
          <div className="card1-image">
                <img src="https://st2.depositphotos.com/37221134/42933/v/450/depositphotos_429331272-stock-illustration-girl-study-at-computer-online.jpg" width="300" height="300" alt="not found"/>
            </div>
            <div className="Ccard-writeup">
               <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="username"  value={user.username} onChange={inputval} name="username" id="username"/>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="email" value={user.email} onChange={inputval} name="email" id="email" />
                    <label htmlFor="message">Message</label>
                    <textarea placeholder="message" name="message" value={user.message} onChange={inputval}  cols="30" rows="10" id="message"></textarea>
                    <button type="submit" className="register-button"> Submit</button>
               </form>
                </div>
            </div>
        </>
    );
}
export default Contact;