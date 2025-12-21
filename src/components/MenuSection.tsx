import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// Updated imports: Added CakeSlice and UtensilsCrossed
import { Soup, Drumstick, Pizza, CakeSlice, Coffee, UtensilsCrossed } from 'lucide-react';
import brunchImg from '@/assets/brunch.jpg';
import burgerImg from '@/assets/burger.jpg';
import pastaImg from '@/assets/pasta.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import dessertImg from '@/assets/img6.png';
import coffeeImg from '@/assets/img8.png';

interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: Record<string, MenuCategory[]> = {
  'Petit-déjeuner': [
    {
      title: 'Brunchs',
      items: [
        { name: "L'Oriental", price: '45 MAD', description: 'Msemen, baghrir, huile olive, miel, confiture, thé' },
        { name: 'Le Français', price: '50 MAD', description: 'Croissant, pain, beurre, confiture, jus, café' },
        { name: 'Le Fassi', price: '55 MAD', description: 'Spécialités fassis traditionnelles' },
        { name: 'Brunch Espagnol', price: '55 MAD', description: 'Tortilla, churros, café au lait' },
        { name: 'Brunch Protéiné', price: '60 MAD', description: 'Œufs, avocat, saumon, pain complet' },
        { name: 'Brunch Eastern', price: '65 MAD', description: 'Houmous, falafel, pita, labneh' },
      ],
    },
    {
      title: 'Omelettes',
      items: [
        { name: 'Omelette Nature', price: '16 MAD' },
        { name: 'Tortilla', price: '20 MAD' },
        { name: 'Omelette Fromage', price: '20 MAD' },
        { name: 'Omelette Champignons & Fromage', price: '25 MAD' },
        { name: 'Omelette Jambon & Fromage', price: '25 MAD' },
      ],
    },
  ],
  'Plats': [
    {
      title: 'Plats Principaux',
      items: [
        { name: 'Poulet Crispy', price: '45 MAD' },
        { name: 'Ailes de Poulet', price: '50 MAD' },
        { name: 'Tranches de Poulet', price: '55 MAD' },
        { name: 'Poulet Parmigiana', price: '55 MAD' },
        { name: 'Cordon Bleu', price: '55 MAD' },
        { name: 'Tranches de Boeuf', price: '75 MAD' },
      ],
    },
    {
      title: 'Grillades',
      items: [
        { name: 'Shish Tawook', price: '45 MAD' },
        { name: 'Shish Kefta', price: '55 MAD' },
        { name: 'Shish Gambas', price: '60 MAD' },
        { name: 'Mix Grillades', price: '70 MAD' },
        { name: 'Entrecôte', price: '99 MAD' },
      ],
    },
  ],
  'Burgers': [
    {
      title: 'Burgers',
      items: [
        { name: 'Cheesy Burger', price: '40 MAD' },
        { name: 'Cordon Bleu Burger', price: '45 MAD' },
        { name: 'American Burger', price: '50 MAD' },
        { name: 'Double Cheese Burger', price: '60 MAD' },
      ],
    },
  ],
  'Pizza': [
    {
      title: 'Pizza',
      items: [
        { name: 'Pizza Mozzarella', price: '35 MAD' },
        { name: 'Pizza Végétarienne', price: '40 MAD' },
        { name: 'Pizza Thon', price: '40 MAD' },
        { name: 'Pizza Pepperoni', price: '50 MAD' },
        { name: 'Pizza 4 Fromages', price: '55 MAD' },
        { name: 'Pizza Fruits de Mer', price: '65 MAD' },
      ],
    },
  ],
  'Desserts': [
    {
      title: 'Crêpes',
      items: [
        { name: 'Crêpe Nutella', price: '20 MAD' },
        { name: 'Crêpe Nutella-Banane', price: '25 MAD' },
        { name: 'Crêpe Oreo', price: '25 MAD' },
        { name: 'Crêpe Lotus', price: '30 MAD' },
        { name: 'Crêpe Achulene', price: '35 MAD' },
      ],
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Panna Cotta', price: '15 MAD' },
        { name: 'Tiramisu Classique', price: '20 MAD' },
        { name: 'Cheesecake', price: '25 MAD' },
      ],
    },
  ],
  'Boissons': [
    {
      title: 'Café',
      items: [
        { name: 'Café', price: '14 MAD' },
        { name: 'Espresso', price: '16 MAD' },
        { name: 'Americano', price: '18 MAD' },
        { name: 'Cappuccino', price: '25 MAD' },
        { name: 'Latte Macchiato', price: '25 MAD' },
      ],
    },
    {
      title: 'Thés & Autres',
      items: [
        { name: 'Thé Marocain', price: '15 MAD' },
        { name: 'Chocolat Chaud', price: '20 MAD' },
        { name: 'Smoothie', price: '35 MAD' },
        { name: 'Milkshake', price: '35 MAD' },
      ],
    },
  ],
};

// UPDATED categoryIcons mapping
const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Petit-déjeuner': Soup,
  'Plats': Drumstick,
  'Burgers': UtensilsCrossed, // Changed from Beef to UtensilsCrossed
  'Pizza': Pizza,
  'Desserts': CakeSlice,      // Changed from IceCream to CakeSlice
  'Boissons': Coffee,
};

const categoryImages: Record<string, string> = {
  'Petit-déjeuner': brunchImg,
  'Plats': pastaImg,
  'Burgers': burgerImg,
  'Pizza': pizzaImg,
  'Desserts': dessertImg,
  'Boissons': coffeeImg,
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('Petit-déjeuner');
  const categories = Object.keys(menuData);

  return (
    <section id="menu" className="section-padding bg-card relative overflow-hidden">
      {/* Decorative Images - Top Right */}
      <div className="hidden lg:block absolute top-8 right-0 z-20">
        <div className="relative">
          <img
            src={dessertImg}
            alt="Dessert"
            className="w-56 h-56 object-cover rounded-full border-4 border-background shadow-xl translate-x-12"
          />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-primary" />
          <div className="absolute top-0 -left-8 w-3 h-3 rounded-full bg-accent" />
        </div>
      </div>

      {/* Decorative Images - Left Side */}
      <div className="hidden lg:block absolute top-1/3 left-0 z-20">
        <div className="relative">
          <img
            src={coffeeImg}
            alt="Coffee"
            className="w-40 h-40 object-cover rounded-full border-4 border-background shadow-xl -translate-x-16"
          />
          <div className="absolute -top-6 right-4 w-3 h-3 rounded-full bg-primary" />
          <div className="absolute bottom-2 right-0 w-2 h-2 rounded-full bg-accent" />
        </div>
      </div>

      {/* Decorative onion rings SVG - Bottom Left */}
      <div className="hidden lg:block absolute bottom-20 left-8 z-10 opacity-60">
        <svg viewBox="0 0 100 100" className="w-32 h-32 text-primary/20">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="section-divider block mb-4">- CHOISISSEZ DÉLICIEUX -</span>
          <h2 className="heading-section text-foreground uppercase font-bold">
            Menu Populaire
          </h2>
        </AnimatedSection>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <AnimatedSection animation="fade-up" delay={100}>
            <TabsList className="flex flex-wrap justify-center gap-4 md:gap-8 bg-transparent h-auto mb-12 pb-4 border-b border-border">
              {categories.map((category) => {
                const IconComponent = categoryIcons[category];
                return (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="flex flex-col items-center gap-2 px-4 py-3 bg-transparent text-muted-foreground data-[state=active]:text-accent data-[state=active]:bg-transparent hover:text-foreground transition-colors border-0"
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center transition-all data-[state=active]:border-accent">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider">
                      {category}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </AnimatedSection>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {menuData[category].map((subcategory, idx) => (
                  <AnimatedSection key={subcategory.title} animation="fade-up" delay={idx * 100}>
                    <div className="pb-4">
                      <h4 className="text-label text-primary mb-6">{subcategory.title}</h4>
                      <div className="space-y-5">
                        {subcategory.items.map((item, itemIdx) => (
                          <div
                            key={item.name}
                            className="flex items-center gap-4 group cursor-pointer transform transition-all duration-300 hover:translate-x-2 opacity-0 animate-fade-in"
                            style={{ 
                              animationDelay: `${itemIdx * 80}ms`,
                              animationFillMode: 'forwards'
                            }}
                          >
                            <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors duration-300 shadow-md">
                              <img
                                src={categoryImages[category]}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            
                            <div className="flex-1 flex items-baseline">
                              <div className="flex-1">
                                <span className="font-display text-lg text-foreground group-hover:text-primary transition-colors duration-300 block">
                                  {item.name}
                                </span>
                                {item.description && (
                                  <span className="text-sm text-muted-foreground">
                                    {item.description}
                                  </span>
                                )}
                              </div>
                              <span className="menu-item-line mx-3 group-hover:bg-primary/40 transition-colors duration-300" />
                              <span className="font-display text-lg text-primary font-semibold group-hover:scale-110 transition-transform duration-300 origin-right">
                                {item.price}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <AnimatedSection animation="fade-up" className="text-center mt-12 pt-8 border-t border-border">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
              Chef Cuisinier
            </span>
            <span className="text-muted-foreground">
              Des plats uniques et délicieux préparés par nos <span className="text-foreground font-medium underline underline-offset-2">meilleurs chefs.</span>
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MenuSection;