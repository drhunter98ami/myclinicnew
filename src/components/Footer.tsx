import Link from 'next/link';

interface FooterProps {
  dict: {
    clinicName: string;
    description: string;
    quickLinks: string;
    home: string;
    services: string;
    about: string;
    contact: string;
    // Added new keys to support the new layout and fix header bugs
    workingHoursTitle: string; 
    workingHours: string;
    contactInfoTitle: string;
    address: string;
    phone: string;
    email: string;
    rights: string;
    privacyPolicy: string;
    termsOfService: string;
  };
  lang: string;
}

export default function Footer({ dict, lang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Expanded to 4 columns on large screens to fit the new contact info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-start">
          
          {/* Brand & Description */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {dict.clinicName}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              {dict.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {dict.quickLinks}
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href={`/${lang}#home`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {dict.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}#services`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {dict.services}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}#about`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {dict.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}#contact`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {dict.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* New: Contact Info Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {dict.contactInfoTitle}
            </h4>
            <ul className="flex flex-col gap-3 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0">📍</span>
                <span>{dict.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex-shrink-0">📞</span>
                <span dir="ltr">{dict.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex-shrink-0">✉️</span>
                <a href={`mailto:${dict.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {dict.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours Summary */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {dict.workingHoursTitle}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
              {dict.workingHours}
            </p>
          </div>

        </div>

        {/* Copyright & Legal Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {currentYear} {dict.clinicName}. {dict.rights}
          </p>
          
          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-500">
            <Link 
              href={`/${lang}/privacy`} 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {dict.privacyPolicy}
            </Link>
            <Link 
              href={`/${lang}/terms`} 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {dict.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}