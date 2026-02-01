import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sun, Heart, Sparkles, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
const HERO_GURUDEV_IMAGE = "/hero-gurudev.png";

const slides = [
  {
    id: 1,
    title: "Himalayan Meditation",
    description: "800 Years old Yogic Sanskaar from Himalayas",
    cta1: "Find Near You",
    cta2: "Virtual Tour",
    icon: Sun,
  },
  {
    id: 2,
    title: "GuruTattva",
    description: "A global Platform for Spiritual Awakening",
    cta1: "Find Near You",
    cta2: "Virtual Tour",
    icon: Heart,
  },
  {
    id: 3,
    title: "Param Pujya Shree Shivkrupanand Swamiji",
    description:
      "The unceasing saga of the expansion of global consciousness from the caves of the Himalayas",
    cta1: "Find Near You",
    cta2: "Virtual Tour",
    icon: Sparkles,
  },
];

const thoughtCloud = { thought: "In silence, the soul finds its voice.", icon: Flower2 };

function ThoughtCloud({ thought, icon: Icon }: { thought: string; icon: typeof Sun }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="relative inline-block"
    >
      <div className="relative bg-gradient-to-br from-card via-card to-muted/50 px-6 py-4 rounded-[2rem] shadow-lg border border-card-border/30 backdrop-blur-sm">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
          <Icon className="w-4 h-4 text-accent" />
        </div>
        <p className="text-sm text-muted-foreground italic text-center pt-2 max-w-xs" data-testid="thought-cloud-text">
          "{thought}"
        </p>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card rounded-full border border-card-border/30" />
        <div className="absolute -bottom-5 left-1/2 translate-x-1 w-2 h-2 bg-card rounded-full border border-card-border/30" />
      </div>
    </motion.div>
  );
}

function FlowerTextBox({ 
  title, 
  description, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  icon: typeof Sun;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="relative"
    >
      <div className="absolute -inset-4 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-10 rounded-full bg-gradient-to-t from-primary/20 to-accent/10"
            style={{
              left: '50%',
              top: '0%',
              transformOrigin: '50% 150%',
              transform: `rotate(${i * 45}deg) translateY(-8px)`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      
      <div className="relative bg-gradient-to-br from-card via-card to-muted/30 rounded-[2.5rem] p-8 shadow-xl border border-card-border/40 backdrop-blur-sm overflow-visible">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg border-4 border-card">
          <Icon className="w-7 h-7 text-accent-foreground" />
        </div>
        
        <div className="pt-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="flower-box-title">
            {title}
          </h2>
          <p className="text-muted-foreground leading-relaxed" data-testid="flower-box-description">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function TempleDecorations() {
  return (
    <>
      <motion.div
        className="absolute -top-6 -right-6 w-36 h-36"
        animate={{ rotate: 180, scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent/30">
          <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <polygon points="50,15 85,50 50,85 15,50" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute -bottom-10 -left-8 w-32 h-32"
        animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary/25">
          <path d="M50 10 L60 40 L95 40 L68 58 L78 90 L50 72 L22 90 L32 58 L5 40 L40 40 Z" fill="currentColor" opacity="0.5" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute top-1/3 -right-5 w-16 h-16"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent/40">
          <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(45 50 50)" />
        </svg>
      </motion.div>
      <div className="absolute top-1/4 -left-4 w-3 h-3 rounded-full bg-accent/50" />
      <div className="absolute -bottom-2 right-1/3 w-4 h-4 rounded-full bg-primary/30" />
    </>
  );
}

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const resetSlideTimer = useCallback(() => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
    }
    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  }, []);

  useEffect(() => {
    resetSlideTimer();
    return () => {
      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current);
      }
    };
  }, [resetSlideTimer]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetSlideTimer();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetSlideTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetSlideTimer();
  };

  return (
    <section className="relative min-h-[calc(100vh-7rem)] gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[65vh]">
          <div className="order-2 lg:order-1 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <FlowerTextBox
                  title={slides[currentSlide].title}
                  description={slides[currentSlide].description}
                  icon={slides[currentSlide].icon}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground border-primary-border px-8"
                    data-testid="button-hero-cta-primary"
                  >
                    {slides[currentSlide].cta1}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary"
                    data-testid="button-hero-cta-secondary"
                  >
                    {slides[currentSlide].cta2}
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="flex justify-center mb-4" data-testid="thought-cloud-container">
              <ThoughtCloud
                thought={thoughtCloud.thought}
                icon={thoughtCloud.icon}
              />
            </div>

            <div className="relative">
              <TempleDecorations />

              <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-card-border/50 bg-transparent">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent z-10 pointer-events-none" />
                <img
                  src={HERO_GURUDEV_IMAGE}
                  alt="Param Pujya Shree Shivkrupanand Swamiji"
                  className="w-full h-full object-contain object-bottom"
                  data-testid="img-hero-gurudev"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="rounded-full"
            aria-label="Previous slide"
            data-testid="button-prev-slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-muted w-2 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                data-testid={`button-slide-indicator-${index}`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="rounded-full"
            aria-label="Next slide"
            data-testid="button-next-slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
