import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-center sm:text-left">
        <p className="font-semibold text-foreground">Your Name</p>
        <p className="text-xs text-muted-foreground">Software Engineering Student | Aspiring QA Engineer</p>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
          <Github size={18} className="text-muted-foreground hover:text-primary" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
          <Linkedin size={18} className="text-muted-foreground hover:text-primary" />
        </a>
        <a href="mailto:your.email@example.com" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
          <Mail size={18} className="text-muted-foreground hover:text-primary" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
