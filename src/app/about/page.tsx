import { About } from '@/components/About';
import { siteConfig } from '@/data/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre - Guilherme',
  description:
    'Conheça mais sobre Guilherme, desenvolvedor full stack apaixonado por tecnologia.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <About
        bio={siteConfig.bio}
        skills={siteConfig.skills}
        career={siteConfig.career}
      />
    </div>
  );
}
