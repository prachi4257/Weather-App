import React from 'react'
import "../App.css";
import { useState } from "react";

import { Link } from 'react-router-dom';
export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = (e) =>{
        e.preventDefault();
        const savedUser = JSON.parse(localStorage.getItem("user"));

        if(savedUser && savedUser.email === email &&  savedUser.password === password){
            alert("Login Successful!");
            setEmail("")
            setPassword("")
        }else{
            alert("Invalid Email or Password");
        }
    }
  return (
    <div className='container'>
      <div className='card'>
        <h2>Login Page</h2>
        <form action="" onSubmit={handleLogin}>
            <input type="email" value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
        <p>Don't have an account? 
            <Link to="/signup">Signup Here</Link> 
            </p>
      </div>
    </div>
  )
}
