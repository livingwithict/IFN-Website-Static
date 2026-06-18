export type Patron = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  url?: string;
};

export const patrons: Patron[] = [
  {
    id: 'patron-1',
    name: 'Er. Ganesh Shah',
    role: 'Ex-Minister, Ministry of Science and Technology, GoN',
    bio: '',
    photo: '/images/patrons/Ganesh Shah.jpg',
  },
  {
    id: 'patron-2',
    name: 'Mr. Manohar Kr. Bhattarai',
    role: '',
    bio: '',
    photo: '/images/patrons/Manohar Bhattarai.jpg',
  },
  {
    id: 'patron-8',
    name: 'Prof. Dr. Subarna Shakya',
    role: '',
    bio: '',
    photo: '/images/patrons/Subarna Shakya.jpg',
  },
  {
    id: 'patron-3',
    name: 'Prof. Dr. Manish Pokharel',
    role: 'Former Dean (KU)',
    bio: '',
    photo: '/images/patrons/Manish Pokharel.jpg',
  },
  {
    id: 'patron-4',
    name: 'Mr. Birendra Kumar Mishra',
    role: 'Former Joint Secretary, MoCIT, GoN',
    bio: '',
    photo: '/images/patrons/Birendra Mishra.jpg',
  },
  {
    id: 'patron-5',
    name: 'Mr. Vivek S. Rana',
    role: 'ICT/MIS Consultant, Asian Development Bank (ADB)',
    bio: '',
    photo: '/images/patrons/Vivek Rana.jpg',
  },
  {
    id: 'patron-6',
    name: 'Ananda Raj Khanal',
    role: '',
    bio: '',
    photo: '/images/patrons/Ananda Raj Khanal.jpg',
  },
  {
    id: 'patron-7',
    name: 'Guna Keshari Pradhan',
    role: '',
    bio: '',
    photo: '/images/patrons/Guna Keshari.jpg',
  },
];

export default patrons;
