import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';

export const HomePage = () => {

  let [userdata, setuserdata]=useState([])
  let navigate=useNavigate()
  let location=useLocation()
  let param = new URLSearchParams(location.search)
  let name = param.get('searchname')

  useEffect(()=>{
    if(name && name!==""){
        axios.get(`http://localhost:8080/std/readByName/${name}`)
    .then((resp)=>setuserdata(resp.data))
    }
    else{
        axios.get(`http://localhost:8080/std/read`)
    .then((resp)=>setuserdata(resp.data))
    }
  },[name])

  function deleteHandeler(id){
    axios.delete(`http://localhost:8080/std/deleteuser/${id}`)
    .then(()=>window.location.reload())
  }

  let role = localStorage.getItem("role");
  return (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Password</th>
                    <th scope="col">MobileNo</th>
                    <th scope="col">Age</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
               {userdata.map((value,index)=>{
                    return <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.username}</td>
                        <td>{value.password}</td>
                        <td>{value.mobileno}</td>
                        <td>{value.age}</td>
                        <td className="d-flex justify-content-evenly">
                            <button type="button" className="btn btn-primary" onClick={()=>navigate(`/view/${value.id}`)}>View User</button>
                            {role==="ADMIN" &&  <button type="button" className="btn btn-warning" onClick={()=>navigate(`/edit/${value.id}`)}>Edit User</button>}
                            {role==="ADMIN" &&  <button type="button" className="btn btn-danger" onlick={()=>deleteHandeler(value.id)}>Delete</button>}
                            
                        </td>
                        
                    </tr>

                })}
            </tbody>
        </table>
    </div>
  )
}
