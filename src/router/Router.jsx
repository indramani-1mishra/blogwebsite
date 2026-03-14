import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ServiceDetail from '../component/servicedetail/ServiceDetail'
import HeaderDetail from '../component/headerdetail/HeaderDetail'
import DropdownDetail from '../component/dropdowndetail/DropdownDetail'
import Home from '../component/home/Home'

export default function Router() {
  return (
    <>
   <Routes>
    <Route path="/" element={<Home />} />
  {/** <Route path="/signup" element={<Signup />} /> */}
    {/** <Route path="/login" element={<Login />} /> */}
    <Route path="/service/:slug" element={<ServiceDetail />} />
    <Route path="/service/:slug" element={<ServiceDetail />} />
    <Route path="/info/:slug" element={<HeaderDetail />} />
    <Route path="/registration/:category/:slug" element={<DropdownDetail />} />
   </Routes>
    </>
  )
}
