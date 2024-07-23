import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext=createContext();
export const AuthProvider=({children})=>{
    const [token, setToken]=useState(localStorage.getItem("token"));
    const [userdata, setUserdata]=useState("");
    const[services, setServices]=useState([]);
    const storeTokenInLS=(serverToken)=>{
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
        
    }
    let isLoggedIn=!!token;
    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");

    }
    // JWT AUTHENTICATION 
    const userAuthentication=async()=>{
        try {
            const response=await fetch("http://localhost:8000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            });
            if(response.ok){
                const data= await response.json();
                console.log("user data", data.userData);
                setUserdata(data.userData);
            }
        } catch (error) {
            console.log("Error fetching user data");
        }
    }
    // to fetch services data 
    const getServices= async()=>{
        try {
            const response= await fetch("http://localhost:8000/api/data/service",{
                method:"GET",
            });
            if(response.ok){
                const data= await response.json();
                console.log(data.message);
                setServices(data.message);
            }
            
        } catch (error) {
            console.log("services error ", error);
        }    
    }
    useEffect(()=>{
        getServices();
    userAuthentication();
    },[])
    return<AuthContext.Provider value={{storeTokenInLS, LogoutUser, isLoggedIn, userdata, services}}>{children}</AuthContext.Provider>
}
export const useAuth=()=>{
    return useContext(AuthContext)
}