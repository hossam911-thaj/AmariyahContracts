import { jsPDF } from "jspdf";

interface PDFGeneratorOptions {
  language: 'ar' | 'en';
  logoBase64?: string;
}

export async function generateCompanyProfile(options: PDFGeneratorOptions): Promise<void> {
  const { language } = options;
  const isArabic = language === 'ar';

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  let yPos = margin;

  // Colors
  const goldColor: [number, number, number] = [212, 175, 55];
  const blackColor: [number, number, number] = [10, 10, 11];
  const grayColor: [number, number, number] = [120, 120, 120];
  const whiteColor: [number, number, number] = [255, 255, 255];

  // Helper functions
  const addText = (text: string, x: number, y: number, size: number, color: [number, number, number] = blackColor, align: 'left' | 'center' | 'right' = 'left') => {
    pdf.setFontSize(size);
    pdf.setTextColor(...color);
    pdf.text(text, x, y, { align });
  };

  const addLine = (y: number, color: [number, number, number] = goldColor) => {
    pdf.setDrawColor(...color);
    pdf.setLineWidth(0.5);
    pdf.line(margin, y, pageWidth - margin, y);
  };

  const addSection = (title: string, y: number): number => {
    addText(title, pageWidth / 2, y, 16, goldColor, 'center');
    addLine(y + 3);
    return y + 15;
  };

  // Page 1: Cover
  pdf.setFillColor(...blackColor);
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');

  // Gold accent line at top
  pdf.setFillColor(...goldColor);
  pdf.rect(0, 0, pageWidth, 5, 'F');

  // Company Name
  const companyName = isArabic ? "عمارية العهود التجارية" : "Amariah Al-Ohood Commercial";
  addText(companyName, pageWidth / 2, 80, 28, goldColor, 'center');

  // Tagline
  const tagline = isArabic ? "شريكك الموثوق في عالم المقاولات" : "Your Trusted Partner in Contracting";
  addText(tagline, pageWidth / 2, 95, 14, whiteColor, 'center');

  // Decorative line
  pdf.setDrawColor(...goldColor);
  pdf.setLineWidth(1);
  pdf.line(60, 110, pageWidth - 60, 110);

  // Vision text
  const vision = isArabic ? "رؤية المستقبل، نبنيها اليوم" : "Building the Future Today";
  addText(vision, pageWidth / 2, 130, 12, grayColor, 'center');

  // Stats
  const stats = isArabic 
    ? [
        { num: "+15", label: "سنة خبرة" },
        { num: "+200", label: "مشروع مكتمل" },
        { num: "+50", label: "مهندس خبير" },
        { num: "100%", label: "رضا العملاء" }
      ]
    : [
        { num: "+15", label: "Years Experience" },
        { num: "+200", label: "Completed Projects" },
        { num: "+50", label: "Expert Engineers" },
        { num: "100%", label: "Client Satisfaction" }
      ];

  const statWidth = (pageWidth - 2 * margin) / 4;
  stats.forEach((stat, i) => {
    const x = margin + statWidth * i + statWidth / 2;
    addText(stat.num, x, 170, 20, goldColor, 'center');
    addText(stat.label, x, 180, 9, whiteColor, 'center');
  });

  // Footer
  const location = isArabic 
    ? "المملكة العربية السعودية - جدة - حي الروضة" 
    : "Saudi Arabia - Jeddah - Al-Rawdah District";
  addText(location, pageWidth / 2, pageHeight - 30, 10, grayColor, 'center');

  // Page 2: About & Services
  pdf.addPage();
  yPos = margin;

  // Header
  pdf.setFillColor(...goldColor);
  pdf.rect(0, 0, pageWidth, 15, 'F');
  addText(companyName, pageWidth / 2, 10, 12, blackColor, 'center');

  yPos = 35;

  // About Section
  const aboutTitle = isArabic ? "من نحن" : "About Us";
  yPos = addSection(aboutTitle, yPos);

  const aboutText = isArabic
    ? "شركة عمارية العهود التجارية، شريكك الاستراتيجي في عالم البناء والمقاولات. نلتزم بالجودة والاحترافية في كل مشروع ننفذه. نقدم حلولاً متكاملة في مجال البناء والتشييد بأعلى معايير الجودة والسلامة."
    : "Amariah Al-Ohood Commercial Company, your strategic partner in the world of construction and contracting. We are committed to quality and professionalism in every project we execute. We provide integrated solutions in construction with the highest standards of quality and safety.";

  pdf.setFontSize(10);
  pdf.setTextColor(...grayColor);
  const aboutLines = pdf.splitTextToSize(aboutText, pageWidth - 2 * margin);
  pdf.text(aboutLines, margin, yPos);
  yPos += aboutLines.length * 5 + 15;

  // Services Section
  const servicesTitle = isArabic ? "خدماتنا" : "Our Services";
  yPos = addSection(servicesTitle, yPos);

  const services = isArabic
    ? [
        { title: "المقاولات العامة", desc: "تنفيذ كافة أعمال البناء والتشييد للمباني السكنية والتجارية" },
        { title: "التصميم الهندسي", desc: "تصاميم معمارية وإنشائية مبتكرة تراعي احتياجات العميل" },
        { title: "إدارة المشاريع", desc: "إشراف كامل على سير العمل لضمان التسليم في الوقت المحدد" },
        { title: "أعمال التشطيبات", desc: "تشطيبات داخلية وخارجية فاخرة باستخدام أفضل المواد" },
        { title: "الأعمال الكهربائية والميكانيكية", desc: "تأسيس وتشغيل كافة الأنظمة الكهربائية والميكانيكية" },
        { title: "تأجير المعدات", desc: "توفير أحدث المعدات والآليات الثقيلة اللازمة للمشاريع" }
      ]
    : [
        { title: "General Contracting", desc: "Execution of all construction works for residential and commercial buildings" },
        { title: "Engineering Design", desc: "Innovative architectural and structural designs" },
        { title: "Project Management", desc: "Full supervision of workflow to ensure delivery on time" },
        { title: "Finishing Works", desc: "Luxury interior and exterior finishing using the best materials" },
        { title: "MEP Works", desc: "Installation and operation of all electrical and mechanical systems" },
        { title: "Equipment Rental", desc: "Providing the latest heavy equipment and machinery" }
      ];

  services.forEach((service, i) => {
    // Service box
    pdf.setFillColor(30, 30, 32);
    pdf.roundedRect(margin, yPos - 3, pageWidth - 2 * margin, 18, 2, 2, 'F');
    
    addText(`${i + 1}. ${service.title}`, margin + 5, yPos + 4, 11, goldColor);
    addText(service.desc, margin + 5, yPos + 11, 8, grayColor);
    yPos += 22;

    if (yPos > pageHeight - 40) {
      pdf.addPage();
      yPos = 30;
    }
  });

  // Page 3: Projects & Contact
  pdf.addPage();
  
  // Header
  pdf.setFillColor(...goldColor);
  pdf.rect(0, 0, pageWidth, 15, 'F');
  addText(companyName, pageWidth / 2, 10, 12, blackColor, 'center');

  yPos = 35;

  // Projects Section
  const projectsTitle = isArabic ? "مشاريعنا" : "Our Projects";
  yPos = addSection(projectsTitle, yPos);

  const projects = isArabic
    ? [
        { title: "فيلا الياسمين", location: "الرياض، حي الياسمين", type: "سكني" },
        { title: "مجمع النخيل التجاري", location: "جدة، الكورنيش", type: "تجاري" },
        { title: "قصر الروابي", location: "الخبر، حي الروابي", type: "سكني فاخر" }
      ]
    : [
        { title: "Al-Yasmeen Villa", location: "Riyadh, Al-Yasmeen District", type: "Residential" },
        { title: "Al-Nakheel Commercial Complex", location: "Jeddah, Corniche", type: "Commercial" },
        { title: "Al-Rawabi Palace", location: "Al-Khobar, Al-Rawabi District", type: "Luxury Residential" }
      ];

  projects.forEach((project) => {
    pdf.setFillColor(30, 30, 32);
    pdf.roundedRect(margin, yPos - 3, pageWidth - 2 * margin, 20, 2, 2, 'F');
    
    addText(project.title, margin + 5, yPos + 5, 12, whiteColor);
    addText(`${project.location} | ${project.type}`, margin + 5, yPos + 13, 9, grayColor);
    yPos += 25;
  });

  yPos += 15;

  // Contact Section
  const contactTitle = isArabic ? "تواصل معنا" : "Contact Us";
  yPos = addSection(contactTitle, yPos);

  pdf.setFillColor(30, 30, 32);
  pdf.roundedRect(margin, yPos - 3, pageWidth - 2 * margin, 55, 2, 2, 'F');

  const contactInfo = isArabic
    ? [
        { label: "الموقع:", value: "المملكة العربية السعودية - جدة - حي الروضة - طريق الأمير سعود الفيصل" },
        { label: "الهاتف:", value: "+966 50 000 0000" },
        { label: "البريد الإلكتروني:", value: "info@amariah-alohood.com" },
        { label: "ساعات العمل:", value: "الأحد - الخميس: 8:00 ص - 5:00 م" }
      ]
    : [
        { label: "Location:", value: "Saudi Arabia - Jeddah - Al-Rawdah District - Prince Saud Al-Faisal Road" },
        { label: "Phone:", value: "+966 50 000 0000" },
        { label: "Email:", value: "info@amariah-alohood.com" },
        { label: "Working Hours:", value: "Sunday - Thursday: 8:00 AM - 5:00 PM" }
      ];

  contactInfo.forEach((info, i) => {
    addText(info.label, margin + 5, yPos + 5 + i * 12, 10, goldColor);
    addText(info.value, margin + 45, yPos + 5 + i * 12, 10, whiteColor);
  });

  // Footer on last page
  pdf.setFillColor(...goldColor);
  pdf.rect(0, pageHeight - 20, pageWidth, 20, 'F');
  
  const footerText = isArabic 
    ? `© ${new Date().getFullYear()} شركة عمارية العهود التجارية. جميع الحقوق محفوظة.`
    : `© ${new Date().getFullYear()} Amariah Al-Ohood Commercial. All rights reserved.`;
  addText(footerText, pageWidth / 2, pageHeight - 10, 9, blackColor, 'center');

  // Save
  const fileName = isArabic 
    ? 'بروفايل-عمارية-العهود-التجارية.pdf'
    : 'Amariah-Al-Ohood-Profile.pdf';
  
  pdf.save(fileName);
}
