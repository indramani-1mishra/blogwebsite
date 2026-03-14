import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

export default function ServiceDetail() {
  const { slug } = useParams();
  
  // Find the service by slug
  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="w-full min-h-screen bg-[#0a0f1a] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold text-[#1e6fd9] mb-4">Service Not Found</h1>
        <p className="text-[#b8c4d0] mb-8">The service you are looking for does not exist.</p>
        <Link to="/" className="px-6 py-2 bg-[#1e6fd9] text-white font-semibold rounded hover:bg-[#1557b0] transition-colors">
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
            src={service.heroImage} 
            alt={service.title} 
            className='w-full h-full object-cover opacity-30 transform hover:scale-105 transition-transform duration-[10s]'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/60 to-transparent'></div>
          <div className='absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/80 via-transparent to-transparent'></div>
        </div>

        {/* Content */}
        <div className='relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start'>
          <Link to="/" className='inline-flex items-center gap-2 text-[#4fc84a] font-medium mb-6 hover:text-white transition-colors group'>
            <FaArrowLeft className='group-hover:-translate-x-1 transition-transform' />
            <span>Back to Services</span>
          </Link>
          
          <div className='inline-flex items-center gap-2 bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 rounded-full px-4 py-1 mb-4 shadow-[0_0_15px_rgba(30,111,217,0.3)]'>
            <div className='w-2 h-2 bg-[#4fc84a] rounded-full animate-pulse'></div>
            <span className='text-[#b8c4d0] text-xs font-semibold tracking-widest uppercase'>Premium Service</span>
          </div>
          
          <h1 className='text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg max-w-3xl leading-tight'>
            {service.title}
          </h1>
          <p className='text-xl text-[#b8c4d0] max-w-2xl font-light border-l-4 border-[#1e6fd9] pl-4'>
            {service.description}
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className='container mx-auto px-6 md:px-12 py-16'>
        <div className='flex flex-col lg:flex-row gap-12'>
          
          {/* Left Column: Overview and Benefits */}
          <div className='lg:w-2/3 flex flex-col gap-12'>
            {/* Overview */}
            <div className='bg-[#0d1829] border border-[#1e6fd9]/15 rounded-2xl p-8 hover:border-[#1e6fd9]/40 transition-colors shadow-lg shadow-black/40'>
              <h2 className='text-3xl font-bold mb-6 text-white flex items-center gap-3'>
                <span className='w-2 h-8 bg-gradient-to-b from-[#1e6fd9] to-[#4fc84a] rounded-full'></span>
                Overview
              </h2>
              <p className='text-[#7a8fa0] text-lg leading-relaxed'>
                {service.overview}
              </p>
            </div>

            {/* Benefits & Features Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* Features */}
              <div className='bg-gradient-to-br from-[#0d1829] to-[#0a0f1a] border border-[#1e6fd9]/20 rounded-2xl p-8 shadow-xl'>
                <h3 className='text-2xl font-bold mb-6 text-[#1e6fd9]'>Key Features</h3>
                <ul className='flex flex-col gap-4'>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className='flex items-start gap-3 text-[#b8c4d0]'>
                      <FaCheckCircle className='text-[#1e6fd9] mt-1 shrink-0' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className='bg-gradient-to-bl from-[#0d1829] to-[#0a0f1a] border border-[#4fc84a]/20 rounded-2xl p-8 shadow-xl relative overflow-hidden'>
                <div className='absolute -right-4 -top-4 w-24 h-24 bg-[#4fc84a] opacity-5 rounded-full blur-2xl'></div>
                <h3 className='text-2xl font-bold mb-6 text-[#4fc84a] relative z-10'>Why Choose Us</h3>
                <ul className='flex flex-col gap-4 relative z-10'>
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className='flex items-start gap-3 text-[#b8c4d0]'>
                      <div className='w-5 h-5 rounded-full bg-[#4fc84a]/20 flex items-center justify-center shrink-0 mt-0.5'>
                        <div className='w-2 h-2 rounded-full bg-[#4fc84a]'></div>
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
            <div className='rounded-2xl overflow-hidden border border-[#1e6fd9]/20 shadow-lg shadow-[#1e6fd9]/5 group'>
              <img 
                src={service.image} 
                alt={`${service.title} illustration`} 
                className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500' 
              />
            </div>

            {/* CTA Box */}
            <div className='bg-gradient-to-b from-[#1e6fd9] to-[#1557b0] rounded-2xl p-8 text-center shadow-[0_10px_30px_rgba(30,111,217,0.3)]'>
              <h3 className='text-2xl font-bold text-white mb-4'>Ready to Get Started?</h3>
              <p className='text-[#e0e7ff] mb-6'>
                Let our experts handle your {service.title.toLowerCase()} seamlessely.
              </p>
              <button className='w-full py-3 bg-white text-[#1e6fd9] font-bold rounded-lg hover:bg-[#f0f4f8] transition-colors shadow-lg'>
                Consult Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
