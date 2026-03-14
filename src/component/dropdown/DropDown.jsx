import React, { useContext } from 'react'
import { FaBriefcase, FaClipboardCheck, FaExchangeAlt } from 'react-icons/fa';
import ShareContext from '../../context/shareContext';
import { Link } from 'react-router-dom';

export default function CompanyRegistrationDropdown() {

  const { isOpen, setIsOpen } = useContext(ShareContext);

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

  const columns = [
    { key: 'incorporation', label: 'Incorporation', icon: <FaBriefcase />,      accent: '#1e6fd9' },
    { key: 'compliance',    label: 'Compliance',    icon: <FaClipboardCheck />, accent: '#4fc84a' },
    { key: 'conversion',    label: 'Conversion',    icon: <FaExchangeAlt />,    accent: '#1e6fd9' },
  ];

  return (
    <div className='relative inline-block'>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 z-40'
            onClick={() => setIsOpen(false)}
          />

          <div className='absolute top-full left-0 mt-2 w-[860px] z-50
                          bg-[#0d1829] border border-[#1e6fd9]/20
                          rounded-xl shadow-2xl shadow-black/50
                          overflow-hidden'>

            {/* Top accent bar */}
            <div className='h-1 w-full bg-gradient-to-r from-[#1e6fd9] via-[#4fc84a] to-[#1e6fd9]' />

            <div className='p-8 grid grid-cols-3 gap-8 relative'>

              {columns.map(({ key, label, icon, accent }) => (
                <div key={key}>

                  {/* Column header */}
                  <div className='flex items-center gap-3 mb-5 pb-3'
                       style={{ borderBottom: `1px solid ${accent}40` }}>
                    <div
                      className='w-8 h-8 rounded flex items-center justify-center text-white text-sm flex-shrink-0'
                      style={{ background: accent }}
                    >
                      {icon}
                    </div>
                    <h3 className='text-sm font-bold text-white tracking-wide uppercase'>
                      {label}
                    </h3>
                  </div>

                  {/* Items */}
                  <ul className='space-y-0.5'>
                    {dropdownData[key].map((item, index) => {
                      // Generate slug from item name (e.g., "Private Limited Company" -> "private-limited-company")
                      const slug = item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                      return (
                        <li key={index}>
                          <Link
                            to={`/registration/${key}/${slug}`}
                            onClick={() => setIsOpen(false)}
                            className='flex items-center gap-2 text-sm text-[#7a8fa0]
                                      hover:text-white hover:bg-[#1e6fd9]/10
                                      px-3 py-2 rounded-lg transition-all group'
                          >
                            <span
                              className='w-1 h-1 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity'
                              style={{ background: accent }}
                            />
                            {item}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}

              {/* Decorative bg chart bars — VectraTax feel */}
              <div className='absolute bottom-4 right-6 flex items-end gap-1 opacity-5 pointer-events-none select-none'>
                {[30, 50, 40, 70, 55, 90].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}px` }}
                    className={`w-4 rounded-t ${i % 2 === 0 ? 'bg-[#1e6fd9]' : 'bg-[#4fc84a]'}`}
                  />
                ))}
              </div>
            </div>

            {/* Footer strip */}
            <div className='px-8 py-3 bg-[#0a0f1a] border-t border-[#1e6fd9]/10 flex items-center justify-between'>
              <span className='text-[#7a8fa0] text-xs'>
                Need help choosing? &nbsp;
                <a href='#' className='text-[#1e6fd9] hover:text-[#4fc84a] font-semibold transition-colors'>
                  Talk to an expert →
                </a>
              </span>
              <span className='text-[#7a8fa0] text-xs'>VectraTax Pro Company</span>
            </div>

          </div>
        </>
      )}
    </div>
  )
}