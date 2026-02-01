import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";

export default function DonateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-primary/10" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center bg-card border border-card-border rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <Heart className="h-8 w-8" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Support Our Mission
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Your generous contribution helps us spread the light of Himalayan
              wisdom to seekers across the world. Every donation supports our
              meditation centers, spiritual programs, and community initiatives.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/donate">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground border-secondary-border px-10"
                  data-testid="button-donate"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Donate Us
                </Button>
              </Link>

              <Link href="/donate">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-primary"
                  data-testid="button-donate-here"
                >
                  Here
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              All donations are tax-deductible under section 80G
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
