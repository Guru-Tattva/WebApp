import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sun, Heart, Sparkles, Flower2, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import heroMeditation from "@assets/hero-meditation.png";
import heroGuru from "@assets/hero-guru.png";
import heroTemple from "@assets/hero-temple.png";

const slides = [
  {
    id: 1,
    title: "Spiritual Awakening",
    description:
      "Discover your true self and connect with the divine consciousness within.",
    cta1: "Start Your Journey",
    cta2: "Learn More",
    image: heroMeditation,
    decorations: "meditation",
    icon: Sun,
  },
  {
    id: 2,
    title: "Divine Connection",
    description:
      "Experience the profound peace and love that flows from within your heart center.",
    cta1: "Know Gurudev",
    cta2: "His Teachings",
    image: heroGuru,
    decorations: "guru",
    icon: Heart,
  },
  {
    id: 3,
    title: "Sacred Transformation",
    description:
      "Embrace the light of wisdom and transform your life through ancient practices.",
    cta1: "Find Near You",
    cta2: "Virtual Tour",
    image: heroTemple,
    decorations: "temple",
    icon: Sparkles,
  },
];

const thoughtCloudContent = [
  { id: 1, thought: "In silence, the soul finds its voice.", icon: Flower2 },
  { id: 2, thought: "Peace begins with a single breath.", icon: Cloud },
  { id: 3, thought: "Your inner light guides the way.", icon: Sun },
  { id: 4, thought: "Love is the essence of all being.", icon: Heart },
  { id: 5, thought: "Stillness reveals infinite wisdom.", icon: Sparkles },
];

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

function MeditationDecorations() {
  return (
    <>
      <motion.div
        className="absolute -top-8 -right-8 w-32 h-32"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent/40">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 4" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 3" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute -bottom-6 -left-6 w-24 h-24"
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary/30">
          <path d="M50 10 C30 30, 10 50, 50 90 C90 50, 70 30, 50 10" fill="currentColor" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute top-1/2 -right-4 w-16 h-16"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/40 to-primary/20" />
      </motion.div>
      <div className="absolute -top-4 left-1/4 w-3 h-3 rounded-full bg-accent/50" />
      <div className="absolute bottom-1/4 -right-2 w-2 h-2 rounded-full bg-primary/40" />
    </>
  );
}

function GuruDecorations() {
  return (
    <>
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary/25">
          <path d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z" fill="currentColor" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute -bottom-8 -right-8 w-28 h-28"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent/35">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute top-1/4 -left-6 w-12 h-12"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full border-2 border-primary/30" />
      </motion.div>
      <div className="absolute -top-2 right-1/4 w-4 h-4 rounded-full bg-accent/40" />
      <div className="absolute bottom-1/3 -left-3 w-2 h-2 rounded-full bg-primary/30" />
    </>
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

function DecorationWrapper({ type }: { type: string }) {
  switch (type) {
    case "meditation":
      return <MeditationDecorations />;
    case "guru":
      return <GuruDecorations />;
    case "temple":
      return <TempleDecorations />;
    default:
      return null;
  }
}

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentThought, setCurrentThought] = useState(0);
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

  useEffect(() => {
    const thoughtTimer = setInterval(() => {
      setCurrentThought((prev) => (prev + 1) % thoughtCloudContent.length);
    }, 5000);
    return () => clearInterval(thoughtTimer);
  }, []);

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
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[65vh]"
          >
            <div className="order-2 lg:order-1 space-y-8">
              <FlowerTextBox
                title={slides[currentSlide].title}
                description={slides[currentSlide].description}
                icon={slides[currentSlide].icon}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
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
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="flex justify-center mb-4" data-testid="thought-cloud-container">
                <AnimatePresence mode="wait">
                  <ThoughtCloud
                    key={currentThought}
                    thought={thoughtCloudContent[currentThought].thought}
                    icon={thoughtCloudContent[currentThought].icon}
                  />
                </AnimatePresence>
              </div>

              <div className="relative">
                <DecorationWrapper type={slides[currentSlide].decorations} />
                
                <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-card-border/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent z-10" />
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover"
                    data-testid={`img-hero-${currentSlide}`}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

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
