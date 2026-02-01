import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import lotusImage from "@assets/lotus-flower.png";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <img
          src={lotusImage}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] object-contain"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center relative z-10"
      >
        <div className="font-serif text-9xl font-bold text-primary/20 mb-4">
          404
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>

        <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
          The path you seek has not been revealed. Perhaps the universe is guiding you elsewhere.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button size="lg" data-testid="button-go-home">
              <Home className="h-5 w-5 mr-2" />
              Return Home
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            data-testid="button-go-back"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-12">
          ॐ शान्ति शान्ति शान्तिः
        </p>
      </motion.div>
    </div>
  );
}
