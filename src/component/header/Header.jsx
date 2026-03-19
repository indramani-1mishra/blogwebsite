import React, { useContext, useState, useEffect } from 'react'
import componyname from '../../assets/images/componyname.png'
import { Link, useLocation } from 'react-router-dom'
import { AiFillCaretDown } from "react-icons/ai";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import ShareContext from '../../context/shareContext';
import CompanyRegistrationDropdown from '../dropdown/DropDown';
import TrademarkDropdown from '../dropdown/TrademarkDropdown';
import LicensesDropdown from '../dropdown/LicensesDropdown';
import TaxComplianceDropdown from '../dropdown/TaxComplianceDropdown';

export default function Header() {
  const [change, setchange] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const { activeDropdown, setActiveDropdown } = useContext(ShareContext);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleAccordion = (key) => {
    setMobileAccordion(prev => prev === key ? null : key);
  };

  /* ── Shared data for mobile nav items ── */
  const primaryLinks = [
    { name: 'Trademark', path: '/info/trademark', dropdown: 'trademark' },
    { name: 'Company Registration', path: '/info/company-registration', dropdown: 'company' },
    { name: 'ISO', path: '/info/iso' },
    { name: 'Licenses', path: '/info/licenses', dropdown: 'licenses' },
    { name: 'Tax & Compliance', path: '/info/tax-compliance', dropdown: 'tax' },
    { name: 'Consumer Dispute', path: '/info/consumer-dispute' },
    { name: 'Legal Dispute', path: '/info/legal-dispute' },
    { name: 'CXO', path: '/info/cxo' },
  ];

  const secondaryLinks = [
    { name: 'Home', path: '/' },
    { name: 'Careers', path: '/info/careers' },
    { name: 'Contact', path: '/info/contact' },
    { name: 'Blogs', path: '/info/blogs' },
  ];

  /* ── Mobile dropdown data (flat link lists for each category) ── */
  const mobileDropdownData = {
    trademark: {
      basePath: '/info/trademark',
      sections: [
        {
          label: 'Trademark',
          items: [
            "Trademark Registration", "Trademark Renewal", "Trademark Objection",
            "Trademark Opposition", "Trademark Assignment", "Logo Design", "Series Trademark"
          ]
        },
        {
          label: 'Copyright',
          items: ["Copyright Registration"]
        }
      ]
    },
    company: {
      basePath: '/registration',
      sections: [
        {
          label: 'Incorporation',
          key: 'incorporation',
          items: [
            "Private Limited Company", "LLP Registration", "One Person Company",
            "Public Limited Company", "Section 8 Company", "Business Registration License",
            "Nidhi Company Registration", "Indian Subsidiary Registration"
          ]
        },
        {
          label: 'Compliance',
          key: 'compliance',
          items: [
            "Director DIN e KYC Update", "Appointment of Director", "Removal of Director",
            "Pvt. Ltd. Winding up", "LLP Winding Up", "Increase Authorized Capital",
            "Registered Office Change", "Change Company Name"
          ]
        },
        {
          label: 'Conversion',
          key: 'conversion',
          items: [
            "OPC to PVT. Conversion", "PVT. to Public Ltd Conversion",
            "LLP to PVT Conversion", "Sec-8 Winding Up", "Nidhi Winding Up",
            "Indian Subsidiary Windup"
          ]
        }
      ]
    },
    licenses: {
      basePath: '/info/licenses',
      sections: [
        {
          label: 'Registrations',
          items: [
            "FSSAI Registration", "FSSAI Renewal", "FSSAI Modification",
            "Import Export Code", "Import Export Code Modification"
          ]
        },
        {
          label: 'Filings & Certificates',
          items: ["FSSAI Annual Return Filing", "BIS Certificate"]
        }
      ]
    },
    tax: {
      basePath: '/info/tax-compliance',
      sections: [
        {
          label: 'GST',
          items: [
            "GST Registration", "GST Return Filing", "GST Nil Return Filing",
            "GST Modification", "GSTR-9 Annual Filing", "GST LUT Filing", "GST E-Way Bill"
          ]
        },
        {
          label: 'Annual Compliances & Others',
          items: [
            "Annual Compliance & Filing", "Annual Compliance & Bookkeeping",
            "Tax Planning & Consultancy", "Tax & Compliance", "Online Bookkeeping",
            "12A-80G-CSR", "Project Report", "DPT-3 Filing", "NGO DARPAN Registration"
          ]
        },
        {
          label: 'Payroll Compliance',
          items: ["PF-ESIC Registration", "PF-ESIC Return Filing"]
        }
      ]
    }
  };

  const makeSlug = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  const getMobileLink = (dropdownKey, section, item) => {
    const slug = makeSlug(item);
    if (dropdownKey === 'company') {
      return `/registration/${section.key}/${slug}`;
    }
    return `${mobileDropdownData[dropdownKey].basePath}/${slug}`;
  };

  return (
    <>
      <div className='w-full flex flex-row justify-between items-center bg-[#0a0f1a] border-b border-[#1e6fd9]/20 text-white px-4 sm:px-6 py-2.5 shadow-lg shadow-black/30 relative z-50'>

        {/* Logo */}
        <div className='flex'>
          <img
            src={componyname}
            alt="VectraTax Pro Company"
            className='h-10 sm:h-14 object-contain w-auto'
          />
        </div>

        {/* Desktop Nav + Toggle */}
        <div className='hidden lg:flex flex-row items-center gap-2'>

          {!change ? (
            /* ── Primary Nav (Desktop) ── */
            <nav className='flex flex-row items-center gap-0'>

              <div
                className='relative'
                onMouseEnter={() => setActiveDropdown('trademark')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to="/info/trademark" className='flex items-center gap-1 px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'>
                  <span>Trademark</span>
                  <AiFillCaretDown className='text-xs mt-0.5' />
                </Link>

                {activeDropdown === 'trademark' && (
                  <div className='absolute top-full left-0 z-50'>
                    <TrademarkDropdown />
                  </div>
                )}
              </div>

              {/* Company Registration with Dropdown */}
              <div
                className='relative'
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/info/company-registration"
                  className='flex items-center gap-1 px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'
                >
                  <span>Company Registration</span>
                  <AiFillCaretDown className='text-xs mt-0.5' />
                </Link>

                {activeDropdown === 'company' && (
                  <div className='absolute top-full left-0 z-50'>
                    <CompanyRegistrationDropdown />
                  </div>
                )}
              </div>

              <Link to="/info/iso" className='px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'>
                ISO
              </Link>

              <div
                className='relative'
                onMouseEnter={() => setActiveDropdown('licenses')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to="/info/licenses" className='flex items-center gap-1 px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'>
                  <span>Licenses</span>
                  <AiFillCaretDown className='text-xs mt-0.5' />
                </Link>

                {activeDropdown === 'licenses' && (
                  <div className='absolute top-full left-0 z-50'>
                    <LicensesDropdown />
                  </div>
                )}
              </div>

              <div
                className='relative'
                onMouseEnter={() => setActiveDropdown('tax')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to="/info/tax-compliance" className='flex items-center gap-1 px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'>
                  <span>Tax & Compliance</span>
                  <AiFillCaretDown className='text-xs mt-0.5' />
                </Link>

                {activeDropdown === 'tax' && (
                  <div className='absolute top-full left-0 z-50'>
                    <TaxComplianceDropdown />
                  </div>
                )}
              </div>

              <Link to="/info/consumer-dispute" className='px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'>
                Consumer Dispute
              </Link>

              <Link to="/info/legal-dispute" className='px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'>
                Legal Dispute
              </Link>

              <Link to="/info/cxo" className='px-3 py-2 text-[14px] font-medium text-[#b8c4d0] border-r border-[#1e6fd9]/30 hover:text-[#1e6fd9] transition-colors'>
                CXO
              </Link>

              {/* All Services */}
              <Link to="#" className='ml-2 px-4 py-1.5 text-[13px] font-bold text-white bg-[#1e6fd9] hover:bg-[#1557b0] rounded transition-colors tracking-wide'>
                All Services
              </Link>

            </nav>
          ) : (
            /* ── Secondary Nav (Desktop) ── */
            <nav className='flex flex-row items-center gap-6 capitalize'>
              {secondaryLinks.map((item) => (
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

          {/* Desktop Toggle button */}
          <button
            className='w-9 h-9 flex items-center justify-center bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 rounded hover:bg-[#1e6fd9]/20 transition-colors ml-2 cursor-pointer'
            onClick={() => setchange(!change)}
          >
            <CgMoreVerticalAlt className='text-xl text-[#b8c4d0]' />
          </button>

        </div>

        {/* ── Mobile Hamburger Button ── */}
        <button
          className='lg:hidden w-10 h-10 flex items-center justify-center bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 rounded-lg hover:bg-[#1e6fd9]/20 transition-all duration-300 cursor-pointer'
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <IoCloseSharp className='text-2xl text-white' />
          ) : (
            <HiOutlineMenuAlt3 className='text-2xl text-[#b8c4d0]' />
          )}
        </button>
      </div>

      {/* ══════════════════════════════════════════════════
          MOBILE DRAWER OVERLAY + PANEL
         ══════════════════════════════════════════════════ */}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-gradient-to-b from-[#0a0f1a] to-[#0d1526] z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col shadow-2xl shadow-black/50`}
      >
        {/* Panel Header */}
        <div className='flex items-center justify-between px-5 py-4 border-b border-[#1e6fd9]/20'>
          <img src={componyname} alt="Logo" className='h-9 object-contain' />
          <button
            onClick={() => setMobileOpen(false)}
            className='w-9 h-9 flex items-center justify-center rounded-lg bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-200 cursor-pointer'
            aria-label='Close menu'
          >
            <IoCloseSharp className='text-xl text-white' />
          </button>
        </div>

        {/* Scrollable Nav */}
        <div className='flex-1 overflow-y-auto py-3 px-4' style={{ scrollbarWidth: 'thin', scrollbarColor: '#1e6fd9 transparent' }}>

          {/* ── Primary Links ── */}
          <p className='text-[11px] font-semibold text-[#1e6fd9] uppercase tracking-[0.15em] mb-2 px-2'>Services</p>

          {primaryLinks.map((item) => (
            <div key={item.name} className='mb-0.5'>
              {item.dropdown ? (
                <>
                  {/* Accordion trigger */}
                  <button
                    onClick={() => toggleAccordion(item.dropdown)}
                    className='w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[14px] font-medium text-[#b8c4d0] hover:bg-[#1e6fd9]/10 hover:text-white transition-all duration-200 cursor-pointer'
                  >
                    <span>{item.name}</span>
                    <AiFillCaretDown
                      className={`text-xs text-[#1e6fd9] transition-transform duration-300 ${mobileAccordion === item.dropdown ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Accordion panel — mobile-friendly inline links */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileAccordion === item.dropdown ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className='py-2 mb-1 bg-[#0e1a2e] rounded-lg border border-[#1e6fd9]/10'>

                      {/* "View All" link */}
                      <Link
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className='flex items-center gap-2 mx-2 px-3 py-2 text-[13px] font-semibold text-[#1e6fd9] hover:text-white hover:bg-[#1e6fd9]/10 rounded-md transition-colors'
                      >
                        <span className='w-1.5 h-1.5 rounded-full bg-[#1e6fd9]' />
                        View All {item.name} →
                      </Link>

                      {/* Render each section from mobileDropdownData */}
                      {mobileDropdownData[item.dropdown]?.sections.map((section, sIdx) => (
                        <div key={sIdx} className='mt-2'>
                          {/* Section label */}
                          <p className='px-5 py-1 text-[10px] font-bold text-[#4fc84a] uppercase tracking-[0.12em]'>
                            {section.label}
                          </p>
                          {/* Section items */}
                          {section.items.map((subItem, iIdx) => (
                            <Link
                              key={iIdx}
                              to={getMobileLink(item.dropdown, section, subItem)}
                              onClick={() => setMobileOpen(false)}
                              className='flex items-center gap-2 mx-2 px-3 py-1.5 text-[13px] text-[#7a8fa0] hover:text-white hover:bg-[#1e6fd9]/10 rounded-md transition-all'
                            >
                              <span className='w-1 h-1 rounded-full bg-[#1e6fd9]/40 flex-shrink-0' />
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className='block px-3 py-2.5 rounded-lg text-[14px] font-medium text-[#b8c4d0] hover:bg-[#1e6fd9]/10 hover:text-white transition-all duration-200'
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {/* Divider */}
          <div className='my-3 border-t border-[#1e6fd9]/15' />

          {/* ── Secondary Links ── */}
          <p className='text-[11px] font-semibold text-[#1e6fd9] uppercase tracking-[0.15em] mb-2 px-2'>Quick Links</p>

          {secondaryLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className='block px-3 py-2.5 rounded-lg text-[14px] font-medium text-[#b8c4d0] hover:bg-[#1e6fd9]/10 hover:text-white transition-all duration-200'
            >
              {item.name}
            </Link>
          ))}

          {/* All Services CTA */}
          <div className='mt-4 px-2'>
            <Link
              to="#"
              onClick={() => setMobileOpen(false)}
              className='block w-full text-center px-4 py-2.5 text-[14px] font-bold text-white bg-[#1e6fd9] hover:bg-[#1557b0] rounded-lg transition-colors tracking-wide shadow-lg shadow-[#1e6fd9]/20'
            >
              All Services
            </Link>
          </div>
        </div>

        {/* Panel Footer */}
        <div className='px-5 py-4 border-t border-[#1e6fd9]/20 text-center'>
          <p className='text-[11px] text-[#5a6a80]'>© 2026 All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}