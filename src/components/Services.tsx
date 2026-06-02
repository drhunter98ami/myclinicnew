import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
}

interface ServicesProps {
  lang: string;
  dictionary: {
    sectionTitle: string;
    sectionSubtitle: string;
    services: Service[];
  };
}

// Helper function to return a specific icon based on the service ID
const getServiceIcon = (id: string) => {
  switch (id) {
    case 'radiography':
      // Icon: A tooth wrapped in scanner/x-ray corner brackets
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4M15 3h4a2 2 0 012 2v4M9 21H5a2 2 0 01-2-2v-4M15 21h4a2 2 0 002-2v-4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.5 16.5c1.1-1.33 2-3 2-5.33a5.33 5.33 0 0 0-10.66 0c0 2.33.9 4 2 5.33l.19.23a1.33 1.33 0 0 0 2.3-.81l.18-1.75v0a1.33 1.33 0 0 1 2.66 0v0l.19 1.75a1.33 1.33 0 0 0 2.3.81z" />
        </svg>
      );
    case 'general':
      // Icon: A tooth with a medical health cross inside
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 19.5c1.66-2 3-4.5 3-8a8 8 0 0 0-16 0c0 3.5 1.34 6 3 8l.28.34a2 2 0 0 0 3.44-1.22l.28-2.62v0a2 2 0 0 1 4 0v0l.28 2.62a2 2 0 0 0 3.44 1.22z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9h6m-3-3v6" />
        </svg>
      );
    case 'cosmetic':
      // Icon: A beautifully contoured tooth surrounded by sparkles/stars
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.5c1.25-1.5 2.25-3.37 2.25-6a6 6 0 0 0-12 0c0 2.63 1 4.5 2.25 6l.21.26a1.5 1.5 0 0 0 2.58-.92l.21-1.97v0a1.5 1.5 0 0 1 3 0v0l.21 1.97a1.5 1.5 0 0 0 2.58.92z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 2l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 4l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5z" />
        </svg>
      );
    case 'endodontics':
      // Icon: A tooth detailing the interior root canal nerves
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 19.5c1.66-2 3-4.5 3-8a8 8 0 0 0-16 0c0 3.5 1.34 6 3 8l.28.34a2 2 0 0 0 3.44-1.22l.28-2.62v0a2 2 0 0 1 4 0v0l.28 2.62a2 2 0 0 0 3.44 1.22z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v4c0 1.5-2 2-2 4v4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 1.5 2 2 2 4v4" />
        </svg>
      );
    default:
      // Fallback regular tooth icon
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 19.5c1.66-2 3-4.5 3-8a8 8 0 0 0-16 0c0 3.5 1.34 6 3 8l.28.34a2 2 0 0 0 3.44-1.22l.28-2.62v0a2 2 0 0 1 4 0v0l.28 2.62a2 2 0 0 0 3.44 1.22z" />
        </svg>
      );
  }
};

export default function Services({ lang, dictionary }: ServicesProps) {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {dictionary.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {dictionary.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dictionary.services.map((service) => (
            <Link 
              key={service.id}
              href={`/${lang}/services/${service.id}`}
              className="flex flex-col h-full p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:shadow-lg hover:border-blue-100 dark:hover:border-blue-900/50 transition-all duration-300 group block"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                {/* Dynamically render the correct icon */}
                {getServiceIcon(service.id)}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-6">
                {service.description}
              </p>

              <div className="mt-auto flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                <span>{lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}</span>
                <svg 
                  className="w-4 h-4 rtl:mr-1 ltr:ml-1 transform transition-transform duration-300 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}