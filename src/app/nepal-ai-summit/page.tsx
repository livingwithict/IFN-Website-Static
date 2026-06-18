import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import EventPageHero from '@/components/EventPageHero';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Nepal AI Summit | ICT Foundation Nepal',
  description: 'Premier conference on artificial intelligence innovation, applications, and impact in Nepal.',
};

export default function NepalAISummit() {
  return (
    <>
      <Header />
      <main>
        <EventPageHero
          title="Nepal AI Summit"
          description="NAIS 2026 is a flagship national conference designed to bring together policymakers, industry leaders, researchers, startups, investors, and global experts to advance Nepal’s AI ecosystem."
          imageSrc="/images/events/AISummit.jpg"
          buttonText="Learn More"
          buttonLink="https://nepal-ai.org"
        />


        {/* Overview Section */}
        <section id="overview" className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">Event Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The Nepal AI Summit & Expo 2026 (NAIS 2026) is a flagship national Summit organized by ICT Foundation Nepal. It is envisioned as a strategic intervention and national platform to unify stakeholders, accelerate AI adoption, and translate policy into action to shape Nepal’s AI future. 
              </p>
              <p className="mb-6">
                The event will serve as a convergence point for policy dialogue, innovation showcase, investment opportunities, and capacity building. A highlight with over 50 exhibition stalls, serving as a marketplace for ideas, partnerships, and innovation, featuring live demonstrations of AI solutions across sectors like Agriculture, Healthcare, Education, Governance, Finance, and Cyber Security.
              </p>
              <p>
                The Summit is structured around core objectives to address Nepal’s AI readiness gap and advance the national strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Thematic Focus Areas */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">Thematic Focus Areas</h2>
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">AI Policy & Governance</h3>
                <p className="text-gray-600">National AI Policy implementation, regulatory frameworks, data protection, and alignment with international obligations.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">AI for Development Sectors</h3>
                <p className="text-gray-600">Applications in agriculture, healthcare, education, financial services, and disaster risk reduction.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">AI Innovation & Startups</h3>
                <p className="text-gray-600">Ecosystem development, investment, open-source tools, and public-private partnership opportunities.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">AI Research & Academia</h3>
                <p className="text-gray-600">University initiatives, NLP for Nepali languages, and research funding.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Responsible & Inclusive AI</h3>
                <p className="text-gray-600">AI ethics, social inclusion, digital divide, and indigenous language preservation.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">AI Skills & Workforce</h3>
                <p className="text-gray-600">AI literacy, curriculum reform, workforce transition, and youth and women in AI.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-10 my-10 mx-auto max-w-4xl px-6">
            <Link href="https://nepal-ai.org" className="inline-flex items-center gap-2 rounded-lg gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/25 hover:brightness-110">
              Learn More
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
