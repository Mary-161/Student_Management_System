import axios from 'axios'
import React,{ useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditUser = () => {
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
    },[])

    function updateHandler(){
        axios.put(`http://localhost:8080/std/edituser/${id}`,{
            name:name,
            username:username,
            password:password,
            mobileno:mobileno,
            age:age
        })
        .then(()=>navigate('/home'))
    }
  return (
    <div>
        <form>
            <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">Enter your name</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="enter your name : " value={name} onChange={(e)=>setname(e.target.value)}></input>
            </div>
            <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">Enter your username</label>
               <input type="password" class="form-control" id="exampleInputPassword1" placeholder="enter your username : " value={username} onChange={(e)=>setusername(e.target.value)}></input>
            </div >
              
            <div>
               <label for="exampleInputPassword1" class="form-label">Enter your password</label>
               <input type="password" class="form-control" id="exampleInputPassword1" placeholder="enter your password: " value={password} onChange={(e)=>setpassword(e.target.value)}></input>
            </div>
            <div>
                <label for="exampleInputPassword1" class="form-label">Enter your mobileno</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="enter your mobileno : " value={mobileno} onChange={(e)=>setmobileno(e.target.value)}></input>

            </div>
            
            <div>
                <label for="exampleInputPassword1" class="form-label">Enter your age</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="enter your age : " value={age} onChange={(e)=>setage(e.target.value)}></input>
            </div>

            <div>
                <button type="button" className="btn btn-outline-danger btn-lg " style={{width:400}} onClick={()=>updateHandler()}>Edit User</button>
                <button type="button" className="btn btn-outline-danger btn-lg " style={{width:400}} onClick={()=>navigate('/home')}>Back To Home</button>
            </div>

        </form>
    </div>
  )
}
