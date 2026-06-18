export interface Event {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  date?: string;
  location?: string;
  image?: string;
  content?: string;
}

export const events: Event[] = [
  {
    id: 1,
    slug: 'digital-conclaves',
    title: 'Digital Conclaves',
    description: 'A series of comprehensive digital innovation summits bringing together leaders, experts, and innovators to discuss Nepal\'s digital transformation.',
    date: 'Multiple Dates',
    location: 'Various Locations',
    content: 'Digital Conclaves are premier events designed to foster dialogue on digital innovation and transformation across Nepal. These conclaves bring together government officials, industry leaders, academics, and innovators to explore emerging technologies, policy frameworks, and strategies for digital inclusion.',
  },
  {
    id: 2,
    slug: 'digital-nepal-conclave',
    title: 'Digital Nepal Conclave',
    description: 'The flagship conclave focusing on digital transformation initiatives and strategies for Nepal\'s development.',
    date: 'TBD',
    location: 'Kathmandu, Nepal',
    content: 'The Digital Nepal Conclave is our flagship event dedicated to advancing Nepal\'s digital infrastructure and capabilities. It brings together stakeholders from government, private sector, academia, and civil society to collaborate on digital policies, innovation, and inclusive growth strategies.',
  },
  {
    id: 3,
    slug: 'digital-karnali-conclave',
    title: 'Digital Karnali Conclave',
    description: 'Focused on digital empowerment and development in the Karnali region of Nepal.',
    date: 'TBD',
    location: 'Karnali Region, Nepal',
    content: 'The Digital Karnali Conclave aims to bridge the digital divide in the Karnali region by fostering innovation, entrepreneurship, and digital literacy. It showcases opportunities for regional development through technology and digital solutions.',
  },
  {
    id: 4,
    slug: 'digital-madhesh-conclave',
    title: 'Digital Madhesh Conclave',
    description: 'Dedicated to digital innovation and economic development in the Madhesh region.',
    date: 'TBD',
    location: 'Madhesh Region, Nepal',
    content: 'The Digital Madhesh Conclave promotes digital entrepreneurship, innovation, and inclusive growth in the Madhesh region. It connects entrepreneurs, startups, and businesses with resources, mentorship, and market opportunities.',
  },
  {
    id: 5,
    slug: 'ict-award',
    title: 'ICT Award',
    description: 'Recognition program celebrating excellence in ICT innovation, implementation, and digital transformation in Nepal.',
    date: 'Annual',
    location: 'Nepal',
    content: 'The ICT Award recognizes outstanding contributions to Nepal\'s digital transformation. It celebrates innovators, entrepreneurs, organizations, and projects that demonstrate excellence in leveraging information and communication technology for social and economic impact.',
  },
  {
    id: 6,
    slug: 'digital-leadership-dialogue',
    title: 'Digital Leadership Dialogue',
    description: 'An exclusive forum for digital leaders to discuss strategy, vision, and future direction of digital transformation.',
    date: 'TBD',
    location: 'Kathmandu, Nepal',
    content: 'The Digital Leadership Dialogue brings together digital leaders from government, industry, and academia for high-level discussions on strategic initiatives, emerging trends, and policy frameworks shaping Nepal\'s digital future.',
  },
  {
    id: 7,
    slug: 'pre-budget-ict-discourse',
    title: 'Pre-Budget ICT Discourse',
    description: 'Policy dialogue focused on ICT-related budget priorities and digital investment strategies for Nepal.',
    date: 'Annual',
    location: 'Kathmandu, Nepal',
    content: 'The Pre-Budget ICT Discourse is a strategic platform for stakeholders to contribute to Nepal\'s national budget planning from an ICT perspective. It focuses on digital infrastructure investment, innovation funding, and technology-driven development priorities.',
  },
  {
    id: 8,
    slug: 'nepal-ai-summit',
    title: 'Nepal AI Summit',
    description: 'A comprehensive summit exploring artificial intelligence opportunities, challenges, and applications in Nepal.',
    date: 'TBD',
    location: 'Kathmandu, Nepal',
    content: 'The Nepal AI Summit is dedicated to exploring artificial intelligence\'s potential to transform Nepal\'s economy and society. It features keynote speakers, technical workshops, startup showcases, and policy discussions on responsible AI development and deployment.',
  },
];

export function getEventBySlug(slug: string): Event | undefined {
  return events.find(event => event.slug === slug);
}

export function getAllEventSlugs(): string[] {
  return events.map(event => event.slug);
}
