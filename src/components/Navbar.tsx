"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar({ lang }: { lang: string }) {
  const pathname = usePathname();
  const router = useRouter();
  
  // States
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // <-- New state for mobile menu

  useEffect(() => {
    const isDark = 
      localStorage.getItem("theme") === "dark" || 
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const switchLanguage = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  const text = {
    ar: {
      brand: "د. أحمد خليف",
      home: "الرئيسية",
      services: "الخدمات",
      about: "عن الطبيب",
      contact: "تواصل معنا",
    },
    en: {
      brand: "Dr. Ahmad Khlif",
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    }
  };

  const t = lang === "en" ? text.en : text.ar;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link href={`/${lang}`} className="text-xl font-bold text-blue-600 dark:text-blue-400">
          {t.brand}
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          <li><Link href={`/${lang}#home`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">{t.home}</Link></li>
          <li><Link href={`/${lang}#services`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">{t.services}</Link></li>
          <li><Link href={`/${lang}#about`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">{t.about}</Link></li>
          <li><Link href={`/${lang}#contact`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">{t.contact}</Link></li>
        </ul>

        {/* Action Buttons & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )}
          </button>

          <button 
            onClick={switchLanguage}
            className="hidden sm:block px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
          >
            {lang === "ar" ? "English" : "عربي"}
          </button>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                // Close Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <ul className="flex flex-col px-4 py-4 gap-4">
            <li>
              <Link href={`/${lang}#home`} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                {t.home}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}#services`} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                {t.services}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}#about`} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                {t.about}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}#contact`} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                {t.contact}
              </Link>
            </li>
            
            {/* Mobile Language Switcher */}
            <li className="pt-4 border-t border-gray-100 dark:border-slate-800 sm:hidden">
              <button 
                onClick={() => { switchLanguage(); setIsMobileMenuOpen(false); }}
                className="w-full text-start text-blue-600 dark:text-blue-400 font-semibold"
              >
                {lang === "ar" ? "Switch to English" : "التبديل للعربية"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}