import isoHero from '../assets/images/header/iso_hero_1773506191072.png';
import licensesHero from '../assets/images/header/licenses_hero_1773506220859.png';
import taxHero from '../assets/images/header/tax_hero_1773506242269.png';
import legalHero from '../assets/images/header/legal_hero_1773506439349.png';
import cxoHero from '../assets/images/header/cxo_hero_1773506460995.png';
import careersHero from '../assets/images/header/careers_hero_1773506486831.png';

// Fallback image using the ones we have for others that didn't get a unique one
const trademarkHero = licensesHero;
const companyRegistrationHero = cxoHero;
const consumerDisputeHero = legalHero;
const contactHero = careersHero;
const blogsHero = careersHero;

export const headerData = [
  {
    slug: 'trademark',
    title: 'Trademark Registration',
    heroImage: trademarkHero,
    image: trademarkHero,
    description: 'Protect your brand identity and intellectual property with our comprehensive trademark registration services.',
    overview: 'A trademark distinguishes your goods or services in the marketplace. It is not just a logo; it is an asset that appreciates over time. Our legal experts streamline the entire registration process, from comprehensive search to filing and prosecution, ensuring your brand remains exclusively yours.',
    features: [
      'Comprehensive Trademark Search',
      'Class Selection Assistance',
      'Application Drafting & Filing',
      'Responding to Objections',
      'Certificate Issuance Tracking'
    ],
    benefits: [
      'Legal Protection Against Infringement',
      'Creation of an Intangible Asset',
      'Exclusive Nationwide Rights',
      'Builds Trust and Goodwill',
      'Use of the ® Symbol'
    ]
  },
  {
    slug: 'company-registration',
    title: 'Company Registration',
    heroImage: companyRegistrationHero,
    image: companyRegistrationHero,
    description: 'Launch your dream business with hassle-free and legally compliant company formation services.',
    overview: 'Whether you are starting a Private Limited Company, an LLP, or an OPC, choosing the right business structure is crucial for future growth and investment. We handle the complex paperwork, compliance, and regulatory approvals so you can focus on building your business.',
    features: [
      'Name Approval & Reservation',
      'Digital Signature Certificate (DSC)',
      'Director Identification Number (DIN)',
      'Drafting MOA and AOA',
      'PAN, TAN, and Certificate of Incorporation'
    ],
    benefits: [
      'Limited Liability Protection',
      'Separate Legal Entity Status',
      'Easier Access to Funding & Credit',
      'Perpetual Succession',
      'Enhanced Brand Credibility'
    ]
  },
  {
    slug: 'iso',
    title: 'ISO Certification',
    heroImage: isoHero,
    image: isoHero,
    description: 'Achieve global recognition for your quality standards with our seamless ISO certification process.',
    overview: 'ISO certification validates that your management system, manufacturing process, or service meets all the requirements for standardization and quality assurance. We guide you through the auditing and certification process for ISO 9001, 14001, 27001, and more.',
    features: [
      'Pre-Audit Readiness Assessment',
      'Documentation & Procedure Manuals',
      'Internal Audit Training',
      'Coordination with Certification Body',
      'Continuous Compliance Monitoring'
    ],
    benefits: [
      'Global Acceptance and Recognition',
      'Increased Customer Satisfaction and Trust',
      'Improved Operational Efficiency',
      'Fulfills Tender Eligibility Requirements',
      'Competitive Market Advantage'
    ]
  },
  {
    slug: 'licenses',
    title: 'Business Licenses',
    heroImage: licensesHero,
    image: licensesHero,
    description: 'Ensure absolute legal compliance with our wide range of business licensing and registration services.',
    overview: 'Operating a business legally requires specific permits and licenses depending on your industry and location. We simplify the bureaucratic maze of FSSAI, Trade License, Shop & Establishment Act, and specific industry permits, keeping you completely on the right side of the law.',
    features: [
      'Requirement Analysis based on Industry',
      'Document Preparation and Verification',
      'Liaison with Government Departments',
      'Fast-track Application Processing',
      'License Renewal Management'
    ],
    benefits: [
      'Avoid Legal Penalties and Fines',
      'Smooth Business Operations',
      'Builds Confidence among Stakeholders',
      'Prevents Unnecessary Disruptions',
      'Ensures Safety and Standard Compliance'
    ]
  },
  {
    slug: 'tax-compliance',
    title: 'Tax & Compliance',
    heroImage: taxHero,
    image: taxHero,
    description: 'Optimize your financials and stay fully compliant with evolving corporate tax and statutory regulations.',
    overview: 'Tax compliance doesn’t have to be a headache. Our expert chartered accountants and tax consultants provide end-to-end services including GST registration & filing, Income Tax Returns, TDS filing, and regular statutory audits to ensure your business remains financially healthy.',
    features: [
      'GST Registration, Filing & Refunds',
      'Income Tax Returns for Businesses',
      'TDS Management and Returns',
      'Annual ROC/MCA Compliances',
      'Strategic Tax Planning'
    ],
    benefits: [
      'Maximizes Tax Savings and Deductions',
      'Prevents Heavy Penalities and Default Notices',
      'Maintains Accurate Financial Records',
      'Ensures Transparency for Investors',
      'Peace of Mind during Audits'
    ]
  },
  {
    slug: 'consumer-dispute',
    title: 'Consumer Dispute Resolution',
    heroImage: consumerDisputeHero,
    image: consumerDisputeHero,
    description: 'Expert legal assistance for businesses handling consumer grievances and defending against frivolous claims.',
    overview: 'In an era of high customer awareness, handling consumer disputes effectively is important for your brand reputation. We provide strategic defense and active mediation services to settle consumer court matters efficiently, minimizing financial loss and reputational damage.',
    features: [
      'Drafting Replies to Legal Notices',
      'Representation in Consumer Forums/Commissions',
      'Mediation and Out-of-Court Settlements',
      'Review of Terms & Conditions/Policies',
      'Claim Settlement Negotiations'
    ],
    benefits: [
      'Protects Brand Image and Reputation',
      'Minimizes Unnecessary Compensation Payouts',
      'Quick and Strategic Resolution',
      'Expert Advice on Consumer Protection Act',
      'Prevents Class-Action Scenarios'
    ]
  },
  {
    slug: 'legal-dispute',
    title: 'Corporate Legal Disputes',
    heroImage: legalHero,
    image: legalHero,
    description: 'Robust legal representation and strategic consulting for corporate and commercial litigation.',
    overview: 'Business disputes can drain resources and stall growth. Whether it is a breach of contract, a shareholder disagreement, or property disputes, our seasoned corporate lawyers provide aggressive representation and strategic advice to protect your corporate interests.',
    features: [
      'Commercial Contract Litigation',
      'Arbitration and Alternate Dispute Resolution',
      'Recovery of Business Dues (NCLT/MSME)',
      'Intellectual Property Infringement Defense',
      'Employment and Labor Disputes'
    ],
    benefits: [
      'Vigorous Defense of Your Corporate Rights',
      'Cost-Effective Alternate Resolutions',
      'Expert Trial Strategy and Representation',
      'Recovery of Stalled Capital',
      'Minimized Disruption to Operations'
    ]
  },
  {
    slug: 'cxo',
    title: 'CXO Services & Consulting',
    heroImage: cxoHero,
    image: cxoHero,
    description: 'Fractional executive leadership and strategic advisory to scale your business to new heights.',
    overview: 'Growing businesses often need top-tier leadership but may not need it full-time. Our Virtual CFO, CTO, and CLO (Chief Legal Officer) services provide the strategic direction and elite expertise required to conquer complex challenges, optimize operations, and drive explosive growth.',
    features: [
      'Virtual CFO for Financial Strategy',
      'Virtual CLO for Legal Risk Management',
      'Board Advisory and Corporate Governance',
      'Mergers & Acquisitions Consulting',
      'Business Process Re-engineering'
    ],
    benefits: [
      'Access to Elite Executive Talent at Fraction of Cost',
      'Unbiased, Objective Strategic Advice',
      'Scalable Leadership as You Grow',
      'Improved Financial & Operational Risk Management',
      'Faster Achievement of Strategic Goals'
    ]
  },
  {
    slug: 'careers',
    title: 'Join Our Team',
    heroImage: careersHero,
    image: careersHero,
    description: 'Build an impactful career in legal tech and corporate consulting with a high-growth dynamic team.',
    overview: 'We are always looking for passionate lawyers, chartered accountants, technologists, and customer success experts to join our mission of simplifying business compliance. At our company, you will find a culture of innovation, continuous learning, and high performance.',
    features: [
      'Competitive Compensation Packages',
      'Comprehensive Health & Wellness Benefits',
      'Continuous Learning & Up-skilling Support',
      'Flexible and Hybrid Work Arrangements',
      'Fast-track Career Progression'
    ],
    benefits: [
      'Work with Top-tier Corporate Clients',
      'Mentorship from Industry Leaders',
      'Inclusive and Collaborative Culture',
      'Opportunity to Impact Real Businesses',
      'Exceptional Work-Life Balance Focus'
    ]
  },
  {
    slug: 'contact',
    title: 'Contact Us',
    heroImage: contactHero,
    image: contactHero,
    description: 'Get in touch with our expert consultants today. We are here to solve your complex business challenges.',
    overview: 'Whether you have a quick question about tax filings or need comprehensive strategy for a legal dispute, our team is available around the clock. Reach out via phone, email, or visit our headquarters to discuss your requirements.',
    features: [
      '24/7 Dedicated Client Support',
      'Initial Free Expert Consultation',
      'Secure Client Portal Communication',
      'Multi-lingual Support Specialists',
      'Dedicated Account Managers'
    ],
    benefits: [
      'Instant Responses to Critical Queries',
      'Clear, Jargon-free Communication',
      'Personalized Action Plans',
      'Absolute Privacy and Confidentiality',
      'Seamless Onboarding Process'
    ]
  },
  {
    slug: 'blogs',
    title: 'Insights & Blogs',
    heroImage: blogsHero,
    image: blogsHero,
    description: 'Stay updated with the latest in corporate law, taxation, compliance, and business strategy.',
    overview: 'The legal and regulatory landscape is constantly evolving. Our experts regularly publish in-depth articles, actionable guides, and regulatory updates to help our clients and the broader business community stay informed and compliant.',
    features: [
      'Weekly Regulatory Roundups',
      'Deep-dive Explainer Articles',
      'Expert Opinion Pieces',
      'Downloadable Compliance Checklists',
      'Case Study Analysis'
    ],
    benefits: [
      'Stay Ahead of the Regulatory Curve',
      'Free Access to Expert Knowledge',
      'Actionable Business Advice',
      'Understand Complex Laws Simply',
      'Demystify Taxation and Compliance'
    ]
  }
];
