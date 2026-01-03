import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { User, Mail, MessageSquare } from 'lucide-react';
import burgerImg from '@/assets/img14.png';

const LocationSection = () => {
  return (
    <section id="localisation" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 w-20 h-20 opacity-80 hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary/20">
          <circle cx="15" cy="15" r="8" fill="currentColor" />
          <circle cx="35" cy="20" r="6" fill="currentColor" />
          <circle cx="20" cy="38" r="5" fill="currentColor" />
        </svg>
      </div>
      
      <div className="absolute top-0 left-1/3 opacity-20 hidden lg:block">
        <svg width="80" height="60" viewBox="0 0 80 60" className="text-primary/30">
          <path d="M40 5 Q20 20 25 40 Q30 55 40 55 Q50 55 55 40 Q60 20 40 5" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M35 25 L40 5 L45 25" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>

      {/* Burger decoration - top right */}
      <div className="absolute top-4 right-4 lg:top-8 lg:right-8 w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-lg border-4 border-background z-10">
        <img src={burgerImg} alt="Burger" className="w-full h-full object-cover" />
      </div>

      {/* Basil leaves decoration */}
      <div className="absolute top-20 right-40 opacity-60 hidden xl:block">
        <svg width="60" height="80" viewBox="0 0 60 80" className="text-green-600">
          <ellipse cx="30" cy="25" rx="20" ry="25" fill="currentColor" opacity="0.7"/>
          <ellipse cx="45" cy="50" rx="15" ry="20" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>

      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="section-divider block mb-4">━━━━ Nous Trouver ━━━━</span>
          <h2 className="heading-section text-foreground">
            Notre Localisation
          </h2>
        </AnimatedSection>

        {/* Map + Contact Form Layout */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="relative">
              {/* Map */}
              <div className="w-full lg:w-[75%] h-[350px] lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1662.0!2d-7.5497961!3d33.5755326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdaff39d7b41%3A0xbf14e175fc804cae!2sAchulene!5e0!3m2!1sen!2sma!4v1702800000000!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'sepia(30%) saturate(80%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Achulene Location"
                />
              </div>

              {/* Contact Form Card - Overlapping */}
              <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 mt-6 lg:mt-0 bg-card rounded-lg shadow-2xl p-8 lg:p-10 w-full lg:w-[420px] border border-border/50">
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-8 uppercase tracking-wide">
                  Comment pouvons-nous vous aider ?
                </h3>

                <form className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Votre nom*"
                      className="w-full bg-transparent border-b border-border py-3 pr-10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                    <User className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Votre adresse email*"
                      className="w-full bg-transparent border-b border-border py-3 pr-10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                    <Mail className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder="Votre message"
                      rows={3}
                      className="w-full bg-transparent border-b border-border py-3 pr-10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                    <MessageSquare className="absolute right-0 top-3 h-5 w-5 text-muted-foreground" />
                  </div>

                  <Button
                    type="submit"
                    variant="crafto"
                    size="lg"
                    className="w-full mt-4"
                  >
                    ENVOYER UN MESSAGE
                  </Button>
                </form>
              </div>
            </div>
          </AnimatedSection>

          {/* "Write here" watermark text */}
          <div className="hidden lg:block absolute -bottom-4 left-0 text-[120px] font-display font-bold text-primary/5 pointer-events-none select-none leading-none">
            Écrivez ici
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;