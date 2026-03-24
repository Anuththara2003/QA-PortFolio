import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const contacts = [
  { icon: Mail, label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
  { icon: Phone, label: "Phone", value: "+94 XX XXX XXXX", href: "tel:+94XXXXXXXX" },
  { icon: Github, label: "GitHub", value: "github.com/yourusername", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourprofile", href: "https://linkedin.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/" },
  { icon: MapPin, label: "Location", value: "Sri Lanka", href: "#" },
];

const ContactSection = () => (
  <section id="contact" className="relative">
    <div className="section-container">
      <SectionHeading title="Get In Touch" />
      <AnimatedSection>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          I am open to internship opportunities, collaborative projects, and professional connections
          in software engineering and QA-related roles. Feel free to reach out through any of the
          platforms below.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-8 sm:mb-10">
        {contacts.map((c, i) => (
          <AnimatedSection key={c.label} delay={i * 0.08}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover-lift group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <c.icon size={16} className="text-primary sm:hidden" />
                <c.icon size={18} className="text-primary hidden sm:block" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="text-sm font-medium text-foreground truncate">{c.value}</p>
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
          <a href="mailto:your.email@example.com" className="glow-button inline-flex items-center justify-center gap-2 text-sm px-5 py-2.5 sm:px-6 sm:py-3">
            <Mail size={16} /> Email Me
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="outline-glow-button inline-flex items-center justify-center gap-2 text-sm px-5 py-2.5 sm:px-6 sm:py-3">
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="outline-glow-button inline-flex items-center justify-center gap-2 text-sm px-5 py-2.5 sm:px-6 sm:py-3">
            <Github size={16} /> View GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="outline-glow-button inline-flex items-center justify-center gap-2 text-sm px-5 py-2.5 sm:px-6 sm:py-3">
            <Linkedin size={16} /> Connect on LinkedIn
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
