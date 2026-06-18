import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import EventPageHero from '@/components/EventPageHero';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Digital Leadership Dialogue | ICT Foundation Nepal',
  description: 'Executive forum on digital transformation leadership and strategic innovation in Nepal.',
};

export default function DigitalLeadershipDialogue() {
  return (
    <>
      <Header />
      <main>
        <EventPageHero
          title="Digital Leadership Dialogue"
          description="An initiative implemented by the ICT Foundation Nepal that aimed to promote digital governance and integrate technology-driven development into Nepal's political agenda."
          imageSrc="/images/events/DLD.jpg"
          buttonText="Learn More"
          buttonLink="#"
        />

        {/* Overview Section */}
        <section id="overview" className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">Event Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
               The Digital Leadership Dialogue (DLD) is an initiative implemented by the ICT Foundation Nepal that aimed to promote digital governance and integrate technology-driven development into Nepal's political agenda during the pre-election period of 2026.
              </p>
              <p className="mb-6">
                The program adopted both in-person dialogues and virtual engagement formats to expand participation and ensure nationwide outreach, engaging more than 500 stakeholders.
              </p>
              <p>
                Participants and resource persons included political leaders, ICT experts, youth representatives, civil society members, media, election candidates, activists, women, people with disabilities, and representatives from marginalized communities.
              </p>            
            </div>
          </div>
        </section>

        {/* Key Activities */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-12 text-3xl lg:text-4xl font-bold text-[#0E2557]">Key Activities</h2>
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Digital Leadership Dialogue 1.0 (Feb 5, 2026)</h3>
                <p className="text-gray-600">Focused on shaping a digital agenda and strategic priorities for upcoming election manifestos.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Candidate Mela - Virtual Dialogue Series (Feb 18–24, 2026)</h3>
                <p className="text-gray-600">Strategic adoption of AI, machine learning, and advanced technologies for competitive advantage.</p>
              </div>
              <div className="rounded-lg bg-white p-6 border-l-4 border-primary">
                <h3 className="mb-2 text-lg font-semibold text-[#0E2557]">Digital Leadership Dialogue 1.2 (Feb 27, 2026)</h3>
                <p className="text-gray-600">Focused on moving from "manifesto to action" by discussing policy implementation, budgeting, and accountability mechanisms.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Insights and Outcomes */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">Key Insights and Outcomes</h2>
            <div className="space-y-6 prose prose-lg max-w-none text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-[#0E2557]">National Agenda</h3>
                <p>Political leaders acknowledged that ICT has become a common national agenda that must move beyond written manifestos into practical implementation.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0E2557]">Prioritized Areas</h3>
                <p>Discussions emphasized digital public infrastructure, e-governance, cybersecurity frameworks, digital literacy, and the potential for Nepal to become a regional IT hub.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0E2557]">Economic Growth</h3>
                <p>Experts proposed allocating at least 1% of national income to innovation and startups, noting the potential for IT services to be exported from Nepal.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0E2557]">Inclusivity</h3>
                <p>The program promoted inclusive participation, achieving 39% women representation and engagement from marginalized communities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Identified Challenges */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl lg:text-4xl font-bold text-[#0E2557]">Identified Challenges</h2>
            <div className="space-y-6 prose prose-lg max-w-none text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-[#0E2557]">Resource and Policy Gaps</h3>
                <p>A mismatch exists between ambitious policy goals and the available financial, technical, and institutional resources for execution.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0E2557]">Structural Realities</h3>
                <p>There was limited alignment between political commitments and Nepal's existing administrative and institutional realities.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0E2557]">Implementation Weakness</h3>
                <p>While digital agendas often appear in party documents, their actual prioritization and execution remain weak.</p>
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
