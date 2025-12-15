import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations: Record<string, Record<string, string>> = {
  ar: {
    // Nav
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "خدماتنا",
    nav_projects: "مشاريعنا",
    nav_contact: "اتصل بنا",
    nav_cta: "تواصل معنا",
    nav_download_profile: "تحميل البروفايل",
    
    // Hero
    hero_badge: "رؤية المستقبل، نبنيها اليوم",
    hero_title_1: "عمارية العهود",
    hero_title_highlight: "التجارية",
    hero_subtitle: "شريكك الموثوق في عالم المقاولات",
    hero_desc: "نقدم حلولاً متكاملة في مجال البناء والتشييد بأعلى معايير الجودة والسلامة. نحول رؤيتكم إلى واقع ملموس بأيدي أمهر المهندسين والعمال.",
    hero_btn_quote: "اطلب عرض سعر",
    hero_btn_projects: "تصفح مشاريعنا",
    
    // Stats
    stats_exp: "سنوات خبرة تضمن الجودة",
    stats_projects: "مشروع مكتمل",
    stats_engineers: "مهندس خبير",
    stats_satisfaction: "رضا العملاء",
    
    // Services
    services_title: "خدماتنا المتميزة",
    services_desc: "نقدم مجموعة شاملة من الخدمات الهندسية والمقاولات لتلبية كافة احتياجات مشاريعكم",
    service_contracting: "المقاولات العامة",
    service_contracting_desc: "تنفيذ كافة أعمال البناء والتشييد للمباني السكنية والتجارية بأعلى المعايير.",
    service_design: "التصميم الهندسي",
    service_design_desc: "تصاميم معمارية وإنشائية مبتكرة تراعي احتياجات العميل والذوق العام.",
    service_management: "إدارة المشاريع",
    service_management_desc: "إشراف كامل على سير العمل لضمان التسليم في الوقت المحدد وبالميزانية المتفق عليها.",
    service_finishing: "أعمال التشطيبات",
    service_finishing_desc: "تشطيبات داخلية وخارجية فاخرة باستخدام أفضل المواد وأحدث التقنيات.",
    service_mep: "الأعمال الكهربائية والميكانيكية",
    service_mep_desc: "تأسيس وتشغيل كافة الأنظمة الكهربائية والميكانيكية بكفاءة وأمان.",
    service_equipment: "تأجير المعدات",
    service_equipment_desc: "توفير أحدث المعدات والآليات الثقيلة اللازمة للمشاريع الكبرى.",
    
    // Quote
    quote_text: "الجودة ليست فعلاً، بل هي عادة. نحن نبني الثقة قبل البناء",
    
    // Projects
    projects_title: "أحدث مشاريعنا",
    projects_desc: "شاهد بعض من أعمالنا التي نفخر بإنجازها",
    projects_view_all: "عرض جميع المشاريع",
    project_1_title: "فيلا الياسمين",
    project_1_loc: "الرياض، حي الياسمين",
    project_1_cat: "سكني",
    project_2_title: "مجمع النخيل التجاري",
    project_2_loc: "جدة، الكورنيش",
    project_2_cat: "تجاري",
    project_3_title: "قصر الروابي",
    project_3_loc: "الخبر، حي الروابي",
    project_3_cat: "سكني فاخر",
    
    // Contact
    contact_title: "تواصل معنا",
    contact_desc: "نحن هنا للإجابة على استفساراتكم ومناقشة مشاريعكم القادمة. لا تتردد في التواصل معنا للحصول على استشارة مجانية.",
    contact_location_title: "الموقع",
    contact_location_val: "المملكة العربية السعودية - جدة - حي الروضة - طريق الأمير سعود الفيصل",
    contact_phone_title: "الهاتف",
    contact_email_title: "البريد الإلكتروني",
    contact_hours_title: "ساعات العمل",
    contact_hours_val: "الأحد - الخميس: 8:00 ص - 5:00 م",
    contact_form_title: "أرسل لنا رسالة",
    contact_label_name: "الاسم",
    contact_placeholder_name: "الاسم الكامل",
    contact_label_phone: "رقم الهاتف",
    contact_label_email: "البريد الإلكتروني",
    contact_label_msg: "الرسالة",
    contact_placeholder_msg: "كيف يمكننا مساعدتك؟",
    contact_submit: "إرسال الرسالة",
    
    // Footer
    footer_desc: "شركة عمارية العهود التجارية، شريكك الاستراتيجي في عالم البناء والمقاولات. نلتزم بالجودة والاحترافية في كل مشروع ننفذه.",
    footer_links: "روابط سريعة",
    footer_services: "خدماتنا",
    footer_rights: "© 2025 شركة عمارية العهود التجارية. جميع الحقوق محفوظة.",
    footer_credit: "تصميم وتطوير بواسطة Replit",
    footer_service_1: "المقاولات العامة",
    footer_service_2: "التصميم المعماري",
    footer_service_3: "التشطيبات الداخلية",
    footer_service_4: "إدارة المشاريع",
    footer_service_5: "الاستشارات الهندسية",
  },
  en: {
    // Nav
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_contact: "Contact",
    nav_cta: "Contact Us",
    nav_download_profile: "Download Profile",

    // Hero
    hero_badge: "Building the Future Today",
    hero_title_1: "Amariah Al-Ohood",
    hero_title_highlight: "Commercial",
    hero_subtitle: "Your Trusted Partner in Contracting",
    hero_desc: "We provide integrated solutions in construction with the highest standards of quality and safety. We turn your vision into reality with skilled engineers and workers.",
    hero_btn_quote: "Request a Quote",
    hero_btn_projects: "Browse Projects",

    // Stats
    stats_exp: "Years of Experience Guarantee Quality",
    stats_projects: "Completed Projects",
    stats_engineers: "Expert Engineers",
    stats_satisfaction: "Client Satisfaction",

    // Services
    services_title: "Our Distinguished Services",
    services_desc: "We offer a comprehensive range of engineering and contracting services to meet all your project needs",
    service_contracting: "General Contracting",
    service_contracting_desc: "Execution of all construction works for residential and commercial buildings with the highest standards.",
    service_design: "Engineering Design",
    service_design_desc: "Innovative architectural and structural designs that consider client needs and general taste.",
    service_management: "Project Management",
    service_management_desc: "Full supervision of workflow to ensure delivery on time and within budget.",
    service_finishing: "Finishing Works",
    service_finishing_desc: "Luxury interior and exterior finishing using the best materials and latest technologies.",
    service_mep: "MEP Works",
    service_mep_desc: "Installation and operation of all electrical and mechanical systems efficiently and safely.",
    service_equipment: "Equipment Rental",
    service_equipment_desc: "Providing the latest heavy equipment and machinery needed for major projects.",

    // Quote
    quote_text: "\"Quality is not an act, it is a habit. We build trust before we build.\"",

    // Projects
    projects_title: "Our Latest Projects",
    projects_desc: "See some of the work we are proud to have accomplished",
    projects_view_all: "View All Projects",
    project_1_title: "Al-Yasmeen Villa",
    project_1_loc: "Riyadh, Al-Yasmeen District",
    project_1_cat: "Residential",
    project_2_title: "Al-Nakheel Commercial Complex",
    project_2_loc: "Jeddah, Corniche",
    project_2_cat: "Commercial",
    project_3_title: "Al-Rawabi Palace",
    project_3_loc: "Al-Khobar, Al-Rawabi District",
    project_3_cat: "Luxury Residential",

    // Contact
    contact_title: "Contact Us",
    contact_desc: "We are here to answer your inquiries and discuss your future projects. Feel free to contact us for a free consultation.",
    contact_location_title: "Location",
    contact_location_val: "Saudi Arabia - Jeddah - Al-Rawdah District - Prince Saud Al-Faisal Road",
    contact_phone_title: "Phone",
    contact_email_title: "Email",
    contact_hours_title: "Working Hours",
    contact_hours_val: "Sunday - Thursday: 8:00 AM - 5:00 PM",
    contact_form_title: "Send us a message",
    contact_label_name: "Name",
    contact_placeholder_name: "Full Name",
    contact_label_phone: "Phone Number",
    contact_label_email: "Email",
    contact_label_msg: "Message",
    contact_placeholder_msg: "How can we help you?",
    contact_submit: "Send Message",

    // Footer
    footer_desc: "Amariah Al-Ohood Commercial Company, your strategic partner in the world of construction and contracting. We are committed to quality and professionalism in every project we execute.",
    footer_links: "Quick Links",
    footer_services: "Services",
    footer_rights: "© 2025 Amariah Al-Ohood Commercial. All rights reserved.",
    footer_credit: "Designed & Developed by Replit",
    footer_service_1: "General Contracting",
    footer_service_2: "Architectural Design",
    footer_service_3: "Interior Finishing",
    footer_service_4: "Project Management",
    footer_service_5: "Engineering Consulting",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
