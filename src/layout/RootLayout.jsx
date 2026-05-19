import React from 'react'
import Navber from '../common/Navber'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
    <Navber/>
    <Outlet/>
    </>
  )
}

export default RootLayout