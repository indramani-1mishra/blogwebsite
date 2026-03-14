import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ServiceDetail from '../component/servicedetail/ServiceDetail'
import Home from '../component/home/Home'

export default function Router() {
  return (
    <>
   <Routes>
    <Route path="/" element={<Home />} />
  {/** <Route path="/signup" element={<Signup />} /> */}
    {/** <Route path="/login" element={<Login />} /> */}
    <Route path="/service/:slug" element={<ServiceDetail />} />
   </Routes>
    </>
  )
}
