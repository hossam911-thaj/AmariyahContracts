import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone, Globe, Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@assets/عمارية_العهود_(2)_1764834256699.png";
import { useLanguage } from "@/lib/language-context";
import { generateCompanyProfile } from "@/lib/pdf-generator";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav_home'), href: "#hero" },
    { name: t('nav_about'), href: "#about" },
    { name: t('nav_services'), href: "#services" },
    { name: t('nav_projects'), href: "#projects" },
    { name: t('nav_team'), href: "#team" },
    { name: t('nav_contact'), href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const handleDownloadPDF = useCallback(async () => {
    setIsGeneratingPDF(true);
    setMobileMenuOpen(false);
    
    try {
      await generateCompanyProfile({ language });
    } catch (error) {
      console.error("PDF Generation Error:", error);
      alert(language === 'ar' 
        ? 'حدث خطأ أثناء إنشاء الملف. حاول مرة أخرى.'
        : 'An error occurred while generating the PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  }, [language]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b border-transparent",
        isScrolled
          ? "bg-background/90 backdrop-blur-md py-2 border-border/40 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="عمارية العهود" className="h-16 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/90 hover:text-primary transition-colors font-medium text-lg relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full duration-300"></span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="text-foreground hover:text-primary transition-colors gap-2"
          >
            <Globe className="h-4 w-4" />
            <span className="font-bold">{language === 'ar' ? 'English' : 'العربية'}</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={handleDownloadPDF}
            disabled={isGeneratingPDF}
            className="border-primary/50 text-foreground hover:bg-primary/10 gap-2 hidden lg:flex"
          >
            {isGeneratingPDF ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
            {t('nav_download_profile')}
          </Button>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2" asChild>
            <a href="#contact">
              <Phone className="h-4 w-4" />
              {t('nav_cta')}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="text-foreground hover:text-primary transition-colors"
          >
            <Globe className="h-5 w-5" />
          </Button>
          
          <button
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-primary py-2 text-lg border-b border-border/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="w-full mt-2 border-primary/50" 
            onClick={handleDownloadPDF}
            disabled={isGeneratingPDF}
          >
            {isGeneratingPDF ? (
              <Loader2 className="h-4 w-4 animate-spin ml-2" />
            ) : (
              <Download className="h-4 w-4 ml-2" />
            )}
            {t('nav_download_profile')}
          </Button>
          <Button className="w-full mt-2" asChild>
            <a href="#contact">{t('nav_cta')}</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
