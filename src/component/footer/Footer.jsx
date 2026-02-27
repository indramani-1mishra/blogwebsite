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
      "Public limited Company",
      "Section 8 Company"
    ],
    licenses: [
      "FSSAI [Food License]",
      "FSSAI Renewal",
      "IEC [Import/Export Code]",
      "IEC Certificate Modification",
      "BIS Certificate"
    ],
    registration: [
      "TM Registration",
      "TM Objection",
      "TM Renewal",
      "Copyright Registration",
      "ISO Registration"
    ],
    gst: [
      "GST Registration",
      "GST Filing",
      "GST Modification",
      "GST Cancellation"
    ],
    accountingTax: [
      "PF-ESIC Registration",
      "PF-ESIC Return Filing",
      "Online Bookkeeping"
    ]
  };

  const quickLinks = [
    "Careers",
    "Contact Us",
    "Blogs",
    "News",
    "Press Release",
    "Event"
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
                    <a href='#' className='text-white text-sm hover:text-[#1e6fd9] transition-colors'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Licenses */}
            <div>
              <h3 className='text-white font-bold text-base mb-4'>Licenses</h3>
              <ul className='space-y-2'>
                {footerLinks.licenses.map((link, index) => (
                  <li key={index}>
                    <a href='#' className='text-white text-sm hover:text-[#1e6fd9] transition-colors'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Registration */}
            <div>
              <h3 className='text-white font-bold text-base mb-4'>Registration</h3>
              <ul className='space-y-2'>
                {footerLinks.registration.map((link, index) => (
                  <li key={index}>
                    <a href='#' className='text-white text-sm hover:text-[#1e6fd9] transition-colors'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* GST */}
            <div>
              <h3 className='text-gray-900 font-bold text-base mb-4'>GST</h3>
              <ul className='space-y-2'>
                {footerLinks.gst.map((link, index) => (
                  <li key={index}>
                    <a href='#' className='text-white text-sm hover:text-[#1e6fd9] transition-colors'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accounting & Tax */}
            <div>
              <h3 className='text-gray-900 font-bold text-base mb-4'>Accounting & Tax</h3>
              <ul className='space-y-2'>
                {footerLinks.accountingTax.map((link, index) => (
                  <li key={index}>
                    <a href='#' className='text-white text-sm hover:text-[#1e6fd9] transition-colors'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Company Info */}
          <div className='border-t border-gray-300 pt-8 mb-8'>
            <p className='text-white text-sm leading-relaxed mb-4'>
              Online Legal India is a part of FastInfo Legal Services Pvt Ltd. Which is registered under the Companies Act, 2013.
            </p>
          </div>

          {/* Website Disclaimer */}
          <div className='mb-8'>
            <h4 className='text-white font-bold text-sm mb-3'>Website Disclaimer :</h4>
            <p className='text-gray-300 text-sm leading-relaxed'>
              This website is privately operated and not affiliated with any government entity. We do not represent or are affiliated with, endorsed by, or in any way connected to any government body or department. The form provided is not for official registration purposes; rather, it's designed to gather information from our clients to help us better understand their business or needs. By continuing to use this website, you acknowledge that we are a private company. We offer assistance based on customer requests, and the fees collected on this website are charged as a platform fee. We reserve the right to outsource matters as deemed necessary. We are in the process of giving our brand a new name. Stay tuned for updates. This platform does not offer legal services, nor does it provide legal advice or representation. Do you require legal assistance? We strongly recommend consulting with a qualified lawyer or law firm.
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
                    complain@fastinfo.com
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