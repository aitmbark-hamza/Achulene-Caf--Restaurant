import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import { Instagram, MessageCircle, MapPin, ArrowRight, Coffee } from 'lucide-react';
import hero from '@/assets/hero.png';

const HeroSection = () => {
  const scrollToMenu = () => {
    const element = document.querySelector('#menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Achulene café-restaurant intérieur"
          className="w-full h-full object-cover opacity-600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <AnimatedSection animation="fade-up" delay={200}>
              <span className="text-label text-primary mb-4 block">
                Bienvenue à Casablanca
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <h1 className="heading-display text-foreground mb-4 leading-[0.9]">
                Grande
                <span className="block text-primary">Cuisine</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <p className="text-body text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
                Un lieu unique alliant saveurs gourmandes, café artisanal et un coin bibliothèque 
                pour vos moments de lecture et de détente.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={800}>
              <Button 
                variant="default" 
                size="lg"
                onClick={scrollToMenu}
                className="group bg-foreground text-background hover:bg-foreground/90"
              >
                Découvrir le Menu
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </AnimatedSection>
          </div>

          {/* Center Circle */}
          <div className="relative">
            <AnimatedSection animation="scale" delay={600}>
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Stone Gray Circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-muted to-muted/60 shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-4 rounded-full bg-background shadow-inner" />
                  <div className="relative text-center px-8 z-10">
                    <span className="text-label text-muted-foreground/70 block mb-2">
                      Café-Restaurant
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground uppercase tracking-wide">
                      Achulene
                    </h2>
                  </div>
                </div>

                {/* Accent Badge */}
                <div className="absolute -right-4 -bottom-4 md:right-0 md:bottom-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32">
                    <div className="absolute inset-0 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <Coffee className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground" />
                    </div>
                    <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                      <defs>
                        <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                      </defs>
                      <text className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] fill-accent-foreground font-medium">
                        <textPath xlinkHref="#circle">
                          • Saveurs authentiques • Café artisanal •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Social Links */}
          <div className="flex lg:flex-col gap-4 lg:gap-6">
            <AnimatedSection animation="fade-left" delay={800}>
              <Button 
                variant="outline" 
                size="icon"
                className="w-12 h-12 rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://www.instagram.com/cafe.restaurant.achulene/', '_blank')}
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={900}>
              <Button 
                variant="outline" 
                size="icon"
                className="w-12 h-12 rounded-full border-border hover:border-green-500 hover:bg-green-500 hover:text-white"
                onClick={() => window.open('https://wa.me/212666908679', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={1000}>
              <Button 
                variant="outline" 
                size="icon"
                className="w-12 h-12 rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://maps.app.goo.gl/ie5GjFqjjZKJW2EU9', '_blank', 'noopener,noreferrer')}
              >
                <MapPin className="h-5 w-5" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;