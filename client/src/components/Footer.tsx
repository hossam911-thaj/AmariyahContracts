import logo from "@assets/عمارية_العهود_(2)_1764834256699.png";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-border/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="عمارية العهود" className="h-20 w-auto object-contain mb-6 opacity-90" />
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-6">
              شركة عمارية العهود التجارية، شريكك الاستراتيجي في عالم البناء والمقاولات. 
              نلتزم بالجودة والاحترافية في كل مشروع ننفذه.
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
            <h4 className="text-white font-bold text-xl mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">من نحن</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">خدماتنا</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors">مشاريعنا</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-primary transition-colors">فريق العمل</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">المقاولات العامة</li>
              <li className="text-gray-400">التصميم المعماري</li>
              <li className="text-gray-400">التشطيبات الداخلية</li>
              <li className="text-gray-400">إدارة المشاريع</li>
              <li className="text-gray-400">الاستشارات الهندسية</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center md:text-right flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500">
            © {new Date().getFullYear()} شركة عمارية العهود التجارية. جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-600 text-sm">
            تصميم وتطوير بواسطة Replit
          </p>
        </div>
      </div>
    </footer>
  );
}
