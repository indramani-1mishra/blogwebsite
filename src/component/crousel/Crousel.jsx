import React from 'react'

import { FaTrademark, FaBuilding, FaCertificate, FaLandmark, FaFileAlt, FaTasks, FaHeadset, FaUserTie } from 'react-icons/fa';

export default function Crousel() {
  return (
    <div className='relative w-full md:min-h-[500px] bg-gradient-to-br from-[#0a0f1a] via-[#0d1829] to-[#0a0f1a] flex items-center justify-center flex-col px-6 md:px-12 overflow-hidden py-16 md:py-20'>

      {/* Background diagonal stripes */}
      <div className='absolute inset-0 opacity-5 pointer-events-none'>
        <div className='absolute top-0 left-1/4 w-96 h-full bg-white transform -skew-x-12'></div>
        <div className='absolute top-0 left-1/2 w-96 h-full bg-white transform -skew-x-12'></div>
      </div>

      {/* Blue glow top-left */}
      <div className='absolute -top-40 -left-20 w-[500px] h-[500px] bg-[#1e6fd9] opacity-10 rounded-full blur-[100px] pointer-events-none'></div>
      {/* Green glow bottom-right */}
      <div className='absolute -bottom-40 -right-10 w-[400px] h-[400px] bg-[#4fc84a] opacity-10 rounded-full blur-[100px] pointer-events-none'></div>

      {/* ── CENTERED CONTENT ── */}
      <div className='relative z-10 flex flex-col items-center w-full max-w-4xl gap-10 md:gap-12 mx-auto'>

        {/* Heading */}
        <div className='text-center'>
          <h1 className='text-3xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-lg shadow-black'>
            Registration to Compliance Support
            <br />
            <span className='text-[#1e6fd9] mt-3 inline-block'>— We've Got You Covered!</span>
          </h1>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 lg:gap-x-32 gap-y-6 w-full justify-center mt-2'>

          {/* Left Column */}
          <div className='flex flex-col gap-6 w-full items-start sm:items-end'>
            {[
              { icon: <FaTrademark />, label: 'Trademark', color: 'bg-[#1e6fd9]' },
              { icon: <FaBuilding />, label: 'Company Registration', color: 'bg-[#1557b0]' },
              { icon: <FaCertificate />, label: 'ISO Certification', color: 'bg-[#1e6fd9]' },
              { icon: <FaLandmark />, label: 'Corporates', color: 'bg-[#1e6fd9]' },
            ].map(({ icon, label, color }) => (
              <div key={label} className='flex items-center gap-4 group cursor-pointer justify-start sm:flex-row-reverse sm:text-right'>
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center shadow-lg shadow-[#1e6fd9]/30 group-hover:scale-110 transition-transform duration-300`}>
                  <span className='text-white text-xl'>{icon}</span>
                </div>
                <span className='text-[#b8c4d0] text-lg lg:text-xl font-medium group-hover:text-white transition-colors duration-300'>{label}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className='flex flex-col gap-6 w-full items-start'>
            {[
              { icon: <FaFileAlt />, label: 'Licenses', color: 'bg-[#4fc84a]' },
              { icon: <FaTasks />, label: 'Tax & Compliance', color: 'bg-[#3aab35]' },
              { icon: <FaHeadset />, label: 'Consumer Dispute', color: 'bg-[#4fc84a]' },
              { icon: <FaUserTie />, label: 'Virtual CXO Services', color: 'bg-[#4fc84a]' },
            ].map(({ icon, label, color }) => (
              <div key={label} className='flex items-center gap-4 group cursor-pointer'>
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center shadow-lg shadow-[#4fc84a]/30 group-hover:scale-110 transition-transform duration-300`}>
                  <span className='text-white text-xl'>{icon}</span>
                </div>
                <span className='text-[#b8c4d0] text-lg lg:text-xl font-medium group-hover:text-white transition-colors duration-300'>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className='h-px w-2/3 max-w-lg bg-gradient-to-r from-transparent via-[#1e6fd9]/60 to-transparent mt-4 opacity-70'></div>

      </div>

      {/* Decorative chart bars behind (absolute) */}
      <div className='absolute bottom-0 right-10 flex items-end gap-2 opacity-15 select-none pointer-events-none' aria-hidden>
        {[60, 100, 80, 140, 110, 180].map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}px` }}
            className={`w-8 rounded-t-md ${i % 2 === 0 ? 'bg-[#1e6fd9]' : 'bg-[#4fc84a]'}`}
          />
        ))}
      </div>

    </div>
  )
}