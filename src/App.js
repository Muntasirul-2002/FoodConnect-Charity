import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Causes from './pages/Causes'
import Navbar from './components/Navbar'
import Signup from './pages/auth/Signup'
import Footer from './components/Footer'
import Foods from './pages/Foods'
import AdminLogin from './pages/auth/AdminLogin'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='admin-login' element={<AdminLogin/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/causes' element={<Causes/>}/>
        <Route path='/foods' element={<Foods/>} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App