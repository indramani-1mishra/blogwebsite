import React, { useContext, useState } from 'react'
import componyname from '../../assets/images/componyname.svg'
import { Link } from 'react-router-dom'
import { AiFillCaretDown } from "react-icons/ai";
import { CgMoreVerticalAlt } from "react-icons/cg";
import ShareContext from '../../context/shareContext';
import CompanyRegistrationDropdown from '../dropdown/DropDown';

export default function Header() {
  const [change,setchange]= useState(false);
  const {isOpen,setIsOpen}= useContext(ShareContext);
  
  return (
    <div className='w-full flex flex-row justify-between items-center bg-[#FFF0A8] text-gray-900 px-6 py-2.5 '>
    
      <div className='flex '>
       <img 
        src={componyname}
        alt="Online Legal India"
        className='h-10 object-contain '
       /> 
      </div>
      
      
      <div className='flex flex-row items-center gap-2'>
       {!change ?
        <nav className='hidden lg:flex flex-row items-center gap-0'>
            <Link to="#" className='flex items-center gap-1 px-3 py-2 text-[15px] font-medium border-r-2 border-red-600 hover:text-orange-600 transition-colors'>
                <span>Trademark</span>
                <AiFillCaretDown className='text-xs mt-0.5'/>
            </Link>
            
            <Link to="#" className='flex items-center gap-1 px-3 py-2 text-[15px] font-medium border-r-2 border-red-600 hover:text-orange-600 transition-colors'>
                <span
                onMouseEnter={()=>setIsOpen(true)}
                onMouseLeave={()=>setIsOpen(false)}
                 >Company Registration</span>
                 {isOpen && <CompanyRegistrationDropdown/>}
                <AiFillCaretDown className='text-xs mt-0.5'/>
            </Link>
           
            <Link to="#" className='px-3 py-2 text-[15px] font-medium border-r-2 border-red-600 hover:text-orange-600 transition-colors'>
                ISO
            </Link>
            
            <Link to="#" className='flex items-center gap-1 px-3 py-2 text-[15px] font-medium border-r-2 border-red-600 hover:text-orange-600 transition-colors'>
                <span>Licenses</span>
                <AiFillCaretDown className='text-xs mt-0.5'/>
            </Link>
            
            <Link to="#" className='flex items-center gap-1 px-3 py-2 text-[15px] font-medium border-r-2 border-red-600 hover:text-orange-600 transition-colors'>
                <span>Tax & Compliance</span>
                <AiFillCaretDown className='text-xs mt-0.5'/>
            </Link>
            
            <Link to="#" className='px-3 py-2 text-[15px] font-medium border-r-2 border-red-600 hover:text-orange-600 transition-colors'>
                Consumer Dispute
            </Link>
            
            <Link to="#" className='px-3 py-2 text-[15px] font-medium border-r-2 border-red-600 hover:text-orange-600 transition-colors'>
                Legal Dispute
            </Link>
            
            <Link to="#" className='px-3 py-2 text-[15px] font-medium border-r-2 border-red-600 hover:text-orange-600 transition-colors'>
                CXO
            </Link>
            
            <Link to="#" className='px-3 py-2 text-[15px] font-medium border-r-2 border-red-600 hover:text-orange-600 transition-colors'>
                All Services
            </Link>
        </nav>:<>
          <nav className='hidden lg:flex flex-row items-center gap-3 captilize '>
          <Link  to="#">home</Link>
          <Link  to="#">careers </Link>
          <Link  to="#">Contact</Link>
          <Link  to="#">blogs</Link>
         
          </nav>

        </>}
        
        
        <button className='w-9 h-9 flex items-center justify-center bg-white rounded transition-colors ml-1 cursor-pointer '>
            <CgMoreVerticalAlt className='text-2xl text-gray-700' onClick={()=>setchange(!change)}/>
        </button>
      </div>
    </div>
  )
}