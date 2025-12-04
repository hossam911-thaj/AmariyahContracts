import { CheckCircle2, PenTool, HardHat, Building2, Ruler, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('service_contracting'),
      description: t('service_contracting_desc'),
      icon: Building2,
    },
    {
      title: t('service_design'),
      description: t('service_design_desc'),
      icon: PenTool,
    },
    {
      title: t('service_management'),
      description: t('service_management_desc'),
      icon: Ruler,
    },
    {
      title: t('service_finishing'),
      description: t('service_finishing_desc'),
      icon: CheckCircle2,
    },
    {
      title: t('service_mep'),
      description: t('service_mep_desc'),
      icon: HardHat,
    },
    {
      title: t('service_equipment'),
      description: t('service_equipment_desc'),
      icon: Truck,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('services_title')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('services_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] group h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-colors duration-300 text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
