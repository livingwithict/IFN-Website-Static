import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import EventPageHero from '@/components/EventPageHero';

export const metadata = {
  title: 'Google Career Certificates Scholarship | ICT Foundation Nepal',
  description:
    'Apply for the Google Career Certificates scholarship program administered by ICT Foundation Nepal in partnership with Mero Job and Google.',
};

export default function GoogleCareerCertificatesPage() {
  return (
    <>
      <Header />
      <main>
        <EventPageHero
          title="Google Career Certificates Scholarship Program"
          description="ICT Foundation Nepal (IFN), in collaboration with Mero Job Limited & Google LLC, is offering up to 500 fully funded scholarship seats for the Google Career Certificates program. Gain global competencies through Google-designed courses delivered via Coursera."
          imageSrc="/images/events/Google.jpg"
          buttonText="See Results"
          buttonLink="#result"
        />

        {/* Overview */}
        <section id="overview" className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-6 text-3xl font-bold text-[#0E2557]">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              ICT Foundation Nepal (IFN), in collaboration with Mero Job Limited & Google LLC, is pleased to announce the opportunity to apply for the Google Career Certificates scholarship program. This initiative targets individuals with a genuine interest in advancing their competencies and qualifications, particularly in the dynamic IT and technology sectors, and aims to provide global competencies to equip them with the necessary skills.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              As an official NPO Partner under the Merojob–Google Career Certificates Scholarship Program 2026, IFN is allocating up to 500 fully funded scholarship seats to deserving learners across Nepal, with no prior experience required. Through this collaboration, learners gain access to professional training designed by Google, delivered via Coursera, and supported locally by ICT Foundation Nepal and Mero Job Limited ensuring a guided, impactful, and career-transforming learning experience.
            </p>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="py-16 bg-gray-50">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 text-3xl font-bold text-[#0E2557]">Courses Available</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                'Cybersecurity',
                'Data Analytics',
                'Digital Marketing & E-commerce',
                'IT Support',
                'Project Management',
                'UX Design',
                'IT Automation with Python',
                'Advanced Data Analytics',
                'Business Intelligence',
                'AI Essentials',
                'Prompting Essentials',
                'AI Professional Certificate',
              ].map((c) => (
                <div key={c} className="rounded-lg bg-white p-4 shadow-sm">
                  <h3 className="text-md font-semibold text-[#0E2557]">{c}</h3>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">(You may choose to enroll in multiple courses, but ensure you can commit to completing selected courses.)</p>
          </div>
        </section>

        {/* Who Should Apply */}
        <section id="who" className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-6 text-3xl font-bold text-[#0E2557]">Who Should Apply?</h2>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Students and fresh graduates seeking globally competitive digital skills</li>
              <li>Working professionals looking to upskill or transition into the technology sector</li>
              <li>Women and individuals from underserved or vulnerable communities</li>
              <li>Financially disadvantaged learners with drive and commitment to grow</li>
              <li>Career-changers eager to enter Nepal's growing digital economy</li>
              <li>Anyone aged 16 years and above with a relevant educational background</li>
            </ul>
          </div>
        </section>

        {/* Important Notes */}
        <section id="notes" className="py-16 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-6 text-3xl font-bold text-[#0E2557]">Important Notes for Applicants</h2>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Learners inactive for 60 or more consecutive days may have their scholarship seat recycled and reassigned.</li>
              <li>Monthly progress will be monitored by the team to ensure program quality.</li>
              <li>A minimum 70% program completion rate is expected from all scholarship recipients.</li>
              <li>All learner data is handled with full confidentiality in accordance with the laws of Nepal.</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section id="result" className="py-16 bg-gradient-to-r from-[#0E2557] to-[#1a3a7a] text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold">Check Your Application Result</h2>
            <p className="mb-6 text-lg text-gray-100">See if you've been selected for the Google Career Certificates scholarship.</p>
            <a
              href="/lucky_draw_winners.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-primary px-8 py-3 font-semibold text-white hover:opacity-95"
            >
              View Winners List
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}