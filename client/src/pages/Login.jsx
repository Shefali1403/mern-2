import React, { useState } from "react";
import { useAuth } from "../store/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const URL=`http://localhost:8000/api/auth/login`;
const Login=()=>{
    const[user, setUser]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate();
    const {storeTokenInLS}=useAuth();
    const handleinput=(e)=>{
        let name=e.target.name;
        let val= e.target.value;
        setUser({
            ...user,
            [name]:val
        })
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
            const res_data= await response.json();
            if(response.ok){
                storeTokenInLS(res_data.token);
                setUser({email:"", password:""})
                toast.success("Login succesfull");
                navigate("/");
                
            }else{
                toast.error(res_data.extraDetail? res_data.extraDetail: res_data.message);
            }

        } catch (error) {
            console.log("Login error", error);
            
        }
    }
    return(
        <>
            <section>
                <main>
                    <div className="login-container">
                        <div className="login-image">
                            <img src="https://img.freepik.com/premium-vector/woman-working-laptop-office-vector-illustration_760443-550.jpg" width="300" height="300" alt="not found"/>
                        </div>
                        <div className="login-form">
                        <h1>Login form</h1>
                        <br/>
                            <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" className="login-email" placeholder="email" value={user.email} onChange={handleinput} id="email" required autoComplete="off"/>

                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <input type="password"  name="password" placeholder="password" value={user.password} onChange={handleinput} id="password" required autoComplete="off"/>
                            </div>
                            <button className="login-button" type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}
export default Login;