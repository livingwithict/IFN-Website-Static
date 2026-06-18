import AnimatedSection from '@/components/AnimatedSection';
import { teamMembers } from '@/data/team';
import TeamCard from '@/components/TeamCard';
import TeamHero from '@/components/TeamHero';
import PatronsGrid from '@/components/PatronsGrid';

export const metadata = {
  title: 'Our Team - ICT Foundation Nepal',
  description: 'Meet the team driving IFN',
};

export default function TeamPage() {
  return (
    <>
      <TeamHero />

      <AnimatedSection id="team" className="bg-surface">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0E2557]">Our Team</h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600">
            The people behind IFN — researchers, program managers and communicators working towards a digital Nepal.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((m) => (
            <TeamCard
              key={m.id}
              name={m.name}
              role={m.role}
              bio={m.bio}
              photo={m.photo}
              facebook={m.facebook}
              instagram={m.instagram}
              linkedin={m.linkedin}
            />
          ))}
        </div>
      </AnimatedSection>

      <PatronsGrid />
    </>
  );
}
