import { Link } from "wouter";
import { Heart, Brain, Shield, Sparkles, Users, Globe, Play, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import heroImage from "@assets/image_1769956160033.png";
import chittaImage from "@assets/image_1769956334823.png";
import dropAnalogy from "@assets/image_1769956355239.png";
import chakraImage from "@assets/image_1769956378584.png";
import auraImage from "@assets/image_1769956399833.png";
import divineImage from "@assets/image_1769956430107.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const uniqueQualities = [
  "Direct focus on the Sahasrar Chakra (crown energy center)",
  "Meditation begins after attaining thoughtlessness",
  "Experience-based spiritual practice",
  "Self-realization through inner experience",
  "No discrimination based on caste, religion, language, or nationality",
  "Practiced in over 70+ countries worldwide",
  "Founded on 'Vasudhaiva Kutumbakam' - the world is one family",
  "Completely free of cost - like air, water, and sunlight",
  "Simple practice with no complex techniques",
  "No restrictions for women - practice 365 days a year",
  "No rigid rules or conditions",
  "Scientifically researched and validated"
];

const benefits = [
  {
    icon: Heart,
    title: "Physical Wellness",
    description: "When chakras are balanced through meditation, the body's natural healing abilities are enhanced. Scientific research confirms meditation strengthens the immune system."
  },
  {
    icon: Brain,
    title: "Mental Peace",
    description: "Experience profound mental silence as thoughts reduce. While medicine treats physical ailments, meditation is the only remedy for mental suffering."
  },
  {
    icon: Sparkles,
    title: "Freedom from Addictions",
    description: "As inner consciousness awakens, your soul becomes your guide. You naturally receive wisdom about what serves your highest good, inspiring release of harmful habits."
  },
  {
    icon: Shield,
    title: "Protective Aura",
    description: "Regular practice forms a protective energy shield around your body called the Aura, guarding against negative energies while accumulating divine Prana."
  }
];

const transformations = [
  {
    title: "Awakening of Dharma",
    description: "Discover your life's true purpose. Inner wisdom guides you toward right choices, leading to success in your authentic life journey."
  },
  {
    title: "Union with Higher Consciousness",
    description: "Through consistent practice, the Chitta turns inward, revealing the presence of Divine Consciousness within you."
  },
  {
    title: "Becoming Your Own Guru",
    description: "Wisdom about what serves your highest good begins flowing from within, no longer dependent on external guidance."
  },
  {
    title: "Path to Liberation",
    description: "True liberation (Moksha) is attained while living in this body, not after death. This is the ultimate purpose of human life."
  }
];

const recognitions = [
  "Indian Institutes of Management (IIM)",
  "Indian Institutes of Technology (IIT)",
  "Defence Forces of India",
  "High Courts of India",
  "Corporate Organizations",
  "Educational Institutions"
];

export default function AboutMeditation() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        <section className="relative">
          <div className="w-full">
            <img 
              src={heroImage} 
              alt="Himalayan DhyanYog" 
              className="w-full h-[50vh] md:h-[60vh] object-cover object-top"
              data-testid="img-hero-meditation"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              The Sacred Land of Enlightened Masters
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The Himalayas have been revered as <span className="text-primary font-medium">Siddha Kshetra</span> - 
              the realm of enlightened souls, and <span className="text-primary font-medium">Shree Kshetra</span> - 
              the sacred land of spiritual masters. For millennia, this majestic mountain range has served as 
              a living spiritual laboratory where seekers discover the deepest truths of existence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <img 
                src={chittaImage} 
                alt="Spiritual consciousness" 
                className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                data-testid="img-chitta-consciousness"
              />
            </motion.div>
            <motion.div {...fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                The True Essence of Meditation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                True meditation is not merely achieving a thoughtless state - that is only the beginning. 
                Real meditation starts <em>after</em> you transcend the realm of thoughts, entering a state 
                of pure presence and awareness.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-primary font-medium">Yog</span> means union - the sacred merging of 
                body with soul. When this union occurs, all duality dissolves. The ordinary person lives 
                identified with the physical body, while the yogi lives in soul consciousness, where the 
                spirit guides every aspect of life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In its truest sense, Yog is the art of managing one's entire existence - connecting individual 
                consciousness with Universal Consciousness.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 gradient-section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                What Makes This Practice Unique
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Himalayan Meditation stands apart from other practices through its direct approach 
                and universal accessibility.
              </p>
            </motion.div>

            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {uniqueQualities.map((quality, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">{quality}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6 order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                The Sacred Transmission: DhyanYog Sanskar
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                This is not merely a technique - it is a <span className="text-primary font-medium">Sanskar</span>, 
                a sacred transmission of divine wisdom from the pure soul of the Guru to the pure soul of the seeker.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Like a single drop of poison spreading in a glass of water, our past memories and suffering 
                can color our entire consciousness. Through the Sanskar, we surrender these burdens into the 
                vast ocean of collective consciousness, where they dissolve completely.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This awakening ignites the inner light of soul consciousness, turning attention inward. 
                As we see our own limitations clearly, transformation becomes possible.
              </p>
            </motion.div>
            <motion.div 
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={dropAnalogy} 
                alt="Consciousness transformation" 
                className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                data-testid="img-drop-analogy"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 gradient-section-alt">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={chittaImage} 
                  alt="The Eye of the Soul" 
                  className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
                  data-testid="img-chitta-eye"
                />
              </motion.div>
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif font-semibold text-foreground">
                  Understanding the Chitta: The Eye of the Soul
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  While the mind continuously generates thoughts, it is the <span className="text-primary font-medium">Chitta</span> that 
                  visualizes the scenes these thoughts create. The Chitta shares a profound connection with the Soul - 
                  you can think of it as the Soul's very eye.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The mind experiences happiness and sadness, but the Chitta transcends these dualities. 
                  Like a camera, it simply captures what the mind creates. In reality, it is not the mind 
                  that wanders - it is the Chitta.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Meditation is the purification of the Chitta. When emptied of past impressions - both 
                  good and bad - the Chitta becomes pure. Only a pure Chitta can connect with divine energies.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              The Power of Daily Practice
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Just 30 minutes of daily meditation creates profound transformations in body, mind, and spirit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={chakraImage} 
                alt="Chakra activation through meditation" 
                className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
                data-testid="img-chakra-meditation"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={auraImage} 
                alt="Protective aura formation" 
                className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
                data-testid="img-aura-protection"
              />
            </motion.div>
          </div>

          <motion.div 
            className="grid sm:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full gradient-card hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-serif font-semibold text-lg mb-2">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="py-16 gradient-section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  The Ultimate Transformation
                </h2>
                <div className="space-y-6">
                  {transformations.map((item, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={divineImage} 
                  alt="Divine consciousness" 
                  className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                  data-testid="img-divine-consciousness"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Globe className="h-8 w-8 text-primary" />
              Recognized Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Himalayan Meditation has received recognition and accreditation from prestigious institutions across India.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {recognitions.map((org, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
              >
                {org}
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="py-16 gradient-section-alt">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
                <Play className="h-4 w-4" />
                <span className="text-sm font-medium">Video Shibir</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Begin Your Journey From Anywhere
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Through Video Shibirs, seekers receive complete knowledge while staying at their own locations. 
                The sacred consciousness needed for self-realization is transmitted remotely through the pure 
                Chitta of Param Pujya Gurudev. These shibirs, conducted for one, three, or eight days, have 
                enabled thousands across the world to attain self-knowledge each month.
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                The astonishing experiences shared by participants stand as living proof of this spiritual innovation.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Take the first step on your spiritual journey. Attend a Shibir near you or 
              find a Home Center where you can practice with fellow seekers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/find-center">
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-find-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Find a Center Near You
                </Button>
              </Link>
              <Link href="/dhyanasthali">
                <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-visit-dhyanasthali">
                  <Users className="h-5 w-5 mr-2" />
                  Visit a Dhyanasthali
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>Or call us to learn more about upcoming Shibirs</span>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
