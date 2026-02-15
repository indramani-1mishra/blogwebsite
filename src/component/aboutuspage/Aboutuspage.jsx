import React from 'react'
import aboutus from "../../assets/images/about-us.webp";

export default function Aboutuspage() {
  return (
    <div className='w-full bg-gray-50 py-16'>
      <div className='container mx-auto px-6 md:px-12 flex justify-center items-center'> 
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  w-[80%]'>
          
          {/* Left Content */}
          <div className='flex flex-col gap-6'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
              About Us
            </h2>
            
            <div className='flex flex-col gap-2 text-gray-700 text-base text-gray-600 leading-relaxed'>
              <p>
                Online Legal India is a subsidiary of FastInfo Legal Services Pvt. Ltd., registered under the Companies Act, 2013.
              </p>
              
              <p>
                With the facility of a proficient team of professionals, we provide a wide variety of services. We provide top-notch solutions for individuals, business owners, company proprietors, corporate bodies, and others for their registration and related issues they face in their everyday lives.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className='flex items-center justify-center'>
            <div className='relative w-full max-w-md'>
              {/* Background circle decoration */}
              <div className='absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-30 blur-3xl'></div>
              
              <img 
                src={aboutus} 
                alt="About Us - Professional Services" 
                className='relative z-10 w-full h-auto object-contain drop-shadow-lg'
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}