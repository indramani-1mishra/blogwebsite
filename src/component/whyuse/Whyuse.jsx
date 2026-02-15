import React from 'react'
import { FaAward, FaSmile, FaCertificate, FaShieldAlt, FaUserTie, FaClock, FaBolt, FaHeadset, FaRupeeSign } from 'react-icons/fa';

export default function Whyuse() {
  const features = [
    {
      id: 1,
      icon: <FaAward className='text-3xl' />,
      title: "Recognized by Govt. of India"
    },
    {
      id: 2,
      icon: <FaSmile className='text-3xl' />,
      title: "1 Lakh+ Happy Customers Across India"
    },
    {
      id: 3,
      icon: <FaCertificate className='text-3xl' />,
      title: "ISO Certified"
    },
    {
      id: 4,
      icon: <FaShieldAlt className='text-3xl' />,
      title: "Data Security & Trust"
    },
    {
      id: 5,
      icon: <FaUserTie className='text-3xl' />,
      title: "Trained & Professional Experts"
    },
    {
      id: 6,
      icon: <FaClock className='text-3xl' />,
      title: "On Time Service"
    },
    {
      id: 7,
      icon: <FaBolt className='text-3xl' />,
      title: "Super Fast Service"
    },
    {
      id: 8,
      icon: <FaHeadset className='text-3xl' />,
      title: "Quick Response Team"
    },
    {
      id: 9,
      icon: <FaRupeeSign className='text-3xl' />,
      title: "Affordable"
    }
  ];

  return (
    <div className='w-full bg-white py-16'>
      <div className='container mx-auto px-6 md:px-12'>
        
        {/* Section Heading */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-2'>
            Why Us?
          </h2>
          <div className='w-20 h-1 bg-green-600 mx-auto'></div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {features.map((feature) => (
            <div 
              key={feature.id}
              className='relative flex items-center'
            >
              {/* Arrow Badge */}
              <div className='relative w-full h-24 flex items-center'>
                
                {/* Orange Diamond Icon */}
                <div className='absolute left-2 z-10 w-20 h-20 bg-orange-600 transform rotate-45 shadow-lg flex items-center justify-center'>
                  <div className='transform -rotate-45 text-white'>
                    {feature.icon}
                  </div>
                </div>

                {/* Green Arrow Body */}
                <div className='flex items-center w-full h-20 pl-14'>
                  {/* Left angle cut */}
                  <div className='w-0 h-0 border-t-[40px] border-t-transparent border-r-[25px] border-r-green-600 border-b-[40px] border-b-transparent'></div>
                  
                  {/* Main body */}
                  <div className='flex-1 h-full bg-green-600 flex items-center justify-center px-6'>
                    <h3 className='text-white font-bold text-base text-center leading-tight'>
                      {feature.title}
                    </h3>
                  </div>
                  
                  {/* Right arrow point */}
                  <div className='w-0 h-0 border-t-[40px] border-t-transparent border-l-[40px] border-l-green-600 border-b-[40px] border-b-transparent'></div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}