import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Cards from './components/Cards'
import './App.css'
import Navbar from './components/Navbar'
import { Typography } from '@mui/material'
import Tables1 from './components/Tables1'
import Home1 from './components/Home1'
import Addnew from './components/Addnew'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>
      
      <Routes>
       
        <Route path="/c"element={<Cards/>}/>
        <Route path="/t"element={<Tables1/>}/>
        <Route path="/"element={<Home1/>}/>
        <Route path="/new"element={<Addnew/>}/>

      </Routes>
      
    </>
  )
}

export default App
