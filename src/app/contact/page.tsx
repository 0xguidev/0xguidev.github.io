import { Contact } from '@/components/Contact';
import { siteConfig } from '@/data/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato - Guilherme',
  description:
    'Entre em contato com Guilherme através das redes sociais ou email.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Contact socialLinks={siteConfig.socialLinks} />
    </div>
  );
}
