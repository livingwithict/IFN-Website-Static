import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import EventPageHero from '@/components/EventPageHero';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'ICT Gyan | ICT Foundation Nepal',
  description: 'Knowledge-sharing platform providing ICT training and professional development with ICT related contents',
};

export default function IctGyan() {
  return (
    <>
      <Header />
      <main>
        <EventPageHero
          title="ICT Gyan"
          description="Knowledge-sharing platform providing ICT training and professional development with ICT related contents."
          imageSrc="/images/events/ICT-Gyan.jpg"
          buttonText="Learn More"
          buttonLink="https://ictgyan.com"
        />

        {/* Overview Section */}
        <section id="overview" className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">Event Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                ICT Gyan is dedicated to making digital literacy accessible for all, recognizing its role in enhancing productivity and quality of life. The platform offers resources tailored to Nepali learners, covering everything from basic computer skills to advanced digital tools. 
              </p>
              <p className="mb-6">
                By bridging the digital divide, ICT Gyan not only enhances individual skills but also contributes to Nepal's socio-economic development.
              </p>
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

       {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0E2557] to-[#1a3a7a]">
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
            <h2 className="mb-6 text-3xl lg:text-4xl font-bold">Become a social contributor</h2>
            <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
              You can join ICT Gyan as a video contributor.
            </p>
            <button className="inline-block rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg active:scale-95">
              Drop Information
            </button>
          </div>
        </section>

        {/* Programs Section
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">Training Programs</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.692 10-10.747S17.5 6.253 12 6.253z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Foundation Courses</h3>
                <p className="text-gray-600">Basic ICT skills including computer fundamentals, office applications, and internet basics.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Software Development</h3>
                <p className="text-gray-600">Programming languages, web development, mobile app development, and software engineering.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Cybersecurity</h3>
                <p className="text-gray-600">Information security, network security, ethical hacking, and security certifications.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Data Analytics</h3>
                <p className="text-gray-600">Data analysis, business intelligence, big data tools, and analytics platforms.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0E2557]">Enterprise Solutions</h3>
                <p className="text-gray-600">Cloud computing, enterprise systems, IT operations, and organizational ICT training.</p>
              </div>
            </div>
          </div>
        </section> */}


 
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
