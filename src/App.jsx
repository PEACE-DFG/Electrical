import './App.css'
import React from 'react'
import Index from './Pages/Index'
import './all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {Route,Routes} from 'react-router-dom'
import Homes from './Pages/Homes'
import Lecturers from './Pages/lecturers'
import Schoolcalender from './Pages/Schoolcalender'
import Courses from './Pages/Courses'
import Registers from './Pages/Registers'
import Logins from './Pages/Logins'
import Abouts from './Pages/Abouts'

function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Index/>}> </Route>
      <Route path='/Home' element={<Homes/>}></Route>
      <Route path='/Lecturers' element={<Lecturers/>}></Route>
      <Route path='/SchoolCalender' element={<Schoolcalender/>}></Route>
      <Route path='/Courses' element={<Courses/>}></Route>
      <Route path='/Registers' element={<Registers/>}></Route>
      <Route path='/Logins' element={<Logins/>}></Route>
      <Route path='/Abouts' element={<Abouts/>}></Route>
    </Routes>
      {/* <Index/> */}
    </>
  )
}

export default App
