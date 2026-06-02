import React from 'react';
import Header from '@/components/HeaderDark';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import NewsMediaHero from '@/components/NewsMediaHero';
import UnifiedMediaSection from '@/components/UnifiedMediaSection';

export default function NewsAndMediaPage() {
  return (
    <>
      <Header />
      <main className="pt-6">
        {/* <NewsMediaHero /> */}

        <section className="py-4 md:py-6">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-4 section-divider" />
            <h1 className="mb-4 text-center text-3xl font-bold text-primary md:text-[32px]">
              News & Media
            </h1>
            <p className="mx-auto max-w-3xl text-center text-body-text/60">
              Stay updated with the latest announcements, press coverage, and media highlights from ICT Foundation Nepal.
            </p>
          </div>
        </section>

        <UnifiedMediaSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
