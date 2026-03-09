
import React, {useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AddUser = () => {

  let navigate = useNavigate()

  let [name,setname]=useState("")
  let [username,setusername]=useState("")
  let [password,setpassword]=useState("")
  let [mobileno,setmobileno]=useState("")
  let [age,setage]=useState("")

  function addHandeler(){
    axios.post('http://localhost:8080/std/adduser',{
      name:name,
      username:username,
      passwor:password,
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
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="enter your name : " onChange={(e)=>setname(e.target.value)} ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Enter your username</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="enter your username : " onChange={(e)=>setusername(e.target.value)}></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Enter your password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="enter your password : " onChange={(e)=>setpassword(e.target.value)}></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Enter your mobileno</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="enter your mobileno : " onChange={(e)=>setmobileno(e.target.value)}></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Enter your age </label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="enter your age : " onChange={(e)=>setage(e.target.value)}></input>
        </div>
        <div>
           <button type="button" className="btn btn-outline-success btn-lg" style={{width:400}} onClick={()=>addHandeler()}>Submit</button>
           <button type="button" className="btn btn-outline-danger btn-lg" style={{width:400}} onClick={()=>navigate('/home')}>Back to home</button>
        </div>

      </form>
    </div>
  )
}

