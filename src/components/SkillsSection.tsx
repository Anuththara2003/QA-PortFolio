import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    name: "Database Systems",
    skills: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    name: "Version Control",
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ],
  },
  {
    name: "UI / UX Design",
    skills: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
  },
  {
    name: "IDEs & Workflow",
    skills: [
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "IntelliJ", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
    ],
  },
  {
    name: "Testing & QA Tools",
    skills: [
      { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
    ],
  },
];

const SkillsSection = () => (
    <section id="skills" className="relative py-24 overflow-hidden bg-background">

      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="section-container max-w-7xl mx-auto px-6">

        {/* --- Main Heading (Hero Style) --- */}
        <div className="text-center mb-20">
          <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold mb-3 tracking-[0.4em] uppercase text-xs sm:text-sm drop-shadow-md"
          >
            My Technical Expertise
          </motion.p>
          <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter drop-shadow-2xl"
          >
            Tech <span className="text-primary">Skills</span>
          </motion.h2>
        </div>

        {/* --- Skills Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
              <AnimatedSection key={cat.name} delay={i * 0.1}>
                <motion.div
                    whileHover={{
                      y: -10,
                      borderColor: "rgba(13, 138, 188, 0.5)",
                      backgroundColor: "rgba(255, 255, 255, 0.05)"
                    }}
                    className="h-full bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] transition-all duration-500 shadow-xl group"
                >
                  <h3 className="font-black text-white text-lg tracking-tighter uppercase mb-8 border-b border-white/10 pb-4 group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>

                  {/* Skills with Real Logos */}
                  <div className="flex flex-wrap gap-4">
                    {cat.skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-3 px-4 py-2.5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/40 transition-all duration-300"
                        >
                          <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" />
                          <span className="text-sm font-bold text-blue-100/90 tracking-tight">
                      {skill.name}
                    </span>
                        </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
);

export default SkillsSection;