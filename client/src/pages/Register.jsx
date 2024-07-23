import React, { useState } from "react";
import { useAuth } from "../store/Auth";
const URL=`http://localhost:8000/api/auth/register`;
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Register=()=>{
    const[user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });
    const navigate=useNavigate();
    const {storeTokenInLS}=useAuth();
    const inputchange=(e)=>{
        let name=e.target.name;
        let val=e.target.value;
        setUser({
            ...user,
            [name]:val
        });

    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(user);
        try {
            
            const response= await fetch(URL,{
                method:"POST",
                headers:{
                 "Content-Type":"application/json",
                },
                body:JSON.stringify(user)
            });
            console.log(response);
            const res_data= await response.json();
            if(response.ok){
                storeTokenInLS(res_data.token);
                setUser({
                    username:"",
                    email:"",
                    phone:"",
                    password:""
                })
                toast.success("Registration succesfull");
                navigate("/login");
            }else{
                toast.error(res_data.extraDetail? res_data.extraDetail: res_data.message);
            }
        } catch (error) {
            console.log("error register", error)
        }

    }
    return(
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container-register grid grid-cols-2 bg-black">
                            <div className="registration-image ">
                                <img src="https://img.freepik.com/premium-vector/woman-working-laptop-office-vector-illustration_760443-550.jpg" width="300" height="300" className="image-girl" alt="not found"/>
                            </div>
                            <div className="registration-form">
                                <h1>Registration form</h1>
                                <br/>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input type="text" name="username" placeholder="username" value={user.username} onChange={inputchange} id="username" required autoComplete="off"/>
                                    </div>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input type="text" name="email" className="email-input" placeholder="email" id="email" value={user.email} onChange={inputchange} required autoComplete="off"/>
                                    </div>
                                    <div>
                                        <label htmlFor="phone">phone</label>
                                        <input type="text" name="phone" placeholder="phone" className="phone-input" id="phone" value={user.phone} onChange={inputchange} required autoComplete="off"/>
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input type="password" name="password" placeholder="password" className="pass-input" value={user.pass} onChange={inputchange} id="password" required autoComplete="off"/>
                                    </div>
                                    <br/>
                                    <button type="submit" className="register-button"> Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}
export default Register;