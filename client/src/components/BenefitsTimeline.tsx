import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Crown,
  Globe,
  Gift,
  CircleCheck,
  DoorOpen,
  FlaskConical,
} from "lucide-react";

const peculiarities = [
  {
    id: 1,
    icon: Sparkles,
    title: "Anubhuti Based",
    description: "Spiritual Experience Based Meditation. Self Realization through Inner Experience.",
    petalColor: "from-rose-400 to-pink-500",
  },
  {
    id: 2,
    icon: Crown,
    title: "Focuses on Sahasrar Chakra",
    description: "Meditation begins only after one attains the state of thoughtlessness.",
    petalColor: "from-violet-400 to-purple-500",
  },
  {
    id: 3,
    icon: Globe,
    title: "No discrimination",
    description:
      'It is based on the concept of "Vasudhaiva Kutumbakam"—the entire world is one family. This can be achieved after practicing this Meditation.',
    petalColor: "from-amber-400 to-orange-500",
  },
  {
    id: 4,
    icon: Gift,
    title: "Invaluable",
    description:
      "Just as the air, water, sunlight are available freely and unconditionally to the entire mankind, similarly this priceless Himalayan Meditation is available to all without a charge.",
    petalColor: "from-emerald-400 to-green-500",
  },
  {
    id: 5,
    icon: CircleCheck,
    title: "Easy to follow",
    description: "No complex techniques are involved in the process.",
    petalColor: "from-cyan-400 to-teal-500",
  },
  {
    id: 6,
    icon: DoorOpen,
    title: "No restrictions",
    description:
      "Whomsoever reaches the Guru's (Enlightened Master's) proximity becomes worthy of receiving their divine grace.",
    petalColor: "from-indigo-400 to-blue-500",
  },
  {
    id: 7,
    icon: FlaskConical,
    title: "Backed by Science",
    description:
      "A Meditation Method that is backed by Scientific research. A scientifically approved meditation technique.",
    petalColor: "from-red-400 to-rose-500",
  },
];

function FlowerPetal({ delay, rotate, scale = 1 }: { delay: number; rotate: number; scale?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.6, scale }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="absolute"
      style={{
        transform: `rotate(${rotate}deg)`,
        transformOrigin: "center bottom",
      }}
    >
      <div
        className="w-4 h-8 rounded-full bg-gradient-to-t from-primary/40 to-accent/30"
        style={{
          clipPath: "ellipse(50% 100% at 50% 100%)",
        }}
      />
    </motion.div>
  );
}

function FlowerMarker({ index, isActive }: { index: number; isActive: boolean }) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];
  
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      {petals.map((rotate, i) => (
        <FlowerPetal 
          key={i} 
          delay={0.1 * i} 
          rotate={rotate} 
          scale={isActive ? 1.2 : 0.8} 
        />
      ))}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        className={`relative z-10 w-6 h-6 rounded-full bg-gradient-to-br ${
          isActive ? "from-accent to-primary" : "from-primary/60 to-accent/60"
        } flex items-center justify-center shadow-lg`}
      >
        <span className="text-xs font-bold text-white">{index + 1}</span>
      </motion.div>
    </div>
  );
}

function FloatingPetal({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C12 2 8 6 8 10C8 14 12 18 12 18C12 18 16 14 16 10C16 6 12 2 12 2Z"
          fill="currentColor"
          className="text-primary/20"
        />
      </svg>
    </motion.div>
  );
}

export default function BenefitsTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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
      className="py-20 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden"
    >
      <FloatingPetal className="top-20 left-10" />
      <FloatingPetal className="top-40 right-20" />
      <FloatingPetal className="bottom-32 left-1/4" />
      <FloatingPetal className="top-60 right-1/3" />
      <FloatingPetal className="bottom-20 right-10" />

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <svg width="48" height="48" viewBox="0 0 48 48" className="text-accent">
              <path
                d="M24 4C24 4 18 10 18 18C18 26 24 34 24 34C24 34 30 26 30 18C30 10 24 4 24 4Z"
                fill="currentColor"
                opacity="0.6"
              />
              <path
                d="M24 10C24 10 20 14 20 20C20 26 24 30 24 30C24 30 28 26 28 20C28 14 24 10 24 10Z"
                fill="currentColor"
              />
              <circle cx="24" cy="18" r="3" fill="white" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Peculiarities of Himalayan Meditation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes Himalayan Meditation unique
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="h-[500px] overflow-y-auto pr-4"
            style={{
              scrollbarWidth: "thin",
              scrollBehavior: "smooth",
            }}
          >
            <div className="relative py-8">
              <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5">
                <div className="h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
                <motion.div
                  className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-accent via-primary to-accent"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 2, ease: "easeOut" }}
                  style={{ transformOrigin: "top" }}
                />
              </div>

              {peculiarities.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex items-start mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  data-testid={`peculiarity-${item.id}`}
                >
                  <div className={`hidden md:block w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-block p-6 rounded-2xl bg-gradient-to-br from-card via-card to-card/80 border border-card-border shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${item.petalColor} text-white mb-4 shadow-md`}>
                        <item.icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <FlowerMarker index={index} isActive={true} />
                  </div>

                  <div className="md:hidden ml-16 p-5 rounded-2xl bg-gradient-to-br from-card via-card to-card/80 border border-card-border shadow-lg">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${item.petalColor} text-white mb-3 shadow-md`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
            <span>Scroll to explore all peculiarities</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
