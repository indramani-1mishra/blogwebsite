import React from 'react'
import besinessmanoftheyear from "../../assets/images/businessman-of-the-year.webp";
import tedx from "../../assets/images/businessman-of-the-year.webp";
import iit from "../../assets/images/IIT.webp";

export default function Eventgallry() {
  const events = [
    {
      id: 1,
      image: besinessmanoftheyear,
      title: "Businessman of the Year"
    },
    {
      id: 2,
      image: tedx,
      title: "TEDx"
    },
    {
      id: 3,
      image: iit,
      title: "IIT Kharagpur"
    }
  ];

  return (
    <div className='w-full bg-[#0a0f1a] py-16'>
      <div className='container mx-auto px-6 md:px-12'>
        
        
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-2'>
            Events Gallery
          </h2>
          <div className='w-20 h-1 bg-[#1e6fd9] mx-auto'></div>
        </div>

       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto'>
          {events.map((event) => (
            <div 
              key={event.id}
              className='group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
            >
              
              <div className='relative h-80 overflow-hidden'>
                <img 
                  src={event.image} 
                  alt={event.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                
                {/* Overlay on hover */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>

              {/* Event Title */}
              <div className='absolute bottom-0 left-0 right-0 p-6 bg-white transform translate-y-0 transition-transform duration-300'>
                <h3 className='text-2xl font-bold text-gray-900 text-center'>
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}