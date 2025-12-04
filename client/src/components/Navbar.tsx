import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@assets/عمارية_العهود_(2)_1764834256699.png";
import { useLanguage } from "@/lib/i18n";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  const navLinks = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.team, href: "#team" },
    { name: t.nav.contact, href: "#contact" },
  ];

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
        {/* Logo with white background container for better visibility */}
        <div className="flex items-center gap-2 relative z-50">
          <div className="bg-white/90 rounded-lg p-2 shadow-md backdrop-blur-sm hover:bg-white transition-colors">
            <img src={logo} alt="عمارية العهود" className="h-14 w-auto object-contain" />
          </div>
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
            size="icon" 
            onClick={toggleLanguage}
            className="rounded-full hover:bg-primary/10 hover:text-primary"
          >
            <span className="font-bold text-lg">{language === 'ar' ? 'EN' : 'عربي'}</span>
          </Button>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2" asChild>
            <a href="#contact">
              <Phone className="h-4 w-4" />
              {t.nav.cta}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="rounded-full hover:bg-primary/10 hover:text-primary px-2"
          >
            <span className="font-bold">{language === 'ar' ? 'EN' : 'عربي'}</span>
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
          <Button className="w-full mt-4" asChild>
            <a href="#contact">{t.nav.cta}</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
