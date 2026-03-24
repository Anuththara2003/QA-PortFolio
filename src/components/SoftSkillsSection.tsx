import { Brain, Eye, Lightbulb, MessageCircle, Rocket, Users, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const skills = [
  { icon: Users, label: "Teamwork", desc: "Collaborating effectively" },
  { icon: MessageCircle, label: "Communication", desc: "Clear & professional" },
  { icon: Zap, label: "Self-Confidence", desc: "Positive & decisive" },
  { icon: Rocket, label: "Fast Learner", desc: "Quick to adapt" },
  { icon: Brain, label: "Analytical Thinking", desc: "Logic driven" },
  { icon: Lightbulb, label: "Problem Solving", desc: "Creative solutions" },
  { icon: Eye, label: "Attention to Detail", desc: "Precision & focus" },
];

const SoftSkillsSection = () => (
    <section id="soft-skills" className="relative py-24 overflow-hidden bg-background">

      {/* Background Glow Decorations */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] -z-10" />

      <div className="section-container max-w-7xl mx-auto px-6">

        {/* --- Main Heading --- */}
        <div className="text-center mb-20">
          <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold mb-3 tracking-[0.4em] uppercase text-xs sm:text-sm drop-shadow-md"
          >
            My Interpersonal Strengths
          </motion.p>
          <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter drop-shadow-2xl"
          >
            Soft <span className="text-primary">Skills</span>
          </motion.h2>
        </div>

        {/* --- Skills Layout --- */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {skills.map((s, i) => (
              /* මෙතන w-72 (288px) පාවිච්චි කරලා හැම card එකක්ම එකම සයිස් කරා */
              <div key={s.label} className="w-full sm:w-72">
                <AnimatedSection delay={i * 0.08}>
                  <motion.div
                      whileHover={{
                        y: -10,
                        borderColor: "rgba(13, 138, 188, 0.5)",
                        backgroundColor: "rgba(255, 255, 255, 0.05)"
                      }}
                      className="h-[280px] w-full bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] transition-all duration-500 shadow-xl group flex flex-col items-center justify-center text-center"
                  >
                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                      <s.icon size={30} className="text-primary group-hover:text-white transition-colors" />
                    </div>

                    {/* Skill Content */}
                    <h3 className="text-xl font-black text-white mb-2 tracking-tighter uppercase drop-shadow-sm">
                      {s.label}
                    </h3>

                    <p className="text-gray-400 text-sm font-medium leading-relaxed">
                      {s.desc}
                    </p>

                    {/* Subtle Indicator Dots */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex gap-1">
                        {[1, 2, 3].map((dot) => (
                            <div key={dot} className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              </div>
          ))}
        </div>

      </div>
    </section>
);

export default SoftSkillsSection;