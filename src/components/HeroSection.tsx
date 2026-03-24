import { useState, useEffect } from "react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ඔයාගේ පින්තූර 5 මෙතනට දාන්න
const images = [

    "/bg6.jpg",
  "/bg4.jpg",
  "/bg3.jpg",
  "/bg5.jpg",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
      <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden bg-black">

        {/* --- Background Slider (සියලුම Sizes වලට ගැලපෙන විදිහට හදා ඇත) --- */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <AnimatePresence mode="wait">
            <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }} // රූපය පැහැදිලිව පේන්න opacity එක 0.4 කළා
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>

          {/* අකුරු කියවන්න ලේසි වෙන්න දාපු Gradient Overlay එක */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background z-10" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-20 flex flex-col items-center text-center">

          {/* --- Text Content (Centered with Professional Look) --- */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-bold mb-4 tracking-[0.4em] uppercase text-xs sm:text-sm drop-shadow-lg">
              Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-white mb-6 leading-tight tracking-tighter drop-shadow-2xl">
              Dilsha <span className="text-primary">Perera</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mb-8">
              <h2 className="text-xl sm:text-2xl text-blue-100/90 font-semibold tracking-tight">
                Software Engineer
              </h2>
              <span className="hidden sm:block text-white/30 text-2xl">|</span>
              <h2 className="text-xl sm:text-2xl text-blue-100/90 font-semibold tracking-tight">
                Aspiring QA Engineer
              </h2>
            </div>

            <p className="text-sm sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 px-4 drop-shadow-sm">
              Passionate Software Engineering student with a growing specialization in Quality Assurance.
              Dedicated to creating clean, efficient solutions while mastering modern testing frameworks
              to build dependable digital experiences.
            </p>

            {/* --- Buttons (Clean Glass Style) --- */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center items-center">
              {/* View Projects - Primary */}
              <a
                  href="#projects"
                  className="group bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 shadow-[0_10px_40px_rgba(13,138,188,0.4)] hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              >
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                View Projects
              </a>

              {/* Download CV - Glass Effect */}
              <a
                  href="/Dilsha%20Perera%20CV%20(4).pdf"
                  target="_blank"
                  className="bg-white/5 border border-white/10 hover:bg-white/20 hover:border-white/30 text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 backdrop-blur-md hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Download size={20} />
                Download CV
              </a>

              {/* Contact Me - Minimalist */}
              <a
                  href="#contact"
                  className="bg-white/5 border border-white/10 hover:bg-white/20 hover:border-primary/50 hover:text-primary text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 backdrop-blur-md hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Mail size={20} />
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Hint */}
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 hidden md:block"
        >
          <ArrowDown size={32} />
        </motion.div>
      </section>
  );
};

export default HeroSection;