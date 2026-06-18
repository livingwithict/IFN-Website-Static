import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Google Career Certificates Scholarship | ICT Foundation Nepal',
  description: 'Scholarship program in collaboration with Mero Job and Google for Google Career Certificates delivered via Coursera.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children as React.ReactElement;
}
