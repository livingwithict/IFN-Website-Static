export type Publication = {
  title: string;
  description?: string;
  category?: string;
  year?: number;
  image: string;
  href: string;
  color: string;
};

export type GovernmentResearch = {
  title: string;
  description?: string;
  category?: string;
  year?: number;
  image: string;
  href: string;
  color: string;
};

export const publications: Publication[] = [
  {
    title: 'Pre-Budget Discourse 2026',
    // description: 'Strategic recommendations for digital budget allocation and fiscal planning',
    // category: 'Policy Reports',
    // year: 2024,
    image: '/images/publications/Event-Pre-Budget.jpg',
    href: 'https://drive.google.com/',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    title: 'Digital Nepal Conclave 2025',
    // description: 'Comprehensive inventory of ICT systems and digital infrastructure across government',
    // category: 'Research Studies',
    // year: 2023,
    image: '/images/publications/placeholder.jpg',
    href: 'https://drive.google.com/',
    color: 'from-purple-600 to-pink-700',
  },
  {
    title: 'Digital Madhesh Conclave 2025',
    // description: 'Provincial digital capability mapping and assessment report',
    // category: 'Provincial Reports',
    // year: 2023,
    image: '/images/publications/placeholder.jpg',
    href: 'https://drive.google.com/',
    color: 'from-teal-600 to-cyan-700',
  },
  {
    title: 'Digital Karnali Conclave 2025',
    // description: 'Proceedings and key findings from Nepal\'s largest digital conference',
    // category: 'Conference Reports',
    // year: 2024,
    image: '/images/publications/placeholder.jpg',
    href: 'https://drive.google.com/',
    color: 'from-red-600 to-orange-700',
  },
  {
    title: 'Digital Karnali Conclave 2024',
    // description: 'Annual conference report highlighting digital transformation initiatives',
    // category: 'Conference Reports',
    // year: 2023,
    image: '/images/publications/placeholder.jpg',
    href: 'https://drive.google.com/',
    color: 'from-green-600 to-emerald-700',
  },
  {
    title: 'Digital Nepal Conclave 2024',
    // description: 'Inaugural conclave findings on digital transformation roadmap',
    // category: 'Conference Reports',
    // year: 2022,
    image: '/images/publications/DNC-24-report.jpg',
    href: 'https://drive.google.com/',
    color: 'from-indigo-600 to-blue-700',
  },
  {
    title: 'Digital Nepal Conclave 2023',
    // description: 'Department of IT commissioned study on Nepal\'s ICT sector landscape',
    // category: 'Industry Analysis',
    // year: 2023,
    image: '/images/publications/DNC-23-report.jpg',
    href: 'https://drive.google.com/',
    color: 'from-amber-600 to-orange-700',
  },
  {
    title: 'Digital Nepal Conclave 2022',
    // description: 'Impact assessment of nationwide digital literacy programs across provinces',
    // category: 'Impact Reports',
    // year: 2024,
    image: '/images/publications/DNC-22-report.jpg',
    href: 'https://drive.google.com/',
    color: 'from-cyan-600 to-blue-700',
  },
];

export const governmentResearch: GovernmentResearch[] = [
  {
    title: 'Budget Recommendation for Tech Sector',
    // description: 'Conducted on behalf of the Department of Information Technology (DoIT), Government of Nepal; compiled industry data, assessed current status, identified SWOT factors, and provided policy and investment recommendations.',
    // category: 'Government Studies',
    // year: 2023,
    image: '/images/publications/Budget-Recomendation.jpg',
    href: 'https://drive.google.com/',
    color: 'from-slate-600 to-gray-700',
  },
  {
    title: 'E-Governance Assessment and Stocktaking Study in Nepal',
    // description: 'Created a detailed inventory of ICT systems, software, and digital infrastructure; findings informed evidence-based policy formulation and strategic planning to improve Nepal\'s e-governance landscape.',
    // category: 'Government Studies',
    // year: 2023,
    image: '/images/publications/eGovernace.jpg',
    href: 'https://drive.google.com/',
    color: 'from-orange-600 to-yellow-700',
  },
  {
    title: 'Inventory of ICT Industry in Nepal',
    // description: 'Conducted on behalf of the Department of Information Technology (DoIT), Government of Nepal; compiled industry data, assessed current status, identified SWOT factors, and provided policy and investment recommendations.',
    // category: 'Government Studies',
    // year: 2023,
    image: '/images/publications/inventory.jpg',
    href: 'https://drive.google.com/',
    color: 'from-slate-600 to-gray-700',
  },
  {
    title: 'Digital Nepal Paridrishya Vol 1',
    // description: 'Created a detailed inventory of ICT systems, software, and digital infrastructure; findings informed evidence-based policy formulation and strategic planning to improve Nepal\'s e-governance landscape.',
    // category: 'Government Studies',
    // year: 2023,
    image: '/images/publications/Digital-Paridisya-1.jpg',
    href: 'https://drive.google.com/',
    color: 'from-orange-600 to-yellow-700',
  },
  {
    title: 'Digital Nepal Paridrishya Vol 2',
    // description: 'Conducted on behalf of the Department of Information Technology (DoIT), Government of Nepal; compiled industry data, assessed current status, identified SWOT factors, and provided policy and investment recommendations.',
    // category: 'Government Studies',
    // year: 2023,
    image: '/images/publications/Digital-Paridisya-2.jpg',
    href: 'https://drive.google.com/',
    color: 'from-slate-600 to-gray-700',
  },
];