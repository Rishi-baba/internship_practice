// import React from 'react'

import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu"
import Landing from './pages/Landing';

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menu/:id" element={<Menu />} />
      </Routes>
             
    </>

    
  )
}

export default App