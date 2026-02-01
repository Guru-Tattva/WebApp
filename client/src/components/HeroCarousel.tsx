import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import heroMeditation from "@assets/hero-meditation.png";
import heroGuru from "@assets/hero-guru.png";
import heroTemple from "@assets/hero-temple.png";

const slides = [
  {
    id: 1,
    title: "What is Himalayan Meditation?",
    subtitle: "Discover Inner Peace",
    description:
      "Experience the ancient wisdom of Himalayan meditation practices that have transformed millions of lives across the globe. Begin your spiritual journey today.",
    cta1: "Start Your Journey",
    cta2: "Learn More",
    image: heroMeditation,
  },
  {
    id: 2,
    title: "Meet Gurudev",
    subtitle: "Divine Guidance",
    description:
      "Under the enlightened guidance of Gurudev, unlock the secrets of inner transformation and discover your true self through authentic spiritual practices.",
    cta1: "Know Gurudev",
    cta2: "His Teachings",
    image: heroGuru,
  },
  {
    id: 3,
    title: "Sacred Dhyanasthalis",
    subtitle: "Spiritual Sanctuaries",
    description:
      "Visit our sacred meditation centers across the world, where seekers gather to practice and experience the profound peace of Himalayan traditions.",
    cta1: "Find Near You",
    cta2: "Virtual Tour",
    image: heroTemple,
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[calc(100vh-7rem)] bg-gradient-to-br from-background via-card to-muted/30 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]"
          >
            <div className="order-2 lg:order-1 space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-sm font-medium text-secondary uppercase tracking-wider"
              >
                {slides[currentSlide].subtitle}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                  data-testid="button-hero-cta-primary"
                >
                  {slides[currentSlide].cta1}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  data-testid="button-hero-cta-secondary"
                >
                  {slides[currentSlide].cta2}
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10" />
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                  data-testid={`img-hero-${currentSlide}`}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-6 mt-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="rounded-full"
            data-testid="button-prev-slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-primary/50"
                }`}
                data-testid={`button-slide-indicator-${index}`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="rounded-full"
            data-testid="button-next-slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
