import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>

      <Route path="/AddBooking" element={<AddBooking/>}/>
      <Route path="/ViewBooking" element={<ViewBooking/>}/>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
