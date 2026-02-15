import React from 'react'
import bigcorprate from "../../assets/images/big-corporate-services-image.webp";
import componyreg from "../../assets/images/company-registration.webp";
import corporatelogo from "../../assets/images/big-corporate-services-image.webp";
import gst from "../../assets/images/GST-registration.webp";
import fssai from "../../assets/images/fssai-registration.webp";
import importexport from "../../assets/images/import-export-code.webp";
import trademark from "../../assets/images/trademark-registration.webp";
import virtualcxoservice from "../../assets/images/virtual-cxo-service-all-service.webp";
import isoregistration from "../../assets/images/virtual-cxo-service-all-service.webp";

export default function Ourservice() {
  const services = [
    {
      id: 1,
      image: trademark,
      title: "Trademark Registration Online",
      description: "Register your trademark (brand name, logo, slogan, icon, etc.) from anywhere in India through our online registration assistance services.",
      link: "#"
    },
    {
      id: 2,
      image: isoregistration,
      title: "ISO Registration",
      description: "Get your ISO Certification support from anywhere in India and enhance your business credibility with globally recognized standards.",
      link: "#"
    },
    {
      id: 3,
      image: gst,
      title: "GST Registration Services",
      description: "Online Legal India supports you to meet GST compliance for your business.",
      link: "#"
    },
    {
      id: 4,
      image: componyreg,
      title: "Company Registration",
      description: "We have professionals to support everything online on the ROC portal and relieve you of any burden. Click to learn.",
      link: "#"
    },
    {
      id: 5,
      image: importexport,
      title: "Import Export Code",
      description: "Get your Import Export Code registration and start your international trade business with our expert assistance.",
      link: "#"
    },
    {
      id: 6,
      image: bigcorprate,
      title: "Corporate Services",
      description: "Comprehensive corporate compliance and legal services for your business growth and success.",
      link: "#"
    },
    {
      id: 7,
      image: fssai,
      title: "FSSAI Registration",
      description: "Get your food business legally registered with FSSAI certification and ensure compliance with food safety standards.",
      link: "#"
    },
    {
      id: 8,
      image: virtualcxoservice,
      title: "Online Dispute Resolution",
      description: "Resolve your legal disputes online with our expert legal professionals and get quick solutions.",
      link: "#"
    }
  ];

  return (
    <div className='w-full bg-white py-16'>
      <div className='container mx-auto px-6 md:px-12'>
        
        {/* Section Heading */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-2'>
            Our Services 
          </h2>
          <div className='w-20 h-1 bg-green-500 mx-auto'></div>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:w-[90%] md:m-auto'>
          {services.map((service) => (
            <div 
              key={service.id}
              className='group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
            >
              {/* Service Image */}
              <div className='relative h-56 overflow-hidden'>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                />
              </div>

              {/* Service Content */}
              <div className='p-6 flex flex-col gap-3'>
                <h3 className='text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors'>
                  {service.title}
                </h3>
                
                <p className='text-gray-600 text-sm leading-relaxed line-clamp-3'>
                  {service.description}
                </p>

                {/* Click Here Link */}
                <a 
                  href={service.link}
                  className='inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:gap-3 transition-all mt-2'
                >
                  Click Here
                  <svg 
                    className='w-4 h-4' 
                    fill='none' 
                    stroke='currentColor' 
                    viewBox='0 0 24 24'
                  >
                    <path 
                      strokeLinecap='round' 
                      strokeLinejoin='round' 
                      strokeWidth={2} 
                      d='M9 5l7 7-7 7' 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}