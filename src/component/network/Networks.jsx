import React from 'react'
import rajesh from "../../assets/images/rajeshkewat.webp";  
import zeenews from "../../assets/images/zeenews.webp";
import oxford from "../../assets/images/oxford.webp";
import Tedx from "../../assets/images/Ted-x.webp";
import Asiaone from "../../assets/images/Ted-x.webp";
import midday9999 from "../../assets/images/midday9999.webp";
import footerforbase from "../../assets/images/footer-forbes-logo.webp";

export default function Networks() {
  const mediaFeatures = [
    {
      id: 1,
      logo: zeenews,
      title: "Meet Rajesh Kewat, The Small Town Entrepreneur Behind Online Legal India's Success"
    },
    {
      id: 2,
      logo: Tedx,
      title: "From Rs. 2000 Salary to Multi-Crore Turnover Company | Rajesh Kewat | TEDxPradhikaran."
    },
    {
      id: 3,
      logo: footerforbase,
      title: "Mr. Rajesh Kewat getting featured in the special edition of Forbes India Magazine - Showstoppers 2022-23"
    },
    {
      id: 4,
      logo: Asiaone,
      title: "Rajesh Kewat, the MD of FastInfo Legal Services Pvt Ltd, owns a movie-like story; a man who lost everything for his love & attained great success within just 500 days with his innovative business."
    },
    {
      id: 5,
      logo: midday9999,
      title: "Rajesh Kewat Conferred with Businessman of the Year Award at Brands Impact NFA 2022."
    }
  ];

  const pastExperiences = [
    { id: 1, logo: oxford, alt: "Oxford" },
    { id: 2, logo: footerforbase, alt: "Pearson" },
    { id: 3, logo: footerforbase, alt: "Educomp" }
  ];

  return (
    <div className='w-full bg-gray-200 py-16'>
      <div className='container mx-auto px-6 md:px-12'>
        
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          
          {/* Left Column - Rajesh Kewat Profile */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-lg shadow-lg overflow-hidden sticky top-8'>
              {/* Profile Image */}
              <div className='h-80 overflow-hidden'>
                <img 
                  src={rajesh} 
                  alt="Rajesh Kewat"
                  className='w-full h-full object-cover'
                />
              </div>
              
              {/* Profile Info */}
              <div className='p-6 text-center'>
                <h2 className='text-3xl font-bold text-gray-900 mb-3'>
                  Rajesh Kewat
                </h2>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  The Founder & CEO of Online Legal India, Mr. Rajesh Kewat actually had the courage to sacrifice his well paid job at Oxford and turn his startup into a multi crore turnover company.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Media Features & Past Experiences */}
          <div className='lg:col-span-2 flex flex-col gap-8'>
            
            {/* Media Features Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {mediaFeatures.map((feature) => (
                <div 
                  key={feature.id}
                  className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center gap-4'
                >
                  {/* Media Logo */}
                  <div className='h-16 flex items-center justify-center'>
                    <img 
                      src={feature.logo} 
                      alt="Media Logo"
                      className='max-h-12 object-contain'
                    />
                  </div>
                  
                  {/* Feature Title */}
                  <p className='text-gray-700 text-sm leading-relaxed'>
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Past Experiences Section */}
            <div className='bg-white rounded-lg shadow-md p-8'>
              <h3 className='text-2xl font-bold text-gray-900 text-center mb-6'>
                Past Experiences
              </h3>
              
              <div className='flex items-center justify-center gap-8 flex-wrap'>
                {pastExperiences.map((exp) => (
                  <div 
                    key={exp.id}
                    className='h-16 flex items-center justify-center'
                  >
                    <img 
                      src={exp.logo} 
                      alt={exp.alt}
                      className='max-h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300'
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* CEO's Desk Quote Section */}
        <div className='mt-16 bg-white rounded-lg shadow-lg p-8 md:p-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8'>
            From CEO's Desk
          </h2>
          
          <div className='max-w-4xl mx-auto'>
            <blockquote className='relative'>
              <p className='text-gray-700 text-lg md:text-xl text-center leading-relaxed italic'>
                'You don't need MONEY to build your business empire, what you need is big dreams & a SHARP MIND! If you got it, try it.'
              </p>
              
              <div className='mt-6 text-right'>
                <p className='text-gray-900 font-bold text-lg'>
                  - Rajesh Kewat
                </p>
              </div>
            </blockquote>
          </div>
        </div>

      </div>
    </div>
  )
} 