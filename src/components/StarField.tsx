import { useEffect, useRef } from "react";

const StarField = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create stars
    for (let i = 0; i < 80; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 2.5 + 0.5;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animation = `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }

    // Shooting stars
    const shootInterval = setInterval(() => {
      const shoot = document.createElement("div");
      shoot.className = "shooting-star";
      shoot.style.left = `${20 + Math.random() * 60}%`;
      shoot.style.top = `${Math.random() * 40}%`;
      container.appendChild(shoot);
      setTimeout(() => shoot.remove(), 1500);
    }, 5000);

    return () => {
      clearInterval(shootInterval);
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40 dark:opacity-70"
    />
  );
};

export default StarField;
