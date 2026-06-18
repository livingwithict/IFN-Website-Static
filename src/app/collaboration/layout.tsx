import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { ReactNode } from 'react';

export default function CollaborationLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
      <BackToTop />
    </>
  );
}
