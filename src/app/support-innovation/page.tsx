import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export const metadata = {
  title: 'Support Nepal\'s AI & Innovation Future | ICT Foundation Nepal',
  description: 'Help empower emerging startups, students, and innovators with GPU resources and AI infrastructure across Nepal.',
};

export default function SupportInnovationPage() {
  const contributionWays = [
    { title: 'Donate Now', icon: '', desc: 'Contribute funds to support infrastructure and mentorship', href: '/#contact' },
  { title: 'Become a Partner', icon: '', desc: 'Corporate partnerships for sustained impact', href: '/#contact' },
    { title: 'Support AI Innovation', icon: '', desc: 'Sponsor GPU resources and computing power', href: '/#contact' },
    { title: 'Contribute Resources', icon: '', desc: 'Donate equipment, software licenses, or services', href: '/#contact' },
    { title: 'Sponsor a Student', icon: '', desc: 'Fund scholarships and mentorship programs', href: '/#contact' },
    { title: 'Support a Startup', icon: '', desc: 'Invest in early-stage innovation projects', href: '/#contact' },
  ];

  const impactAreas = [
    'Emerging AI and IT startups',
    'University students and researchers',
    'Innovation labs and community organizations',
    'Youth-led technology initiatives',
    'Social-impact digital solutions',
  ];

  return (
    <>
      <Header />
      <main className="pt-0">
        {/* Hero Section */}
        <div className="gradient-primary relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-dots opacity-20" aria-hidden="true" />
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/5" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5" aria-hidden="true" />

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
              Support Nepal's AI & Innovation Future
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/90">
              Empower the next generation of innovators, startups, and researchers with the tools and resources they need to build impactful digital solutions.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 space-y-16">
            {/* The Challenge & Opportunity */}
            <section>
              <h2 className="mb-8 text-3xl font-bold text-primary">The Challenge & Our Mission</h2>
              <div className="prose prose-lg prose-headings:text-primary prose-a:text-primary max-w-none">
                <p className="text-lg leading-relaxed text-body-text/80">
                  At <span className="font-semibold">ICT Foundation Nepal</span>, we believe that access to technology should not be limited by resources. Across Nepal, talented students, startups, researchers, and innovation-driven organizations have the ideas and potential to build impactful digital solutions—but many lack access to the computing power and infrastructure needed to grow.
                </p>
                <p className="text-lg leading-relaxed text-body-text/80 mt-6">
                  To bridge this gap, we are working to provide <span className="font-semibold">GPU resources, AI infrastructure support, mentorship opportunities, and innovation access</span> to deserving individuals and organizations across the country.
                </p>
              </div>
            </section>

            {/* Who We Help */}
            <section>
              <h2 className="mb-8 text-3xl font-bold text-primary">Who Benefits From Your Support</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {impactAreas.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary font-semibold">
                      ✓
                    </div>
                    <p className="text-base font-medium text-body-text">{area}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Ways to Contribute */}
            <section>
              <h2 className="mb-8 text-3xl font-bold text-primary">Ways to Make an Impact</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {contributionWays.map((way, idx) => (
                  <div key={idx} className="p-7 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                    <div className="text-4xl mb-4">{way.icon}</div>
                    <h3 className="mb-2 text-xl font-bold text-body-text">{way.title}</h3>
                    <p className="text-sm text-body-text/70">{way.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Impact Statement */}
            <section className="rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-10 border border-primary/20">
              <h2 className="mb-6 text-2xl font-bold text-primary">Your Impact</h2>
              <p className="text-lg leading-relaxed text-body-text/80 mb-6">
                By supporting ICT Foundation Nepal, you are directly contributing to the growth of Nepal's digital ecosystem and helping create opportunities for the next generation of innovators.
              </p>
              <p className="text-lg font-semibold text-primary">
                Together, let's build an inclusive and technology-enabled future for Nepal.
              </p>
            </section>

            {/* CTA Section */}
            <section className="py-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-body-text">Be Part of the Change</h2>
              <p className="mb-10 text-lg text-body-text/70">
                Join us in empowering innovation across Nepal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold text-white transition-all hover:brightness-110"
                  style={{ backgroundColor: '#ed1c24', boxShadow: '0 10px 15px -3px rgba(237, 28, 36, 0.25)' }}
                >
                  Donate Now
                  <FiArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-8 py-4 text-lg font-semibold text-primary transition-all hover:bg-primary/5"
                >
                  Become a Partner
                  <FiArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-12 text-center border-t border-gray-200">
              <p className="text-base text-body-text/70 mb-6">
                Have questions about supporting innovation in Nepal?
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Get in Touch With Us
                <FiArrowRight className="h-5 w-5" />
              </Link>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
