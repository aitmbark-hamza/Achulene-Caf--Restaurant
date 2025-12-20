import AnimatedSection from '@/components/AnimatedSection';
import { Phone, Instagram, MessageCircle, MapPin, Mail, MessageSquare } from 'lucide-react';
import brunchImg from '@/assets/brunch.jpg';
import logo from '@/assets/logo.png';

const ContactSection = () => {
  const contactItems = [
    {
      icon: MessageSquare,
      title: 'À PROPOS',
      lines: ['Un café-restaurant', 'unique à Casablanca'],
    },
    {
      icon: Phone,
      title: 'CONTACTEZ-NOUS',
      lines: ['Tél: +212 666 90 86 79', 'WhatsApp disponible'],
    },
    {
      icon: Mail,
      title: 'RÉSERVER UNE TABLE',
      lines: ['contact@achulene.ma', 'Réservation par WhatsApp'],
    },
    {
      icon: MapPin,
      title: 'NOTRE ADRESSE',
      lines: ['Casablanca, Maroc', 'Ouvert tous les jours'],
    },
  ];

  return (
    <section id="contact" className="relative bg-background">
      {/* Decorative food image at top */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 -top-32 w-80 h-80 rounded-full overflow-hidden border-8 border-background shadow-2xl">
          <img
            src={brunchImg}
            alt="Plat signature"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-20 w-8 h-8 rounded-full bg-primary/20" />
        <div className="absolute top-20 right-32 w-6 h-6 rounded-full bg-accent/30" />
      </div>

      {/* Contact Info Cards */}
      <div className="container-custom px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => (
            <AnimatedSection
              key={item.title}
              animation="fade-up"
              delay={index * 100}
              className="text-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center mb-4 hover:border-primary transition-colors">
                  <item.icon className="h-6 w-6 text-foreground" />
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-6 border-t border-border">
      <div className="container-custom px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © Copyright {currentYear}{' '}
            <a href="#" className="hover:text-primary underline">
              Achulene
            </a>
          </p>

          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Achulene - Impresso Espresso" 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/cafe.restaurant.achulene/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/212666908679"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { ContactSection, Footer };