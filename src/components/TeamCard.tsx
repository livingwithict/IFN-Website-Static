'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

type Props = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
};

export default function TeamCard({ name, role, bio, photo, facebook, instagram, linkedin }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      // easter egg: the dev's own card double-clicks through to their site
      onDoubleClick={
        name === 'Bishranta Regmi'
          ? () => window.open('https://bishranta.com.np', '_blank', 'noopener,noreferrer')
          : undefined
      }
      className="rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-6"
    >
      <div className="relative mx-auto mb-4 aspect-square w-full max-w-[200px] rounded-full overflow-hidden">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-[#0E2557]">{name}</h3>
      <p className="mb-3 text-sm text-primary-light">{role}</p>
      <p className="mb-4 text-sm text-gray-600">{bio}</p>
      <div className="flex items-center justify-center gap-4">
        {facebook && (
          <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-2xl text-[#0E2557]/70 transition hover:text-blue-600" aria-label="Facebook">
            <FaFacebook />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-2xl text-[#0E2557]/70 transition hover:text-pink-600" aria-label="Instagram">
            <FaInstagram />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl text-[#0E2557]/70 transition hover:text-blue-700" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        )}
      </div>
    </motion.article>
  );
}
