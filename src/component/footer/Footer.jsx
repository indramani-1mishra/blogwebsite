import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaYoutube } from 'react-icons/fa';
import googleplay from "../../assets/images/google-play.webp";
import appstore from "../../assets/images/app-store.webp";

export const Footer = () => {
  const footerLinks = {
    businessRegistration: [
      "Private Limited Company",
      "Limited Liability Partnership",
      "One Person Company",
      "Section 8 Company",
      "Nidhi Company"
    ],
    licenses: [
      "FSSAI Registration",
      "Import Export Code (IEC)",
      "Shop & Establishment",
      "Trade License",
      "MSME / Udyam"
    ],
    intellectualProperty: [
      "Trademark Registration",
      "Copyright Registration",
      "Patent & Design",
      "Trademark Renewal",
      "Logo Registration"
    ],
    taxCompliances: [
      "GST Registration",
      "GST Return Filing",
      "TDS Return Filing",
      "Income Tax Return",
      "PF & ESIC Registration"
    ],
    certifications: [
      "ISO 9001:2015",
      "ISO 14001:2015",
      "ISO 27001 ISMS",
      "CE Mark Certification",
      "Startup India Registration"
    ]
  };

  const quickLinks = [
    "About Us",
    "Contact Us",
    "Privacy Policy",
    "Terms of Service",
    "Refund Policy",
    "FAQs"
  ];

  return (
    <>
      <footer className='w-full bg-[#0a0f1a] pt-16 pb-8 text-white'>
        <div className='container mx-auto px-6 md:px-12'>

          {/* Footer Links Grid */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12'>

            {/* Business Registration */}
            <div>
              <h3 className='text-white font-bold text-base mb-4'>Business Registration</h3>
              <ul className='space-y-2'>
                {footerLinks.businessRegistration.map((link, index) => (
                  <li key={index}>
                    <a href='#' className='text-gray-300 text-sm hover:text-[#1e6fd9] transition-colors'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Licenses */}
            <div>
              <h3 className='text-white font-bold text-base mb-4'>Licenses & Approvals</h3>
              <ul className='space-y-2'>
                {footerLinks.licenses.map((link, index) => (
                  <li key={index}>
                    <a href='#' className='text-gray-300 text-sm hover:text-[#1e6fd9] transition-colors'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h3 className='text-white font-bold text-base mb-4'>Intellectual Property</h3>
              <ul className='space-y-2'>
                {footerLinks.intellectualProperty.map((link, index) => (
                  <li key={index}>
                    <a href='#' className='text-gray-300 text-sm hover:text-[#1e6fd9] transition-colors'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tax */}
            <div>
              <h3 className='text-white font-bold text-base mb-4'>Tax & Compliances</h3>
              <ul className='space-y-2'>
                {footerLinks.taxCompliances.map((link, index) => (
                  <li key={index}>
                    <a href='#' className='text-gray-300 text-sm hover:text-[#1e6fd9] transition-colors'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h3 className='text-white font-bold text-base mb-4'>Certifications</h3>
              <ul className='space-y-2'>
                {footerLinks.certifications.map((link, index) => (
                  <li key={index}>
                    <a href='#' className='text-gray-300 text-sm hover:text-[#1e6fd9] transition-colors'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Company Info */}
          <div className='border-t border-gray-800 pt-8 mb-8 mt-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
              <div>
                <h4 className='text-white font-bold text-lg mb-3'>About Our Company</h4>
                <p className='text-gray-400 text-sm leading-relaxed'>
                  We are a premier business compliance and legal advisory platform, dedicated to empowering entrepreneurs and growing enterprises. Our AI-driven platform and expert professionals work in synergy to simplify the complex landscape of registrations, tax filings, and legal compliances. We provide transparent, tech-driven, and seamless solutions tailored to your business needs, enabling you to focus entirely on scaling your vision while we handle the paperwork.
                </p>
              </div>
              <div>
                <h4 className='text-white font-bold text-lg mb-3'>Our Vision</h4>
                <p className='text-gray-400 text-sm leading-relaxed'>
                  To be the most trusted legal and financial services partner for businesses worldwide. We strive to foster innovation by accelerating the pace of administrative processes and removing the bureaucratic hurdles of company formation and management. We deliver excellence, absolute reliability, and unwavering peace of mind at every step of your entrepreneurial journey.
                </p>
              </div>
            </div>
          </div>

          {/* Website Disclaimer */}
          <div className='mb-8 bg-[#111827]/50 p-6 rounded-lg border border-gray-800/60'>
            <h4 className='text-gray-300 font-bold text-xs uppercase tracking-wider mb-3'>Legal Disclaimer :</h4>
            <p className='text-gray-500 text-xs leading-relaxed'>
              This platform is privately owned and operated as a B2B consultancy platform. We are an independent firm facilitating business registrations, accounting, and compliance services. We are not a government entity, nor are we endorsed by or affiliated with any government agency/department. The forms available on this site are designed to gather necessary information tailored to our clients' needs and do not substitute for official government statutory applications. The fees collected reflect our professional advisory, technology platform utilization, and expert support. While we utilize advanced AI optimizations and rigorous expert reviews to ensure the highest degree of accuracy, we do not function as a traditional law firm. Information provided here does not constitute formal legal counsel. For dedicated legal representation or specific legal proceedings, we strongly recommend consulting an independent practicing advocate.
            </p>
          </div>

          {/* Social Media & App Links */}
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-gray-300 pt-8'>

            {/* Left: Social Media */}
            <div>
              <h4 className='text-gray-900 font-semibold text-sm mb-4'>Follow Us</h4>
              <div className='flex gap-3'>
                <a href='#' className='w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors'>
                  <FaFacebookF />
                </a>
                <a href='#' className='w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors'>
                  <FaTwitter />
                </a>
                <a href='#' className='w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-colors'>
                  <FaLinkedinIn />
                </a>
                <a href='#' className='w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white hover:from-purple-700 hover:to-pink-600 transition-colors'>
                  <FaInstagram />
                </a>
                <a href='#' className='w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-colors'>
                  <FaEnvelope />
                </a>
                <a href='#' className='w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-colors'>
                  <FaYoutube />
                </a>
              </div>

              {/* App Download Buttons */}
              <div className='flex gap-3 mt-6'>
                <a href='#'>
                  <img src={googleplay} alt="Get it on Google Play" className='h-12' />
                </a>
                <a href='#'>
                  <img src={appstore} alt="Download on App Store" className='h-12' />
                </a>
              </div>
            </div>

            {/* Right: Quick Links & Contact */}
            <div className='flex flex-col gap-4'>
              <div className='flex flex-wrap gap-4 justify-end'>
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href='#'
                    className='text-gray-600 text-sm hover:text-green-600 transition-colors'
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div className='text-right'>
                <p className='text-gray-600 text-sm'>
                  For any grievance mail to:
                  <a href='mailto:complain@fastinfo.com' className='text-blue-600 hover:underline ml-1'>
                    info@vectrataxprocompany.com
                  </a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
}