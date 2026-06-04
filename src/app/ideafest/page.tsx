import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import EventPageHero from '@/components/EventPageHero';
import YouTubeCard from '@/components/youtubecard';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Startup & Idea Fest | ICT Foundation Nepal',
  description: 'Knowledge-sharing platform providing ICT training and professional development with ICT related contents',
};

export default function IdeaFest() {
  return (
    <>
      <Header />
      <main>
        <EventPageHero
          title="Startup & Idea Fest"
          description="Knowledge-sharing platform providing ICT training and professional development with ICT related contents."
          imageSrc="/images/events/Startup-Idea.jpg"
          buttonText="Learn More"
          buttonLink="https://startupnepal.org/"
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
            <Link href="https://startupnepal.org/" className="inline-flex items-center gap-2 rounded-lg gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/25 hover:brightness-110">
              Learn More
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
        
        {/* <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#0E2557] lg:text-4xl">
                  Watch our videos
                </h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <YouTubeCard url="https://www.youtube.com/watch?v=LfpB-e-T3p0" />
              <YouTubeCard url="https://www.youtube.com/watch?v=7DBGaTXi6-c" />
              <YouTubeCard url="https://www.youtube.com/watch?v=a88Oe7n9ePM" />
              <YouTubeCard url="https://www.youtube.com/watch?v=9N8pWBJE2TM" />
            </div>
          </div>
        </section> */}

      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
