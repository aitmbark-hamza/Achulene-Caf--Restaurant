import { useState, useRef, MouseEvent, useEffect } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Keep your image imports here...
import img1 from '@/assets/img1.png';
import img2 from '@/assets/img2.png';
import img3 from '@/assets/img3.png';
import img4 from '@/assets/img4.png';
import img5 from '@/assets/img5.png';
import img6 from '@/assets/img6.png';
import img8 from '@/assets/img8.png';
import img9 from '@/assets/img9.png';
import img10 from '@/assets/img10.png';
import img11 from '@/assets/img11.png';
import img14 from '@/assets/img14.png';
import img18 from '@/assets/img18.png';
import img19 from '@/assets/img19.png';
import img20 from '@/assets/img20.png';
import img21 from '@/assets/img21.png';
import img22 from '@/assets/img22.png';
import img24 from '@/assets/img24.png';

import img26 from '@/assets/img26.png';

const galleryImages = [
  { src: img1, title: 'Photo 1', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img2, title: 'Photo 2', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img3, title: 'Photo 3', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img4, title: 'Photo 4', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img5, title: 'Photo 5', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img6, title: 'Photo 6', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img8, title: 'Photo 8', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img9, title: 'Photo 9', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img10, title: 'Photo 10', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img11, title: 'Photo 11', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img14, title: 'Photo 14', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img18, title: 'Photo 18', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img19, title: 'Photo 19', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img20, title: 'Photo 20', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img21, title: 'Photo 21', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img22, title: 'Photo 22', ingredients: ["Description: vérifier l'image et modifier"] },
  { src: img24, title: 'Photo 24', ingredients: ["Description: vérifier l'image et modifier"] },

  { src: img26, title: 'Photo 26', ingredients: ["Description: vérifier l'image et modifier"] },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // --- Animation & Speed Control ---
  const rafId = useRef<number | null>(null);
  const speedRef = useRef<number>(0);

  // --- Dragging State ---
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // 1. Smooth Auto-scroll via Animation Frame
  const autoScrollStep = () => {
    if (!scrollRef.current || speedRef.current === 0 || isDragging.current) {
      rafId.current = null;
      return;
    }
    scrollRef.current.scrollLeft += speedRef.current;
    rafId.current = requestAnimationFrame(autoScrollStep);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Handling Drag Logic first
    if (isDragging.current && scrollRef.current) {
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current) * 2; // scroll-fast multiplier
      scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
      return;
    }

    // Handling Hover Auto-Scroll logic
    const el = scrollRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const xRelative = e.clientX - rect.left;
    const edgeSize = rect.width * 0.2; // Trigger scroll within 20% of edges

    if (xRelative < edgeSize) {
      // Near left edge (Negative speed)
      const intensity = (edgeSize - xRelative) / edgeSize;
      speedRef.current = -intensity * 10; // Max speed 10px/frame
    } else if (xRelative > rect.width - edgeSize) {
      // Near right edge (Positive speed)
      const intensity = (xRelative - (rect.width - edgeSize)) / edgeSize;
      speedRef.current = intensity * 10;
    } else {
      speedRef.current = 0;
    }

    if (speedRef.current !== 0 && !rafId.current && !isDragging.current) {
      rafId.current = requestAnimationFrame(autoScrollStep);
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
    speedRef.current = 0; // Stop auto-scroll while dragging
  };

  const stopScrolling = () => {
    isDragging.current = false;
    speedRef.current = 0;
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  useEffect(() => {
    return () => stopScrolling();
  }, []);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="galerie" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="section-divider block mb-4">- CHOIX SPÉCIAL -</span>
          <h2 className="heading-section text-foreground uppercase font-bold">
            Plats Populaires
          </h2>
        </AnimatedSection>

        {/* Top Navigation Arrows */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => scrollCarousel('left')}
            className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollCarousel('right')}
            className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative group/carousel">
        {/* Floating Side Arrows */}
        <button
          onClick={() => scrollCarousel('left')}
          className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 text-white shadow-lg hover:bg-primary z-20 transition-all opacity-0 group-hover/carousel:opacity-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollCarousel('right')}
          className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 text-white shadow-lg hover:bg-primary z-20 transition-all opacity-0 group-hover/carousel:opacity-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={scrollRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
          className="flex gap-6 overflow-x-auto pb-8 px-4 md:px-20 scrollbar-hide select-none"
          style={{ cursor: isDragging.current ? 'grabbing' : 'grab' }}
        >
          {galleryImages.map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <AnimatedSection animation="scale" delay={index * 30}>
                <div
                  onClick={() => !isDragging.current && setSelectedImage(index)}
                  className="group block"
                >
                  <div className="relative w-72 md:w-80 overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {image.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {image.ingredients.map((ing, i) => (
                        <span key={i}>
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-1.5 align-middle" />
                          {ing}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-16 overflow-hidden">
        <div className="marquee-scroll flex whitespace-nowrap">
          {['DÉLICIEUX', 'AWESOME', 'EXPÉRIENCE', 'CUISINE', 'DÉLICIEUX', 'AWESOME', 'EXPÉRIENCE', 'CUISINE'].map((text, i) => (
            <span key={i} className={i % 2 === 0 ? "marquee-text mx-8" : "marquee-text-filled mx-8"}>
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-background border-border p-0">
          <div className="relative">
            {selectedImage !== null && (
              <>
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-3 bg-background/80 hover:bg-primary hover:text-primary-foreground transition-colors rounded-full"
                >
                  <X className="h-5 w-5" />
                </button>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 hover:bg-primary hover:text-primary-foreground transition-colors rounded-full"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 hover:bg-primary hover:text-primary-foreground transition-colors rounded-full"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-background/90 px-6 py-4">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {galleryImages[selectedImage].title}
                  </h3>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;