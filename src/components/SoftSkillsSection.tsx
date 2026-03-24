import { Brain, Eye, Lightbulb, MessageCircle, Rocket, Users, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const skills = [
  { icon: Users, label: "Teamwork" },
  { icon: MessageCircle, label: "Communication" },
  { icon: Zap, label: "Self-Confidence" },
  { icon: Rocket, label: "Fast Learner" },
  { icon: Brain, label: "Analytical Thinking" },
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: Eye, label: "Attention to Detail" },
];

const SoftSkillsSection = () => (
  <section className="relative">
    <div className="section-container">
      <SectionHeading title="Soft Skills" />
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
        {skills.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.06}>
            <div className="glass-card px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-2 sm:gap-3 hover-lift">
              <s.icon size={16} className="text-primary sm:hidden" />
              <s.icon size={20} className="text-primary hidden sm:block" />
              <span className="font-medium text-foreground text-xs sm:text-sm">{s.label}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SoftSkillsSection;
