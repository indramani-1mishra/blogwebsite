import React, { useContext } from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import { FaBriefcase, FaClipboardCheck } from 'react-icons/fa';
import ShareContext from '../../context/shareContext';

export default function CompanyRegistrationDropdown() {
 
  const {isOpen,setIsOpen}= useContext(ShareContext);
  const dropdownData = {
    incorporation: [
      "Private Limited Company",
      "LLP Registration",
      "One Person Company",
      "Public Limited Company",
      "Section 8 Company",
      "Business Registration License",
      "Nidhi Company Registration",
      "Indian Subsidiary Registration"
    ],
    compliance: [
      "Director DIN e KYC Update",
      "Appointment of Director",
      "Removal of Director",
      "Pvt. Ltd. Winding up",
      "LLP Winding Up",
      "Increase Authorized Capital",
      "Registered Office Change",
      "Change Company Name",
      "MOA Amendment of Pvt. Ltd.",
      "MOA Amendment of Public Limited",
      "MOA Amendment of Section 8",
      "Share Transfer",
      "JanSamarth Registration",
      "Credit Management Analysis"
    ],
    conversion: [
      "OPC to PVT. Conversion",
      "PVT. to Public Ltd Conversion",
      "LLP to PVT Conversion",
      "Sec-8 Winding Up",
      "Nidhi Winding Up",
      "Indian Subsidiary Windup"
    ]
  };

  return (
    <div className='relative inline-block'>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-900 hover:text-green-600 transition-colors'
      >
        <span>Company Registration</span>
        <AiFillCaretDown className={`text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className='absolute top-full left-0 mt-2 w-[850px] bg-white rounded-lg shadow-2xl border border-gray-200 z-50 p-8'>
          <div className='grid grid-cols-3 gap-8'>
            
            {/* Incorporation Column */}
            <div>
              <div className='flex items-center gap-2 mb-4 pb-2 border-b-2 border-green-600'>
                <div className='w-8 h-8 bg-green-600 rounded flex items-center justify-center'>
                  <FaBriefcase className='text-white text-sm' />
                </div>
                <h3 className='text-base font-bold text-gray-900'>Incorporation</h3>
              </div>
              <ul className='space-y-2'>
                {dropdownData.incorporation.map((item, index) => (
                  <li key={index}>
                    <a 
                      href='#' 
                      className='block text-sm text-gray-700 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition-colors'
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance Column */}
            <div>
              <div className='flex items-center gap-2 mb-4 pb-2 border-b-2 border-green-600'>
                <div className='w-8 h-8 bg-green-600 rounded flex items-center justify-center'>
                  <FaClipboardCheck className='text-white text-sm' />
                </div>
                <h3 className='text-base font-bold text-gray-900'>Compliance</h3>
              </div>
              <ul className='space-y-2'>
                {dropdownData.compliance.map((item, index) => (
                  <li key={index}>
                    <a 
                      href='#' 
                      className='block text-sm text-gray-700 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition-colors'
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conversion Column */}
            <div>
              <div className='flex items-center gap-2 mb-4 pb-2 border-b-2 border-green-600'>
                <div className='w-8 h-8 bg-green-600 rounded flex items-center justify-center'>
                  <FaBriefcase className='text-white text-sm' />
                </div>
                <h3 className='text-base font-bold text-gray-900'>Conversion</h3>
              </div>
              <ul className='space-y-2'>
                {dropdownData.conversion.map((item, index) => (
                  <li key={index}>
                    <a 
                      href='#' 
                      className='block text-sm text-gray-700 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition-colors'
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Decorative Bottom Illustration */}
          <div className='absolute bottom-0 right-0 w-32 h-32 opacity-20'>
            <svg viewBox="0 0 100 100" className='w-full h-full'>
              <circle cx="50" cy="50" r="40" fill="#f97316" opacity="0.3"/>
            </svg>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className='fixed inset-0 z-40' 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  )
}