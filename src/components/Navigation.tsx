import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#apropos', label: 'À Propos' },
    { href: '#menu', label: 'Menu' },
    { href: '#chefs', label: 'Chefs' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-background border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo */}
          <a href="#accueil" onClick={(e) => { e.preventDefault(); scrollToSection('#accueil'); }} className="flex-shrink-0">
            <img src={logo} alt="Achulene" className="h-32 md:h-80 w-auto object-contain" style={{ maxWidth: '180px' }} />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium uppercase tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Button 
              variant="crafto" 
              onClick={() => window.open('https://wa.me/212666908679', '_blank')}
              className="rounded-none"
            >
              Réserver
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex items-center justify-center w-12 h-12 text-foreground">
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed inset-0 bg-background transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-6">
          
          {/* Close Button داخل الـ Sidebar */}
          <div className="absolute top-6 right-6">
            <button onClick={() => setIsOpen(false)} className="flex items-center justify-center w-10 h-10 text-foreground">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-6 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-foreground text-3xl font-display font-bold uppercase border-b border-border/50 pb-4 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Sidebar Button */}
          <div className="mt-10">
            <Button 
              variant="crafto" 
              className="w-full h-16 text-lg rounded-none uppercase tracking-widest"
              onClick={() => window.open('https://wa.me/212666908679', '_blank')}
            >
              Réserver une table
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
