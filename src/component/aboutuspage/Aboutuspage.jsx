import React from 'react'
import aboutus from "../../assets/images/about-us.webp";

export default function Aboutuspage() {
  return (
    <div className='w-full bg-[#0a0f1a] py-16 relative overflow-hidden'>

      {/* Background glows */}
      <div className='absolute top-0 left-0 w-80 h-80 bg-[#1e6fd9] opacity-5 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-0 right-0 w-80 h-80 bg-[#4fc84a] opacity-5 rounded-full blur-3xl pointer-events-none'></div>

      <div className='container mx-auto px-6 md:px-12 flex justify-center items-center relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-[80%]'>

          {/* ── Left Content ── */}
          <div className='flex flex-col gap-6'>

            {/* Badge */}
            <div className='inline-flex w-fit items-center gap-2 bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 rounded-full px-4 py-1'>
              <div className='w-2 h-2 bg-[#4fc84a] rounded-full animate-pulse'></div>
              <span className='text-[#b8c4d0] text-xs font-semibold tracking-widest uppercase'>Who We Are</span>
            </div>

            {/* Heading */}
            <h2 className='text-4xl md:text-5xl font-bold text-white leading-tight'>
              About <span className='text-[#1e6fd9]'>Us</span>
            </h2>

            {/* Blue-green underline */}
            <div className='w-20 h-1 rounded-full bg-gradient-to-r from-[#1e6fd9] to-[#4fc84a]'></div>

            {/* Text */}
            <div className='flex flex-col gap-4 text-[#7a8fa0] text-base leading-relaxed'>
              <p>
                Vectra Tax Pro is a professional consultancy firm dedicated to simplifying the complex world of business compliance and legal registrations. We serve as a one-stop solution for entrepreneurs and established businesses looking to navigate the regulatory landscape of India with ease and precision
              </p>
              <p>
                Our mission is to empower businesses by handling the "paperwork," allowing founders to focus entirely on growth and innovation. With a team of experts well-versed in corporate law and taxation, we ensure that your business remains 100% compliant and legally sound.
              </p>
            </div>

            {/* Stats row */}
            <div className='grid grid-cols-3 gap-4 mt-2'>
              {[
                { value: '10K+', label: 'Clients Served' },
                { value: '50+', label: 'Expert Team' },
                { value: '15+', label: 'Years Experience' },
              ].map(({ value, label }) => (
                <div key={label} className='bg-[#0d1829] border border-[#1e6fd9]/15 rounded-xl p-4 text-center'>
                  <div className='text-2xl font-bold text-[#1e6fd9]'>{value}</div>
                  <div className='text-[#7a8fa0] text-xs mt-1'>{label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* ── Right Image ── */}
          <div className='flex items-center justify-center'>
            <div className='relative w-full max-w-md'>

              {/* Glow behind image */}
              <div className='absolute inset-0 bg-gradient-to-br from-[#1e6fd9]/20 to-[#4fc84a]/10 rounded-full blur-3xl'></div>

              {/* Decorative ring */}
              <div className='absolute inset-4 border border-[#1e6fd9]/15 rounded-full pointer-events-none'></div>

              <img
                src={aboutus}
                alt="About Us - Professional Services"
                className='relative z-10 w-full h-auto object-contain drop-shadow-2xl'
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}