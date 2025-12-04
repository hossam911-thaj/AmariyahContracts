import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

type Translations = {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    team: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    title_prefix: string;
    title_suffix: string;
    subtitle: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
  };
  stats: {
    experience: string;
    projects: string;
    engineers: string;
    satisfaction: string;
    years: string;
    completed: string;
    expert: string;
    clients: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      general: { title: string; desc: string };
      design: { title: string; desc: string };
      management: { title: string; desc: string };
      finishing: { title: string; desc: string };
      mep: { title: string; desc: string };
      equipment: { title: string; desc: string };
    };
  };
  projects: {
    title: string;
    subtitle: string;
    view_all: string;
    items: {
      villa: { title: string; cat: string; loc: string };
      mall: { title: string; cat: string; loc: string };
      palace: { title: string; cat: string; loc: string };
    };
  };
  team: {
    title: string;
    subtitle: string;
    roles: {
      manager: string;
      field: string;
      safety: string;
    };
  };
  contact: {
    title: string;
    desc: string;
    location: { title: string; val: string };
    phone: { title: string; };
    email: { title: string; };
    hours: { title: string; val: string };
    form: {
      title: string;
      name: string;
      phone: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    desc: string;
    quick_links: string;
    services_title: string;
    rights: string;
  };
  quote: string;
};

const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "مشاريعنا",
      team: "فريق العمل",
      contact: "اتصل بنا",
      cta: "تواصل معنا",
    },
    hero: {
      badge: "رؤية المستقبل، نبنيها اليوم",
      title_prefix: "عمارية العهود",
      title_suffix: "التجارية",
      subtitle: "شريكك الموثوق في عالم المقاولات",
      description: "نقدم حلولاً متكاملة في مجال البناء والتشييد بأعلى معايير الجودة والسلامة. نحول رؤيتكم إلى واقع ملموس بأيدي أمهر المهندسين والعمال.",
      cta_primary: "اطلب عرض سعر",
      cta_secondary: "تصفح مشاريعنا",
    },
    stats: {
      experience: "+15",
      years: "سنة خبرة",
      projects: "+200",
      completed: "مشروع مكتمل",
      engineers: "+50",
      expert: "مهندس خبير",
      satisfaction: "100%",
      clients: "رضا العملاء",
    },
    services: {
      title: "خدماتنا المتميزة",
      subtitle: "نقدم مجموعة شاملة من الخدمات الهندسية والمقاولات لتلبية كافة احتياجات مشاريعكم",
      items: {
        general: { title: "المقاولات العامة", desc: "تنفيذ كافة أعمال البناء والتشييد للمباني السكنية والتجارية بأعلى المعايير." },
        design: { title: "التصميم الهندسي", desc: "تصاميم معمارية وإنشائية مبتكرة تراعي احتياجات العميل والذوق العام." },
        management: { title: "إدارة المشاريع", desc: "إشراف كامل على سير العمل لضمان التسليم في الوقت المحدد وبالميزانية المتفق عليها." },
        finishing: { title: "أعمال التشطيبات", desc: "تشطيبات داخلية وخارجية فاخرة باستخدام أفضل المواد وأحدث التقنيات." },
        mep: { title: "الأعمال الكهربائية والميكانيكية", desc: "تأسيس وتشغيل كافة الأنظمة الكهربائية والميكانيكية بكفاءة وأمان." },
        equipment: { title: "تأجير المعدات", desc: "توفير أحدث المعدات والآليات الثقيلة اللازمة للمشاريع الكبرى." },
      },
    },
    projects: {
      title: "أحدث مشاريعنا",
      subtitle: "شاهد بعض من أعمالنا التي نفخر بإنجازها",
      view_all: "عرض جميع المشاريع ←",
      items: {
        villa: { title: "فيلا الياسمين", cat: "سكني", loc: "الرياض، حي الياسمين" },
        mall: { title: "مجمع النخيل التجاري", cat: "تجاري", loc: "جدة، الكورنيش" },
        palace: { title: "قصر الروابي", cat: "سكني فاخر", loc: "الخبر، حي الروابي" },
      },
    },
    team: {
      title: "فريق العمل",
      subtitle: "نفتخر بكادرنا الهندسي والفني المدرب على أعلى المستويات",
      roles: {
        manager: "مدير المشاريع",
        field: "فريق العمل الميداني",
        safety: "فريق السلامة",
      },
    },
    contact: {
      title: "تواصل معنا",
      desc: "نحن هنا للإجابة على استفساراتكم ومناقشة مشاريعكم القادمة. لا تتردد في التواصل معنا للحصول على استشارة مجانية.",
      location: { title: "الموقع", val: "الرياض، المملكة العربية السعودية - حي العقيق" },
      phone: { title: "الهاتف" },
      email: { title: "البريد الإلكتروني" },
      hours: { title: "ساعات العمل", val: "الأحد - الخميس: 8:00 ص - 5:00 م" },
      form: {
        title: "أرسل لنا رسالة",
        name: "الاسم",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        submit: "إرسال الرسالة",
      },
    },
    footer: {
      desc: "شركة عمارية العهود التجارية، شريكك الاستراتيجي في عالم البناء والمقاولات. نلتزم بالجودة والاحترافية في كل مشروع ننفذه.",
      quick_links: "روابط سريعة",
      services_title: "خدماتنا",
      rights: "جميع الحقوق محفوظة.",
    },
    quote: "\"الجودة ليست فعلاً، بل هي عادة. نحن نبني الثقة قبل البناء\"",
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      team: "Team",
      contact: "Contact",
      cta: "Contact Us",
    },
    hero: {
      badge: "Building the Future Today",
      title_prefix: "Amariah Al-Ohood",
      title_suffix: "Trading",
      subtitle: "Your Trusted Partner in Construction",
      description: "We provide integrated solutions in construction with the highest quality and safety standards. We turn your vision into reality with the hands of skilled engineers and workers.",
      cta_primary: "Get a Quote",
      cta_secondary: "View Projects",
    },
    stats: {
      experience: "+15",
      years: "Years Exp.",
      projects: "+200",
      completed: "Projects Done",
      engineers: "+50",
      expert: "Expert Engineers",
      satisfaction: "100%",
      clients: "Client Satisfaction",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive engineering and construction services to meet all your project needs",
      items: {
        general: { title: "General Contracting", desc: "Execution of all construction work for residential and commercial buildings with the highest standards." },
        design: { title: "Engineering Design", desc: "Innovative architectural and structural designs considering client needs and public taste." },
        management: { title: "Project Management", desc: "Complete supervision of workflow to ensure delivery on time and within budget." },
        finishing: { title: "Finishing Works", desc: "Luxury interior and exterior finishing using the best materials and latest technologies." },
        mep: { title: "MEP Works", desc: "Installation and operation of all electrical and mechanical systems efficiently and safely." },
        equipment: { title: "Equipment Rental", desc: "Providing the latest heavy equipment and machinery needed for major projects." },
      },
    },
    projects: {
      title: "Latest Projects",
      subtitle: "See some of the work we are proud to have accomplished",
      view_all: "View All Projects →",
      items: {
        villa: { title: "Al-Yasmin Villa", cat: "Residential", loc: "Riyadh, Al-Yasmin" },
        mall: { title: "Al-Nakheel Mall", cat: "Commercial", loc: "Jeddah, Corniche" },
        palace: { title: "Al-Rawabi Palace", cat: "Luxury Residential", loc: "Khobar, Al-Rawabi" },
      },
    },
    team: {
      title: "Our Team",
      subtitle: "We are proud of our highly trained engineering and technical staff",
      roles: {
        manager: "Project Manager",
        field: "Field Team",
        safety: "Safety Team",
      },
    },
    contact: {
      title: "Contact Us",
      desc: "We are here to answer your inquiries and discuss your upcoming projects. Feel free to contact us for a free consultation.",
      location: { title: "Location", val: "Riyadh, Saudi Arabia - Al-Aqiq Dist." },
      phone: { title: "Phone" },
      email: { title: "Email" },
      hours: { title: "Working Hours", val: "Sun - Thu: 8:00 AM - 5:00 PM" },
      form: {
        title: "Send us a message",
        name: "Name",
        phone: "Phone Number",
        email: "Email",
        message: "Message",
        submit: "Send Message",
      },
    },
    footer: {
      desc: "Amariah Al-Ohood Trading Company, your strategic partner in construction. We commit to quality and professionalism in every project we execute.",
      quick_links: "Quick Links",
      services_title: "Our Services",
      rights: "All Rights Reserved.",
    },
    quote: "\"Quality is not an act, it is a habit. We build trust before buildings.\"",
  },
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: "rtl" | "ltr";
}>({
  language: "ar",
  setLanguage: () => {},
  t: translations.ar,
  dir: "rtl",
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
        dir: language === "ar" ? "rtl" : "ltr",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
