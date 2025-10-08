'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { useTranslation } from '@/lib/i18n-context';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {t('footer.builtBy')}{' '}
            <Link
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {t('common.name')}
            </Link>
            . Hospedado no{' '}
            <Link
              href="https://pages.github.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {t('footer.poweredBy')}
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href={siteConfig.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            {t('contact.github')}
          </Link>
          <Link
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            {t('contact.linkedin')}
          </Link>
          <Link
            href={siteConfig.socialLinks.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            {t('contact.twitter')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
