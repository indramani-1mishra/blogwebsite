import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.jpg";

export default function Upperheader() {
  return (
    <div className='w-full bg-[#1a2332] text-white py-2 px-4 md:px-6'>
      <div className='max-w-7xl mx-auto flex flex-row justify-between items-center gap-3 md:gap-4'>
        
        {/* Left Section - Logo and Contact Info */}
        <div className='flex items-center gap-3 md:gap-6'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <img src={logo} alt="Online Legal India" className='w-10 h-10 md:w-12 md:h-12 rounded-full object-cover' /> 
          </div>
          
          {/* Phone */}
          <div className='flex items-center gap-2'>
            <IoCallOutline className='text-xl md:text-2xl flex-shrink-0' />
            <a href="tel:+918069029400" className='text-xs md:text-sm hover:text-gray-300 transition-colors whitespace-nowrap'>
              08069029400
            </a>
          </div>
          
          {/* Email - Hidden on mobile */}
          <div className='hidden md:flex items-center gap-2'>
            <MdOutlineEmail className='text-xl md:text-2xl flex-shrink-0' />
            <a href="mailto:info@onlinelegalindia.com" className='text-xs md:text-sm hover:text-gray-300 transition-colors whitespace-nowrap'>
              info@onlinelegalindia.com
            </a>
          </div>
        </div>
        
        {/* Right Section - Login/Register */}
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <span className='text-gray-300'>Already registered?</span>
          <Link 
            to="/login" 
            className='text-white hover:text-gray-300 transition-colors font-medium underline'
          >
            Login now
          </Link>
        </div>
        
      </div>
    </div>
  )
}