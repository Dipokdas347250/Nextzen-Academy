import React from 'react'
import Navber from '../common/Navber'
import { Outlet } from 'react-router'
import  Footer  from '../common/Footer'

const RootLayout = () => {
  return (
    <>
   <div className=" overflow-hidden">
     <Navber/>
    <Outlet/>
    <Footer/>
   </div>
    </>
  )
}

export default RootLayout