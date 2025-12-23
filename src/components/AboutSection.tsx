import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

// Assets
import hero from '@/assets/hero.png';
import img15 from '@/assets/img15.png';
import backgroundAboutus from '@/assets/backgrondAboutus.png'; 

interface RevealImageProps {
  src: string;
  alt: string;
  containerClass?: string;
  delay?: number;
}

const RevealImage: React.FC<RevealImageProps> = ({ src, alt, containerClass = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Reduced range from 8% to 5% to prevent layout shifting
  const smoothY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]),
    { stiffness: 100, damping: 30 }
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${containerClass}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.1, delay, ease: [0.21, 0.45, 0.32, 0.9] }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          style={{ y: smoothY, scale: 1.1 }}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="apropos" className="bg-background relative overflow-hidden py-20 lg:py-32">
      
      {/* Background Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundAboutus})` }}
      />

      <div className="container-custom relative z-20">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4 block">
            — Café-Restaurant de Luxe —
          </span>
          <h2 className="heading-display text-foreground text-4xl lg:text-5xl">À Propos de Nous</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="max-w-xl">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Achulene est un café-restaurant situé à Casablanca, pensé comme un lieu de vie 
                alliant gastronomie, détente et convivialité. Nous proposons une offre variée 
                allant du petit-déjeuner au dîner.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Notre établissement se distingue par son atmosphère accueillante, adaptée aussi 
                bien aux moments en famille qu'aux rencontres professionnelles.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <div className="w-12 h-[1px] bg-primary"></div>
                <span className="font-display text-xl italic text-foreground">Achulene</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Images (Fixed spacing) */}
          <div className="relative pb-12 lg:pb-0"> 
            {/* Main Image */}
            <RevealImage
              src={hero}
              alt="Achulene hero"
              containerClass="w-full h-[400px] lg:h-[500px] rounded-sm shadow-xl"
            />
            
            {/* Overlapping Image - Adjusted positioning to stay within section bounds */}
            <div className="absolute -bottom-8 -left-4 lg:-left-12 z-30">
              <RevealImage
                src={img15}
                alt="Decorative plate"
                delay={0.3}
                containerClass="w-40 lg:w-56 h-40 lg:h-56 border-4 border-background shadow-2xl rounded-sm"
              />
            </div>

            {/* Badge */}
            <div className="absolute -top-6 -right-6 z-30">
              <div className="relative w-24 h-24 lg:w-28 lg:h-28">
                <motion.svg 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full" viewBox="0 0 100 100"
                >
                  <path id="circlePath" fill="none" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  <text className="fill-primary text-[10px] uppercase tracking-widest">
                    <textPath xlinkHref="#circlePath">• Qualité • Depuis 2019 •</textPath>
                  </text>
                </motion.svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold text-primary">5+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;