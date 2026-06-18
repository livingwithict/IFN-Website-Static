import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import EventPageHero from '@/components/EventPageHero';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Digital Karnali Conclave | ICT Foundation Nepal',
  description: 'Focused on digital empowerment and development in the Karnali region of Nepal.',
};

export default function DigitalKarnaliConclave() {
  return (
    <>
      <Header />
      <main>
        <EventPageHero
          title="Digital Karnali Conclave"
          description="Focused on digital empowerment and development in the Karnali region of Nepal. Bridging the digital divide and fostering innovation."
          imageSrc="/images/events/DKC.jpg"
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
                Digital Karnali Conclave, organized by ICT Foundation Nepal in collaboration with the Karnali Province Government, aligns local digital policies with national strategies, fostering socio-economic development. </p> 
              
              <p className="mb-6">
                <b> Digital Karnali Conclave 2024 </b>themed on <i>"Harmonizing Digitalization & Development,"</i> gathered stakeholders from various sectors to digitize and ensure success for digital Karnali. Further, the <b>Digital Karnali Conclave 2025 </b>held in Birendranagar, Surkhet, spanning two days, and centered around the main theme <i>“Empowering the Future: Innovation, Connectivity and Sustainability”</i> , addressed an extensive discussions on the current status, opportunities, potentials, and challenges of digital development in Karnali Province.
                </p>
              
              <p className="mb-6">
                The conclave was inaugurated in the presence of Hon. Yam Lal Kandel, Chief Minister of Karnali Province. Attended by over 500 individuals, the event was jointly organized by the Karnali Province Government and ICT Foundation Nepal, with more than 50 experts and stakeholders participating as speakers. With active participation from various stakeholders, including Ministers, policymakers, IT professionals, entrepreneurs, and academicians, the event was a platform for robust discussions and strategic planning towards the province's digital transformation.
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
