import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
   <>
   <Header/>
    <Outlet/>
   <Footer/>
   </> 
  )
}

export default layout