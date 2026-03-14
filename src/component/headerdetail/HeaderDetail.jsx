import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { headerData } from '../../data/headerData';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

export default function HeaderDetail() {
  const { slug } = useParams();
  
  // Find the page by slug
  const pageInfo = headerData.find(s => s.slug === slug);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [slug]);

  if (!pageInfo) {
    return (
      <div className="w-full min-h-screen bg-[#0a0f1a] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold text-[#e13a3a] mb-4">Page Not Found</h1>
        <p className="text-[#b8c4d0] mb-8">The information you requested does not exist.</p>
        <Link to="/" className="px-6 py-2 bg-[#1e6fd9] text-white font-semibold rounded hover:bg-[#1557b0] transition-colors shadow-lg">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className='w-full min-h-screen bg-[#0a0f1a] text-white'>
      {/* Hero Section */}
      <div className='relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <img 
            src={pageInfo.heroImage} 
            alt={pageInfo.title} 
            className='w-full h-full object-cover opacity-30 transform hover:scale-105 transition-transform duration-[10s]'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/60 to-transparent'></div>
          <div className='absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/80 via-transparent to-transparent'></div>
        </div>

        {/* Content */}
        <div className='relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start'>
          <Link to="/" className='inline-flex items-center gap-2 text-[#4fc84a] font-medium mb-6 hover:text-white transition-colors group'>
            <FaArrowLeft className='group-hover:-translate-x-1 transition-transform' />
            <span>Home</span>
          </Link>
          
          <div className='inline-flex items-center gap-2 bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 rounded-full px-4 py-1 mb-4 shadow-[0_0_15px_rgba(30,111,217,0.3)]'>
            <div className='w-2 h-2 bg-[#1e6fd9] rounded-full animate-pulse'></div>
            <span className='text-[#b8c4d0] text-xs font-semibold tracking-widest uppercase'>Corporate Info</span>
          </div>
          
          <h1 className='text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg max-w-3xl leading-tight'>
            {pageInfo.title}
          </h1>
          <p className='text-xl text-[#b8c4d0] max-w-2xl font-light border-l-4 border-[#1e6fd9] pl-4'>
            {pageInfo.description}
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className='container mx-auto px-6 md:px-12 py-16'>
        <div className='flex flex-col lg:flex-row gap-12'>
          
          {/* Left Column: Overview and Benefits */}
          <div className='lg:w-2/3 flex flex-col gap-12'>
            {/* Overview */}
            <div className='bg-[#0d1829] border border-[#1e6fd9]/15 rounded-xl p-8 hover:border-[#1e6fd9]/40 transition-colors shadow-lg shadow-black/40'>
              <h2 className='text-3xl font-bold mb-6 text-white flex items-center gap-3'>
                <span className='w-2 h-8 bg-gradient-to-b from-[#1e6fd9] to-[#0ea5e9] rounded-full'></span>
                Overview
              </h2>
              <p className='text-[#7a8fa0] text-lg leading-relaxed'>
                {pageInfo.overview}
              </p>
            </div>

            {/* Features & Benefits Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* Features */}
              <div className='bg-gradient-to-br from-[#0d1829] to-[#0a0f1a] border border-[#1e6fd9]/20 rounded-xl p-8 shadow-xl'>
                <h3 className='text-2xl font-bold mb-6 text-[#1e6fd9]'>Key Highlights</h3>
                <ul className='flex flex-col gap-4'>
                  {pageInfo.features.map((feature, idx) => (
                    <li key={idx} className='flex items-start gap-3 text-[#b8c4d0]'>
                      <FaCheckCircle className='text-[#1e6fd9] mt-1 shrink-0' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className='bg-gradient-to-bl from-[#0d1829] to-[#0a0f1a] border border-[#0ea5e9]/20 rounded-xl p-8 shadow-xl relative overflow-hidden'>
                <div className='absolute -right-4 -top-4 w-24 h-24 bg-[#0ea5e9] opacity-5 rounded-full blur-2xl'></div>
                <h3 className='text-2xl font-bold mb-6 text-[#0ea5e9] relative z-10'>Advantage & Benefits</h3>
                <ul className='flex flex-col gap-4 relative z-10'>
                  {pageInfo.benefits.map((benefit, idx) => (
                    <li key={idx} className='flex items-start gap-3 text-[#b8c4d0]'>
                      <div className='w-5 h-5 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center shrink-0 mt-0.5'>
                        <div className='w-2 h-2 rounded-full bg-[#0ea5e9]'></div>
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: CTA & Visuals */}
          <div className='lg:w-1/3 flex flex-col gap-8'>
            {/* Visual Block */}
            <div className='rounded-xl overflow-hidden border border-[#1e6fd9]/20 shadow-lg shadow-[#1e6fd9]/5 group relative'>
              <div className="absolute inset-0 bg-[#1e6fd9]/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img 
                src={pageInfo.image} 
                alt={`${pageInfo.title} illustration`} 
                className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700' 
              />
            </div>

            {/* CTA Box */}
            <div className='bg-gradient-to-br from-[#1e6fd9] via-[#1557b0] to-[#0d1829] rounded-xl p-8 text-center shadow-[0_10px_30px_rgba(30,111,217,0.3)] relative overflow-hidden'>
               <div className='absolute -bottom-10 -right-10 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl'></div>
              <h3 className='text-2xl font-bold text-white mb-4'>Need Expert Assistance?</h3>
              <p className='text-[#e0e7ff] mb-6'>
                Our dedicated professionals are available to guide you through {pageInfo.title.toLowerCase()} completely.
              </p>
              <button className='w-full py-3 bg-white text-[#1e6fd9] font-bold rounded-lg hover:bg-[#f0f4f8] transition-all transform hover:-translate-y-1 shadow-lg'>
                Reach Out Today
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
