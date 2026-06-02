import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import Fa from 'zod/v4/locales/fa.js';
import Image from 'next/image';

const initiativeLinks = [
  { label: 'Digital Samvad', url: '/digital-samvad' },
  { label: 'ICT Gyan', url: '/ict-gyan' },
  { label: 'Startup & Ideafest', url: '/ideafest' },
  { label: 'Business Incubation Service', url: '/incubation' },
  { label: 'Google Career Certification', url: '/google-career-certificates' },    
];

const quickLinks = [
  { label: 'About Us', href: '/about-ifn' },
  { label: 'Programs & Initiatives', href: '/#initiatives' },
  { label: 'Publications', href: '/publications' },
  { label: 'Collaborators', href: '/collaboration' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Organization */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
                <Image 
                  src="/images/logo-white.png" 
                  alt="IFN Logo" 
                  width={400} 
                  height={120}
                  priority
                  className="h-20 w-auto"
                />
            </div>
            <h3 className="mb-4 text-xl font-bold">ICT Foundation Nepal</h3>
            <p className="mb-4 text-sm leading-relaxed text-white/55">
              Reg. No: 261776/077/078
            </p>
            {/* <p className="mb-4 text-sm leading-relaxed text-white/55">
              Driving Nepal&apos;s Digital Transformation through policy, innovation, and inclusive growth.
            </p> */}
            <p className="text-sm text-white/55">Sankhamul, Kathmandu-31, Nepal</p>
            {/* <a
              href="https://ictfoundation.org.np"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm text-primary-light hover:underline"
            >
              ictfoundation.org.np
            </a> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wider uppercase text-white/40">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Initiative Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wider uppercase text-white/40">
              Initiatives
            </h3>
            <ul className="space-y-3">
              {initiativeLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wider uppercase text-white/40">
              Connect
            </h3>
            <p className="mb-5 text-sm text-white/55">Follow us on social media</p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/ICTFoundationNepal2026"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/50 transition-all hover:bg-white/10 hover:text-white"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/ictfoundationnepal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/50 transition-all hover:bg-white/10 hover:text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/ict-foundation-nepal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/50 transition-all hover:bg-white/10 hover:text-white"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@ict.foundation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/50 transition-all hover:bg-white/10 hover:text-white"
              >
                <FaYoutube className="h-4 w-4" />
              </a>

            </div>
            <p className="mb-5 text-sm text-white/55"></p>
            <p className="mb-5 text-sm text-white/55">admin@ictfoundation.org.np <br /> razan@ictfoundation.org.np</p>
            <p className="mb-5 text-sm text-white/55">+977-9851141348, +977-9801263604, +977-9801263601</p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/35">
            &copy; {year} ICT Foundation Nepal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
