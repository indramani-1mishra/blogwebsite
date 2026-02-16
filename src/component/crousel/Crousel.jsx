import React from 'react'
//import manimage from "../../assets/images/manimage.webp";
import gogalrating from "../../assets/images/gogalrating.webp";
import { FaTrademark, FaBuilding, FaCertificate, FaLandmark, FaFileAlt, FaTasks, FaHeadset, FaUserTie } from 'react-icons/fa';

export default function Crousel() {
  return (
    <div className='relative w-full md:h-[500px] bg-gradient-to-br from-[#1a2332] via-[#2d4a5c] to-[#1a2332] flex items-center justify-between md:flex-row px-12 flex-col    '>
      
      
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-1/4 w-96 h-full bg-white transform -skew-x-12'></div>
        <div className='absolute top-0 left-1/2 w-96 h-full bg-white transform -skew-x-12'></div>
      </div>

      
      <div className='relative z-10 flex flex-col gap-8 max-w-2xl '>
        
        <div>
          <h1 className='text-2xl font-bold text-white leading-tight'>
            Registration to Compliance Support<br/>
            <span className='text-white'>—We've Got You Covered!</span>
          </h1>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-2 gap-x-16 gap-y-4 '>
          {/* Left Column */}
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-orange-500 rounded flex items-center justify-center'>
                <FaTrademark className='text-white text-lg' />
              </div>
              <span className='text-white text-lg font-medium'>Trademark</span>
            </div>

            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-orange-500 rounded flex items-center justify-center'>
                <FaBuilding className='text-white text-lg' />
              </div>
              <span className='text-white text-lg font-medium'>Company Registration</span>
            </div>

            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-orange-500 rounded flex items-center justify-center'>
                <FaCertificate className='text-white text-lg' />
              </div>
              <span className='text-white text-lg font-medium'>ISO Certification</span>
            </div>

            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-orange-500 rounded flex items-center justify-center'>
                <FaLandmark className='text-white text-lg' />
              </div>
              <span className='text-white text-lg font-medium'>Corporates</span>
            </div>
          </div>

          {/* Right Column */}
          <div className='flex flex-col gap-4 cursor-pointer'>
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-orange-500 rounded flex items-center justify-center'>
                <FaFileAlt className='text-white text-lg' />
              </div>
              <span className='text-white text-lg font-medium'>Licenses</span>
            </div>

            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-orange-500 rounded flex items-center justify-center'>
                <FaTasks className='text-white text-lg' />
              </div>
              <span className='text-white text-lg font-medium'>Tax & Compliance</span>
            </div>

            <div className='flex items-center gap-3  cursor-pointer'>
              <div className='w-8 h-8 bg-orange-500 rounded flex items-center justify-center'>
                <FaHeadset className='text-white text-lg' />
              </div>
              <span className='text-white text-lg font-medium'>Consumer Dispute</span>
            </div>

            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-orange-500 rounded flex items-center justify-center'>
                <FaUserTie className='text-white text-lg' />
              </div>
              <span className='text-white text-lg font-medium'>Virtual CXO Services</span>
            </div>
          </div>
        </div>

        {/* Google Rating Card */}
        <div className='w-fit'>
          <img 
            src={gogalrating} 
            alt="Google Rating" 
            className='h-15 object-contain'
          />
        </div>
      </div>

      {/* Right Image */}
      <div className='relative z-10 flex items-end justify-end h-full'>
        <div className='relative'>
          {/* Yellow accent circle 
          <div className='absolute -right-10  top-1/4 w-64 h-64 bg-yellow-300 rounded-full -z-10'></div>
          */}
          
          
         {/** <img 
            src={manimage} 
            alt="Professional" 
            className='h-[450px] object-contain'
          /> */}
        </div>
      </div>
    </div>
  )
}