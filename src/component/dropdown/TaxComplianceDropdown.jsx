import React, { useContext } from 'react'
import { FaFileInvoiceDollar, FaCalendarCheck, FaPeopleArrows } from 'react-icons/fa';
import ShareContext from '../../context/shareContext';
import { Link } from 'react-router-dom';

export default function TaxComplianceDropdown() {

  const { activeDropdown, setActiveDropdown } = useContext(ShareContext);

  const dropdownData = {
    gst: [
      "GST Registration",
      "GST Return Filing",
      "GST Nil Return Filing",
      "GST Modification",
      "GSTR-9 Annual Filing",
      "GST LUT Filing",
      "GST E-Way Bill"
    ],
    annual: [
      "Annual Compliance & Filing",
      "Annual Compliance & Bookkeeping",
      "Tax Planning & Consultancy",
      "Tax & Compliance",
      "Online Bookkeeping",
      "12A-80G-CSR",
      "Project Report",
      "DPT-3 Filing",
      "NGO DARPAN Registration"
    ],
    payroll: [
      "PF-ESIC Registration",
      "PF-ESIC Return Filing"
    ]
  };

  const columns = [
    { key: 'gst', label: 'GST', icon: <FaFileInvoiceDollar />, accent: '#4fc84a' },
    { key: 'annual', label: 'Annual Compliances & Others', icon: <FaCalendarCheck />, accent: '#4fc84a' },
    { key: 'payroll', label: 'Payroll Compliance', icon: <FaPeopleArrows />, accent: '#4fc84a' },
  ];

  return (
    <div className='relative inline-block'>

      {/* Dropdown Menu */}
      {activeDropdown === 'tax' && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 z-40'
            onClick={() => setActiveDropdown(null)}
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
                      const slug = item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                      return (
                        <li key={index}>
                          <Link
                            to={`/info/tax-compliance/${slug}`}
                            onClick={() => setActiveDropdown(null)}
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

              {/* Decorative bg chart bars */}
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
