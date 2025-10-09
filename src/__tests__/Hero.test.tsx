/// <reference types="vitest/globals" />

import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/Hero';
import { I18nProvider } from '@/lib/i18n-context';

// Mock the i18n context
const mockT = (key: string) => key;

vi.mock('@/lib/i18n-context', () => ({
  useTranslation: () => ({ t: mockT }),
  I18nProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe('Hero Component', () => {
  test('renders hero content', () => {
    render(
      <I18nProvider>
        <Hero />
      </I18nProvider>
    );

    expect(screen.getByText('hero.title')).toBeInTheDocument();
    expect(screen.getByText('hero.subtitle')).toBeInTheDocument();
    expect(screen.getByText('hero.cta')).toBeInTheDocument();
  });

  test('renders Terminal component', () => {
    render(
      <I18nProvider>
        <Hero />
      </I18nProvider>
    );

    expect(screen.getByText('>')).toBeInTheDocument();
  });

  test('renders ThreeDLogo component', () => {
    render(
      <I18nProvider>
        <Hero />
      </I18nProvider>
    );

    // Check for canvas element from ThreeDLogo
    expect(document.querySelector('canvas')).toBeInTheDocument();
  });
});
