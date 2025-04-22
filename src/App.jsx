import { useState } from 'react'
import {Router, Routes, Route} from 'react-router-dom'
import Users from './pages/users'
import Contact from './pages/contact'
import Home from './pages/home'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/users" element={<Users/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
