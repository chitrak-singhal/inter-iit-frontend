import { useState } from 'react'
import './index.css'
// import './App.css'
import {Routes,Route, Router} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Forgot from './pages/Forgot'
import UpdatePassword from './pages/UpdatePassword'
import ChangePassword from './pages/ChangePassword'
function App() {

  return (
    <div className='App font-opensans'>
      <Routes>
        <Route index path="/" element={<HomePage />}/>
        <Route index path="/login" element={<LoginPage />}/>
        <Route index path="/signup" element={<SignUpPage />}/>
        <Route index path="/forgot" element={<Forgot />}/>
        <Route index path="/updatepassword" element={<UpdatePassword />}/>
        <Route index path="/changepassword" element={<ChangePassword />}/>
      </Routes>
    </div>
  )
}

export default App
