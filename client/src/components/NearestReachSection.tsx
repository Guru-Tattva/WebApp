import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";

export default function NearestReachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary-foreground/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary-foreground/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-primary-foreground/20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/10 mb-6">
            <MapPin className="h-10 w-10 text-primary-foreground" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Check Your Nearest Reach
          </h2>

          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Find home centers and Dhyanasthalis near you. Enter your pin code to
            discover meditation centers in your area and begin your spiritual journey.
          </p>

          <Link href="/find-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground border-accent-border px-10 py-6 text-lg"
              data-testid="button-find-center"
            >
              <Navigation className="h-5 w-5 mr-2" />
              Click Here to Find
            </Button>
          </Link>

          <div className="mt-12 grid grid-cols-2 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-1">
                50+
              </div>
              <div className="text-sm text-primary-foreground/70">
                Home Centers
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-1">
                8+
              </div>
              <div className="text-sm text-primary-foreground/70">
                Dhyanasthalis
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
