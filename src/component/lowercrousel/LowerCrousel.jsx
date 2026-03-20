import React, { useState, useEffect } from 'react';
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";

export default function LowerCrousel() {
  const banners = [
    { 
      id: 1, 
      src: banner1, 
      alt: "Tax and Compliance Banner",
      title: "Tax & Compliance Consulting",
      desc: "Streamlined financial strategies and corporate diligence."
    },
    { 
      id: 2, 
      src: banner2, 
      alt: "Business Registration Banner",
      title: "Business Registration",
      desc: "Fast, reliable, and secure corporate legal services."
    },
    { 
      id: 3, 
      src: banner3, 
      alt: "Intellectual Property Banner",
      title: "Intellectual Property & Licensing",
      desc: "Protecting your trademark and brand assets globally."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
    }, 4500); // Slide every 4.5 seconds
    
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className='w-full bg-[#0a0f1a] pt-12 pb-16 relative overflow-hidden'>
      {/* Decorative background gradients */}
      <div className='absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1e6fd9]/10 rounded-full blur-[120px] pointer-events-none'></div>
      <div className='absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#4fc84a]/5 rounded-full blur-[100px] pointer-events-none'></div>

      <div className='container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10'>
          
        <div className='text-center mb-10'>
          <h2 className='text-3xl md:text-5xl font-extrabold text-white mb-3'>
            Empowering Your Business Vision
          </h2>
          <p className='text-[#7a8fa0] text-lg font-medium'>
            VectraTax Pro | Expert Registration, Tax & Legal Compliance
          </p>
        </div>

        <div className='relative w-full h-[350px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-800/50 group'>
          
          <div 
            className='flex h-full w-full transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {banners.map((banner) => (
              <div key={banner.id} className='w-full h-full flex-shrink-0 relative'>
                 <img 
                    src={banner.src} 
                    alt={banner.alt} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s] ease-out" 
                  />
                  {/* Outer gradient layer for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent"></div>
                  
                  {/* Banner Content overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                    <div className={`transition-all duration-1000 delay-300 transform ${currentIndex + 1 === banner.id ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                        {banner.title}
                      </h3>
                      <p className="text-[#b8c4d0] md:text-xl font-light mb-6 max-w-2xl drop-shadow">
                        {banner.desc}
                      </p>
                      <button className="px-6 py-3 bg-[#1e6fd9] hover:bg-[#1557b0] text-white font-semibold rounded-lg shadow-lg shadow-[#1e6fd9]/30 transition-all transform hover:-translate-y-1">
                        Explore Service
                      </button>
                    </div>
                  </div>
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button 
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1))}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-[#1e6fd9] text-white rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto"
            aria-label="Previous slide"
          >
            &#8592;
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={() => setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1))}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-[#1e6fd9] text-white rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto"
            aria-label="Next slide"
          >
            &#8594;
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-500 shadow-sm ${
                  currentIndex === index ? 'bg-[#1e6fd9] w-8' : 'bg-white/50 hover:bg-white w-2.5'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}