import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#apropos', label: 'À Propos' },
    { href: '#menu', label: 'Menu' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a 
            href="#accueil" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#accueil'); }}
            className="flex items-center group"
          >
            <img 
              src={logo} 
              alt="Achulene - Impresso Espresso" 
              className="h-20 md:h-80 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium uppercase tracking-wider relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Button 
              variant="crafto" 
              size="default"
              onClick={() => window.open('https://wa.me/212666908679', '_blank')}
              className="rounded-none"
            >
              Réserver
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-background transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="px-4 py-10 space-y-1">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="block text-foreground hover:text-primary transition-colors duration-300 text-3xl font-display font-semibold py-4 border-b border-border uppercase"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
          <Button 
            variant="crafto" 
            className="w-full mt-8 h-14 text-lg rounded-none"
            onClick={() => window.open('https://wa.me/212666908679', '_blank')}
          >
            Réserver une table
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;