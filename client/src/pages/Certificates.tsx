import { Link } from "wouter";
import { Award, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { certificates } from "@/data/certificates";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export default function Certificates() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="relative py-16 gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Learn About Us From Different Perspectives
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recognitions and certificates from institutions and governments worldwide
              </p>
            </motion.div>
          </div>
        </section>

        {/* Certificates grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {certificates.map((cert) => (
                <motion.div key={cert.id} variants={fadeInUp}>
                  <HoverCard openDelay={200} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div className="group relative rounded-2xl border border-card-border bg-card overflow-hidden shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer hover-elevate">
                        <div className="aspect-[4/3] relative bg-muted/30 overflow-hidden">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          {cert.year && (
                            <span className="absolute top-2 right-2 text-xs font-semibold text-primary bg-background/90 px-2 py-0.5 rounded-md">
                              {cert.year}
                            </span>
                          )}
                          <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs font-medium">Hover for more</span>
                            <ChevronRight className="h-4 w-4 shrink-0" />
                          </div>
                        </div>
                        <div className="p-4 border-t border-card-border">
                          <h3 className="font-serif font-semibold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                            {cert.title}
                          </h3>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent
                      side="top"
                      align="center"
                      className="w-80 rounded-xl border-card-border bg-card/95 backdrop-blur-sm shadow-xl p-4"
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.shortDescription}
                      </p>
                      {cert.year && (
                        <p className="text-xs text-primary font-medium mt-2">{cert.year}</p>
                      )}
                    </HoverCardContent>
                  </HoverCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Decorative CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center rounded-2xl border border-card-border bg-gradient-to-br from-primary/5 to-accent/5 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-4">
              These recognitions reflect the reach of Himalayan Meditation and the trust of institutions worldwide.
            </p>
            <Link href="/">
              <span className="text-sm font-medium text-primary hover:underline cursor-pointer">
                Back to Home
              </span>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
