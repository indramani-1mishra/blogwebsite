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
    <div className='w-full bg-[#0a0f1a] py-16 relative overflow-hidden'>

      {/* Background glow accents */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-[#1e6fd9] opacity-5 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-[#4fc84a] opacity-5 rounded-full blur-3xl pointer-events-none'></div>

      <div className='container mx-auto px-6 md:px-12 relative z-10'>

        {/* Section Heading */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 rounded-full px-4 py-1 mb-4'>
            <div className='w-2 h-2 bg-[#4fc84a] rounded-full animate-pulse'></div>
            <span className='text-[#b8c4d0] text-xs font-semibold tracking-widest uppercase'>What We Offer</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Our <span className='text-[#1e6fd9]'>Services</span>
          </h2>
          {/* Blue-to-green gradient underline */}
          <div className='w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#1e6fd9] to-[#4fc84a]'></div>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:w-[90%] md:m-auto'>
          {services.map((service, index) => (
            <div
              key={service.id}
              className='group bg-[#0d1829] border border-[#1e6fd9]/15 rounded-xl overflow-hidden hover:border-[#1e6fd9]/50 hover:shadow-xl hover:shadow-[#1e6fd9]/10 transition-all duration-300 transform hover:-translate-y-2'
            >
              {/* Service Image */}
              <div className='relative h-48 overflow-hidden'>
                <img
                  src={service.image}
                  alt={service.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-80 group-hover:opacity-100'
                />
                {/* Overlay gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-[#0d1829] via-transparent to-transparent'></div>

                {/* Service number badge */}
                <div className='absolute top-3 right-3 w-7 h-7 rounded-full bg-[#1e6fd9]/80 flex items-center justify-center'>
                  <span className='text-white text-xs font-bold'>{index + 1}</span>
                </div>
              </div>

              {/* Service Content */}
              <div className='p-5 flex flex-col gap-3'>
                <h3 className='text-base font-bold text-white group-hover:text-[#1e6fd9] transition-colors leading-snug'>
                  {service.title}
                </h3>

                <p className='text-[#7a8fa0] text-sm leading-relaxed line-clamp-3'>
                  {service.description}
                </p>

                {/* Divider */}
                <div className='h-px bg-gradient-to-r from-[#1e6fd9]/30 to-transparent mt-1'></div>

                {/* CTA */}
                <a
                  href={service.link}
                  className='inline-flex items-center gap-2 text-[#4fc84a] font-semibold text-sm hover:gap-3 transition-all group/link'
                >
                  <span className='group-hover/link:text-white transition-colors'>Learn More</span>
                  <svg
                    className='w-4 h-4 group-hover/link:translate-x-1 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
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