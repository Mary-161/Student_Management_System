import axios from 'axios'
import React,{ useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const ViewUser = () => {
    let navigate=useNavigate()
    let {id} = useParams()
    let[name, setname]=useState()
    let[username, setusername]=useState()
    let[password, setpassword]=useState()
    let[mobileno, setmobileno]=useState()
    let[age, setage]=useState()
    useEffect(()=>{
        axios.get(`http://localhost:8080/std/readById/${id}`)
        .then((resp)=>{
            setname(resp.data.name)
            setusername(resp.data.username)
            setpassword(resp.data.password)
            setmobileno(resp.data.mobileno)
            setage(resp.data.age)
        })
    })
  return (

    <div>
        <center>
            <h1>Welcome To Our Page</h1>
        </center>
        <div className='details-container'>
            <p>The user id is<b>{id}</b></p>
            <p>The user name is<b>{name}</b></p>
            <p>The user name is<b>{username}</b></p>
            <p>The user name is<b>{password}</b></p>
            <p>The user name is<b>{mobileno}</b></p>
            <p>The user name is<b>{age}</b></p>
        </div>
        <div>
            <center>
                <button type="button" className="btn btn-outline-danger btn-lg" style={{width:400}} onClick={()=>navigate('/home')}>Back To Home</button>

            </center>
        </div>
    </div>
  )

}

