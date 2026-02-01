import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

export default function JoinGurukaryaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 gradient-section-alt relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Join us for Gurukarya
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-card-border bg-card/80 backdrop-blur-sm shadow-xl p-8 sm:p-10 md:p-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Quote className="h-6 w-6 text-primary" />
            </div>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary text-center mb-6">
            Ideal Sadhak
          </h3>

          <blockquote className="text-lg sm:text-xl text-foreground/90 text-center leading-relaxed mb-6">
            He considers himself to be very fortunate to be able to do work for his Guru, because he
            knows that the work will get done through someone. But the fact that he has been able to
            do it is his good fortune.
          </blockquote>

          <p className="text-center text-muted-foreground font-medium mb-2">
            — His Holiness Shivkrupanand Swamiji
          </p>
          <p className="text-center text-sm text-muted-foreground mb-8">
            Source: From the book - Spiritual Truth
          </p>

          <div className="flex justify-center">
            <Link href="/gurukarya">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground border-primary-border px-8 hover:bg-primary/90"
                data-testid="button-join-gurukarya"
              >
                Join Gurukarya
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
