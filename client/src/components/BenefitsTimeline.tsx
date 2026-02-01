import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Brain, Sun, Moon, Leaf, Sparkles, Shield, Zap } from "lucide-react";
import lotusImage from "@assets/lotus-flower.png";

const benefits = [
  {
    id: 1,
    icon: Heart,
    title: "Inner Peace",
    description: "Experience profound tranquility and emotional balance through ancient meditation techniques.",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    icon: Brain,
    title: "Mental Clarity",
    description: "Sharpen your focus and enhance cognitive abilities with regular practice.",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 3,
    icon: Sun,
    title: "Spiritual Awakening",
    description: "Discover your true self and connect with the divine consciousness within.",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    icon: Moon,
    title: "Stress Relief",
    description: "Release accumulated stress and anxiety through deep relaxation techniques.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 5,
    icon: Leaf,
    title: "Physical Wellness",
    description: "Improve your overall health and vitality through mind-body harmony.",
    color: "from-emerald-500 to-green-500",
  },
  {
    id: 6,
    icon: Sparkles,
    title: "Enhanced Creativity",
    description: "Unlock your creative potential and innovative thinking abilities.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 7,
    icon: Shield,
    title: "Emotional Resilience",
    description: "Build inner strength to face life's challenges with grace and equanimity.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: 8,
    icon: Zap,
    title: "Energy Boost",
    description: "Revitalize your life force energy and experience renewed enthusiasm.",
    color: "from-red-500 to-pink-500",
  },
];

export default function BenefitsTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(true);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
        return;
      }

      e.preventDefault();
      container.scrollTop += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background via-card/50 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <img
          src={lotusImage}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Benefits of Himalayan Meditation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your life with the eight-fold blessings of ancient wisdom
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent pr-4"
            style={{
              scrollbarWidth: "thin",
              scrollBehavior: "smooth",
            }}
          >
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  data-testid={`benefit-${benefit.id}`}
                >
                  <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <div className="inline-block p-6 rounded-xl bg-card border border-card-border hover-elevate">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${benefit.color} text-white mb-3`}>
                        <benefit.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background z-10" />

                  <div className="md:hidden ml-16 p-4 rounded-xl bg-card border border-card-border hover-elevate">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${benefit.color} text-white mb-2`}>
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Scroll to explore all benefits
          </p>
        </div>
      </div>
    </section>
  );
}
