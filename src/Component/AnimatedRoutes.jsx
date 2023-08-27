import React from 'react'
import Homes from '../Pages/Homes'
import { Route, Routes,useLocation } from 'react-router-dom'
import Lecturers from '../Pages/Lecturers'
import Schoolcalender from '../Pages/Schoolcalender'
import Courses from '../Pages/Courses'
import Registers from '../Pages/Registers'
import Logins from '../Pages/Logins'
import Abouts from '../Pages/Abouts'
import Vcs from '../Pages/Vcs'
import Tslevel from '../Pages/Tslevel'
import Threes from '../Pages/Threes'
import Index from '../Pages/Index'
import {AnimatePresence} from 'framer-motion'
import Flevels from '../Pages/Flevels'
function AnimatedRoutes() {
    const location=useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Index/>}> </Route>
      <Route path='/Home' element={<Homes/>}></Route>
      <Route path='/Lecturers' element={<Lecturers/>}></Route>
      <Route path='/SchoolCalender' element={<Schoolcalender/>}></Route>
      <Route path='/Courses' element={<Courses/>}></Route>
      <Route path='/Registers' element={<Registers/>}></Route>
      <Route path='/Logins' element={<Logins/>}></Route>
      <Route path='/Abouts' element={<Abouts/>}></Route>
      <Route path='/VcSpeech' element={<Vcs/>}></Route>
      <Route path='/200level' element={<Tslevel/>}></Route>
      <Route path='/300level' element={<Threes/>}></Route>
      <Route path='/400level' element={<Flevels/>}></Route>
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes