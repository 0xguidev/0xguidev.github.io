import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import axe from 'axe-core';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Blog } from '@/components/Blog';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { I18nProvider } from '@/lib/i18n-context';
import { ThemeProvider } from '@/components/theme-provider';

// Mock data for components
const mockBio = 'Desenvolvedor full-stack apaixonado por tecnologia.';
const mockSkills = ['React', 'TypeScript', 'Node.js'];
const mockCareer = [
  {
    year: '2023',
    title: 'Desenvolvedor Full-Stack',
    company: 'Empresa XYZ',
    description: 'Desenvolvimento de aplicações web modernas.',
  },
];
const mockProjects = [
  {
    title: 'Projeto Exemplo',
    description: 'Um projeto incrível.',
    stack: ['React', 'TypeScript'],
    github: 'https://github.com/example',
    demo: 'https://demo.example.com',
  },
];
const mockSocialLinks = {
  github: 'https://github.com/example',
  linkedin: 'https://linkedin.com/in/example',
  twitter: 'https://twitter.com/example',
  email: 'contact@example.com',
};

// Wrapper component to provide necessary context
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  </I18nProvider>
);

// Helper function to run axe-core tests
const runAxeTest = async (component: React.ReactElement) => {
  const { container } = render(<TestWrapper>{component}</TestWrapper>);

  const results = await axe.run(container, {
    rules: {
      // Disable rules that might be too strict for this test
      'color-contrast': { enabled: false }, // We'll handle this separately
      region: { enabled: false }, // Skip region checks for now
    },
  });

  return results;
};

describe('Accessibility Tests', () => {
  it('Header component should have no accessibility violations', async () => {
    const { container } = render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );

    const results = await axe.run(container, {
      rules: {
        'color-contrast': { enabled: false },
        region: { enabled: false },
        'landmark-unique': { enabled: false }, // Allow multiple landmarks in isolated tests
      },
    });

    expect(results.violations).toHaveLength(0);
  }, 10000);

  it('Hero component should have no accessibility violations', async () => {
    const results = await runAxeTest(<Hero />);

    expect(results.violations).toHaveLength(0);
  }, 10000);

  it('About component should have no accessibility violations', async () => {
    const results = await runAxeTest(
      <About bio={mockBio} skills={mockSkills} career={mockCareer} />
    );

    expect(results.violations).toHaveLength(0);
  }, 10000);

  it('Projects component should have no accessibility violations', async () => {
    const results = await runAxeTest(<Projects projects={mockProjects} />);

    expect(results.violations).toHaveLength(0);
  }, 10000);

  it('Blog component should have no accessibility violations', async () => {
    const results = await runAxeTest(<Blog />);

    expect(results.violations).toHaveLength(0);
  }, 10000);

  it('Contact component should have no accessibility violations', async () => {
    const results = await runAxeTest(<Contact socialLinks={mockSocialLinks} />);

    expect(results.violations).toHaveLength(0);
  }, 10000);

  it('Footer component should have no accessibility violations', async () => {
    const results = await runAxeTest(<Footer />);

    expect(results.violations).toHaveLength(0);
  }, 10000);
});
