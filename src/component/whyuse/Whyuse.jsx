import React from 'react'
import { FaAward, FaSmile, FaCertificate, FaShieldAlt, FaUserTie, FaClock, FaBolt, FaHeadset, FaRupeeSign } from 'react-icons/fa';

export default function Whyuse() {
  const features = [

    { id: 4, icon: <FaShieldAlt className='text-3xl' />, title: "Data Security & Trust" },
    { id: 5, icon: <FaUserTie className='text-3xl' />, title: "Trained & Professional Experts" },

    { id: 7, icon: <FaBolt className='text-3xl' />, title: "Super Fast Service" },
    { id: 1, icon: <FaAward className='text-3xl' />, title: "Recognized by Govt. of India" },
    { id: 2, icon: <FaSmile className='text-3xl' />, title: "1 Lakh+ Happy Customers Across India" },
    { id: 3, icon: <FaCertificate className='text-3xl' />, title: "ISO Certified" },
    { id: 8, icon: <FaHeadset className='text-3xl' />, title: "Quick Response Team" },
    { id: 9, icon: <FaRupeeSign className='text-3xl' />, title: "Affordable" },
    { id: 6, icon: <FaClock className='text-3xl' />, title: "On Time Service" },
  ];

  return (
    <div className='w-full bg-[#0d1829] py-16 relative overflow-hidden'>

      {/* Background glows */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-[#1e6fd9] opacity-5 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-[#4fc84a] opacity-5 rounded-full blur-3xl pointer-events-none'></div>

      <div className='container mx-auto px-6 md:px-12 relative z-10'>

        {/* Section Heading */}
        <div className='text-center mb-14'>
          <div className='inline-flex items-center gap-2 bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 rounded-full px-4 py-1 mb-4'>
            <div className='w-2 h-2 bg-[#4fc84a] rounded-full animate-pulse'></div>
            <span className='text-[#b8c4d0] text-xs font-semibold tracking-widest uppercase'>Our Advantage</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Why <span className='text-[#1e6fd9]'>Us?</span>
          </h2>
          <div className='w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-[#1e6fd9] to-[#4fc84a]'></div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className='relative flex items-center group'
            >
              <div className='relative w-full h-20 flex items-center'>

                {/* Blue Diamond Icon */}
                <div className='absolute left-2 z-10 w-16 h-16 bg-[#1e6fd9] transform rotate-45 shadow-lg shadow-[#1e6fd9]/30 flex items-center justify-center group-hover:bg-[#4fc84a] group-hover:shadow-[#4fc84a]/30 transition-all duration-300'>
                  <div className='transform -rotate-45 text-white'>
                    {feature.icon}
                  </div>
                </div>

                {/* Arrow body */}
                <div className='flex items-center w-full h-16 pl-12'>

                  {/* Left notch */}
                  <div className='w-0 h-0
                    border-t-[32px] border-t-transparent
                    border-r-[20px] border-r-[#0a0f1a]
                    border-b-[32px] border-b-transparent
                    flex-shrink-0'>
                  </div>

                  {/* Main body */}
                  <div className='flex-1 h-full bg-[#0a0f1a] border-y border-[#1e6fd9]/20 flex items-center justify-center px-4
                                  group-hover:bg-[#1e6fd9]/10 group-hover:border-[#1e6fd9]/40 transition-all duration-300'>
                    <h3 className='text-[#b8c4d0] font-bold text-sm text-center leading-tight group-hover:text-white transition-colors'>
                      {feature.title}
                    </h3>
                  </div>

                  {/* Right arrow point */}
                  <div className='w-0 h-0
                    border-t-[32px] border-t-transparent
                    border-l-[28px] border-l-[#0a0f1a]
                    border-b-[32px] border-b-transparent
                    flex-shrink-0
                    group-hover:border-l-[#1e6fd9]/10 transition-all duration-300'>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}