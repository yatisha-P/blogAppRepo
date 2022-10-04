import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from "axios";

export default function Register() {
  const [username,setUsername]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [error,setError]= useState(false);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false); 
    try{

      const res = await axios.post("http://localhost:5000/api/auth/register",{
        username,
        email,
        password,
      });
      alert("register succesfully")
      res.data && window.location.replace("/login");
    }catch(error){
      setError(true);  
    }
    
  };

  return (
    <div className='register'>
    <span className="registerTitle">Register</span>
    <form className='registerForm' onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder='Enter Your Username' className='registerInput'
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        />
        <label>Email</label>
        <input type="text" placeholder='Enter Your Email' className='registerInput'
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
        />
        <label>Password</label>
        <input type="password" placeholder='Enter Your password' className='registerInput' 
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
        />
        <button className="registerButton" type='submit'>Register</button>
    </form>
    <button className="registerLoginButton">
    <Link to="/login" className='link'>Login</Link>
    </button>
    {error && <span style={{color: "red", marginTop: "10px"}}>something went wrong !</span>}
</div>
  )
}
