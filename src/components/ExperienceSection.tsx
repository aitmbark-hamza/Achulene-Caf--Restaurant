import { useEffect, useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Phone, Package, Utensils, ShoppingBag } from 'lucide-react';
import pizzaImg from '@/assets/pizza.jpg'; 
import pastaImg from '@/assets/pasta.jpg';
import brunchImg from '@/assets/brunch.jpg';

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
    <section className="relative py-24 overflow-hidden bg-white">
      {/* 1. HUGE BACKGROUND TEXT (Parallax) */}
      <div 
        className="absolute top-10 left-0 right-0 text-[12rem] md:text-[22rem] font-bold uppercase text-gray-100/70 leading-none pointer-events-none select-none whitespace-nowrap z-0"
        style={{ transform: `translateX(${-scrollY * 0.12}px)` }}
      >
        EXPERIENCE
      </div>

      <div className="container-custom px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* 2. IMAGE ARRANGEMENT (MATCHING THE PIC) */}
          <div className="relative flex justify-center items-center h-[400px] md:h-[550px]">
            
            {/* LEFT PLATE (BRUNCH) - Orbiting on the far left */}
            <div 
              className="absolute -left-12 md:-left-20 w-32 h-32 md:w-44 md:h-44 z-20"
              style={{ 
                transform: `translateY(${scrollY * 0.07}px)`, // Moves up/down with scroll
                transition: 'transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
                <img src={brunchImg} alt="Brunch" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* CENTER MAIN PLATE (PIZZA) */}
            <AnimatedSection animation="scale" delay={100} className="relative z-10">
              <div className="relative w-64 h-64 md:w-[450px] md:h-[450px]">
                {/* Dark Stone Under-Plate Effect */}
                <div className="absolute inset-[-15px] rounded-full bg-[#2a2a2a] shadow-2xl scale-105" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-xl">
                  <img
                    src={pizzaImg}
                    alt="Main Dish"
                    className="w-full h-full object-cover"
                    style={{ transform: `rotate(${scrollY * 0.05}deg)` }}
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* RIGHT PLATE (PASTA) - Orbiting on the far right */}
            <div 
              className="absolute -right-12 md:-right-20 w-32 h-32 md:w-44 md:h-44 z-20"
              style={{ 
                transform: `translateY(${scrollY * 0.07}px)`, // Moves up/down with scroll
                transition: 'transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
              }}
            >
              <div className="absolute inset-[-8px] rounded-full bg-[#333]" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img src={pastaImg} alt="Pasta" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Floating Decorative Elements (Leaves) */}
            <div className="absolute top-1/4 left-0 w-6 h-6 bg-green-500 rounded-full blur-sm opacity-40" />
            <div className="absolute bottom-1/4 right-0 w-4 h-8 bg-red-500 rounded-full blur-[1px] rotate-45" />
          </div>

          {/* 3. CONTENT (RIGHT SIDE) */}
          <div className="text-left lg:pl-16">
            <AnimatedSection animation="fade-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[2px] bg-primary" />
                <span className="text-primary font-bold tracking-[0.25em] text-xs uppercase">
                  SINCE 1888
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.05] mb-8 uppercase tracking-tighter">
                Wonderful Dining <br />
                Experience & Food.
              </h2>

              <p className="text-gray-500 text-lg mb-10 max-w-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>

              <div className="flex flex-wrap items-center gap-8">
                <Button className="bg-[#2a2a2a] text-white hover:bg-black rounded-sm px-10 py-7 text-xs font-bold uppercase tracking-widest transition-all">
                  About Restaurant
                </Button>
                
                <a href="tel:1-800-222-000" className="flex items-center gap-3 text-gray-900 group">
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-lg">+212666908679</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default ExperienceSection;