import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Blog } from '@/components/Blog';
import { Contact } from '@/components/Contact';
import { siteConfig } from '@/data/site';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About
        bio={siteConfig.bio}
        skills={siteConfig.skills}
        career={siteConfig.career}
      />
      <Projects projects={siteConfig.projects} />
      <Blog />
      <Contact socialLinks={siteConfig.socialLinks} />
    </main>
  );
}
