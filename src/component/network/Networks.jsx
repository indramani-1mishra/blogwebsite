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
    { id: 1, logo: oxford,       alt: "Oxford"  },
    { id: 2, logo: footerforbase, alt: "Forbes"  },
    { id: 3, logo: footerforbase, alt: "Educomp" }
  ];

  return (
    <div className='w-full bg-[#0a0f1a] py-16 relative overflow-hidden'>

      {/* Background glows */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-[#1e6fd9] opacity-5 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-[#4fc84a] opacity-5 rounded-full blur-3xl pointer-events-none'></div>

      <div className='container mx-auto px-6 md:px-12 relative z-10'>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

          {/* ── Left — Profile Card ── */}
          <div className='lg:col-span-1'>
            <div className='bg-[#0d1829] border border-[#1e6fd9]/20 rounded-xl overflow-hidden sticky top-8 shadow-xl shadow-black/30'>

              {/* Profile Image */}
              <div className='h-80 overflow-hidden relative'>
                <img
                  src={rajesh}
                  alt="Rajesh Kewat"
                  className='w-full h-full object-cover'
                />
                {/* Bottom gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-[#0d1829] via-transparent to-transparent'></div>
              </div>

              {/* Top accent bar */}
              <div className='h-1 w-full bg-gradient-to-r from-[#1e6fd9] to-[#4fc84a]'></div>

              {/* Profile Info */}
              <div className='p-6 text-center'>
                <h2 className='text-2xl font-bold text-white mb-1'>
                  Rajesh Kewat
                </h2>
                <div className='inline-block bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 rounded-full px-3 py-0.5 mb-3'>
                  <span className='text-[#1e6fd9] text-xs font-semibold tracking-widest uppercase'>Founder & CEO</span>
                </div>
                <p className='text-[#7a8fa0] text-sm leading-relaxed'>
                  The Founder & CEO of Online Legal India, Mr. Rajesh Kewat had the courage to sacrifice his well paid job at Oxford and turn his startup into a multi crore turnover company.
                </p>
              </div>
            </div>
          </div>

          {/* ── Right — Media + Experiences ── */}
          <div className='lg:col-span-2 flex flex-col gap-6'>

            {/* Media Features Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              {mediaFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className='bg-[#0d1829] border border-[#1e6fd9]/15 rounded-xl p-5
                             hover:border-[#1e6fd9]/40 hover:shadow-lg hover:shadow-[#1e6fd9]/10
                             transition-all duration-300 flex flex-col items-center text-center gap-4 group'
                >
                  {/* Media Logo */}
                  <div className='h-14 flex items-center justify-center'>
                    <img
                      src={feature.logo}
                      alt="Media Logo"
                      className='max-h-10 object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0'
                    />
                  </div>

                  {/* Divider */}
                  <div className='w-full h-px bg-gradient-to-r from-transparent via-[#1e6fd9]/30 to-transparent'></div>

                  {/* Title */}
                  <p className='text-[#7a8fa0] text-sm leading-relaxed group-hover:text-[#b8c4d0] transition-colors'>
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Past Experiences */}
            <div className='bg-[#0d1829] border border-[#1e6fd9]/15 rounded-xl p-7'>
              <h3 className='text-xl font-bold text-white text-center mb-2'>
                Past <span className='text-[#1e6fd9]'>Experiences</span>
              </h3>
              <div className='w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-[#1e6fd9] to-[#4fc84a] mb-6'></div>

              <div className='flex items-center justify-center gap-10 flex-wrap'>
                {pastExperiences.map((exp) => (
                  <div key={exp.id} className='h-14 flex items-center justify-center group'>
                    <img
                      src={exp.logo}
                      alt={exp.alt}
                      className='max-h-10 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300'
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── CEO's Desk Quote ── */}
        <div className='mt-12 bg-[#0d1829] border border-[#1e6fd9]/20 rounded-xl p-8 md:p-12 relative overflow-hidden'>

          {/* Decorative quote mark */}
          <div className='absolute top-4 left-8 text-[120px] leading-none text-[#1e6fd9]/8 font-serif select-none pointer-events-none'>"</div>
          <div className='absolute bottom-4 right-8 text-[120px] leading-none text-[#4fc84a]/8 font-serif select-none pointer-events-none'>"</div>

          <h2 className='text-3xl md:text-4xl font-bold text-white text-center mb-8'>
            From <span className='text-[#1e6fd9]'>CEO's</span> Desk
          </h2>

          <div className='max-w-4xl mx-auto relative z-10'>
            <blockquote>
              {/* Left blue border quote */}
              <div className='border-l-4 border-[#1e6fd9] pl-6'>
                <p className='text-[#b8c4d0] text-lg md:text-xl leading-relaxed italic'>
                  'You don't need MONEY to build your business empire, what you need is big dreams & a SHARP MIND! If you got it, try it.'
                </p>
              </div>

              <div className='mt-6 flex items-center justify-end gap-3'>
                <div className='h-px flex-1 bg-gradient-to-l from-[#1e6fd9]/40 to-transparent'></div>
                <p className='text-white font-bold text-base'>— Rajesh Kewat</p>
              </div>
            </blockquote>
          </div>
        </div>

      </div>
    </div>
  )
}