"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-ifn",
    children: [
      { label: "About IFN", href: "/about-ifn" },
      { label: "Our Team", href: "/team" },
    ],
  },
  {
    label: "Events",
    href: "/#events",
    children: [
      {
        label: "Digital Conclaves",
        href: "/#events",
        children: [
          { label: "Digital Nepal Conclave", href: "digital-nepal-conclave" },
          { label: "Digital Karnali Conclave", href: "digital-karnali-conclave" },
          { label: "Digital Madhesh Conclave", href: "digital-madhesh-conclave" },
        ],
      },
      { label: "ICT Award", href: "ict-award" },
      { label: "Digital Leadership Dialogue", href: "digital-leadership-dialogue" },
      { label: "Pre-Budget ICT Discourse", href: "pre-budget-ict-discourse" },
      { label: "Nepal AI Summit", href: "nepal-ai-summit" },
    ],
  },
  {
    label: "Initiatives",
    href: "/#initiatives",
    children: [
      { label: "Digital Samvad", href: "digital-samvad" },
      { label: "ICT Gyan", href: "ict-gyan" },
      { label: "Startup & Idea Fest", href: "ideafest" },
      { label: "Business Incubation Service", href: "incubation" },
      { label: "Google Career Certification", href: "google-career-certificates" },
    ],
  },
  {
    label: "Publications",
    href: "/publications",
    // children: [
    //   { label: "Event Reports", href: "/#publications" },
    //   { label: "Research Publication", href: "/#publications" },
    // ],
  },
  { label: "News & Media", href: "/news-and-media" },
  { label: "Collaborations", href: "/collaboration" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const textColor = scrolled ? "text-[#0E2557]" : "text-white";

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="relative flex h-15 w-auto max-w-[160px] items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-white.png"
            alt="ICT Foundation Nepal"
            className={`absolute inset-0 h-full w-auto transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="ICT Foundation Nepal"
            className={`absolute inset-0 h-full w-auto transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
          />
          <span className="invisible">ICT Foundation Nepal</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && handleDropdownEnter(link.label)}
              onMouseLeave={link.children ? handleDropdownLeave : undefined}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${textColor}`}
              >
                {link.label}
                {link.children && (
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {link.children && openDropdown === link.label && (
                <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5">
                  {link.children.map((child) => (
                    <div key={child.label} className="group/sub relative">
                      <Link
                        href={child.href}
                        className="flex w-full items-center justify-between px-4 py-2 text-sm text-[#0E2557] transition-colors hover:bg-gray-50 hover:text-primary"
                        onClick={() => !child.children && setOpenDropdown(null)}
                      >
                        {child.label}
                        {child.children && (
                          <svg className="h-3 w-3 -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </Link>

                      {child.children && (
                        <div className="absolute left-full top-0 hidden w-56 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5 group-hover/sub:block">
                          {child.children.map((subChild) => (
                            <Link
                              key={subChild.label}
                              href={subChild.href}
                              className="block px-4 py-2 text-sm text-[#0E2557] transition-colors hover:bg-gray-50 hover:text-primary"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subChild.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`relative z-50 flex h-10 w-10 items-center justify-center lg:hidden ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-white lg:hidden">
          <nav className="flex flex-col gap-1 px-6 pt-24 pb-8">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-lg font-medium text-[#0E2557] transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 border-l-2 border-gray-100 pl-4">
                    {link.children.map((child) => (
                      <div key={child.label}>
                        <Link
                          href={child.href}
                          onClick={() => !child.children && setMobileOpen(false)}
                          className="block py-2 text-sm text-[#0E2557]/70 transition-colors hover:text-primary"
                        >
                          {child.label}
                        </Link>

                        {child.children && (
                          <div className="ml-4 border-l-2 border-gray-100 pl-4 mb-2 mt-1">
                            {child.children.map((subChild) => (
                              <Link
                                key={subChild.label}
                                href={subChild.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-1.5 text-sm text-[#0E2557]/60 transition-colors hover:text-primary"
                              >
                                {subChild.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
