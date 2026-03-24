import AnimatedSection from "./AnimatedSection";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <AnimatedSection className="text-center mb-12">
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="section-subtitle mt-2">{subtitle}</p>}
    <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
  </AnimatedSection>
);

export default SectionHeading;
