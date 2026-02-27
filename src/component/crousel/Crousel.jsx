import React from 'react'
import gogalrating from "../../assets/images/gogalrating.webp";
import { FaTrademark, FaBuilding, FaCertificate, FaLandmark, FaFileAlt, FaTasks, FaHeadset, FaUserTie } from 'react-icons/fa';

export default function Crousel() {
  return (
    <div className='relative w-full md:h-[500px] bg-gradient-to-br from-[#0a0f1a] via-[#0d1829] to-[#0a0f1a] flex items-center justify-between md:flex-row px-12 flex-col overflow-hidden'>

      {/* Background diagonal stripes */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 left-1/4 w-96 h-full bg-white transform -skew-x-12'></div>
        <div className='absolute top-0 left-1/2 w-96 h-full bg-white transform -skew-x-12'></div>
      </div>

      {/* Blue glow top-left */}
      <div className='absolute -top-20 -left-20 w-96 h-96 bg-[#1e6fd9] opacity-10 rounded-full blur-3xl pointer-events-none'></div>
      {/* Green glow bottom-right */}
      <div className='absolute -bottom-20 right-10 w-72 h-72 bg-[#4fc84a] opacity-10 rounded-full blur-3xl pointer-events-none'></div>

      {/* ── LEFT CONTENT ── */}
      <div className='relative z-10 flex flex-col gap-8 max-w-2xl py-10 md:py-0'>

        {/* Heading */}
        <div>
          {/* Top badge */}
          <div className='inline-flex items-center gap-2 bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 rounded-full px-4 py-1 mb-4'>
            <div className='w-2 h-2 bg-[#4fc84a] rounded-full animate-pulse'></div>
            <span className='text-[#b8c4d0] text-xs font-semibold tracking-widest uppercase'>Trusted by 10,000+ Businesses</span>
          </div>

          <h1 className='text-2xl md:text-3xl font-bold text-white leading-tight'>
            Registration to Compliance Support
            <br/>
            <span className='text-[#1e6fd9]'>—We've Got You Covered!</span>
          </h1>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-2 gap-x-10 gap-y-4'>

          {/* Left Column */}
          <div className='flex flex-col gap-4'>
            {[
              { icon: <FaTrademark />, label: 'Trademark',           color: 'bg-[#1e6fd9]' },
              { icon: <FaBuilding />,  label: 'Company Registration', color: 'bg-[#1557b0]' },
              { icon: <FaCertificate />, label: 'ISO Certification', color: 'bg-[#1e6fd9]' },
              { icon: <FaLandmark />,  label: 'Corporates',          color: 'bg-[#1e6fd9]' },
            ].map(({ icon, label, color }) => (
              <div key={label} className='flex items-center gap-3 group cursor-pointer'>
                <div className={`w-8 h-8 ${color} rounded flex items-center justify-center shadow-lg shadow-[#1e6fd9]/20 group-hover:scale-110 transition-transform`}>
                  <span className='text-white text-sm'>{icon}</span>
                </div>
                <span className='text-[#b8c4d0] text-base font-medium group-hover:text-white transition-colors'>{label}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className='flex flex-col gap-4'>
            {[
              { icon: <FaFileAlt />,  label: 'Licenses',             color: 'bg-[#4fc84a]' },
              { icon: <FaTasks />,    label: 'Tax & Compliance',     color: 'bg-[#3aab35]' },
              { icon: <FaHeadset />,  label: 'Consumer Dispute',     color: 'bg-[#4fc84a]' },
              { icon: <FaUserTie />,  label: 'Virtual CXO Services', color: 'bg-[#4fc84a]' },
            ].map(({ icon, label, color }) => (
              <div key={label} className='flex items-center gap-3 group cursor-pointer'>
                <div className={`w-8 h-8 ${color} rounded flex items-center justify-center shadow-lg shadow-[#4fc84a]/20 group-hover:scale-110 transition-transform`}>
                  <span className='text-white text-sm'>{icon}</span>
                </div>
                <span className='text-[#b8c4d0] text-base font-medium group-hover:text-white transition-colors'>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className='h-px w-full bg-gradient-to-r from-[#1e6fd9]/50 via-[#4fc84a]/30 to-transparent'></div>

        {/* Google Rating */}
        <div className='w-fit'>
          <img
            src={gogalrating}
            alt="Google Rating"
            className='h-12 object-contain'
          />
        </div>
      </div>

      {/* ── RIGHT — placeholder for image ── */}
      <div className='relative z-10 flex items-end justify-end h-full'>
        {/* Decorative chart bars (VectraTax logo feel) */}
        <div className='hidden md:flex items-end gap-2 mb-0 opacity-20 select-none' aria-hidden>
          {[60, 100, 80, 140, 110, 180].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}px` }}
              className={`w-6 rounded-t ${i % 2 === 0 ? 'bg-[#1e6fd9]' : 'bg-[#4fc84a]'}`}
            />
          ))}
        </div>
      </div>

    </div>
  )
}