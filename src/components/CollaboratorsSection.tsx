import AnimatedSection from './AnimatedSection';
import {
  FaLandmark,
  FaBuilding,
  FaGlobeAmericas,
} from 'react-icons/fa';

interface PartnerGroup {
  category: string;
  icon: React.ElementType;
  iconColor: string;
  partners: string[];
}

const partnerGroups: PartnerGroup[] = [
  {
    category: 'Government Bodies',
    icon: FaLandmark,
    iconColor: 'bg-blue-50 text-blue-600',
    partners: [
      'Ministry of Communication and Information Technology (MoCIT)',
      'Department of Information Technology (DOIT)',
      'Nepal Telecommunications Authority (NTA)',
      'National Information Technology Center (NITC)',
      'Nepal Rastra Bank',
    ],
  },
  {
    category: 'Industry & Professional Associations',
    icon: FaBuilding,
    iconColor: 'bg-emerald-50 text-emerald-600',
    partners: [
      'Federation of Nepal Chamber of Commerce and Industry (FNCCI)',
      'National Academy of Science and Technology (NAST)',
      'Nepal Association for Software and IT Services Companies (NAS-IT)',
      'CAN Federation Nepal',
      'Artificial Intelligence Association Nepal',
    ],
  },
  {
    category: 'International Partners',
    icon: FaGlobeAmericas,
    iconColor: 'bg-purple-50 text-purple-600',
    partners: [
      'The Asia Foundation',
      'Huawei',
      'upGrad',
      'InDrive',
    ],
  },
];

export default function CollaboratorsSection() {
  return (
    <AnimatedSection id="collaborators">
      <div className="mx-auto mb-4 section-divider" />
      <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-[32px]">
        Our Collaborators
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-body-text/60">
        Collaboration is at the heart of IFN&apos;s mission. We work with a diverse
        network of government agencies, academic institutions, industry leaders, NGOs,
        and global organizations.
      </p>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {partnerGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.category}
              className="card-hover rounded-2xl bg-white p-7 shadow-sm"
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${group.iconColor}`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-5 text-lg font-semibold text-body-text">{group.category}</h3>
              <ul className="space-y-3">
                {group.partners.map((partner) => (
                  <li key={partner} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm leading-relaxed text-body-text/65">{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
