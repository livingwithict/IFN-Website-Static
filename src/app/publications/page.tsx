import Header from '@/components/HeaderDark';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Image from 'next/image';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

const publications = [
  {
    title: 'Pre-Budget Discourse 2026',
    // description: 'Strategic recommendations for digital budget allocation and fiscal planning',
    // category: 'Policy Reports',
    // year: 2024,
    image: '/images/publications/Event-Pre-Budget.png',
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
    image: '/images/publications/DNC-24-report.jpeg',
    href: 'https://drive.google.com/',
    color: 'from-indigo-600 to-blue-700',
  },
  {
    title: 'Digital Nepal Conclave 2023',
    // description: 'Department of IT commissioned study on Nepal\'s ICT sector landscape',
    // category: 'Industry Analysis',
    // year: 2023,
    image: '/images/publications/DNC-23-report.jpeg',
    href: 'https://drive.google.com/',
    color: 'from-amber-600 to-orange-700',
  },
  {
    title: 'Digital Nepal Conclave 2022',
    // description: 'Impact assessment of nationwide digital literacy programs across provinces',
    // category: 'Impact Reports',
    // year: 2024,
    image: '/images/publications/DNC-22-report.jpeg',
    href: 'https://drive.google.com/',
    color: 'from-cyan-600 to-blue-700',
  },
];

const governmentResearch = [
  {
    title: 'Budget Recommendation for Tech Sector',
    // description: 'Conducted on behalf of the Department of Information Technology (DoIT), Government of Nepal; compiled industry data, assessed current status, identified SWOT factors, and provided policy and investment recommendations.',
    // category: 'Government Studies',
    // year: 2023,
    image: '/images/publications/Budget-Recomendation.png',
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
    image: '/images/publications/placeholder.jpg',
    href: 'https://drive.google.com/',
    color: 'from-slate-600 to-gray-700',
  },
  {
    title: 'Digital Nepal Paridishya Vol 1',
    // description: 'Created a detailed inventory of ICT systems, software, and digital infrastructure; findings informed evidence-based policy formulation and strategic planning to improve Nepal\'s e-governance landscape.',
    // category: 'Government Studies',
    // year: 2023,
    image: '/images/publications/Digital-Paridisya-1.jpeg',
    href: 'https://drive.google.com/',
    color: 'from-orange-600 to-yellow-700',
  },
  {
    title: 'Digital Nepal Paridishya Vol 2',
    // description: 'Conducted on behalf of the Department of Information Technology (DoIT), Government of Nepal; compiled industry data, assessed current status, identified SWOT factors, and provided policy and investment recommendations.',
    // category: 'Government Studies',
    // year: 2023,
    image: '/images/publications/Digital-Paridisya-2.jpeg',
    href: 'https://drive.google.com/',
    color: 'from-slate-600 to-gray-700',
  },
];

// const categories = ['All', ...new Set(publications.map(p => p.category))];

export const metadata = {
  title: 'Publications | ICT Foundation Nepal',
  description: 'Browse all research reports, policy documents, and publications by ICT Foundation Nepal.',
};

export default function PublicationsPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        {/* Hero Section */}
        <section className="py-4 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-4 section-divider" />
            <h1 className="mb-4 text-center text-3xl font-bold text-primary md:text-[32px]">
              Research & Publications
            </h1>
            <p className="mx-auto max-w-3xl text-center text-body-text/60">
              IFN&apos;s research and publication work informs policy decisions at every level
              of government. All reports are distributed to local, provincial, and national
              government bodies.
            </p>
          </div>
        </section>

        {/* Publications Grid */}
        <section className="py-0">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <h2 className="mb-8 text-2xl font-semibold text-body-text">
                Event Reports
              </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {publications.map((pub) => (
                <a
                  key={pub.title}
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover group overflow-hidden rounded-2xl bg-white shadow-sm block transition-transform hover:scale-105"
                >
                  {/* Image Container */}
                  <div className={`relative flex aspect-[1/1.414] items-center justify-center bg-gradient-to-br ${pub.color} overflow-hidden`}>
                    {pub.image ? (
                      <Image
                        src={pub.image}
                        alt={pub.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center px-6">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                          <FiExternalLink className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-sm font-bold leading-snug text-white">{pub.title}</h3>
                      </div>
                    )}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-lg mb-2">
                        <FiExternalLink className="h-6 w-6" />
                      </div>
                      <p className="text-xs text-white font-semibold">View Report</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* <div className="mb-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {pub.year}
                    </div> */}
                    <h3 className="mb-2 text-sm font-semibold text-body-text line-clamp-2">
                      {pub.title}
                    </h3>
                    {/* <p className="mb-3 text-xs text-body-text/60 line-clamp-2">
                      {pub.description}
                    </p> */}
                    <div className="flex items-center justify-between">
                      {/* <span className="text-xs font-medium text-primary/70">
                        {pub.category}
                      </span> */}
                      <FiDownload className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        </section>

        {/* Government Research Section */}
        <section className="py-4 md:py-8">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 text-2xl font-semibold text-body-text">Government Research</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {governmentResearch.map((research) => (
                <a
                  key={research.title}
                  href={research.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover group overflow-hidden rounded-2xl bg-white shadow-sm block transition-transform hover:scale-105"
                >
                  {/* Image Container */}
                  <div className={`relative flex aspect-[1/1.414] items-center justify-center bg-gradient-to-br ${research.color} overflow-hidden`}>
                    {research.image ? (
                      <Image
                        src={research.image}
                        alt={research.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center px-6">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                          <FiExternalLink className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-sm font-bold leading-snug text-white">{research.title}</h3>
                      </div>
                    )}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-lg mb-2">
                        <FiExternalLink className="h-6 w-6" />
                      </div>
                      <p className="text-xs text-white font-semibold">View Report</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* <div className="mb-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {research.year}
                    </div> */}
                    <h3 className="mb-2 text-sm font-semibold text-body-text line-clamp-2">
                      {research.title}
                    </h3>
                    {/* <p className="mb-3 text-xs text-body-text/60 line-clamp-2">
                      {research.description}
                    </p> */}
                    <div className="flex items-center justify-between">
                      {/* <span className="text-xs font-medium text-primary/70">
                        {research.category}
                      </span> */}
                      <FiDownload className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
