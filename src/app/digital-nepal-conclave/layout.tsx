import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Digital Nepal Conclave | ICT Foundation Nepal',
  description: 'The flagship conclave focusing on digital transformation initiatives and strategies for Nepal\'s development.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
