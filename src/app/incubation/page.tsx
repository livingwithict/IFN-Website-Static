import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import EventPageHero from '@/components/EventPageHero';

export const metadata = {
  title: 'Business Incubation Service | ICT Foundation Nepal',
  description: 'Incubation program supporting startups from ideation to market launch.',
};

export default function BusinessIncubationService() {
  return (
    <>
      <Header />
      <main>
        <EventPageHero
          title="Business Incubation Service"
          description="Comprehensive incubation program providing mentorship, funding support, infrastructure, and resources to nurture ICT startups from ideation to successful market launch."
          imageSrc="/images/events/Incubation.jpg"
          buttonText="Learn More"
          buttonLink="#"
        />

        {/* Overview Section */}
        <section id="overview" className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">Program Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The Business Incubation Service (BIS) Program 2026 is a four-month (14 weeks) startup incubation program by ICT Foundation Nepal (IFN), supported by IEDI (Government of Nepal). It is designed to take early-stage digital and IT-enabled startups from ideas to an investment-ready stage.
              </p>
              <p className="mb-6">
                Early-stage startup founders with a digital/IT idea or working prototype, student entrepreneurs, recent graduates, and small business owners looking to scale through technology, primarily from Bagmati or Koshi provinces.
              </p>
            </div>
          </div>
        </section>

        {/* Program Phases */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">Program Phases</h2>
            <div className="space-y-6">
              <div className="relative">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">1</div>
                    <div className="h-20 w-1 bg-gray-200 mt-2" />
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Application Selection & Orientation</h3>
                    <p className="text-gray-600">Online application submission and attending the in-person orientation session if selected.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">2</div>
                    <div className="h-20 w-1 bg-gray-200 mt-2" />
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Workshops (Hybrid Model)</h3>
                    <p className="text-gray-600">Attending 13 expert-led sessions covering business modeling, pitch preparation, legal basics, financial modeling, and marketing.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">3</div>
                    <div className="h-20 w-1 bg-gray-200 mt-2" />
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Bootcamp</h3>
                    <p className="text-gray-600">Refinement of pitches, direct mentor feedback, and selection of the top 10 or top 6 finalists (5 or 3 per province).</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0E2557] mb-2">Demo Day</h3>
                    <p className="text-gray-600">Pitching the startup to investors, government officials, and industry leaders in Kathmandu.</p>
                  </div>
                </div>
              
            </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
