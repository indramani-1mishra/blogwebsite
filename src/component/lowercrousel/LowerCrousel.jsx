import React from 'react'
import paytm from "../../assets/images/paytm.webp";
import google from "../../assets/images/google.webp";
import metalogo from "../../assets/images/meta-logo.webp";
import tatalogo from "../../assets/images/tata-home-logo.webp";
import truecallerhomelogo from "../../assets/images/truecaller-home-logo.webp";

export default function LowerCrousel() {
  const logos = [
    { src: paytm, alt: "Paytm" },
    { src: google, alt: "Google" },
    { src: metalogo, alt: "Meta" },
    { src: tatalogo, alt: "Tata" },
    { src: truecallerhomelogo, alt: "Truecaller" },
  ];

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .logos-container:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      <div className='w-full flex items-center flex-col uppercase bg-gray-200 pt-8'>
        <p className='text-xl font-bold text-gray-800'>we are</p>
        <h2 className='text-xl font-bold text-gray-800'>associated with :</h2>
      </div>

      <div className='bg-gray-200 py-8'>
        <div className='container mx-auto px-4 md:w-[70%]'>
          <div className='logos-container overflow-hidden relative'>
            <div className='flex gap-12 animate-scroll'>
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div key={index} className='flex-shrink-0'>
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-16 w-32 object-contain bg-white p-4 rounded shadow-md border border-gray-300 cursor-pointer" 
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`duplicate-${index}`} className='flex-shrink-0'>
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-16 w-32 object-contain bg-white p-4 rounded shadow-md border border-gray-300 cursor-pointer" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}