'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { useTranslation } from '@/lib/i18n-context';

const navigation = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'projects', href: '/projects' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const { t, language, setLanguage } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              {t('common.name')}
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === item.href
                    ? 'text-foreground'
                    : 'text-foreground/60'
                }`}
              >
                {t(`navigation.${item.key}`)}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Mobile menu can be added later if needed */}
          </div>
          <nav className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="px-2 py-1 text-sm border rounded hover:bg-accent"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
