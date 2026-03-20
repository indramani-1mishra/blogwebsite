import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { subpageData } from '../../data/subpageData';
import { FaCheckCircle, FaArrowLeft, FaPhoneAlt, FaEnvelope, FaShieldAlt } from 'react-icons/fa';

export default function SubpageDetail() {
  const { parent, slug } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  const pageInfo = subpageData.find(s => s.parent === parent && s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, [slug]);

  if (!pageInfo) {
    return (
      <div className="w-full min-h-screen bg-[#0a0f1a] flex flex-col items-center justify-center text-white">
        <div className="text-8xl mb-6 opacity-20">🔍</div>
        <h1 className="text-4xl font-bold text-[#e13a3a] mb-4">Page Not Found</h1>
        <p className="text-[#b8c4d0] mb-8">The service page you requested does not exist.</p>
        <Link to="/" className="px-8 py-3 bg-[#1e6fd9] text-white font-semibold rounded-lg hover:bg-[#1557b0] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#1e6fd9]/30">
          Go Back Home
        </Link>
      </div>
    );
  }

  const accent = pageInfo.accent || '#1e6fd9';
  const parentLabel = pageInfo.parent.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className='w-full min-h-screen bg-[#0a0f1a] text-white'>

      {/* ═══ HERO SECTION ═══ */}
      <div className='relative w-full h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden'>
        {/* Background */}
        <div className='absolute inset-0 z-0'>
          <img
            src={pageInfo.heroImage}
            alt={pageInfo.title}
            className='w-full h-full object-cover opacity-25 transform scale-105'
            style={{ transition: 'transform 15s ease-out' }}
            onLoad={(e) => { e.target.style.transform = 'scale(1)'; }}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/70 to-[#0a0f1a]/30'></div>
          <div className='absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/90 via-transparent to-transparent'></div>
          {/* Animated accent glow */}
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[120px] opacity-15' style={{ backgroundColor: accent }}></div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link to="/" className='inline-flex items-center gap-2 text-[#b8c4d0] font-medium mb-6 hover:text-white transition-colors group'>
            <FaArrowLeft className='group-hover:-translate-x-1 transition-transform' />
            <span>Home</span>
          </Link>

          <div className='inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border' style={{ backgroundColor: `${accent}15`, borderColor: `${accent}40` }}>
            <div className='w-2 h-2 rounded-full animate-pulse' style={{ backgroundColor: accent }}></div>
            <span className='text-xs font-bold tracking-[0.2em] uppercase' style={{ color: accent }}>{parentLabel}</span>
          </div>

          <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-xl max-w-4xl leading-[1.1]'>
            {pageInfo.title}
          </h1>
          <p className='text-lg md:text-xl text-[#a0b0c0] max-w-2xl font-light leading-relaxed border-l-4 pl-5' style={{ borderColor: accent }}>
            {pageInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className='flex gap-4 mt-8'>
            <button className='px-8 py-3 rounded-lg font-bold text-white transition-all transform hover:-translate-y-1 hover:shadow-xl' style={{ backgroundColor: accent, boxShadow: `0 8px 25px ${accent}40` }}>
              Get Started Now
            </button>
            <button className='px-8 py-3 rounded-lg font-bold border-2 text-white hover:bg-white/5 transition-all' style={{ borderColor: `${accent}60` }}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* ═══ MAIN CONTENT ═══ */}
      <div className='container mx-auto px-6 md:px-12 py-16'>
        <div className='flex flex-col lg:flex-row gap-12'>

          {/* Left Column */}
          <div className='lg:w-2/3 flex flex-col gap-10'>
            {/* Overview Card */}
            <div className={`bg-[#0d1829] border rounded-2xl p-8 md:p-10 transition-all duration-700 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ borderColor: `${accent}20`, boxShadow: `0 4px 40px ${accent}08` }}>
              <h2 className='text-3xl font-bold mb-6 text-white flex items-center gap-3'>
                <span className='w-1.5 h-9 rounded-full' style={{ background: `linear-gradient(to bottom, ${accent}, transparent)` }}></span>
                Detailed Overview
              </h2>
              <p className='text-[#7a8fa0] text-lg leading-[1.9]'>
                {pageInfo.overview}
              </p>
            </div>

            {/* Features & Benefits Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* Features */}
              <div className={`bg-gradient-to-br from-[#0d1829] to-[#0a0f1a] border rounded-2xl p-8 shadow-xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ borderColor: `${accent}20` }}>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-10 h-10 rounded-xl flex items-center justify-center' style={{ backgroundColor: `${accent}20` }}>
                    <FaShieldAlt style={{ color: accent }} />
                  </div>
                  <h3 className='text-xl font-bold' style={{ color: accent }}>Key Processes</h3>
                </div>
                <ul className='flex flex-col gap-4'>
                  {pageInfo.features.map((feature, idx) => (
                    <li key={idx} className='flex items-start gap-3 text-[#b8c4d0] group'>
                      <FaCheckCircle className='mt-1 shrink-0 transition-transform group-hover:scale-125' style={{ color: accent }} />
                      <span className='group-hover:text-white transition-colors'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className={`bg-gradient-to-bl from-[#0d1829] to-[#0a0f1a] border rounded-2xl p-8 shadow-xl relative overflow-hidden transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ borderColor: `${accent}20` }}>
                <div className='absolute -right-6 -top-6 w-32 h-32 opacity-[0.04] rounded-full blur-3xl' style={{ backgroundColor: accent }}></div>
                <div className='flex items-center gap-3 mb-6 relative z-10'>
                  <div className='w-10 h-10 rounded-xl flex items-center justify-center' style={{ backgroundColor: `${accent}20` }}>
                    <FaCheckCircle style={{ color: accent }} />
                  </div>
                  <h3 className='text-xl font-bold' style={{ color: accent }}>Strategic Advantages</h3>
                </div>
                <ul className='flex flex-col gap-4 relative z-10'>
                  {pageInfo.benefits.map((benefit, idx) => (
                    <li key={idx} className='flex items-start gap-3 text-[#b8c4d0] group'>
                      <div className='w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5' style={{ backgroundColor: `${accent}25` }}>
                        <div className='w-2 h-2 rounded-full' style={{ backgroundColor: accent }}></div>
                      </div>
                      <span className='group-hover:text-white transition-colors'>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='lg:w-1/3 flex flex-col gap-8'>
            {/* Image Card */}
            <div className={`rounded-2xl overflow-hidden border shadow-lg group relative transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ borderColor: `${accent}20`, boxShadow: `0 8px 30px ${accent}10` }}>
              <div className='absolute inset-0 opacity-10 group-hover:opacity-0 transition-opacity z-10 duration-500' style={{ backgroundColor: accent }}></div>
              <img
                src={pageInfo.image}
                alt={`${pageInfo.title} illustration`}
                className='w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700'
              />
            </div>

            {/* CTA Card */}
            <div className={`rounded-2xl p-8 text-center relative overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)`, boxShadow: `0 15px 40px ${accent}40` }}>
              <div className='absolute -bottom-12 -right-12 w-40 h-40 bg-white opacity-[0.06] rounded-full blur-3xl'></div>
              <div className='absolute -top-8 -left-8 w-24 h-24 bg-white opacity-[0.04] rounded-full blur-2xl'></div>
              <h3 className='text-2xl font-bold text-white mb-3'>Need Expert Help?</h3>
              <p className='text-white/80 mb-6 text-sm leading-relaxed'>
                Let our experts handle your {pageInfo.title.toLowerCase()} seamlessly and professionally.
              </p>
              <button className='w-full py-3.5 bg-white font-bold rounded-xl hover:bg-[#f0f4f8] transition-all transform hover:-translate-y-1 shadow-lg text-sm' style={{ color: accent }}>
                Consult Our Experts
              </button>
            </div>

            {/* Contact Card */}
            <div className={`bg-[#0d1829] border rounded-2xl p-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ borderColor: `${accent}15` }}>
              <h4 className='text-lg font-bold text-white mb-4'>Quick Contact</h4>
              <div className='flex flex-col gap-3'>
                <a href='tel:+919548011256' className='flex items-center gap-3 text-[#7a8fa0] hover:text-white transition-colors group'>
                  <div className='w-9 h-9 rounded-lg flex items-center justify-center transition-colors' style={{ backgroundColor: `${accent}15` }}>
                    <FaPhoneAlt className='text-xs' style={{ color: accent }} />
                  </div>
                  <span className='text-sm'>+91-9548011256</span>
                </a>
                <a href='mailto:info@vectrataxprocompany.com' className='flex items-center gap-3 text-[#7a8fa0] hover:text-white transition-colors group'>
                  <div className='w-9 h-9 rounded-lg flex items-center justify-center transition-colors' style={{ backgroundColor: `${accent}15` }}>
                    <FaEnvelope className='text-xs' style={{ color: accent }} />
                  </div>
                  <span className='text-sm'>info@vectrataxprocompany.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ═══ BOTTOM CTA BANNER ═══ */}
      <div className='w-full py-16 relative overflow-hidden' style={{ background: `linear-gradient(135deg, #0d1829 0%, ${accent}15 100%)` }}>
        <div className='absolute inset-0 opacity-5'>
          {[...Array(6)].map((_, i) => (
            <div key={i} className='absolute rounded-full' style={{
              width: `${60 + i * 30}px`, height: `${60 + i * 30}px`,
              border: `1px solid ${accent}`,
              left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 25}%`
            }}></div>
          ))}
        </div>
        <div className='container mx-auto px-6 md:px-12 text-center relative z-10'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-white mb-4'>
            Ready to Get Started with {pageInfo.title}?
          </h2>
          <p className='text-[#7a8fa0] text-lg max-w-2xl mx-auto mb-8'>
            Our team of experts is ready to assist you with every step of the process.
          </p>
          <div className='flex gap-4 justify-center'>
            <button className='px-10 py-4 rounded-xl font-bold text-white text-lg transition-all transform hover:-translate-y-1' style={{ backgroundColor: accent, boxShadow: `0 8px 30px ${accent}50` }}>
              Start Now — Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
