import React from 'react';

// Next.js 15+ requires params to be a Promise
type Props = {
  params: Promise<{ lang: 'en' | 'ar' }>;
};

// Hardcoded bilingual dictionary
const dictionaries = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: May 2026",
    intro: "Welcome to Dr. Ahmad Khlif Dental Clinic. Your privacy and the security of your medical information are our top priorities. This Privacy Policy explains how we collect, use, and protect your personal and health information when you use our website and services.",
    sections: [
      {
        heading: "1. Information We Collect",
        content: "We may collect personal information such as your name, phone number, email address, and specific dental/medical history when you book an appointment, fill out our contact forms, or visit our clinic."
      },
      {
        heading: "2. How We Use Your Information",
        content: "Your information is used strictly to provide you with tailored dental care, manage your appointments, respond to your inquiries, and maintain accurate medical records as required by healthcare regulations."
      },
      {
        heading: "3. Data Security",
        content: "We implement robust security measures, including data encryption and secure local storage, to protect your sensitive medical and personal data against unauthorized access, alteration, or disclosure."
      },
      {
        heading: "4. Sharing Your Information",
        content: "We do not sell or rent your personal data to third parties. We may only share information with legal authorities if strictly required by law."
      },
      {
        heading: "5. Contact Us",
        content: "If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us via the information provided on our Contact page."
      }
    ]
  },
  ar: {
    title: "سياسة الخصوصية",
    lastUpdated: "آخر تحديث: مايو 2026",
    intro: "مرحباً بكم في عيادة الدكتور أحمد خليف لطب الأسنان. خصوصيتك وأمن معلوماتك الطبية هي أهم أولوياتنا. توضح سياسة الخصوصية هذه كيف نقوم بجمع واستخدام وحماية معلوماتك الشخصية والصحية عند استخدامك لموقعنا وخدماتنا.",
    sections: [
      {
        heading: "1. المعلومات التي نجمعها",
        content: "قد نقوم بجمع معلومات شخصية مثل اسمك، رقم هاتفك، عنوان بريدك الإلكتروني، وتاريخك الطبي/السني المحدد عند حجز موعد، أو ملء نماذج الاتصال الخاصة بنا، أو زيارة عيادتنا."
      },
      {
        heading: "2. كيف نستخدم معلوماتك",
        content: "تُستخدم معلوماتك بشكل صارم لتزويدك برعاية أسنان مخصصة، وإدارة مواعيدك، والرد على استفساراتك، والاحتفاظ بسجلات طبية دقيقة كما تتطلب لوائح الرعاية الصحية."
      },
      {
        heading: "3. أمن البيانات",
        content: "نحن ننفذ تدابير أمنية قوية، بما في ذلك تشفير البيانات والتخزين المحلي الآمن، لحماية بياناتك الطبية والشخصية الحساسة من الوصول غير المصرح به أو التعديل أو الإفصاح."
      },
      {
        heading: "4. مشاركة معلوماتك",
        content: "نحن لا نبيع أو نؤجر بياناتك الشخصية لأطراف ثالثة. قد نشارك المعلومات فقط مع السلطات القانونية إذا كان ذلك مطلوباً بشكل صارم بموجب القانون."
      },
      {
        heading: "5. اتصل بنا",
        content: "إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه أو كيف نتعامل مع بياناتك، يرجى الاتصال بنا عبر المعلومات المتوفرة في صفحة 'اتصل بنا'."
      }
    ]
  }
};

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  const dict = dictionaries[lang] || dictionaries.ar;

  return {
    title: `${dict.title} | Dr. Ahmad Khlif Dental Clinic`,
    description: dict.intro,
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { lang } = await params;
  // Fallback to Arabic (ar) if an unsupported language is provided
  const dict = dictionaries[lang] || dictionaries.ar;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-4 border-b border-gray-200 dark:border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-start text-blue-600 dark:text-blue-400">
            {dict.title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-start">
            {dict.lastUpdated}
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-8 text-start">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {dict.intro}
          </p>

          <div className="space-y-6">
            {dict.sections.map((section, index) => (
              <section key={index} className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  {section.heading}
                </h2>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}