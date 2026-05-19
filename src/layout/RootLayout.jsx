import React from 'react'
import Navber from '../common/Navber'
import { Outlet } from 'react-router'
import  Footer  from '../common/Footer'

const RootLayout = () => {
  return (
    <>
    <Navber/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout