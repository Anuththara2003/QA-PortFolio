import { Code2, Shield, Smartphone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Building clean, responsive and user-centric web interfaces."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Crafting cross-platform mobile experiences with modern tools."
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    desc: "Specializing in API testing, automation, and software reliability."
  },
];

const AboutSection = () => (
    <section id="about" className="relative py-24 overflow-hidden bg-background">
      {/* Background Decorations */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="section-container max-w-7xl mx-auto px-6">

        {/* --- Main Heading (Hero Style) --- */}
        <div className="text-center mb-16">
          <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold mb-3 tracking-[0.4em] uppercase text-xs sm:text-sm drop-shadow-md"
          >
            Get to know
          </motion.p>
          <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter drop-shadow-2xl"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* --- Left Side: Animated Image Area --- */}
          <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-2/5 flex justify-center relative"
          >
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative group"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] blur-3xl group-hover:bg-primary/40 transition-all duration-700" />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-sm">
                <img
                    src="/back.png"
                    alt="Dilsha Perera"
                    className="w-full h-full object-cover transition-all duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://ui-avatars.com/api/?name=Dilsha+Perera&size=512&background=0D8ABC&color=fff";
                    }}
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-primary/10 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl hidden sm:block">
                <p className="text-xl font-black text-primary mono tracking-tighter uppercase">QA / DEV</p>
              </div>
            </motion.div>
          </motion.div>

          {/* --- Right Side: Text Area --- */}
          <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-3/5 text-center lg:text-left"
          >
            {/* Split and Centered Sub-Heading */}
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              Crafting Excellence Through <br />
              <span className="text-primary drop-shadow-[0_0_15px_rgba(13,138,188,0.4)]">Code & Quality.</span>
            </h3>

            <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
              <p className="text-gray-300 leading-relaxed text-lg sm:text-xl font-medium">
                I am a dedicated Software Engineering student with a strong passion for software quality,
                testing practices, and modern application development. I specialize in combining technical
                proficiency with rigorous problem-solving.
              </p>

              <p className="text-gray-400 leading-relaxed text-base sm:text-lg border-l-4 border-primary/30 pl-6 italic font-medium">
                My journey involves mastering industry-standard QA tools, exploring frontend
                architecture, and ensuring every digital experience is seamless and reliable.
                I believe in "Quality by Design" rather than just finding bugs.
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- Bottom: Equal Sized Highlight Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-28">
          {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.15}>
                <motion.div
                    whileHover={{ y: -10, borderColor: "rgba(13, 138, 188, 0.5)" }}
                    className="h-full bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2.5rem] text-center transition-all duration-500 hover:bg-white/10 flex flex-col items-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                    <h.icon size={32} className="text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Fixed Title Spacing and Centering */}
                  <h4 className="text-lg sm:text-xl font-black text-white mb-4 tracking-[0.15em] uppercase drop-shadow-sm px-2">
                    {h.title}
                  </h4>

                  <p className="text-gray-400 leading-relaxed text-base font-medium">
                    {h.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
);

export default AboutSection;