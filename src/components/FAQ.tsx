'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  dict: {
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
}

export default function FAQ({ dict }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {dict.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {dict.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-start font-medium text-gray-900 dark:text-white hover:bg-gray-100/50 dark:hover:bg-slate-800 transition-colors duration-200 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Animated Wrapper for Smooth Collapse */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-5 pt-0 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed border-t border-gray-100 dark:border-slate-800/80">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}