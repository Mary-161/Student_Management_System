import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
  let navigate=useNavigate()
  let [searchname, setsearchname]=useState("")
  function searchHandeler(e){
    e.preventDefault();
    let param = new URLSearchParams({searchname:searchname})
    navigate(`/home?${param.toString()}`)

  }

  let role = localStorage.getItem("role");

  return (
    <div>
        <nav className="navbar navbar-light bg-light">
           <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <form className="d-flex" >
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setsearchname(e.target.value)}></input>
                    <button className="btn btn-outline-secondary" type="submit" onClick={(e)=>searchHandeler(e)}>Search</button>
                </form>
                {role==="ADMIN" && <button type="button" className="btn btn-outline-success" onClick={()=>navigate('/add')}>Add User</button>}
            </div>
        </nav>
    </div>
  )
}
