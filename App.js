import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './component/HomePage'
import { AddUser } from './component/AddUser'
import { ViewUser } from './component/ViewUser'
import { EditUser } from './component/EditUser'
import { Login } from './component/Login'
import { NavBar } from './navbar/NavBar'



export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' Component={Login}></Route>
          <Route path='/home' Component={HomePage}></Route>
          <Route path='/add' Component={AddUser}></Route>
          <Route path='/view/:id' Component={ViewUser}></Route>
          <Route path='/edit/:id' Component={EditUser}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
