import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SlideshowHero from '@/components/SlideshowHero';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Startup & Idea Fest | ICT Foundation Nepal',
  description: 'Knowledge-sharing platform providing ICT training and professional development with ICT related contents',
};

export default function IctGyan() {
  return (
    <>
      <Header />
      <main>
        <SlideshowHero
          // label="ICT Gyan"
          title="Startup & Idea Fest"
          description="Knowledge-sharing platform providing ICT training and professional development with ICT related contents."
          // breadcrumbs={[
          //   { href: '/', label: 'Home' },
          //   { href: '/#initiatives', label: 'Events' },
          //   { href: '/events/ict-gyan', label: 'ICT Gyan' },
          // ]}
          slides={[
            {
              id: 'event-1',
              src: '/images/events/Startup-Idea.jpg',
              alt: 'Startup & Idea Fest',
            },
          ]}
          actions={[
            { label: 'Learn More', href: 'https://startupnepal.org/ ', variant: 'primary' },
            // { label: 'Register Now', href: '#register', variant: 'secondary' },
          ]}
        />

        {/* Overview Section */}
        <section id="overview" className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">Event Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                “Startup & Idea Fest '' by ICT Foundation Nepal in collaboration with Living with ICT promotes local startups, innovators, offers mentoring, and creates investment opportunities, which began in 2019 across some provinces of Nepal. Due to the global pandemic, the 2020 event was conducted virtually. Since then, the program expanded physically covering all seven provinces annually from 2021 to 2025. Shortlisted startups from each province participate in final rounds held in Kathmandu, featuring bootcamps, mentoring sessions, and exhibitions. Lastly, the winner is chosen from the top five best startups and is awarded with the ICT award for best provincial startup. 
              </p>
              <p className="mb-6">
                The last event at Kathmandu in November 2025 hosted over fifteen thousand attendees and featured more than hundred startups with voting for favorites.  All in all, Startup and Idea Fest organized every year is focused to contribute towards the development and promotion of the Digital ecosystem.
              </p>
            </div>
          </div>
        </section>
       
        <section>
          <div className="mt-10 my-10 mx-auto max-w-4xl px-6">
            <Link href="https://startupnepal.org/ " className="inline-flex items-center gap-2 rounded-lg gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/25 hover:brightness-110">
              Learn More
              <FiArrowRight className="h-4 w-4" />
            </Link>
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
