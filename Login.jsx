import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    let navigate = useNavigate()
    let [username, setusername]=useState("")
    let [password, setpassword]=useState("")

    async function handleLogin(){
        let response = await axios.post('http://localhost:8080/auth/login',{
            username:username,
            password:password
        })
        let user = response.data;

        if(user){
            localStorage.setItem("isLoggedIn","true");
            localStorage.setItem("role",user.role)
             
            navigate('/home')
        }
        else{
            alert("Invalid Login");
        }
    }

  return (
    <div>
        <label>UserName : </label>
        <input type='text' onChange={(e)=>setusername(e.target.value)}></input>
         <label>Password : </label>
        <input type='text' onChange={(e)=>setpassword(e.target.value)}></input>
        <button type='button' onClick={()=>handleLogin()}>Login</button>
    </div>
  )
}

