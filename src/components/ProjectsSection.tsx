import { useState, useEffect } from "react";
import { Github, Figma, Code2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Portfolio Web",
    desc: "A responsive personal portfolio website developed to present projects and technical skills in a modern format. Built with a focus on clean user interface design and accessibility.",
    techs: ["React", "TypeScript", "Tailwind"],
    image: "/img_5.png",
    links: { github: "https://github.com/dilshag/Portfolio_2025" },
  },
  {
    title: "Notezy Mobile App",
    desc: "A cross-platform note-taking mobile application with secure authentication and real-time synchronization. Features seamless cloud backup using Firebase.",
    techs: ["React Native", "Expo", "Firebase"],
    image: "/notzy.png",
    links: { github: "https://github.com/dilshag/Notezy---Note-Taking-App" },
  },
  {
    title: "Blood Donation System",
    desc: "Full-stack web application to streamline the management of donors, recipients, and blood requests with secure JWT authentication and role-based access control.",
    techs: ["Spring Boot", "Java", "MySQL"],
    image: "/blood.png",
    links: { github: "https://github.com/dilshag/BloodDonationManagementSystem-SpringBoot" },
  },
  {
    title: "Clothing Shop UI",
    desc: "Modern e-commerce interface concept designed in Figma, focused on visual clarity, structured layouts, and smooth shopping experience.",
    techs: ["Figma", "UI/UX"],
    image: "/cloth.png",
    links: { figma: "https://www.figma.com/design/96KyM2WO8fHxL63xzfksDq/Clothing-Shop?node-id=0-1&t=upagOzXGuJKAAkGb-0" },
  },
  {
    title: "Indoor Plant Web",
    desc: "Visually clean desktop web interface concept designed for an indoor plant store, emphasizing natural product presentation and user-centered layout.",
    techs: ["Figma", "UI/UX"],
    image: "/plant.png",
    links: { figma: "https://www.figma.com/design/Z2Y4nOJFyDg61ZgDQZZpXu/Indoor-Plant-web?node-id=0-1&t=5YLEVg4yhVzgWSiU-0" },
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
      <section id="projects" className="relative py-24 overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

        <div className="section-container max-w-7xl mx-auto px-6">
          {/* --- Heading --- */}
          <div className="text-center mb-16">
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-primary font-bold mb-3 tracking-[0.4em] uppercase text-xs sm:text-sm"
            >
              My Creative Works
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter drop-shadow-2xl"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>
          </div>

          {/* --- Project Slider --- */}
          <div className="relative max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  /* lg:h-[550px] මගින් මුළු card එකටම ස්ථාවර උසක් ලබා දේ */
                  className="grid grid-cols-1 lg:grid-cols-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl lg:h-[550px]"
              >
                {/* Image Side - Fixed consistency */}
                <div className="relative h-72 lg:h-full w-full overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                  <img
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      /* object-cover සහ h-full මගින් image එක සම්පූර්ණ ඉඩ පිරවීමට සලස්වයි */
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800";
                      }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
                </div>

                {/* Content Side */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/20 rounded-xl">
                      <Code2 size={24} className="text-primary" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-primary/80">Project {currentIndex + 1}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
                    {projects[currentIndex].title}
                  </h3>

                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 font-medium italic">
                    "{projects[currentIndex].desc}"
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[currentIndex].techs.map((t) => (
                        <span key={t} className="text-[10px] px-4 py-1.5 rounded-full bg-white/10 text-blue-200 font-black uppercase tracking-widest border border-white/10">
                      {t}
                    </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-8 pt-6 border-t border-white/10 mt-auto">
                    {projects[currentIndex].links.github && (
                        <a href={projects[currentIndex].links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors group/link">
                          <Github size={20} className="group-hover/link:scale-110 transition-transform" /> GitHub Repository
                        </a>
                    )}
                    {projects[currentIndex].links.figma && (
                        <a href={projects[currentIndex].links.figma} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors group/link">
                          <Figma size={20} className="group-hover/link:scale-110 transition-transform" /> Figma Design
                        </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-6 mt-12">
              <button
                  onClick={prevProject}
                  className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary transition-all duration-300 active:scale-90"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-3">
                {projects.map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 transition-all duration-500 rounded-full ${currentIndex === i ? "w-12 bg-primary" : "w-2 bg-white/20"}`}
                    />
                ))}
              </div>

              <button
                  onClick={nextProject}
                  className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary transition-all duration-300 active:scale-90"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ProjectsSection;