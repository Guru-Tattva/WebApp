import { Link } from "wouter";
import { Calendar, Globe, Home, Heart, TreePine, Users, BookOpen, Baby, Sparkles, Mountain, Gem, HandHeart, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import guruQuoteImage from "@assets/image_1769958250464.png";
import diaryLanguagesImage from "@assets/image_1769958260246.png";

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

const offerings = [
  {
    icon: Users,
    title: "Meditation Camps",
    description: "Volunteers worldwide organize Himalayan Meditation Camps, bringing ancient wisdom to seekers across continents."
  },
  {
    icon: Building,
    title: "Energy Centres",
    description: "Shree Gurushaktidhams - sacred energy centres for meditation - are being constructed across all continents."
  },
  {
    icon: Home,
    title: "Home Centres",
    description: "Dedicated spaces for daily Himalayan Dhyanyog practice, allowing families to connect with divine energy together."
  },
  {
    icon: Heart,
    title: "Cow Service",
    description: "Indigenous cow breeding, rearing, and service continues at all Indian Dhyanasthalis as a sacred welfare effort."
  },
  {
    icon: TreePine,
    title: "Nature Conservation",
    description: "Tree plantation drives and environmental initiatives are actively conducted at all Samarpan Ashrams."
  },
  {
    icon: Gem,
    title: "Vedic Weddings",
    description: "Through Arsh Sankalp Vivah, marriages are solemnized per Vedic rituals in the sacred Ashram atmosphere."
  },
  {
    icon: BookOpen,
    title: "Public Awareness",
    description: "Spiritual teachings including Samagra Yoga, Chaitanya, and Garbhadhan Sanskar are propagated through various channels."
  },
  {
    icon: Baby,
    title: "Namkaran Sanskar",
    description: "Free naming services for newborns, newlywed brides, homes, and businesses offered by Pujya Gurudev."
  },
  {
    icon: Sparkles,
    title: "Balsanskar Kendra",
    description: "Weekend spiritual education for children to enhance their Spiritual Quotient from an early age."
  },
  {
    icon: HandHeart,
    title: "Prarthana Dham",
    description: "A 24/7 prayer service benefiting people from around the world through continuous divine connection."
  },
  {
    icon: Mountain,
    title: "Himalaya Darshan",
    description: "Spiritual journeys (Chaitanyatra) organized to connect with nature and experience consciousness in harmony."
  }
];

const purposes = [
  {
    title: "Recognize the Gurutattva",
    description: "Help seekers identify and recognize the present Gurutattva manifesting in their lives."
  },
  {
    title: "Awaken Inner Guru",
    description: "Guide individuals to awaken the Gurutattva lying dormant within themselves."
  },
  {
    title: "Become Your Own Guru",
    description: "Enable each person to reach the highest state of spirituality - becoming their own Guru."
  }
];

const globalReach = [
  "Meditation camps conducted in 70+ countries",
  "Gurushaktidhams being built across all continents",
  "Sadhak ki Diary translated into 30+ languages",
  "Home centres established in communities worldwide",
  "24/7 prayer services accessible globally",
  "Digital platforms connecting seekers everywhere"
];

export default function AboutGuruTattva() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative py-20 gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                Established October 1, 2020
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                GuruTattva
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                A Global Platform for Spiritual Awakening
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                On the sacred full-moon day (Purnima) of Purushottam month, 
                Param Pujya Shree Shivkrupanand Swamiji announced the establishment 
                of this divine platform to help seekers recognize and awaken the 
                <span className="text-primary font-medium"> Gurutattva</span> within.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              The Sacred Purpose
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Becoming one's own Guru is the highest state of spirituality. 
              With this profound intention, Param Pujya Swamiji established the GuruTattva Platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {purposes.map((purpose, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full border-border/50 text-center hover-elevate">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-serif font-bold text-primary">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                      {purpose.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {purpose.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Guru Quote Section */}
        <section className="py-16 gradient-section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  src={guruQuoteImage} 
                  alt="Guru is the Supreme Reality" 
                  className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                  data-testid="img-guru-quote"
                />
              </motion.div>
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif font-semibold text-foreground">
                  The Supreme Reality
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Indian culture is founded on experience. Within this rich tradition, 
                  immense importance has been given to the <span className="text-primary font-medium">Satguru</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  To explain the significance of the Satguru, it has been said: 
                  <span className="text-primary font-medium italic"> "Guru is the Supreme Reality"</span> - 
                  the visible form of Paramatma in the present time.
                </p>
                <div className="bg-card/50 border border-border/50 rounded-lg p-4 italic text-muted-foreground">
                  "The Guru is not merely a person; He is the visible manifestation 
                  of the Divine in our lives - the bridge between the seeker and the Supreme."
                  <span className="block mt-2 text-sm text-primary font-medium not-italic">
                    — His Holiness Shivkrupanand Swami
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Sacred Offerings & Celebrations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Through this global platform, GuruTattva nurtures spiritual growth 
              through diverse programs and sacred services
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {offerings.map((offering, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-border/50 hover-elevate">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <offering.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {offering.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Global Reach Section */}
        <section className="py-16 gradient-section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif font-semibold text-foreground">
                  A Truly Global Movement
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  From the sacred Himalayas to every corner of the world, GuruTattva 
                  has grown into a global spiritual family. The teachings transcend 
                  language, culture, and geography - united by the universal quest 
                  for inner awakening.
                </p>
                <div className="space-y-3">
                  {globalReach.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-foreground">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  src={diaryLanguagesImage} 
                  alt="Sadhak ki Diary in multiple languages" 
                  className="rounded-xl shadow-lg w-full max-w-md mx-auto bg-white p-4"
                  data-testid="img-diary-languages"
                />
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Sadhak ki Diary - available in 30+ languages worldwide
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Vision: Vasudhaiva Kutumbakam
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <span className="text-primary font-medium italic">"The World is One Family"</span> - 
              this ancient wisdom forms the foundation of GuruTattva's vision. 
              Through meditation and spiritual awakening, we aspire to unite humanity 
              in the recognition of our shared divine essence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              May inner experience awaken in every soul, igniting the flame of 
              humanity and leading all beings to realize that we are one 
              universal family, connected through the eternal Gurutattva.
            </p>
          </motion.div>
        </section>

        {/* Initiatives Section */}
        <section className="py-16 gradient-section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Key Initiatives
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the various ways to connect with the GuruTattva community 
                and begin your spiritual journey
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Dhyanasthali", description: "Sacred meditation centers across India and the world", link: "/dhyanasthali", icon: Building },
                { title: "Sahitya", description: "Spiritual books, audio, and resources", link: "/sahitya", icon: BookOpen },
                { title: "Gurukarya", description: "Sacred service opportunities for seekers", link: "/gurukarya", icon: HandHeart },
                { title: "Meditation", description: "Learn the practice of Himalayan Meditation", link: "/about-meditation", icon: Sparkles }
              ].map((initiative, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={initiative.link}>
                    <Card className="h-full border-border/50 hover-elevate cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                          <initiative.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                          {initiative.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {initiative.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Join the Global Spiritual Family
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you seek to learn meditation, serve through sacred activities, 
              or simply connect with like-minded souls, GuruTattva welcomes you 
              on this beautiful journey of self-discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about-meditation">
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-learn-meditation">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Learn Meditation
                </Button>
              </Link>
              <Link href="/about-gurudev">
                <Button variant="outline" size="lg" className="w-full sm:w-auto" data-testid="button-about-gurudev">
                  <Heart className="h-5 w-5 mr-2" />
                  About Gurudev
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <ScrollToTop />
    </div>
  );
}
