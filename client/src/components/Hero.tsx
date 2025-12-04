import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@assets/stock_images/modern_construction__24db5f4a.jpg";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t, dir } = useLanguage();
  
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Construction Site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40 md:via-background/60 md:to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 text-center md:text-start flex flex-col items-center md:items-start gap-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 border border-primary/30 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wider backdrop-blur-sm">
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        >
          {t.hero.title_prefix} <span className="text-primary">{t.hero.title_suffix}</span>
          <br />
          <span className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-200 mt-2 block">
            {t.hero.subtitle}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl md:text-start leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 w-full md:w-auto"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-14 px-8 font-bold w-full sm:w-auto">
            {t.hero.cta_primary}
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg h-14 px-8 font-bold w-full sm:w-auto">
            {t.hero.cta_secondary}
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 animate-bounce"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
