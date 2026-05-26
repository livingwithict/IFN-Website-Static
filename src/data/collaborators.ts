// data/collaborators.ts
export interface Collaborator {
  id: string;
  name: string;
  logo: string;
  category: 'government' | 'industry' | 'international' | 'ngo';
  website?: string;
}

export const collaborators: Collaborator[] = [
  // Government Bodies
  {
    id: 'collab-1',
    name: 'Ministry of Communication and Information Technology',
    logo: '/images/collab/Government/MoCIT.png',
    category: 'government',
    website: 'https://mocit.gov.np/',
  },
  {
    id: 'collab-2',
    name: 'Department of Information Technology',
    logo: '/images/collab/Government/DoIT.png',
    category: 'government',
    website: 'https://doit.gov.np/',
  },
  {
    id: 'collab-3',
    name: 'Nepal Telecommunications Authority',
    logo: '/images/collab/Government/NTA.png',
    category: 'government',
    website: 'https://www.nta.gov.np/',
  },
  {
    id: 'collab-4',
    name: 'Industrial Enterprise Development Institute',
    logo: '/images/collab/Government/IEDI.jpg',
    category: 'government',
    website: 'https://iedi.org.np/',
  },

  // Industry Partners
  {
    id: 'collab-5',
    name: 'Federation of Nepal Chamber of Commerce & Industry',
    logo: '/images/collab/Industry/FNCCI.png',
    category: 'industry',
    website: 'https://www.fncci.org/',
  },
  {
    id: 'collab-6',
    name: 'National Academy of Science and Technology',
    logo: '/images/collab/Industry/nast.png',
    category: 'industry',
    website: 'https://www.nast.gov.np/',
  },
  {
    id: 'collab-7',
    name: 'Nepal Association for Software and IT Services',
    logo: '/images/collab/Industry/nasit.png',
    category: 'industry',
    website: 'https://nasit.org.np/',
  },
  {
    id: 'collab-8',
    name: 'Federation of Computer Association Nepal',
    logo: '/images/collab/Industry/can.png',
    category: 'industry',
    website: 'https://www.can.org.np/',
  },

  // International Partners
  {
    id: 'collab-9',
    name: 'The Asia Foundation',
    logo: '/images/collab/International/taf.jpg',
    category: 'international',
    website: 'https://asiafoundation.org/',
  },
  {
    id: 'collab-10',
    name: 'Huawei Technologies',
    logo: '/images/collab/International/Huawei.png',
    category: 'international',
    website: 'https://www.huawei.com/en',
  },
  {
    id: 'collab-11',
    name: 'InDrive',
    logo: '/images/collab/International/InDrive.png',
    category: 'international',
    website: 'https://indrive.com/',
  },
  {
    id: 'collab-12',
    name: 'upGrad',
    logo: '/images/collab/International/upGrad.jpg',
    category: 'international',
    website: 'https://www.upgrad.com/',
  },
];

export const collaboratorsByCategory = {
  government: collaborators.filter(c => c.category === 'government'),
  industry: collaborators.filter(c => c.category === 'industry'),
  international: collaborators.filter(c => c.category === 'international'),
  ngo: collaborators.filter(c => c.category === 'ngo'),
};
