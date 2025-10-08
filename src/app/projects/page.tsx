import { Projects } from '@/components/Projects';
import { siteConfig } from '@/data/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projetos - Guilherme',
  description:
    'Explore os projetos desenvolvidos por Guilherme, incluindo aplicações web e mobile.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Projects projects={siteConfig.projects} />
    </div>
  );
}
