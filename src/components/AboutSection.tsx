import AnimatedSection from './AnimatedSection';
import {
  FaGlobeAmericas,
  FaHandshake,
  FaLightbulb,
  FaBalanceScale,
  FaChartLine,
} from 'react-icons/fa';

const coreValues = [
  { title: 'Inclusion', description: 'Bridging the digital divide for all communities', icon: FaGlobeAmericas, color: 'bg-blue-50 text-blue-600' },
  { title: 'Collaboration', description: 'Partnering across government, industry, and civil society', icon: FaHandshake, color: 'bg-emerald-50 text-emerald-600' },
  { title: 'Innovation', description: 'Championing startups, research, and new ideas', icon: FaLightbulb, color: 'bg-amber-50 text-amber-600' },
  { title: 'Accountability', description: 'Evidence-based decisions, transparent governance', icon: FaBalanceScale, color: 'bg-purple-50 text-purple-600' },
  { title: 'Impact', description: 'Measurable change for Nepal\'s citizens', icon: FaChartLine, color: 'bg-red-50 text-red-600' },
];

const objectives = [
  {
    title: 'Advocacy & Policy Contribution',
    description:
      'Actively contributing to the Nepal Government\'s policy-making for a Digital Nepal across all levels — offering expertise, research-backed recommendations, and strategic insights.',
    icon: '01',
  },
  {
    title: 'Digitalization & Development',
    description:
      'Driving socio-economic growth through digital technologies, bridging the digital divide, and fostering innovation across sectors to support national development goals.',
    icon: '02',
  },
  {
    title: 'Digital Inclusion',
    description:
      'Promoting equitable access, skills training, and advocacy so that every segment of society can participate in the digital economy.',
    icon: '03',
  },
  {
    title: 'Initiative Execution & Capability Building',
    description:
      'Executing initiatives and building capacity through training and collaborations that foster innovation for sustainable digital development.',
    icon: '04',
  },
  {
    title: 'Digital Literacy',
    description:
      'Boosting national digital literacy in alignment with the Digital Nepal framework, in partnership with central government bodies, local authorities, and private sectors.',
    icon: '05',
  },
  {
    title: 'Fostering Startups & Innovation',
    description:
      'Supporting the development of startups, innovative ideas, and entrepreneurship through investment, mentoring, and strategic partnerships.',
    icon: '06',
  },
  {
    title: 'Research & Analysis',
    description:
      'Conducting research with government bodies and international organizations, sharing findings to promote awareness and evidence-based policy decisions.',
    icon: '07',
  },
];

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="pt-6 md:pt-6">
      <div className="py-2 md:py-6 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-4 section-divider" />
      <h2 className="mb-8 text-center text-3xl font-bold text-primary md:text-[32px]">
        About Us
      </h2>

      {/* Who We Are */}
      <div className="mx-auto max-w-4xl text-center">
        <h3 className="mb-4 text-2xl font-semibold text-body-text">Who We Are</h3>
        <p className="text-[15px] leading-[1.7] text-body-text/75">
          ICT Foundation Nepal is a pioneering, profit-not-distributing organization
          dedicated to promoting Nepal&apos;s digitalization agenda. We collaborate closely
          with the Nepal Government to organize activities from research and advocacy
          to capacity building at local, provincial, and national levels.
        </p>
        <p className="mt-4 text-[15px] leading-[1.7] text-body-text/75">
          Recognized as the highest taxpayer contributor and the leading earner of
          foreign currency in Nepal&apos;s ICT sector, IFN drives connectivity,
          innovation, and inclusive growth through strategic partnerships with local
          and international entities.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
        <div className="card-hover relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm">
          <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-primary/5" aria-hidden="true" />
          <div className="relative">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-white shadow-md shadow-primary/25">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold gradient-text-primary">Vision</h3>
            <p className="text-[15px] leading-[1.7] text-body-text/75">
              To build a digitally enabled and interconnected society, leading Nepal&apos;s
              digital evolution forward — empowering communities, regions, and the nation
              through innovative initiatives.
            </p>
          </div>
        </div>
        <div className="card-hover relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm">
          <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-accent/5" aria-hidden="true" />
          <div className="relative">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-accent text-white shadow-md shadow-red-500/25">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-accent">Mission</h3>
            <p className="text-[15px] leading-[1.7] text-body-text/75">
              To foster innovation, support startups, and advance towards a connected,
              technologically advanced society in close collaboration with the Nepal
              Government — driving projects that promote digital transformation,
              sustainable growth, and scalability across the nation.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="mx-auto mb-4 section-divider" />
        <h3 className="mb-8 text-center text-2xl font-semibold text-body-text">
          Core Values
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="card-hover rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${value.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-body-text">{value.title}</h4>
                <p className="text-sm leading-relaxed text-body-text/60">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Primary Objectives */}
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="mx-auto mb-4 section-divider" />
        <h3 className="mb-8 text-center text-2xl font-semibold text-body-text">
          Primary Objectives
        </h3>
        <div className="grid gap-5 md:grid-cols-2">
          {objectives.map((obj) => (
            <div
              key={obj.title}
              className="card-hover group flex gap-5 rounded-xl bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-lg font-bold text-primary/40 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/25">
                {obj.icon}
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-body-text">{obj.title}</h4>
                <p className="text-sm leading-relaxed text-body-text/65">{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </AnimatedSection>
  );
}
