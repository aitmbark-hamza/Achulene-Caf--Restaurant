import AnimatedSection from '@/components/AnimatedSection';
import { BookOpen, Coffee, Quote } from 'lucide-react';
import hero from '@/assets/hero.png';
import img15 from '@/assets/img15.png';
import libraryImg from '@/assets/library-space.jpg';
const AboutSection = () => {
  return <section id="apropos" className="bg-background relative overflow-hidden">
      {/* Decorative botanical elements */}
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
        <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
          <path d="M60 0C60 0 20 60 20 100C20 140 60 200 60 200C60 200 100 140 100 100C100 60 60 0 60 0Z" stroke="currentColor" strokeWidth="1" className="text-primary" />
          <path d="M60 40C60 40 40 80 40 100C40 120 60 160 60 160" stroke="currentColor" strokeWidth="1" className="text-primary" />
          <path d="M60 40C60 40 80 80 80 100C80 120 60 160 60 160" stroke="currentColor" strokeWidth="1" className="text-primary" />
        </svg>
      </div>
      <div className="absolute top-40 right-10 opacity-10 pointer-events-none rotate-180">
        <svg width="100" height="160" viewBox="0 0 100 160" fill="none">
          <path d="M50 0C50 0 10 50 10 80C10 110 50 160 50 160C50 160 90 110 90 80C90 50 50 0 50 0Z" stroke="currentColor" strokeWidth="1" className="text-primary" />
        </svg>
      </div>

      {/* Main About Section */}
      <div className="section-padding">
        <div className="container-custom">
          {/* Crafto Style Header */}
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <span className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-6 block">
              — Café-Restaurant de Luxe —
            </span>
            <h2 className="heading-display text-foreground">
              À Propos de Nous
            </h2>
          </AnimatedSection>

          {/* Main Content - Crafto Style Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
            {/* Left - Text Content */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="max-w-xl">
                <p className="text-body text-muted-foreground mb-8 leading-[1.95]">
                  Achulene est un café-restaurant situé à Casablanca, pensé comme un lieu de vie 
                  alliant gastronomie, détente et convivialité. Nous proposons une offre variée 
                  allant du petit-déjeuner au dîner, avec une large sélection de plats, desserts 
                  et boissons préparés avec soin, dans un cadre moderne et chaleureux.
                </p>
                <p className="text-body text-muted-foreground mb-10 leading-[1.95]">
                  Notre établissement se distingue par son atmosphère accueillante, adaptée aussi 
                  bien aux moments en famille, aux rencontres professionnelles qu'aux instants de 
                  détente en solo. Le service est continu et l'équipe veille à offrir une expérience 
                  agréable, basée sur la qualité, la régularité et l'attention portée aux détails.
                </p>

                {/* Signature Line */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-16 h-[1px] bg-primary"></div>
                  <span className="font-display text-xl italic text-foreground">Achulene</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Asymmetric Images */}
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative overflow-hidden group">
                  <img src={hero} alt="Café artisanal Achulene" className="w-full h-[450px] lg:h-[520px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                </div>
                
                {/* Overlapping Secondary Image */}
                <div className="absolute -bottom-12 -left-8 lg:-left-16 w-48 lg:w-64 overflow-hidden shadow-2xl group border-4 border-background">
                  <img src={img15} alt="Plats gourmands Achulene" className="w-full h-48 lg:h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                </div>
                
                {/* Rotating Badge */}
                <div className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10">
                  <div className="relative w-24 h-24 lg:w-32 lg:h-32">
                    {/* Rotating text */}
                    <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                      <defs>
                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                      </defs>
                      <text className="fill-primary text-[9px] uppercase tracking-[0.2em]">
                        <textPath xlinkHref="#circlePath">
                          • Au Service de la Qualité • Depuis 2019
                        </textPath>
                      </text>
                    </svg>
                    {/* Center content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="block font-display text-2xl lg:text-3xl font-bold text-primary">5+</span>
                        <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">Années</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Quote Section - Full Width */}
      

      {/* Library Section */}
      
    </section>;
};
export default AboutSection;