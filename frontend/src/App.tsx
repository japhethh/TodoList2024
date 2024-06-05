import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginForm from './pages/LoginForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

type Props = {}

const App = (props: Props) => {
  const url: string = "http://localhost:4000";

  
  return (
    <div>
      <ToastContainer />

      <div className='bg-[#272343] text-white '>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<LoginForm url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App