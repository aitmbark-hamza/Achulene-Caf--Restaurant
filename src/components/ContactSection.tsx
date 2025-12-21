import AnimatedSection from '@/components/AnimatedSection';
import { Instagram, MessageCircle, MapPin, Mail, MessageSquare } from 'lucide-react';
import brunchImg from '@/assets/img9.png';

const ContactSection = () => {
  const contactItems = [
    {
      icon: MessageSquare,
      title: 'À PROPOS',
      lines: ['Un café-restaurant', 'unique à Casablanca'],
      link: null,
    },
    {
      // Changed from Phone to Instagram
      icon: Instagram,
      title: 'SUIVEZ-NOUS',
      lines: ['@cafe.restaurant.achulene', 'Découvrez nos nouveautés'],
      link: 'https://www.instagram.com/cafe.restaurant.achulene/',
    },
    {
      icon: MessageCircle,
      title: 'RÉSERVER UNE TABLE',
      lines: ['contact@achulene.ma', 'Réservation par WhatsApp'],
      link: 'https://wa.me/212666908679',
    },
    {
      icon: MapPin,
      title: 'NOTRE ADRESSE',
      lines: ['Casablanca, Maroc', 'Ouvert tous les jours'],
      link: 'https://maps.app.goo.gl/YourActualGoogleMapsLinkHere', // Replace with your actual maps link
    },
  ];

  return (
    <section id="contact" className="relative bg-background">
      {/* Decorative food image at top */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 -top-32 w-80 h-80 rounded-full overflow-hidden border-8 border-background shadow-2xl z-10">
          <img
            src={brunchImg}
            alt="Plat signature"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-10 left-20 w-8 h-8 rounded-full bg-primary/20" />
        <div className="absolute top-20 right-32 w-6 h-6 rounded-full bg-accent/30" />
      </div>

      <div className="container-custom px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => {
            const Content = (
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                  {item.title}
                </h3>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-muted-foreground text-sm">
                    {line}
                  </p>
                ))}
              </div>
            );

            return (
              <AnimatedSection
                key={item.title}
                animation="fade-up"
                delay={index * 100}
                className="text-center"
              >
                {item.link ? (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {Content}
                  </a>
                ) : (
                  Content
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container-custom flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
           <a href="https://www.instagram.com/cafe.restaurant.achulene/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-5 w-5" />
           </a>
           <a href="https://wa.me/212666908679" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="h-5 w-5" />
           </a>
        </div>
        <p className="text-muted-foreground text-sm">
          © {currentYear} Achulene - Café Restaurant Casablanca.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          Développé avec passion pour la gastronomie.
        </p>
      </div>
    </footer>
  );
};

export { ContactSection, Footer };