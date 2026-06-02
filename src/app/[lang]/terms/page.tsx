import React from 'react';

// Next.js 15+ requires params to be a Promise
type Props = {
  params: Promise<{ lang: 'en' | 'ar' }>;
};

// Hardcoded bilingual dictionary
const dictionaries = {
  en: {
    title: "Terms of Service",
    lastUpdated: "Last Updated: May 2026",
    intro: "Welcome to the website of Dr. Ahmad Khlif Dental Clinic. By accessing or using our website and services, you agree to be bound by the following terms and conditions. Please read them carefully.",
    sections: [
      {
        heading: "1. Use of the Website",
        content: "This website is intended to provide information about our dental services and facilitate appointment bookings. You agree to use this site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website."
      },
      {
        heading: "2. Medical Disclaimer",
        content: "The content provided on this website is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your dentist or other qualified health provider with any questions you may have regarding a medical condition."
      },
      {
        heading: "3. Appointments and Cancellations",
        content: "When booking an appointment through our platform, you agree to provide accurate information. If you need to cancel or reschedule, we kindly request a minimum of 24 hours' notice to accommodate other patients."
      },
      {
        heading: "4. Intellectual Property",
        content: "All content, designs, graphics, and text on this website are the intellectual property of Dr. Ahmad Khlif Dental Clinic unless otherwise stated. Unauthorized use, reproduction, or distribution of this material is strictly prohibited."
      },
      {
        heading: "5. Modifications to Terms",
        content: "We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of those changes."
      }
    ]
  },
  ar: {
    title: "شروط الخدمة",
    lastUpdated: "آخر تحديث: مايو 2026",
    intro: "مرحباً بكم في موقع عيادة الدكتور أحمد خليف لطب الأسنان. بوصولك أو استخدامك لموقعنا وخدماتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية. يرجى قراءتها بعناية.",
    sections: [
      {
        heading: "1. استخدام الموقع",
        content: "يهدف هذا الموقع إلى توفير معلومات حول خدمات طب الأسنان التي نقدمها وتسهيل حجز المواعيد. أنت توافق على استخدام هذا الموقع لأغراض قانونية فقط، وبطريقة لا تنتهك حقوق أي شخص آخر أو تقيد أو تمنع استخدامه واستمتاعه بالموقع."
      },
      {
        heading: "2. إخلاء المسؤولية الطبية",
        content: "المحتوى المقدم على هذا الموقع هو لأغراض إعلامية فقط ولا يُقصد به أن يكون بديلاً عن الاستشارة الطبية المتخصصة أو التشخيص أو العلاج. اطلب دائماً نصيحة طبيب أسنانك أو غيره من مقدمي الرعاية الصحية المؤهلين بشأن أي أسئلة قد تكون لديك بخصوص حالة طبية."
      },
      {
        heading: "3. المواعيد والإلغاء",
        content: "عند حجز موعد من خلال منصتنا، فإنك توافق على تقديم معلومات دقيقة. إذا كنت بحاجة إلى إلغاء أو إعادة جدولة الموعد، نرجو منك إبلاغنا قبل 24 ساعة على الأقل لاستيعاب المرضى الآخرين."
      },
      {
        heading: "4. الملكية الفكرية",
        content: "جميع المحتويات والتصميمات والرسومات والنصوص الموجودة على هذا الموقع هي ملكية فكرية لعيادة الدكتور أحمد خليف لطب الأسنان ما لم يُنص على خلاف ذلك. يُحظر تماماً الاستخدام غير المصرح به أو الاستنساخ أو التوزيع لهذه المواد."
      },
      {
        heading: "5. التعديلات على الشروط",
        content: "نحتفظ بالحق في تحديث أو تعديل شروط الخدمة هذه في أي وقت دون إشعار مسبق. استمرارك في استخدام الموقع بعد أي تغييرات يشكل قبولاً لهذه التغييرات."
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

export default async function TermsOfServicePage({ params }: Props) {
  const { lang } = await params;
  // Fallback to Arabic (ar)
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