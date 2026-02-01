import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Users, Globe, Gift } from "lucide-react";

const stats = [
  {
    icon: MapPin,
    value: 8,
    suffix: "+",
    label: "Dhyanasthalis",
    description: "Sacred meditation centers",
  },
  {
    icon: Users,
    value: 10,
    suffix: " Lakh+",
    label: "Sadhaks",
    description: "Spiritual seekers worldwide",
  },
  {
    icon: Globe,
    value: 70,
    suffix: "+",
    label: "Countries",
    description: "Global presence",
  },
  {
    icon: Gift,
    value: 17,
    suffix: "",
    label: "Offerings",
    description: "Spiritual programs",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AnalyticsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Global Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Spreading the light of Himalayan wisdom across the world
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-card border border-card-border hover-elevate group"
              data-testid={`stat-${stat.label.toLowerCase()}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <stat.icon className="h-7 w-7" />
              </div>

              <div className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </h3>

              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
