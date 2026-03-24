import { useState, useEffect } from "react";
import { Trophy, Star, Award, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

// --- මෙතනට Inovesta event එකේ පින්තූර 3-4ක් දාන්න ---
const inovestaImages = [
    "/ino_1.png",
    "/ino_2.png",
    "/ino_3.png",
    "/ino_4.png",
    "/ino_5.png",
];

const AchievementsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // තත්පර 3කට වරක් පින්තූර මාරු වේ
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % inovestaImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="achievements" className="relative py-24 overflow-hidden bg-background">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[120px] rounded-full -z-10" />

            <div className="section-container max-w-7xl mx-auto px-6">

                {/* --- Main Heading --- */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold mb-3 tracking-[0.4em] uppercase text-xs sm:text-sm"
                    >
                        Success & Recognition
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter drop-shadow-2xl"
                    >
                        Achieve<span className="text-primary">ments</span>
                    </motion.h2>
                </div>

                {/* --- Single Achievement Spotlight (Centered) --- */}
                <div className="max-w-5xl mx-auto">
                    <AnimatedSection>
                        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl relative group">

                            {/* --- Image Slider Side (Right Side on Desktop) --- */}
                            <div className="relative h-72 lg:h-[500px] overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 order-first lg:order-last">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentIndex}
                                        src={inovestaImages[currentIndex]}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800";
                                        }}
                                    />
                                </AnimatePresence>

                                {/* Overlay Badge */}
                                <div className="absolute top-6 right-6 bg-primary p-3 rounded-2xl shadow-2xl z-20 flex items-center gap-2">
                                    <Trophy size={20} className="text-white fill-white" />
                                    <span className="text-white font-black text-xs uppercase">1st Place</span>
                                </div>

                                {/* Image Counter Dots */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                    {inovestaImages.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === i ? "w-8 bg-primary" : "w-2 bg-white/30"}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* --- Content Side (Left Side on Desktop) --- */}
                            <div className="p-10 sm:p-14 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-primary/20 rounded-2xl">
                                        <Award size={30} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80">Innovation Event 2024</p>
                                        <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tighter uppercase leading-tight">
                                            Inovesta
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-primary font-black text-xl mb-4 flex items-center gap-2">
                                    <Star size={20} className="fill-primary" /> Winner - 1st Place
                                </p>

                                <p className="text-gray-300 text-lg leading-relaxed mb-8 font-medium italic">
                                    "Achieved the prestigious first place for developing an innovative technical solution.
                                    Demonstrated excellence in problem-solving, teamwork, and project execution during
                                    the intense competition phases."
                                </p>

                                <div className="space-y-3">
                                    {["Technical Innovation", "Project Execution", "Team Leadership"].map((skill) => (
                                        <div key={skill} className="flex items-center gap-3 text-white/60 font-bold text-sm uppercase tracking-widest">
                                            <ChevronRight size={16} className="text-primary" />
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </AnimatedSection>
                </div>

            </div>
        </section>
    );
};

export default AchievementsSection;