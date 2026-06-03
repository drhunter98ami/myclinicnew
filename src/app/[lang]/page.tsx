// src/app/[lang]/page.tsx
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import AboutDoctor from '../../components/AboutDoctor';
import FAQ from '../../components/FAQ';
import Contact from '../../components/Contact'; 
import Footer from '../../components/Footer';

export default async function Home({ 
  params 
}: { 
  params: Promise<{ lang: string }> 
}) {
  const { lang } = await params;
  
  const heroDictionary = {
    title: lang === 'ar' 
      ? <>رعاية أسنان متخصصة تثق بها في عيادة <span className="text-blue-600 dark:text-blue-400 font-bold">د. أحمد خليف</span></>
      : <>Expert Dental Care You Can Trust at <span className="text-blue-600 dark:text-blue-400 font-bold">Dr. Ahmad Khlif</span> Clinic</>,
    subtitle: lang === 'ar'
      ? 'نقدم أحدث علاجات طب وتجميل الأسنان برعاية شخصية مكرسة لصحة وجمال ابتسامتك.'
      : 'We offer advanced dental and cosmetic treatments with personalized care dedicated to the health and beauty of your smile.',
    primaryCta: lang === 'ar' ? 'احجز موعدك الآن' : 'Book an Appointment',
    secondaryCta: lang === 'ar' ? 'اكتشف خدماتنا' : 'Explore Our Services',
  };

  const servicesDictionary = {
    sectionTitle: lang === 'ar' ? 'خدمات طب الأسنان' : 'Our Dental Services',
    sectionSubtitle: lang === 'ar' 
      ? 'نقدم مجموعة شاملة من خدمات العناية بالأسنان للحصول على ابتسامة صحية ومشرقة.' 
      : 'We provide a comprehensive range of dental services to help you achieve a healthy, bright smile.',
    services: [
      {
        id: 'radiography',
        title: lang === 'ar' ? 'التصوير الشعاعي الذروي' : 'Periapical Radiography',
        description: lang === 'ar' 
          ? 'تصوير شعاعي دقيق لتشخيص مشاكل جذور الأسنان والعظام المحيطة بها بدقة عالية.' 
          : 'Precise digital x-rays for accurate diagnosis of tooth roots and surrounding bone structures.'
      },
      {
        id: 'general',
        title: lang === 'ar' ? 'طب الأسنان العام' : 'General Dentistry',
        description: lang === 'ar' 
          ? 'فحوصات شاملة، تنظيف الأسنان، وعلاج التسوس للحفاظ على صحة الفم والأسنان.' 
          : 'Comprehensive exams, cleanings, and cavity treatments to maintain your oral health.'
      },
      {
        id: 'cosmetic',
        title: lang === 'ar' ? 'تجميل الأسنان' : 'Cosmetic Dentistry',
        description: lang === 'ar' 
          ? 'ابتسامة هوليود، الجسور السنية، والقشور الخزفية (الفينير) لابتسامة أكثر إشراقاً وجاذبية.' 
          : 'Hollywood smile, dental bridges, and veneers for a brighter, more attractive smile.'
      },
      {
        id: 'endodontics',
        title: lang === 'ar' ? 'المعالجات اللبية (علاج العصب)' : 'Endodontics (Root Canal)',
        description: lang === 'ar' 
          ? 'علاج جذور الأسنان وسحب العصب بأحدث الأجهزة لضمان التخلص من الألم والحفاظ على السن الطبيعي.' 
          : 'Painless root canal therapies and nerve treatments using advanced technology to save your natural teeth and relieve pain.'
      }
    ]
  };

  const aboutDoctorDictionary = {
    sectionTitle: lang === 'ar' ? 'تعرف على طبيبك' : 'Meet Your Doctor',
    name: lang === 'ar' ? 'د. أحمد خليف' : 'Dr. Ahmad Khlif',
    specialty: lang === 'ar' ? 'أخصائي طب وجراحة الفم والأسنان' : 'Specialist in Dental Medicine and Surgery',
    bioParagraph1: lang === 'ar' 
      ? 'يمتلك الدكتور أحمد خليف خبرة واسعة في تقديم رعاية أسنان شاملة ومتقدمة. نلتزم في عيادتنا بتوفير بيئة مريحة وآمنة لكل مريض.' 
      : 'Dr. Ahmad Khlif has extensive experience in providing comprehensive and advanced dental care. At our clinic, we are committed to providing a comfortable and safe environment for every patient.',
    bioParagraph2: lang === 'ar' 
      ? 'نحن نستخدم أحدث التقنيات الطبية لضمان حصولك على ابتسامة صحية وجميلة تدوم مدى الحياة.' 
      : 'We utilize the latest medical technologies to ensure you achieve a healthy, beautiful smile that lasts a lifetime.',
    credentials: lang === 'ar' 
      ? [
          'نولي اهتماماً كبيراً بأعلى معايير التعقيم والنظافة لضمان سلامتكم',
          'خبرة واسعة في تقديم رعاية أسنان شاملة ومتقدمة',
          'استخدام أحدث التقنيات الطبية لضمان أفضل النتائج'
        ]
      : [
          'Strict adherence to the highest standards of sterilization and hygiene for your safety',
          'Extensive experience in providing comprehensive and advanced dental care',
          'Utilizing the latest medical technologies to ensure the best results'
        ],
    cta: lang === 'ar' ? 'احجز موعدك الآن' : 'Book Your Appointment',
  };

  const faqDictionary = {
    title: lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
    subtitle: lang === 'ar' 
      ? 'إليك إجابات على بعض الأسئلة التي يطرحها مرضانا عادةً.' 
      : 'Here are answers to some questions our patients frequently ask.',
    items: [
      {
        question: lang === 'ar' ? 'هل علاجات الأسنان مؤلمة؟' : 'Are dental treatments painful?',
        answer: lang === 'ar' 
          ? 'نحن نستخدم أحدث تقنيات التخدير الموضعي لضمان تجربة خالية من الألم ومريحة تماماً.' 
          : 'We use the latest local anesthetic techniques to ensure a completely painless and comfortable experience.'
      },
      {
        question: lang === 'ar' ? 'هل تدوم الجسور أو التركيبات السنية طويلاً؟' : 'Do dental bridges and prosthetics last long?',
        answer: lang === 'ar' 
          ? 'نعم، مع العناية الجيدة بنظافة الفم والزيارات الدورية، يمكن أن تدوم الجسور والتركيبات لسنوات عديدة.' 
          : 'Yes, with proper oral hygiene and regular dental check-ups, your bridges and prosthetics can last for many years.'
      },
      {
        question: lang === 'ar' ? 'كم مرة يجب أن أزور طبيب الأسنان للفحص الدوري؟' : 'How often should I visit the dentist for a check-up?',
        answer: lang === 'ar' 
          ? 'نوصي بزيارة العيادة كل 6 أشهر لإجراء فحص شامل وتنظيف للأسنان للوقاية من أي مشاكل.' 
          : 'We recommend visiting the clinic every 6 months for a comprehensive exam and cleaning to prevent any issues.'
      }
    ]
  };

  const contactDictionary = {
    sectionTitle: lang === 'ar' ? 'تواصل معنا' : 'Contact Us',
    sectionSubtitle: lang === 'ar' 
      ? 'نحن هنا للإجابة على استفساراتكم وحجز مواعيدكم بسهولة.' 
      : 'We are here to answer your questions and schedule your appointments easily.',
    addressTitle: lang === 'ar' ? 'عنوان العيادة' : 'Clinic Address',
    address: lang === 'ar' 
      ? 'الحسكة, دوار الصالحية, عبارة رشك, بجانب الأرمني للصرافة' 
      : 'Al-Hasakah, Al-Salihiyah Roundabout, Rashak Passage, next to Al-Armani Exchange',
    phoneTitle: lang === 'ar' ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp',
    phone: '+963 935 606 912', 
    emailTitle: lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address',
    email: 'dr-ahmad-khlef@myclinicapp.cloud',
    hoursTitle: lang === 'ar' ? 'ساعات العمل' : 'Working Hours',
    hours: lang === 'ar' 
      ? [
          'السبت - الخميس:',
          'صباحي من 9:00 ص لل 2:00 م',
          'مسائي من 6:00 م لل 10:00 م',
          'الجمعة: مغلق'
        ]
      : [
          'Sat - Thu:',
          'Morning: 9:00 AM - 2:00 PM',
          'Evening: 6:00 PM - 10:00 PM',
          'Friday: Closed'
        ],
    cta: lang === 'ar' ? 'ذهاب للموقع' : 'Go to Location',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3206.653230200339!2d40.760752!3d36.51423200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDMwJzUxLjIiTiA0MMKwNDUnMzguNyJF!5e0!3m2!1sen!2s!4v1779380575942!5m2!1sen!2s',
    mapLink: 'https://maps.app.goo.gl/XB6n8gB9M3wZkuUu6',
  };

  const footerDictionary = {
    clinicName: lang === 'ar' ? 'عيادة د. أحمد خليف لطب الأسنان' : 'Dr. Ahmad Khlif Dental Clinic',
    description: lang === 'ar' 
      ? 'نقدم رعاية استثنائية لأسنانك بلمسة لطيفة. ابتسامتك هي أولويتنا.' 
      : 'Providing exceptional dental care with a gentle touch. Your smile is our priority.',
    quickLinks: lang === 'ar' ? 'روابط سريعة' : 'Quick Links',
    home: lang === 'ar' ? 'الرئيسية' : 'Home',
    services: lang === 'ar' ? 'خدماتنا' : 'Services',
    about: lang === 'ar' ? 'عن الطبيب' : 'About Doctor',
    contact: lang === 'ar' ? 'اتصل بنا' : 'Contact Us',
    
    workingHoursTitle: lang === 'ar' ? 'ساعات العمل' : 'Working Hours',
    contactInfoTitle: lang === 'ar' ? 'معلومات التواصل' : 'Contact Info',
    address: lang === 'ar' 
      ? 'الحسكة, دوار الصالحية, عبارة رشك, بجانب الأرمني للصرافة' 
      : 'Al-Hasakah, Al-Salihiyah Roundabout, Rashak Passage, next to Al-Armani Exchange',
    phone: '+963 935 606 912',
    email: 'dr-ahmad-khlef@myclinicapp.cloud',

    workingHours: lang === 'ar' 
      ? 'السبت - الخميس:\nصباحي من 9:00 ص لل 2:00 م\nمسائي من 6:00 م لل 10:00 م\nالجمعة: مغلق' 
      : 'Sat - Thu:\nMorning: 9:00 AM - 2:00 PM\nEvening: 6:00 PM - 10:00 PM\nFriday: Closed',
    rights: lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.',
    privacyPolicy: lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy',
    termsOfService: lang === 'ar' ? 'شروط الخدمة' : 'Terms of Service'
  };

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300">
      <Hero lang={lang} dictionary={heroDictionary} />
      <Services lang={lang} dictionary={servicesDictionary} />
      <AboutDoctor dict={aboutDoctorDictionary} /> 
      <FAQ dict={faqDictionary} />
      <Contact dict={contactDictionary} />
      <Footer dict={footerDictionary} lang={lang} />
    </main>
  );
}