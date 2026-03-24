import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, MessageCircle, Send, Phone, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

// WhatsApp settings
const waMessage = encodeURIComponent("Hi Dilsha, I saw your portfolio and would like to connect with you.");
const waLink = `https://wa.me/94785302355?text=${waMessage}`;

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "dilshaperera1118@gmail.com",
    href: "mailto:dilshaperera1118@gmail.com",
    isMail: true,
    color: "hover:border-blue-500/50"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 78 530 2355",
    href: "tel:+94785302355",
    isPhone: true,
    color: "hover:border-primary/50"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: waLink,
    isWhatsApp: true, // WhatsApp එක හඳුනාගන්න flag එකක්
    color: "hover:border-[#25D366]/50" // Hover එකත් කොළ පාටට ගැළපෙන්න වෙනස් කරා
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/dilshag",
    href: "https://github.com/dilshag",
    color: "hover:border-white/40"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Dilsha Perera",
    href: "https://www.linkedin.com/in/dilsha-perera-07b27224b/",
    color: "hover:border-blue-600/50"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sri Lanka",
    href: "#",
    color: "hover:border-red-400/50"
  },
];

const ContactSection = () => (
    <section id="contact" className="relative py-24 overflow-hidden bg-background">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="section-container max-w-7xl mx-auto px-6">

        {/* --- Main Heading --- */}
        <div className="text-center mb-16">
          <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <Send size={12} /> Contact Me
          </motion.div>

          <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter drop-shadow-2xl"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>

          <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed"
          >
            I am open to internship opportunities, collaborative projects, and professional connections. Feel free to reach out!
          </motion.p>
        </div>

        {/* --- Contact Info Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {contacts.map((c, i) => (
              <AnimatedSection key={c.label} delay={i * 0.08}>
                <motion.a
                    href={c.href}
                    target={c.isMail || c.isPhone ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    whileHover={{ y: -8 }}
                    className={`group bg-white/5 backdrop-blur-xl border border-white/10 p-6 flex items-center gap-5 rounded-[2rem] transition-all duration-500 shadow-xl ${c.color}`}
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                    <c.icon
                        size={22}
                        className={`transition-colors duration-500 
                    ${c.isWhatsApp
                            ? "text-primary group-hover:text-[#25D366]" // WhatsApp කොළ පාට hover එක මෙතන තියෙන්නේ
                            : "text-primary group-hover:text-white"
                        }`}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-black mb-0.5">{c.label}</p>
                    <p className="text-sm font-bold text-white truncate group-hover:text-primary transition-colors">{c.value}</p>
                  </div>
                  <ExternalLink size={14} className="text-white/10 group-hover:text-primary transition-colors" />
                </motion.a>
              </AnimatedSection>
          ))}
        </div>

        {/* --- Main Action Buttons --- */}
        <AnimatedSection delay={0.4}>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-5">
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:dilshaperera1118@gmail.com"
                className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_10px_30px_rgba(13,138,188,0.4)]"
            >
              <Mail size={18} /> Say Hello
            </motion.a>

            <motion.a
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(37, 211, 102, 0.4)", // Border එක කොළ පාට වෙනවා
                  backgroundColor: "rgba(37, 211, 102, 0.1)" // ලාවට කොළ පාට background එකක් එනවා
                }}
                whileTap={{ scale: 0.95 }}
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all duration-300 backdrop-blur-md"
            >
              <MessageCircle size={18} className="text-green-500 group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </motion.a>
          </div>
        </AnimatedSection>

        <div className="mt-24 text-center">
          <p className="text-white/20 text-xs font-black uppercase tracking-[0.4em]">
            Dilsha Perera <span className="text-primary">©</span> 2026
          </p>
        </div>
      </div>
    </section>
);

export default ContactSection;