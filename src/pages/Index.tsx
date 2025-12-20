import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import LocationSection from '@/components/LocationSection';
import { ContactSection, Footer } from '@/components/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Achulene | Café-Restaurant à Casablanca - Brunch, Menu & Bibliothèque</title>
        <meta 
          name="description" 
          content="Achulene, café-restaurant à Casablanca. Découvrez notre menu varié : brunch, plats, pizza, pâtes, desserts et boissons. Coin bibliothèque pour vos moments de lecture." 
        />
        <meta name="keywords" content="café casablanca, restaurant casablanca, brunch casablanca, achulene, bibliothèque café, pizza casablanca" />
        <link rel="canonical" href="https://achulene.ma" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Achulene | Café-Restaurant à Casablanca" />
        <meta property="og:description" content="Café-restaurant avec coin bibliothèque à Casablanca. Menu varié du petit-déjeuner au dîner." />
        <meta property="og:type" content="restaurant" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Achulene",
            "description": "Café-restaurant avec coin bibliothèque à Casablanca",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Casablanca",
              "addressCountry": "MA"
            },
            "telephone": "+212666908679",
            "servesCuisine": ["Française", "Marocaine", "Internationale"],
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <ExperienceSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
