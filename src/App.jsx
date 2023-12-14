import React,{ useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import ResetPassword from './pages/auth/ResetPassword'
import AdminSignUp from './pages/auth/AdminSignUp'
import Dashboard from './pages/dashboard/Dashboard'
import Books from './pages/books/Books'
import AddBooks from './pages/books/AddBooks'
import EditBooks from './pages/books/EditBooks'
import Clients from './pages/clients/Clients'
import History from './pages/history/History'
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

function App() {
 

  return (
    <>
 <Routes>
  <Route path='/' element={<Login/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/reset-password' element={<ResetPassword/>}></Route>
  <Route path='/admin-signup' element={<AdminSignUp/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
  <Route path='/books' element={<Books/>}></Route>
  <Route path='/add-book' element={<AddBooks/>}></Route>
  <Route path='/edit-book' element={<EditBooks/>}></Route>
  <Route path='/history' element={<History/>}></Route>
  <Route path='/clients' element={<Clients/>}></Route>
 
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
