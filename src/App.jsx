import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout'
import Home from './pages/home/Home'
import About_banner from './pages/about/About_banner'


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index element={<Home />}></Route>
    <Route path='/About_banner' element={<About_banner/>}></Route>
   


  </Route>
))


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
