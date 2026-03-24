import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  // Page එකේ උඩටම යන්න කරන function එක
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
      <footer className="relative border-t border-white/5 bg-background py-12 overflow-hidden">

        {/* උඩින් යන හීනි ලස්සන Glow line එකක් */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* --- Branding Side --- */}
            <div className="text-center md:text-left">
              <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-black tracking-tighter text-white uppercase group"
              >
                Dilsha <span className="text-primary">Perera</span>
              </motion.a>
              <p className="text-gray-400 text-sm font-medium mt-2 tracking-wide">
                Software Engineer <span className="text-primary/40 mx-1">|</span> Aspiring QA Engineer
              </p>
            </div>

            {/* --- Social Links (Glass Style) --- */}
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/dilshag", label: "GitHub", color: "hover:text-white hover:border-white/50" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/dilsha-perera-07b27224b/", label: "LinkedIn", color: "hover:text-blue-500 hover:border-blue-500/50" },
                { icon: Mail, href: "mailto:dilshaperera1118@gmail.com", label: "Email", color: "hover:text-primary hover:border-primary/50" }
              ].map((social, i) => (
                  <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-2xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 ${social.color} backdrop-blur-md`}
                      aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
              ))}
            </div>

            {/* --- Back to Top Button --- */}
            <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -5, backgroundColor: "rgba(13, 138, 188, 1)", color: "white" }}
                whileTap={{ scale: 0.9 }}
                className="p-4 rounded-full bg-primary/10 border border-primary/20 text-primary transition-all duration-300 shadow-lg group"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* --- Copyright Area --- */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
            <p>© 2026 ALL RIGHTS RESERVED</p>
            <p className="flex items-center gap-2">
              DESIGNED & BUILT BY <span className="text-white/40">DILSHA PERERA</span>
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;