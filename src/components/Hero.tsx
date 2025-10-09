'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n-context';
import { Terminal } from './Terminal';
import { ThreeDLogo } from './ThreeDLogo';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 space-y-8">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t('hero.title')}
      </motion.h1>
      <motion.p
        className="text-xl max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {t('hero.subtitle')}
      </motion.p>
      <motion.a
        href="#contato"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {t('hero.cta')}
      </motion.a>
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 mt-8">
        <Terminal />
        <ThreeDLogo />
      </div>
    </section>
  );
}
