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
      {/* Floating circles and soft shapes moving around the image */}
      <motion.div
        className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-accent/30"
        animate={{
          x: [0, 12, -8, 0],
          y: [0, -10, 6, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 90, 180],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 -right-8 w-12 h-12 rounded-full bg-primary/20"
        animate={{
          x: [0, -15, 8, 0],
          y: [0, 8, -12, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-accent/15"
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0],
          scale: [1, 1.15, 1],
          rotate: [0, -45, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -left-4 w-8 h-8 rounded-full border border-accent/40"
        animate={{
          x: [0, 18, -6, 0],
          y: [0, -8, 14, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 -right-6 w-6 h-6 rounded-full bg-accent/25"
        animate={{
          x: [0, -12, 6, 0],
          y: [0, 10, -6, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-2 right-1/4 w-10 h-10 rounded-full border border-primary/30"
        animate={{
          x: [0, -8, 14, 0],
          y: [0, 12, -8, 0],
          rotate: [0, 120, 240],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-primary/30"
        animate={{
          x: [0, 10, -12, 0],
          y: [0, -6, 8, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 -left-2 w-5 h-5 rounded-full bg-accent/35"
        animate={{
          x: [0, -14, 7, 0],
          y: [0, 7, -10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Soft gambol / petal-like blob */}
      <motion.div
        className="absolute top-0 right-1/3 w-14 h-14 rounded-[60%_40%_50%_50%] bg-accent/20"
        animate={{
          x: [0, -10, 15, 0],
          y: [0, 15, -8, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 25, -15, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-2 w-16 h-16 rounded-[50%_50%_40%_60%] bg-primary/15"
        animate={{
          x: [0, 12, -18, 0],
          y: [0, -10, 12, 0],
          rotate: [0, -30, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
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
