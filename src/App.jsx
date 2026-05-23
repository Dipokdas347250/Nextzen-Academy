import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Course from './pages/Courses/Course'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index element={<Home />}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/course' element={<Course/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/gallery' element={<Gallery/>}></Route>



  </Route>
))


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
