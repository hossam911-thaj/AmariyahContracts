import { motion } from "framer-motion";
import engineerImg from "@assets/stock_images/civil_engineer_looki_35a4d2f0.jpg";
import workerImg from "@assets/stock_images/construction_workers_acf02659.jpg";
import workerImg2 from "@assets/stock_images/construction_workers_88063721.jpg";

const team = [
  {
    name: "م. أحمد العتيبي",
    role: "مدير المشاريع",
    image: engineerImg,
  },
  {
    name: "فريق العمل الميداني",
    role: "نخبة من الفنيين والعمال",
    image: workerImg,
  },
  {
    name: "فريق السلامة",
    role: "أخصائيي الأمن والسلامة",
    image: workerImg2,
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-background border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">فريق العمل</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نفتخر بكادرنا الهندسي والفني المدرب على أعلى المستويات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[3/4] shadow-lg border border-border/50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
