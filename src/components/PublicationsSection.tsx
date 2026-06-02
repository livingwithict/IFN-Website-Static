import { FiDownload, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const reports = [
  {
    title: 'eGovernance Assessment & Stocktaking Study',
    description: "Findings and recommendations from Nepal's largest digital conference",
    color: 'from-primary to-primary-dark',
    image: '/images/publications/eGovernace.jpg',
    link: '',
  },
  {
    title: 'Inventory of ICT Industry in Nepal',
    description: 'Comprehensive inventory of the ICT industry in Nepal',
    color: 'from-blue-600 to-indigo-700',
    image: '/images/publications/inventory.jpg',
    link: '', 
  },
  {
    title: 'Digital Paridrisya 1.0',
    description: "Strategic framework report for Nepal's digital transformation",
    color: 'from-teal-600 to-cyan-700',
    image: '/images/publications/Digital-Paridisya-1.jpg',
    link: '',
  },
  {
    title: 'Digital Paridrisya 2.0',
    description: "Strategic framework report for Nepal's digital transformation",
    color: 'from-teal-600 to-cyan-700',
    image: '/images/publications/Digital-Paridisya-2.jpg',
    link: '',
  },
];

export default function PublicationsSection() {
  return (
    <AnimatedSection id="publications" className="bg-surface">
      <div className="mx-auto mb-4 section-divider" />
      <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-[32px]">
        Research Publications
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-body-text/60">
        IFN&apos;s research and publication work informs policy decisions at every level
        of government. All reports are distributed to local, provincial, and national
        government bodies.
      </p>

      {/* Reports & Publications */}
      <div className="mb-4">
        {/* <h3 className="mb-8 text-2xl font-semibold text-body-text">Reports & Publications</h3> */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reports.map((report) => (
            <a
              key={report.title}
              href={report.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group block overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className={`relative flex aspect-[1/1.414] items-center justify-center bg-gradient-to-br ${report.color} overflow-hidden`}>
                {report.image ? (
                  <Image
                    src={report.image}
                    alt={report.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="px-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <FiExternalLink className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold leading-snug text-white">{report.title}</h4>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-lg">
                    <FiExternalLink className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-body-text/80">{report.title}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/publications" className="inline-flex items-center gap-2 rounded-lg gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/25 hover:brightness-110">
            See More Publications
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Government Research
      <div>
        <h3 className="mb-8 text-2xl font-semibold text-body-text">Government Research</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {governmentResearch.map((research) => (
            <div
              key={research.title}
              className="card-hover rounded-2xl bg-white p-7 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-2xl">
                {research.icon}
              </div>
              <h4 className="mb-3 text-lg font-semibold text-body-text">{research.title}</h4>
              <p className="text-sm leading-relaxed text-body-text/65">{research.description}</p>
              <button className="mt-5 inline-flex items-center gap-2 rounded-lg gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/25 hover:brightness-110">
                <FiDownload className="h-4 w-4" />
                Download Report
              </button>
            </div>
          ))}
        </div>
      </div> */}
    </AnimatedSection>
  );
}