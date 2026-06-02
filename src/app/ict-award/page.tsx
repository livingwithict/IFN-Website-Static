import EventPageHero from '@/components/EventPageHero';
import Link from 'next/link';

export const metadata = {
  title: 'ICT Award | ICT Foundation Nepal',
  description: 'Recognition program celebrating excellence in ICT innovation, implementation, and digital transformation in Nepal.',
};

export default function IctAward() {
  return (
    <>
      <EventPageHero
        title="ICT Award"
        description="Recognition program celebrating excellence in ICT innovation, implementation, and digital transformation in Nepal. Honoring innovators, entrepreneurs, organizations, and projects that demonstrate outstanding contributions to Nepal's digital future."
        imageSrc="/images/events/ICTAward.jpg"
        buttonText="Learn More"
        buttonLink="https://ictaward.org"
      />

      {/* Overview Section */}
      <section id="overview" className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">
            Award Overview
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              The ICT Award is Nepal's most prestigious recognition in the field of Information and Communication Technology (ICT). It is an annual celebration of excellence in Nepal's tech landscape, aiming to empower innovation, encourage digital transformation, and honor achievements in the sector and beyond.
            </p>
            <p className="mb-6">
              ICT Award was launched as an annual celebration of excellence in Nepal’s tech landscape. More than just a recognition platform, the award has evolved into a movement—one that empowers innovation, encourages digital transformation, and highlights the extraordinary achievements of individuals, startups, institutions, and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section id="apply" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">
            Application Process
          </h2>
          <div className="relative">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">1</div>
                  <div className="h-12 w-1 bg-gray-200 mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Registration</h3>
                  <p className="text-gray-600">
                    Visit the official ICT Award portal and create your account. Select your category and review the requirements.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">2</div>
                  <div className="h-12 w-1 bg-gray-200 mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Submit Application</h3>
                  <p className="text-gray-600">
                    Complete the application form with detailed information about your innovation, project, or achievement. Include supporting documents and evidence of impact.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">3</div>
                  <div className="h-12 w-1 bg-gray-200 mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Preliminary Review</h3>
                  <p className="text-gray-600">
                    ICT Award committee reviews all applications for completeness and eligibility. Shortlisted candidates will be notified.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">4</div>
                  <div className="h-12 w-1 bg-gray-200 mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Jury Evaluation</h3>
                  <p className="text-gray-600">
                    A panel of industry experts evaluates applications based on innovation, impact, sustainability, and contribution to Nepal's digital transformation.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">5</div>
                  <div className="h-12 w-1 bg-gray-200 mt-2" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Award Ceremony</h3>
                  <p className="text-gray-600">
                    Winners are announced and honored at the prestigious ICT Award Ceremony. Winners receive recognition, certificates, and prizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">
            Important Dates
          </h2>
          <div className="space-y-4">
            <div className="flex gap-6 rounded-lg bg-gray-50 p-6 border-l-4 border-primary">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0E2557] mb-1">Application Opening</h3>
                <p className="text-gray-600">Application portal opens - TBD</p>
              </div>
            </div>

            <div className="flex gap-6 rounded-lg bg-gray-50 p-6 border-l-4 border-primary">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0E2557] mb-1">Application Deadline</h3>
                <p className="text-gray-600">Final date to submit applications - TBD</p>
              </div>
            </div>

            <div className="flex gap-6 rounded-lg bg-gray-50 p-6 border-l-4 border-primary">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0E2557] mb-1">Awards Ceremony</h3>
                <p className="text-gray-600">Grand awards ceremony and recognition event - TBD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer bg-white">
              <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                How do I submit my application?
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 hidden group-open:block">
                Visit the official ICT Award portal, create an account, select your category, and fill out the application form. Submit your application before the deadline with all required documents.
              </p>
            </details>

            <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer bg-white">
              <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                Is there an application fee?
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 hidden group-open:block">
                We don't charge any application fee for the ICT Award. The application process is completely free to encourage maximum participation and inclusivity across Nepal's ICT ecosystem.
              </p>
            </details>

            <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer bg-white">
              <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                Can I apply in multiple categories?
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 hidden group-open:block">
                Yes, you can apply in multiple categories if you meet the eligibility criteria. Each application will be evaluated independently.
              </p>
            </details>

            <details className="group rounded-lg border border-gray-200 p-6 cursor-pointer bg-white">
              <summary className="flex justify-between items-center font-semibold text-[#0E2557] group-open:text-primary">
                How are applications evaluated?
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 hidden group-open:block">
                Applications are evaluated by an independent jury panel of industry experts based on criteria including innovation, impact, sustainability, contribution to digital transformation, and overall quality of the submission.
              </p>
            </details>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0E2557] to-[#1a3a7a]">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="mb-6 text-3xl lg:text-4xl font-bold">
            Ready to Apply?
          </h2>
          <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
            Showcase your innovation and contribution to Nepal's digital transformation. Apply now to the ICT Award.
          </p>
          <button className="inline-block rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg active:scale-95">
            Apply Now
          </button>
        </div>
      </section>
    </>
  );
}
