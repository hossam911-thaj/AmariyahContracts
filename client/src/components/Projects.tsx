import { motion } from "framer-motion";
import project1 from "@assets/stock_images/luxury_modern_villa__f7bc5f34.jpg";
import project2 from "@assets/stock_images/luxury_modern_villa__02fb1666.jpg";
import project3 from "@assets/stock_images/modern_construction__e85df87a.jpg";
import { useLanguage } from "@/lib/language-context";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Projects() {
  const { t, dir } = useLanguage();

  const projects = [
    {
      title: t('project_1_title'),
      location: t('project_1_loc'),
      image: project1,
      category: t('project_1_cat'),
    },
    {
      title: t('project_2_title'),
      location: t('project_2_loc'),
      image: project3,
      category: t('project_2_cat'),
    },
    {
      title: t('project_3_title'),
      location: t('project_3_loc'),
      image: project2,
      category: t('project_3_cat'),
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('projects_title')}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {t('projects_desc')}
            </p>
          </div>
          <button className="text-foreground hover:text-primary font-medium flex items-center gap-2 transition-colors">
            {t('projects_view_all')} {dir === 'rtl' ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary text-sm font-medium mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
