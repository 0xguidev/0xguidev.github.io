/// <reference types="vitest/globals" />

import { render, screen } from '@testing-library/react';
import { Projects } from '@/components/Projects';
import { I18nProvider } from '@/lib/i18n-context';

// Mock the i18n context
const mockT = (key: string) => key;

vi.mock('@/lib/i18n-context', () => ({
  useTranslation: () => ({ t: mockT }),
  I18nProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

const mockProjects = [
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1',
    stack: ['React', 'TypeScript'],
    github: 'https://github.com/user/project1',
    demo: 'https://demo1.com',
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto 2',
    stack: ['Next.js', 'Tailwind'],
    github: 'https://github.com/user/project2',
    demo: null,
  },
];

describe('Projects Component', () => {
  test('renders projects with animations', () => {
    render(
      <I18nProvider>
        <Projects projects={mockProjects} />
      </I18nProvider>
    );

    expect(screen.getByText('Projeto 1')).toBeInTheDocument();
    expect(screen.getByText('Projeto 2')).toBeInTheDocument();

    // Check that project cards are rendered
    const projectCards = document.querySelectorAll('.border.rounded-lg');
    expect(projectCards.length).toBe(2);
  });

  test('renders project details', () => {
    render(
      <I18nProvider>
        <Projects projects={mockProjects} />
      </I18nProvider>
    );

    expect(screen.getByText('Descrição do projeto 1')).toBeInTheDocument();
    const reactSpans = screen.getAllByText('React');
    expect(reactSpans.length).toBeGreaterThan(0); // At least one in the project stack
    const typeScriptSpans = screen.getAllByText('TypeScript');
    expect(typeScriptSpans.length).toBeGreaterThan(0); // At least one in the project stack
  });

  test('renders links correctly', () => {
    render(
      <I18nProvider>
        <Projects projects={mockProjects} />
      </I18nProvider>
    );

    const githubLinks = screen.getAllByText('projects.github');
    expect(githubLinks).toHaveLength(2);

    const demoLink = screen.getByText('projects.demo');
    expect(demoLink).toBeInTheDocument();
  });
});
