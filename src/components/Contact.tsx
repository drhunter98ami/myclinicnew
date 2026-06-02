// components/Contact.tsx
export interface ContactProps {
  dict: {
    sectionTitle: string;
    sectionSubtitle: string;
    addressTitle: string;
    address: string;
    phoneTitle: string;
    phone: string;
    emailTitle: string;
    email: string;
    hoursTitle: string;
    hours: string[];
    cta: string;
    mapEmbedUrl: string; // Added for the iframe
    mapLink: string;     // Added for the external link
  };
}

export default function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            {dict.sectionTitle}
          </h2>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {dict.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Info Cards Column */}
          <div className="space-y-6">
            
            {/* Phone Card */}
            <div className="flex items-center p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg rtl:ml-5 ltr:mr-5">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{dict.phoneTitle}</h4>
                <p className="mt-1 text-slate-600 dark:text-slate-300" dir="ltr">{dict.phone}</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-center p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg rtl:ml-5 ltr:mr-5">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{dict.emailTitle}</h4>
                <p className="mt-1 text-slate-600 dark:text-slate-300" dir="ltr">
                  <a href={`mailto:${dict.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {dict.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="flex items-center p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg rtl:ml-5 ltr:mr-5">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{dict.addressTitle}</h4>
                <p className="mt-1 text-slate-600 dark:text-slate-300">{dict.address}</p>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="flex items-start p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg rtl:ml-5 ltr:mr-5">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{dict.hoursTitle}</h4>
                <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                  {dict.hours.map((hour, idx) => (
                    <li key={idx}>{hour}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Map & CTA Column */}
          <div className="h-full flex flex-col bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
            {/* Google Maps Embed */}
            <div className="flex-grow min-h-[300px] relative w-full h-full">
              <iframe
                title="Clinic Location"
                src={dict.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <div className="p-8 text-center bg-blue-600 dark:bg-blue-700">
              <p className="text-white mb-4 font-medium">{dict.sectionSubtitle}</p>
              <a 
                href={dict.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-8 py-3 text-lg font-bold text-blue-600 bg-white rounded-lg hover:bg-slate-50 transition-colors shadow-md text-center"
              >
                {dict.cta}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}