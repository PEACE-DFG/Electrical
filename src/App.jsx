import './App.css'
import React, { useState } from 'react'
import { createContext } from 'react'
import './all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import AnimatedRoutes from './Component/Animatedroutes'
// import AnimatedRoutes from './Component/AnimatedRoutes'
export const loggedIn=createContext()
function App() {
 
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <loggedIn.Provider value={[isLoggedIn,setIsLoggedIn]}>
    <>
   
      {/* <AnimatedRoutes/> */}
      <AnimatedRoutes/>
   
    </>
    </loggedIn.Provider>
  )
}

export default App
