import { GraduationCap, Calendar, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const items = [
  {
    degree: "BSc (Hons) in Computer Science",
    institution: "University of Greater Manchester (UK)",
    period: "Pending",
    description: "Focusing on advanced computing concepts, software architecture, and distributed systems. Gaining in-depth knowledge in data structures, algorithms, and professional software development standards.",
    image: "/img_2.png",
  },
  {
    degree: "Graduate Diploma in Software Engineering",
    institution: "IJSE - Institute of Software Engineering",
    period: "Aug 2023 – Present",
    description: "Comprehensive hands-on training in Full-stack development. Specializing in Java, Spring Boot, React, and industry-standard QA methodologies including manual and automated testing.",
    image: "/ijse.jpg",
  },
  {
    degree: "GCE Advanced Level",
    institution: "Rippon Girls' College, Galle",
    period: "2005 – 2018",
    description: "Completed secondary education with a focus on Physical Science stream. Developed strong foundational skills in Mathematics and analytical thinking during my school career.",
    image: "/img_3.png",
  },
];

const EducationSection = () => (
    <section id="education" className="relative py-24 overflow-hidden bg-background">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="section-container max-w-7xl mx-auto px-6">

        {/* --- Main Heading --- */}
        <div className="text-center mb-24">
          <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold mb-3 tracking-[0.4em] uppercase text-xs sm:text-sm drop-shadow-md"
          >
            My Academic Journey
          </motion.p>
          <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter drop-shadow-2xl"
          >
            Edu<span className="text-primary">cation</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* --- Center Line (Timeline) --- */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/10 to-transparent md:-translate-x-1/2" />

          <div className="space-y-24">
            {items.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.2}>
                  <div className={`relative flex flex-col md:flex-row items-center gap-10 md:gap-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                    {/* --- Center Dot --- */}
                    <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 w-10 h-10 rounded-full bg-slate-950 border-[3px] border-primary shadow-[0_0_20px_rgba(13,138,188,0.6)] z-10 -translate-x-1/2 md:-translate-y-1/2 hidden sm:flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    </div>

                    {/* --- Image Section --- */}
                    <div className="w-full md:w-1/2 flex justify-center">
                      <motion.div
                          whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 1 : -1 }}
                          className="relative w-full max-w-[400px] aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm group"
                      >
                        <img
                            src={item.image}
                            alt={item.institution}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://images.unsplash.com/photo-1523050853063-bd8012fbb72c?q=80&w=600";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      </motion.div>
                    </div>

                    {/* --- Content Card --- */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0">
                      <motion.div
                          whileHover={{ y: -5 }}
                          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-[2.5rem] shadow-xl hover:border-primary/30 transition-all duration-500"
                      >
                        <div className="flex items-center gap-3 mb-6 text-primary font-bold tracking-[0.2em]">
                          <Calendar size={18} />
                          <span className="text-xs sm:text-sm uppercase">{item.period}</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tighter leading-tight uppercase">
                          {item.degree}
                        </h3>

                        <div className="flex items-center gap-2 mb-6 text-blue-200/70 font-semibold italic">
                          <GraduationCap size={20} className="text-primary/70" />
                          <p className="text-base sm:text-lg">{item.institution}</p>
                        </div>

                        <p className="text-gray-400 leading-relaxed text-base sm:text-lg font-medium">
                          {item.description}
                        </p>

                        <div className="mt-6 flex items-center gap-2 text-primary/80 font-bold text-xs uppercase tracking-widest">
                          <CheckCircle2 size={14} />
                          Academic Excellence
                        </div>
                      </motion.div>
                    </div>

                  </div>
                </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
);

export default EducationSection;