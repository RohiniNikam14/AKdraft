//import React from 'react'
import Landing from './pages/Landing'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App