import Header from '@/components/HeaderDark';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { ReactNode } from 'react';

export default function TeamLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
