import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const ExperienceSection = () => (
    <section id="experience" className="relative py-24 overflow-hidden bg-background">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="section-container max-w-7xl mx-auto px-6">

        {/* --- Main Heading (Hero Style) --- */}
        <div className="text-center mb-20">
          <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold mb-3 tracking-[0.4em] uppercase text-xs sm:text-sm drop-shadow-md"
          >
            My Professional Path
          </motion.p>
          <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter drop-shadow-2xl"
          >
            Experi<span className="text-primary">ence</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group"
            >
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* --- Image Area --- */}
                <div className="lg:w-2/5 flex justify-center relative">
                  <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative group/img"
                  >
                    {/* Glow behind image */}
                    <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] blur-3xl group-hover:bg-primary/40 transition-all duration-700" />

                    <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-sm">
                      <img
                          src="/img_4.png" // public folder එකට දාන image එකේ නම
                          alt="ACCIMT"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600";
                          }}
                      />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-primary/20 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl hidden sm:block">
                      <Briefcase size={24} className="text-primary" />
                    </div>
                  </motion.div>
                </div>

                {/* --- Content Area --- */}
                <div className="lg:w-3/5 text-center lg:text-left">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-center lg:justify-start gap-3 text-primary font-black tracking-widest text-xs uppercase">
                      <Calendar size={16} />
                      <span>Sep 2022 – Sep 2023</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tighter uppercase group-hover:text-primary transition-colors">
                      Trainee Telecommunication Technician
                    </h3>

                    <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-100/70 font-bold text-lg italic">
                      <MapPin size={18} className="text-primary/60" />
                      <p>Arthur C. Clarke Institution for Modern Technologies</p>
                    </div>

                    <p className="text-gray-400 leading-relaxed text-base sm:text-lg font-medium mt-4">
                      Gained practical technical experience in electronic equipment testing, troubleshooting,
                      and circuit experimentation within the Communication Division. Worked with
                      <span className="text-white"> PCB design, Arduino Uno integrations, and sensor-based implementations.</span>
                      This experience strengthened analytical thinking and technical problem-solving skills in a
                      high-tech hands-on environment.
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-primary/80 font-bold text-xs uppercase tracking-widest">
                        <CheckCircle2 size={16} />
                        Troubleshooting
                      </div>
                      <div className="flex items-center gap-2 text-primary/80 font-bold text-xs uppercase tracking-widest">
                        <CheckCircle2 size={16} />
                        Circuit Testing
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
);

export default ExperienceSection;