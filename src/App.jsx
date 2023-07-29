import './App.css'
import React, { useState } from 'react'
import { createContext } from 'react'
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
import Vcs from './Pages/Vcs'
import Tslevel from './Pages/Tslevel'
import Threes from './Pages/Threes'
export const loggedIn=createContext()
function App() {
 
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <loggedIn.Provider value={[isLoggedIn,setIsLoggedIn]}>
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
      <Route path='/VcSpeech' element={<Vcs/>}></Route>
      <Route path='/200level' element={<Tslevel/>}></Route>
      <Route path='/300level' element={<Threes/>}></Route>
    </Routes>
      {/* <Index/> */}
    </>
    </loggedIn.Provider>
  )
}

export default App
