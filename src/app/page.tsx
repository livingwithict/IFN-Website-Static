import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import InitiativesSection from '@/components/InitiativesSection';
import UpcomingEvents from '@/components/UpcomingEventsSection';
import PublicationsSection from '@/components/PublicationsSection';
import NewsAndBlogsSection from '@/components/NewsAndBlogsSection';
import ReachSection from '@/components/ReachSection';
import CollaboratorsSection from '@/components/CollaboratorsSection';
import SupportInnovationCTA from '@/components/SupportInnovationCTA';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* <AboutSection /> */}
        <InitiativesSection />
        <UpcomingEvents />
        <PublicationsSection />
        <NewsAndBlogsSection />
        {/* <ReachSection /> */}
        {/* <CollaboratorsSection /> */}
        <SupportInnovationCTA />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
