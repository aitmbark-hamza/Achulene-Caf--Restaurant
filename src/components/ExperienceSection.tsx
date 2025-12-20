import { useEffect, useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import pizzaImg from '@/assets/pizza.jpg';
import brunchImg from '@/assets/brunch.jpg';
import pastaImg from '@/assets/pasta.jpg';

const ExperienceSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Large background text */}
      <div 
        className="absolute top-0 left-0 right-0 text-[12rem] md:text-[20rem] font-bold uppercase text-muted/30 leading-none pointer-events-none select-none overflow-hidden whitespace-nowrap"
        style={{ 
          fontFamily: 'Cormorant Garamond, serif',
          transform: `translateX(${-scrollY * 0.1}px)`,
        }}
      >
        EXPERIENCE
      </div>

      <div className="container-custom px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main dish with decorative elements */}
          <div className="relative">
            {/* Decorative food elements */}
            <AnimatedSection 
              animation="fade-up" 
              delay={200}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10"
            >
              <img
                src={pastaImg}
                alt="Décoration"
                className="w-20 h-20 object-cover rounded-full shadow-lg"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
              />
            </AnimatedSection>

            {/* Small decorative element left */}
            <AnimatedSection 
              animation="fade-right" 
              delay={300}
              className="absolute -left-8 top-1/4 z-10"
            >
              <div 
                className="w-16 h-16 rounded-full overflow-hidden shadow-lg"
                style={{ transform: `translateY(${scrollY * 0.03}px)` }}
              >
                <img
                  src={brunchImg}
                  alt="Décoration"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            {/* Main plate image */}
            <AnimatedSection animation="scale" delay={100}>
              <div className="relative mx-auto w-80 h-80 md:w-[450px] md:h-[450px]">
                {/* Stone plate effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-muted to-muted/50 shadow-2xl" />
                <div className="absolute inset-4 rounded-full bg-background shadow-inner" />
                <img
                  src={pizzaImg}
                  alt="Pizza signature Achulene"
                  className="absolute inset-8 w-auto h-auto max-w-full max-h-full object-cover rounded-full"
                  style={{ transform: `translateY(${-scrollY * 0.02}px)` }}
                />
              </div>
            </AnimatedSection>

            {/* Decorative dots */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            </div>
          </div>

          {/* Right side - Content + Additional image */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <AnimatedSection animation="fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-primary" />
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    Depuis 2020
                  </span>
                </div>

                <h2 className="heading-section text-foreground uppercase font-bold mb-6 leading-tight">
                  Une Expérience<br />
                  Culinaire &<br />
                  Gourmande.
                </h2>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Découvrez notre cuisine authentique où chaque plat est préparé avec passion. 
                  Des ingrédients frais, des recettes traditionnelles revisitées, 
                  et une ambiance chaleureuse vous attendent.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    variant="default"
                    className="bg-foreground text-background hover:bg-foreground/90 uppercase tracking-wider px-8"
                    onClick={() => document.querySelector('#apropos')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    À Propos
                  </Button>
                  <a
                    href="tel:+212666908679"
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-medium">+212 666 90 86 79</span>
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Side image */}
            <AnimatedSection animation="fade-left" delay={200} className="hidden lg:block">
              <div 
                className="relative w-48"
                style={{ transform: `translateY(${scrollY * 0.03}px)` }}
              >
                <img
                  src={pastaImg}
                  alt="Pasta fraîche"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;