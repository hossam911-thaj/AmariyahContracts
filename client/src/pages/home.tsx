import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Stats Section */}
        <section className="py-12 bg-primary border-y border-primary-foreground/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-black">{t.stats.experience}</h3>
                <p className="text-black/80 font-medium text-lg">{t.stats.years}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-black">{t.stats.projects}</h3>
                <p className="text-black/80 font-medium text-lg">{t.stats.completed}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-black">{t.stats.engineers}</h3>
                <p className="text-black/80 font-medium text-lg">{t.stats.expert}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-black">{t.stats.satisfaction}</h3>
                <p className="text-black/80 font-medium text-lg">{t.stats.clients}</p>
              </div>
            </div>
          </div>
        </section>

        <Services />
        
        {/* Divider/Quote */}
        <section className="py-24 bg-fixed bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')"}}>
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.blockquote 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto font-serif"
            >
              {t.quote}
            </motion.blockquote>
          </div>
        </section>

        <Projects />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
