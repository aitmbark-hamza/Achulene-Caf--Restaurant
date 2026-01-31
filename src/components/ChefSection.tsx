import AnimatedSection from '@/components/AnimatedSection';

interface Chef {
  name: string;
  specialty: string;
  image: string;
}

const chefs: Chef[] = [
  {
    name: "Ahmed Benali",
    specialty: "Cuisine Marocaine",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&h=700&fit=crop&crop=top"
  },
  {
    name: "Sophie Laurent",
    specialty: "Pâtisserie Française",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=500&h=700&fit=crop&crop=top"
  },
  {
    name: "Marco Rossi",
    specialty: "Cuisine Italienne",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=500&h=700&fit=crop&crop=top"
  },
  {
    name: "Fatima Zahra",
    specialty: "Cuisine Méditerranéenne",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=500&h=700&fit=crop&crop=top"
  },
  {
    name: "Jean-Pierre Martin",
    specialty: "Cuisine Gastronomique",
    image: "https://images.unsplash.com/photo-1583394293214-28ez1af78a73?w=500&h=700&fit=crop&crop=top"
  },
  {
    name: "Amina Khalil",
    specialty: "Brunch & Café",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=500&h=700&fit=crop&crop=top"
  }
];

const ChefSection = () => {
  return (
    <section id="chefs" className="section-padding relative overflow-hidden bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      {/* Decorative corner elements */}
      <div className="absolute top-20 right-20 w-3 h-3 rounded-full border-2 border-primary hidden lg:block" />
      <div className="absolute top-[calc(1.25rem+6px)] right-[calc(1.25rem+6px)] w-1.5 h-1.5 rounded-full bg-primary hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-3 h-3 rounded-full border-2 border-primary hidden lg:block" />
      <div className="absolute bottom-[calc(1.25rem+6px)] left-[calc(1.25rem+6px)] w-1.5 h-1.5 rounded-full bg-primary hidden lg:block" />
      
      {/* Elegant line accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent via-primary/30 to-transparent hidden md:block" />
      
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16 md:mb-24">
          <p className="text-label text-primary mb-4">- Chef Professionnel -</p>
          <h2 className="heading-section text-foreground uppercase tracking-wide">
            Cœur de Cuisine
          </h2>
        </AnimatedSection>

        {/* Chefs Grid - 3 per row on desktop, 2 per row on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {chefs.map((chef, index) => (
            <AnimatedSection
              key={chef.name}
              animation="fade-up" 
              delay={index * 100}
              className="group text-center"
            >
              {/* Chef Image with hover effect */}
              <div className="relative mb-6 overflow-hidden">
                <div className="aspect-[4/5] relative bg-muted">
                  <img
                    src={chef.image}
                    alt={`Chef ${chef.name}`}
                    className="w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                  
                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </div>

              {/* Chef Info */}
              <div className="space-y-1">
                <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-semibold text-foreground uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                  {chef.name}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base italic">
                  {chef.specialty}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
