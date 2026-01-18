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
    <section id="apropos" className="bg-background relative overflow-hidden py-16 md:py-24 lg:py-32">
      
      {/* Background Layer - Fixed mobile bg attachment */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-cover bg-center lg:bg-fixed"
        style={{ backgroundImage: `url(${backgroundAboutus})` }}
      />

      <div className="container-custom relative z-20 px-4 md:px-8">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12 lg:mb-20">
          <span className="text-primary text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase font-medium mb-3 block">
            — Café-Restaurant de Luxe —
          </span>
          <h2 className="heading-display text-foreground text-3xl md:text-4xl lg:text-5xl">À Propos de Nous</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left: Text */}
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <p className="text-muted-foreground mb-6 leading-relaxed text-base md:text-lg">
                Achulene est un café-restaurant situé à Casablanca, pensé comme un lieu de vie 
                alliant gastronomie, détente et convivialité. Nous proposons une offre variée 
                allant du petit-déjeuner au dîner.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed text-base md:text-lg">
                Notre établissement se distingue par son atmosphère accueillante, adaptée aussi 
                bien aux moments en famille qu'aux rencontres professionnelles.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-border/50">
                <div className="w-12 h-[1px] bg-primary"></div>
                <span className="font-display text-xl italic text-foreground">Achulene</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Images (Improved Mobile Layout) */}
          <div className="relative mt-12 lg:mt-0 px-4 md:px-0"> 
            {/* Main Image */}
            <RevealImage
              src={hero}
              alt="Achulene hero"
              containerClass="w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-sm shadow-xl"
            />
            
            {/* Overlapping Image - Optimized for mobile position */}
            <div className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-8 lg:-left-12 z-30">
              <RevealImage
                src={img15}
                alt="Decorative plate"
                delay={0.3}
                containerClass="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 border-4 border-background shadow-2xl rounded-sm"
              />
            </div>

            {/* Rotating Badge - Scaled down for mobile */}
            <div className="absolute -top-4 -right-2 md:-top-8 md:-right-8 z-30 scale-75 md:scale-100">
              <div className="relative w-24 h-24 lg:w-28 lg:h-28">
                <motion.svg 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full" viewBox="0 0 100 100"
                >
                  <path id="circlePath" fill="none" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  <text className="fill-primary text-[10px] uppercase tracking-widest font-bold">
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