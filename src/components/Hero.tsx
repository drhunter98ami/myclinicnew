import Link from 'next/link';
import { ReactNode } from 'react';

interface HeroProps {
  lang: string;
  dictionary: {
    title: ReactNode; // <-- Updated from string to ReactNode to support JSX formatting
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export default function Hero({ lang, dictionary }: HeroProps) {
  return (
    <section id="home" className="relative bg-blue-50 dark:bg-slate-900 py-20 lg:py-32 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            {dictionary.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            {dictionary.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${lang}#contact`}
              className="inline-flex justify-center items-center px-8 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg shadow-sm transition-colors duration-200"
            >
              {dictionary.primaryCta}
            </Link>
            <Link
              href={`/${lang}#services`}
              className="inline-flex justify-center items-center px-8 py-3 text-base font-medium text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg shadow-sm transition-colors duration-200"
            >
              {dictionary.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Pattern */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-30 pointer-events-none rtl:left-0 rtl:right-auto rtl:-ml-20">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-blue-200 dark:text-slate-700" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#hero-pattern)" />
        </svg>
      </div>
    </section>
  );
}