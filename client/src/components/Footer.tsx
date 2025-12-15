import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-border/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-white mb-6 hover:text-primary transition-colors duration-300">
              عمارية العهود
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-6">
              {t('footer_desc')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">{t('footer_links')}</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">{t('nav_about')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">{t('nav_services')}</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors">{t('nav_projects')}</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-primary transition-colors">{t('nav_team')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">{t('nav_contact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">{t('footer_services')}</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">{t('footer_service_1')}</li>
              <li className="text-gray-400">{t('footer_service_2')}</li>
              <li className="text-gray-400">{t('footer_service_3')}</li>
              <li className="text-gray-400">{t('footer_service_4')}</li>
              <li className="text-gray-400">{t('footer_service_5')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center md:text-right flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500">
            {t('footer_rights')}
          </p>
          <p className="text-gray-600 text-sm">
            {t('footer_credit')}
          </p>
        </div>
      </div>
    </footer>
  );
}
