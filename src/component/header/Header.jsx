import React, { useContext, useState } from 'react'
import componyname from '../../assets/images/componyname.png'
import { Link } from 'react-router-dom'
import { AiFillCaretDown } from "react-icons/ai";
import { CgMoreVerticalAlt } from "react-icons/cg";
import ShareContext from '../../context/shareContext';
import CompanyRegistrationDropdown from '../dropdown/DropDown';

export default function Header() {
  const [change, setchange] = useState(false);
  const { isOpen, setIsOpen } = useContext(ShareContext);

  return (
    <div className='w-full flex flex-row justify-between items-center bg-[#0a0f1a] border-b border-[#1e6fd9]/20 text-white px-6 py-2.5 shadow-lg shadow-black/30'>

      {/* Logo */}
      <div className='flex'>
        <img
          src={componyname}
          alt="VectraTax Pro Company"
          className='h-14 object-contain w-auto'
        />
      </div>

      {/* Nav + Toggle */}
      <div className='flex flex-row items-center gap-2'>

        {!change ? (
          /* ── Primary Nav ── */
          <nav className='hidden lg:flex flex-row items-center gap-0'>

            <Link to="/info/trademark" className='flex items-center gap-1 px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'>
              <span>Trademark</span>
              <AiFillCaretDown className='text-xs mt-0.5' />
            </Link>

            {/* Company Registration with Dropdown */}
            <div
              className='relative'
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <Link
                to="/info/company-registration"
                className='flex items-center gap-1 px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'
              >
                <span>Company Registration</span>
                <AiFillCaretDown className='text-xs mt-0.5' />
              </Link>

              {isOpen && (
                <div className='absolute top-full left-0 z-50'>
                  <CompanyRegistrationDropdown />
                </div>
              )}
            </div>

            <Link to="/info/iso" className='px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'>
              ISO
            </Link>

            <Link to="/info/licenses" className='flex items-center gap-1 px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'>
              <span>Licenses</span>
              <AiFillCaretDown className='text-xs mt-0.5' />
            </Link>

            <Link to="/info/tax-compliance" className='flex items-center gap-1 px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'>
              <span>Tax & Compliance</span>
              <AiFillCaretDown className='text-xs mt-0.5' />
            </Link>

            <Link to="/info/consumer-dispute" className='px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'>
              Consumer Dispute
            </Link>

            <Link to="/info/legal-dispute" className='px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'>
              Legal Dispute
            </Link>

            <Link to="/info/cxo" className='px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'>
              CXO
            </Link>

            {/* All Services — green accent */}
            <Link to="#" className='ml-2 px-4 py-1.5 text-[13px] font-bold text-white bg-[#1e6fd9] hover:bg-[#1557b0] rounded transition-colors tracking-wide'>
              All Services
            </Link>

          </nav>
        ) : (
          /* ── Secondary Nav ── */
          <nav className='hidden lg:flex flex-row items-center gap-6 capitalize'>
            {[
              { name: 'Home', path: '/' },
              { name: 'Careers', path: '/info/careers' },
              { name: 'Contact', path: '/info/contact' },
              { name: 'Blogs', path: '/info/blogs' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className='text-[14px] font-medium text-[#b8c4d0] hover:text-[#4fc84a] transition-colors'
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        {/* Toggle button */}
        <button
          className='w-9 h-9 flex items-center justify-center bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 rounded hover:bg-[#1e6fd9]/20 transition-colors ml-2 cursor-pointer'
          onClick={() => setchange(!change)}
        >
          <CgMoreVerticalAlt className='text-xl text-[#b8c4d0]' />
        </button>

      </div>
    </div>
  )
}