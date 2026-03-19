import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import googleplay from "../../assets/images/google-play.webp";
import appstore from "../../assets/images/app-store.webp";

export const Footer = () => {
  const footerLinks = {
    businessRegistration: [
      "Private Limited Company",
      "LLP Registration",
      "One Person Company",
      "Public Limited Company",
      "Section 8 Company",
      "Nidhi Company Registration",
      "Business Registration License"
    ],
    licenses: [
      "FSSAI Registration",
      "FSSAI Renewal",
      "Import Export Code",
      "BIS Certificate",
      "Shop & Establishment",
      "Trade License",
      "MSME / Udyam"
    ],
    intellectualProperty: [
      "Trademark Registration",
      "Copyright Registration",
      "Trademark Renewal",
      "Trademark Objection",
      "Trademark Opposition",
      "Trademark Assignment",
      "Logo Design"
    ],
    taxCompliances: [
      "GST Registration",
      "GST Return Filing",
      "GST Nil Return Filing",
      "Income Tax Return",
      "PF-ESIC Registration",
      "Annual Compliance & Filing"
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
    { name: "Home", path: "/" },
    { name: "About Us", path: "/info/about-us" },
    { name: "Contact Us", path: "/info/contact" },
    { name: "Careers", path: "/info/careers" },
    { name: "Blogs", path: "/info/blogs" },
    { name: "Privacy Policy", path: "/info/privacy-policy" },
    { name: "Terms of Service", path: "/info/terms-of-service" }
  ];

  const makeSlug = (str) => 
    str.toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

  const getFooterLink = (category, item) => {
    const slug = makeSlug(item);
    switch (category) {
      case 'businessRegistration':
        return `/registration/incorporation/${slug}`;
      case 'licenses':
        return `/info/licenses/${slug}`;
      case 'intellectualProperty':
        return `/info/trademark/${slug}`;
      case 'taxCompliances':
        return `/info/tax-compliance/${slug}`;
      case 'certifications':
        return `/info/iso/${slug}`;
      default:
        return '#';
    }
  };

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
                    <Link 
                      to={getFooterLink('businessRegistration', link)} 
                      className='text-gray-400 text-sm hover:text-[#1e6fd9] transition-colors'
                    >
                      {link}
                    </Link>
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
                    <Link 
                      to={getFooterLink('licenses', link)} 
                      className='text-gray-400 text-sm hover:text-[#1e6fd9] transition-colors'
                    >
                      {link}
                    </Link>
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
                    <Link 
                      to={getFooterLink('intellectualProperty', link)} 
                      className='text-gray-400 text-sm hover:text-[#1e6fd9] transition-colors'
                    >
                      {link}
                    </Link>
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
                    <Link 
                      to={getFooterLink('taxCompliances', link)} 
                      className='text-gray-400 text-sm hover:text-[#1e6fd9] transition-colors'
                    >
                      {link}
                    </Link>
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
                    <Link 
                      to={getFooterLink('certifications', link)} 
                      className='text-gray-400 text-sm hover:text-[#1e6fd9] transition-colors'
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Company Info */}
          <div className='border-t border-gray-800/60 pt-8 mb-8 mt-12'>
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
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-gray-800/60 pt-8'>

            {/* Left: Social Media */}
            <div>
              <h4 className='text-gray-300 font-semibold text-sm mb-4'>Follow Us</h4>
              <div className='flex gap-3'>
                <a href='#' className='w-9 h-9 rounded-full bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 flex items-center justify-center text-[#1e6fd9] hover:bg-[#1e6fd9] hover:text-white transition-all duration-300'>
                  <FaFacebookF />
                </a>
                <a href='#' className='w-9 h-9 rounded-full bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 flex items-center justify-center text-[#1e6fd9] hover:bg-[#1e6fd9] hover:text-white transition-all duration-300'>
                  <FaTwitter />
                </a>
                <a href='#' className='w-9 h-9 rounded-full bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 flex items-center justify-center text-[#1e6fd9] hover:bg-[#1e6fd9] hover:text-white transition-all duration-300'>
                  <FaLinkedinIn />
                </a>
                <a href='#' className='w-9 h-9 rounded-full bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 flex items-center justify-center text-[#1e6fd9] hover:bg-[#1e6fd9] hover:text-white transition-all duration-300'>
                  <FaInstagram />
                </a>
                <a href='#' className='w-9 h-9 rounded-full bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 flex items-center justify-center text-[#1e6fd9] hover:bg-[#1e6fd9] hover:text-white transition-all duration-300'>
                  <FaEnvelope />
                </a>
                <a href='#' className='w-9 h-9 rounded-full bg-[#1e6fd9]/10 border border-[#1e6fd9]/30 flex items-center justify-center text-[#1e6fd9] hover:bg-[#1e6fd9] hover:text-white transition-all duration-300'>
                  <FaYoutube />
                </a>
              </div>

              {/* App Download Buttons */}
              <div className='flex gap-3 mt-6'>
                <a href='#' className='hover:opacity-80 transition-opacity'>
                  <img src={googleplay} alt="Get it on Google Play" className='h-10' />
                </a>
                <a href='#' className='hover:opacity-80 transition-opacity'>
                  <img src={appstore} alt="Download on App Store" className='h-10' />
                </a>
              </div>
            </div>

            {/* Right: Quick Links & Contact */}
            <div className='flex flex-col gap-6 md:items-end'>
              <div className='flex flex-wrap gap-x-6 gap-y-2 md:justify-end'>
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className='text-gray-400 text-sm hover:text-[#4fc84a] transition-colors'
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className='md:text-right'>
                <p className='text-gray-400 text-xs mb-1'>For support or inquiries:</p>
                <a href='mailto:info@vectrataxprocompany.com' className='text-[#1e6fd9] hover:text-[#4fc84a] text-sm font-medium transition-colors'>
                  info@vectrataxprocompany.com
                </a>
              </div>
            </div>

          </div>

          <div className='mt-8 pt-8 border-t border-gray-800/40 text-center'>
            <p className='text-gray-500 text-xs'>
              © {new Date().getFullYear()} VectraTax Pro Company. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}