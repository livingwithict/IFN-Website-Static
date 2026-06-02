import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import EventPageHero from '@/components/EventPageHero';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Digital Nepal Conclave | ICT Foundation Nepal',
  description: 'The flagship conclave focusing on digital transformation initiatives and strategies for Nepal\'s development.',
};

export default function DigitalNepalConclave() {
  return (
    <>
      <Header />
      <main>
        <EventPageHero
          title="Digital Nepal Conclave"
          description="The flagship conclave focusing on digital transformation initiatives and strategies for Nepal's development. Bringing together government officials, industry leaders, and innovators to shape Nepal's digital future."
          imageSrc="/images/events/Conclave.jpg"
          buttonText="Learn More"
          buttonLink="#"
        />

        {/* Overview Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">
              Event Overview
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The Digital Nepal Conclave is the country's leading digital conference, uniting government officials, private sector stakeholders, IT professionals, entrepreneurs, and academics to champion the vision of a Digital Nepal. Initiated in 2022 following the Digital Pradesh Samvad, this annual event provides a high-level platform for policy discussions and collaboration. The Conclave focuses on integrating digital technologies into national development initiatives for sustainable and inclusive growth. Key discussion areas include FinTech, Digital Health, Cyber Security, Digital Agriculture, Education, Connectivity, and Workforce development, all centered on accelerating Nepal's digital transformation journey. Each year, the Conclave features over 15 international keynote speakers and hundreds of national experts, introducing innovative ideas and best practices to drive digital prosperity. Ultimately, the Conclave aims to make significant, practical contributions toward achieving the goals outlined in the national "Digital Nepal Framework."
              </p>
              <p className="mb-6">
                This conclave serves as a comprehensive platform to discuss Nepal's digital transformation roadmap, showcase technological innovations, and facilitate networking among leaders, entrepreneurs, and technology enthusiasts.
              </p>
              <p>
                Through keynote presentations, panel discussions, and interactive workshops, the conclave addresses critical topics including digital governance, cybersecurity, AI and automation, digital entrepreneurship, and digital inclusion.
              </p>
            </div>
          </div>
        </section>

        {/* Past Edition */}
        <section className="py-16 lg:py-2 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">
              Past Editions
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Digital Nepal Conclave 2025</h3>
                <p className="text-gray-600">
                  <b>Theme:</b> "Digital Synergy: Transforming Governance, Economy & Society" <br />
                  <b>Key Highlights:</b> Held on 15th August at The Plaza, Pulchowk, Lalitpur. Key figures in attendance included the Rt. Hon’ble Prime Minister of Nepal Hon’ble KP Sharma Oli as Chief Guest, the Hon’ble Minister of Finance, the Hon’ble Minister of Communication and Information Technology, and the General Secretary of the Nepali Congress Gagan Thapa. The focus was on reflecting the harmonization of technology-driven initiatives across governance, economy, and society to create a seamless and transformative digital ecosystem.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Digital Nepal Conclave 2024</h3>
                <p className="text-gray-600">
                  <b>Theme:</b> "Harmonizing Digitalization and Development" <br />
                  <b>Key Highlights:</b> Held at Kathmandu Marriott Hotel, the event engaged over a thousand participants. Its focus was on integrating digital technologies into development initiatives for sustainable and inclusive goals. The Conclave provided a neutral platform for high-level policy discussions and was inaugurated by Rt. Hon’ble Prime Minister of Nepal Mr. Pushpa Kamal Dahal (Prachanda).
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Huawei MNC Digital Nepal Conclave 2023</h3>
                <p className="text-gray-600">
                  <b>Theme:</b> "Fostering Digitally Saksham Nepal" <br />
                  <b>Key Highlights:</b> Supported initiatives outlined in the Digital Nepal Framework 2019. The Conclave was inaugurated by Rt. Hon’ble Prime Minister of Nepal Mr. Pushpa Kamal Dahal (Prachanda) and saw the participation of several leading government officials and stakeholders. The event successfully gathered over eight hundred participants, showcasing Nepal’s growing digital capabilities across various sectors.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Huawei Digital Nepal 2022</h3>
                <p className="text-gray-600">
                  <b>Theme:</b> "Become a part of the transformation" <br />
                  <b>Key Highlights:</b> Successfully hosted and inaugurated by Nepal’s Vice President, Nanda Bahadur Pun. The event featured over sixty national and international ICT speakers, with panel sessions covering a wide range of IT-related topics critical to Nepal’s digital transformation, including Agriculture, Health, Education, Connectivity, Workforce, and Cybersecurity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-10 my-10 mx-auto max-w-4xl px-6">
            <Link href="#" className="inline-flex items-center gap-2 rounded-lg gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/25 hover:brightness-110">
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
