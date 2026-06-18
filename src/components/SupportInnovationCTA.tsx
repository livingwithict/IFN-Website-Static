'use client';

import Link from 'next/link';
import { FiArrowRight, FiHeart, FiTrendingUp, FiUsers } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';

export default function SupportInnovationCTA() {
  return (
    <AnimatedSection className="bg-surface py-16 md:py-24">
      <div className="mx-auto w-full">
        <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
          <div className="p-8 md:p-12">
            {/* Content */}
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <FiHeart className="h-6 w-6 text-red-500" />
                <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">Make an Impact</span>
              </div>
              <h2 className="mb-4 text-3xl md:text-4xl font-bold text-body-text">
                Support Nepal's Next Generation of Innovators
              </h2>
              <p className="mb-8 text-lg text-body-text/70 leading-relaxed">
                Talented students, startups, and researchers across Nepal have groundbreaking ideas but lack access to the computing power and infrastructure they need. By supporting ICT Foundation Nepal, you're directly contributing to the growth of Nepal's digital ecosystem.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <FiTrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-body-text/80">GPU resources and AI infrastructure support</p>
                </div>
                <div className="flex items-start gap-3">
                  <FiUsers className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-body-text/80">Mentorship opportunities for emerging talent</p>
                </div>
                <div className="flex items-start gap-3">
                  <FiTrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-body-text/80">Innovation access across all seven provinces</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/support-innovation"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white transition-all hover:brightness-110"
                  style={{ backgroundColor: '#ed1c24', boxShadow: '0 10px 15px -3px rgba(237, 28, 36, 0.25)' }}
                >
                  Learn More
                  <FiArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3 text-base font-semibold text-primary transition-all hover:bg-primary/5"
                >
                  Support Today
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            {/* <div className="pt-8 border-t border-gray-200">
              <h3 className="mb-6 text-xl font-bold text-body-text">Why This Matters</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">100+</p>
                  <p className="text-body-text/70">Student researchers and innovators supported</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">7</p>
                  <p className="text-body-text/70">Provinces reached with digital initiatives</p>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <p className="text-4xl font-bold text-primary mb-2">∞</p>
                  <p className="text-body-text/70">Potential for Nepal's AI-driven future</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
