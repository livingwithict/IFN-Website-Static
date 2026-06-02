import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import EventPageHero from '@/components/EventPageHero';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Digital Madhesh Conclave | ICT Foundation Nepal',
  description: 'Dedicated to digital innovation and economic development in the Madhesh region.',
};

export default function DigitalMadheshConclave() {
  return (
    <>
      <Header />
      <main>
        <EventPageHero
          title="Digital Madhesh Conclave"
          description="Dedicated to digital innovation and economic development in the Madhesh region. Promoting entrepreneurship and inclusive growth through technology-driven solutions."
          imageSrc="/images/events/DMC.jpg"
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
                The first edition of Digital Madhesh Conclave 2025 was held in Bardibas, Mahottari, as a focused one-day event, marked a significant step toward advancing the digital agenda of Madhesh Province and centered around the main theme “Fostering Digitalization and Development for Digital Madhesh”.
              </p>
              <p className="mb-6">
                Organized jointly by the Ministry of Home Affairs, Communication & Law, Madesh Province Government, ICT Foundation Nepal and CAN Federation, Madesh Province, the conclave addressed extensive discussions on the existing landscape, emerging opportunities, unrealized potential, and key challenges surrounding digital development in Madhesh Province.
              </p>
              <p>
                The event was officially inaugurated by the Honorable Chief Minister of Madhesh Province, Satish Kumar Singh, whose presence demonstrated the provincial government’s strong commitment to digital advancement.

              </p>
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
