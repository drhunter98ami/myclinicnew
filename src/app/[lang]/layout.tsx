import { Cairo, Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import WhatsAppButton from "../../components/WhatsAppButton"; // <-- Imported WhatsApp Button
import "../globals.css"; 
import { Metadata } from "next"; // <-- 1. Added Next.js Metadata type

// Initialize both fonts
const cairo = Cairo({ subsets: ["latin", "arabic"] });
const inter = Inter({ subsets: ["latin"] });

// <-- 2. Replaced static metadata with dynamic generateMetadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (lang === "ar") {
    return {
      title: "عيادة د. أحمد خليف لطب الأسنان",
      description: "عيادة خاصة لطب وتجميل الأسنان بإشراف الدكتور أحمد خليف. نقدم أفضل الرعاية الطبية وأحدث العلاجات لضمان صحة وجمال ابتسامتك.",
    };
  }

  return {
    title: "Dr. Ahmad Khlif - Dental Clinic",
    description: "Private Dental Clinic of Dr. Ahmad Khlif. Providing expert dental and cosmetic treatments with a gentle touch to ensure a healthy, beautiful smile.",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  // Await the params to get the language
  const { lang } = await params;
  const dir = lang === "ar" ? "rtl" : "ltr";
  
  // Dynamically choose the font based on the language
  const fontClass = lang === "ar" ? cairo.className : inter.className;

  return (
    <html lang={lang} dir={dir} className="scroll-smooth">
      {/* Applied fontClass and global dark mode classes */}
      <body className={`${fontClass} bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased transition-colors duration-300`}>
        <Navbar lang={lang} />
        
        {children}
        
        {/* Added the Floating WhatsApp Button */}
        <WhatsAppButton lang={lang} />
      </body>
    </html>
  );
}