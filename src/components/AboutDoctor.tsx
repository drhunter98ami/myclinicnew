import Image from "next/image";
import Link from "next/link";

interface AboutDoctorProps {
  dict: {
    sectionTitle: string;
    name: string;
    specialty: string;
    bioParagraph1: string;
    bioParagraph2: string;
    credentials: string[];
    cta: string;
  };
}

export default function AboutDoctor({ dict }: AboutDoctorProps) {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Column */}
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            {/* Replace src with your actual image path, e.g., "/images/dr-ahmad.jpg" */}
            <Image
              src="/images/dr-ahmad.jpg" 
              alt={dict.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Decorative overlay element */}
            <div className="absolute inset-0 border-4 border-blue-600/20 dark:border-blue-400/20 rounded-2xl pointer-events-none"></div>
          </div>

          {/* Content Column */}
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                {dict.sectionTitle}
              </h2>
              <h3 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                {dict.name}
              </h3>
              <p className="mt-2 text-xl text-gray-600 dark:text-gray-300 font-medium">
                {dict.specialty}
              </p>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
              <p>{dict.bioParagraph1}</p>
              <p>{dict.bioParagraph2}</p>
            </div>

            <ul className="space-y-3 pt-4">
              {dict.credentials.map((credential, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5 rtl:ml-3 ltr:mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {credential}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              {/* Changed from <button> to <Link> to navigate to the contact section */}
              <Link 
                href="#contact" 
                className="inline-block px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-md"
              >
                {dict.cta}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}