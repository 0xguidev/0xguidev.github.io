import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { translations } from '@/lib/translations';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {translations.footer.builtBy}{' '}
            <Link
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {translations.common.name}
            </Link>
            . Hospedado no{' '}
            <Link
              href="https://pages.github.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {translations.footer.poweredBy}
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
            {translations.contact.github}
          </Link>
          <Link
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            {translations.contact.linkedin}
          </Link>
          <Link
            href={siteConfig.socialLinks.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            {translations.contact.twitter}
          </Link>
        </div>
      </div>
    </footer>
  );
}
