import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function ServicePage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;

  // 1. The Detailed Dictionary for Inner Pages
  const serviceDetailsDictionary: Record<string, any> = {
    ar: {
      radiography: {
        title: 'التصوير الشعاعي الذروي',
        description: 'نستخدم أحدث أجهزة التصوير الشعاعي الرقمي لتقديم صور دقيقة وعالية الوضوح، مما يساعد في تشخيص مشاكل الجذور والعظام المحيطة بدقة متناهية وبأقل نسبة إشعاع ممكنة.',
        benefits: ['تشخيص دقيق وسريع', 'نسبة إشعاع منخفضة جداً', 'صديقة للبيئة (بدون أفلام كيميائية)'],
      },
      general: {
        title: 'طب الأسنان العام',
        description: 'الأساس لابتسامة صحية يبدأ من العناية المستمرة. نقدم فحوصات شاملة، تنظيف الجير، وعلاج التسوس المبكر لضمان الحفاظ على أسنانك الطبيعية لأطول فترة ممكنة.',
        benefits: ['الوقاية من التسوس وأمراض اللثة', 'الحفاظ على رائحة فم منعشة', 'الكشف المبكر عن المشاكل وعلاجها بتكلفة أقل'],
      },
      cosmetic: {
        title: 'تجميل الأسنان',
        description: 'نصمم ابتسامتك لتناسب ملامح وجهك. من الجسور السنية عالية الجودة إلى القشور الخزفية (الفينير) وابتسامة هوليود، نستخدم أفضل المواد العالمية لمنحك الثقة التي تستحقها.',
        benefits: ['استعادة وظيفة ومظهر الأسنان الطبيعي', 'إغلاق الفراغات وإصلاح الكسور', 'نتائج جمالية تدوم طويلاً'],
      },
      endodontics: {
        title: 'المعالجات اللبية (علاج العصب)',
        description: 'لا داعي للقلق من ألم سحب العصب بعد الآن. نستخدم أجهزة الدوران الآلي وتقنيات التخدير الحديثة لتنظيف قنوات الجذور بدقة وسرعة، مع الحفاظ على هيكل السن الأساسي.',
        benefits: ['علاج خالٍ من الألم', 'إنقاذ السن من الخلع', 'نسبة نجاح عالية جداً'],
      }
    },
    en: {
      radiography: {
        title: 'Periapical Radiography',
        description: 'We use the latest digital radiography equipment to provide clear, high-resolution images, aiding in the accurate diagnosis of root and bone issues with minimal radiation exposure.',
        benefits: ['Fast and accurate diagnosis', 'Extremely low radiation', 'Eco-friendly (no chemical films)'],
      },
      general: {
        title: 'General Dentistry',
        description: 'The foundation of a healthy smile starts with consistent care. We offer comprehensive exams, scaling, and early cavity treatments to ensure your natural teeth last a lifetime.',
        benefits: ['Prevention of cavities and gum disease', 'Maintain fresh breath', 'Early detection saves time and money'],
      },
      cosmetic: {
        title: 'Cosmetic Dentistry',
        description: 'We design your smile to complement your facial features. From high-quality dental bridges to porcelain veneers and Hollywood smiles, we use premium materials to give you the confidence you deserve.',
        benefits: ['Restore natural tooth function and appearance', 'Close gaps and fix chips', 'Long-lasting aesthetic results'],
      },
      endodontics: {
        title: 'Endodontics (Root Canal)',
        description: 'No need to fear root canals anymore. We use advanced rotary endodontics and modern anesthesia to clean root canals quickly and accurately, preserving your natural tooth structure.',
        benefits: ['Painless treatment', 'Save teeth from extraction', 'Very high success rate'],
      }
    }
  };

  // 2. Shared/Global UI Strings
  const globalDict = {
    backButton: lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home',
    benefitsTitle: lang === 'ar' ? 'مميزات العلاج' : 'Treatment Benefits',
    ctaText: lang === 'ar' ? 'احجز موعداً لهذا العلاج' : 'Book an Appointment',
  };

  // 3. Validate ID and Language
  const currentLangDict = serviceDetailsDictionary[lang as keyof typeof serviceDetailsDictionary];
  const serviceData = currentLangDict ? currentLangDict[id] : null;

  if (!serviceData) {
    notFound(); // Triggers Next.js 404 page if ID doesn't exist
  }

  // 4. Render the Page
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Back Button */}
        <Link 
          href={`/${lang}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8 font-medium"
        >
          <span className="rtl:ml-2 ltr:mr-2">&larr;</span>
          {globalDict.backButton}
        </Link>

        {/* Content Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-slate-700">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {serviceData.title}
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
            {serviceData.description}
          </p>

          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {globalDict.benefitsTitle}
            </h2>
            <ul className="space-y-3">
              {serviceData.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 rtl:ml-3 ltr:mr-3 mt-1">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 border-t border-gray-100 dark:border-slate-700">
            <Link 
              href={`/${lang}#contact`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              {globalDict.ctaText}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}