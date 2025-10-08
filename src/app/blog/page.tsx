import { Blog } from '@/components/Blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Guilherme',
  description:
    'Artigos e tutoriais sobre desenvolvimento web, mobile e tecnologia.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Blog />
    </div>
  );
}
