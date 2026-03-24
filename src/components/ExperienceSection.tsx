import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const ExperienceSection = () => (
  <section id="experience" className="relative">
    <div className="section-container">
      <SectionHeading title="Experience" />
      <AnimatedSection>
        <div className="max-w-2xl mx-auto glass-card p-5 sm:p-8 hover-lift">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Briefcase size={18} className="text-primary sm:hidden" />
              <Briefcase size={22} className="text-primary hidden sm:block" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-base sm:text-lg">Trainee Telecommunication Technician</h3>
              <p className="text-primary text-xs sm:text-sm font-medium">Arthur C. Clarke Institution for Modern Technologies</p>
              <p className="text-xs text-muted-foreground mt-1 mb-2 sm:mb-3">Sep 2022 – Sep 2023</p>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Gained practical technical experience in electronic equipment testing, troubleshooting,
                and circuit experimentation within the Communication Division. Worked with PCB design,
                breadboard-based circuit testing, Arduino Uno integrations, and sensor-based implementations.
                This experience strengthened analytical thinking, collaboration, and technical problem-solving
                skills in a hands-on environment.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ExperienceSection;
