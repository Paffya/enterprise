import React from 'react'
import { Routes, Route } from "react-router-dom"
import Homepage from './Homepage'
import Podcasts from './Podcasts'
import Event from './Event'
import Resources from './Resources'

const Mainroute = () => {
  return (
   <Routes>
    <Route path="/Homepage" element={<Homepage />}></Route>
    <Route path="/Podcasts" element={<Podcasts />}></Route>
    <Route path='/Event' element={<Event />}></Route>
    <Route path="/Resources" element={<Resources />}></Route>
    
    
   </Routes>
    )
}

export default Mainroute