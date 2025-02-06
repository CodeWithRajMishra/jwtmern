import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Home=()=>{
     const navigate=useNavigate();   
    const userAuth=async()=>{
        const token= localStorage.getItem("token");  
       if(token)
        {   
       let api="http://localhost:8000/user/userauth";
       const tokenRes= await axios.post(api, null, {headers: { "auth-token": token } });
       localStorage.setItem("username", tokenRes.data.name);
       localStorage.setItem("useremail", tokenRes.data.email);
        navigate("/dashboard");
        }
    }
    useEffect(()=>{
        userAuth();
    }, [])

   return(
        <>
         <h1> Welcome To Home Page JWT Login System</h1>
        </>
    )
}

export default Home;