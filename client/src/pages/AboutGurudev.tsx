import { Link } from "wouter";
import { Heart, Sparkles, Users, Globe, Mountain, BookOpen, Eye, Star, Compass, Sun, Flame, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import childhoodImage from "@assets/image_1769957391117.png";
import pashupatinathImage from "@assets/image_1769957401509.png";
import himalayanSageImage from "@assets/image_1769957420486.png";
import shivaTempleImage from "@assets/image_1769957430736.png";
import knowledgeTransferImage from "@assets/image_1769957443464.png";
import familyBlessingImage from "@assets/image_1769957456083.png";
import himalayanJourneyImage from "@assets/image_1769957478638.png";

const HERO_GURUDEV_IMAGE = "/hero-gurudev.png";

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

const timelineEvents = [
  {
    year: "1954",
    title: "Divine Birth",
    description: "Born on November 8th in a humble Brahmin family, destined for a sacred mission."
  },
  {
    year: "Childhood",
    title: "Quest Awakens",
    description: "A young soul with an extraordinary longing to experience the Divine directly."
  },
  {
    year: "Divine Visions",
    title: "Three Sacred Scenes",
    description: "Mystical visions of Pashupatinath, a Himalayan sage, and a hilltop Shiva temple."
  },
  {
    year: "Nepal",
    title: "Meeting Shree Shiv Baba",
    description: "A supernatural journey to Nepal culminates in meeting the sage from His visions."
  },
  {
    year: "16 Years",
    title: "Himalayan Tapasya",
    description: "Rigorous spiritual practice under the guidance of multiple enlightened masters."
  },
  {
    year: "1994",
    title: "Return to Society",
    description: "Emerging from the mountains to share the gift of Samarpan Meditation with humanity."
  }
];

const announcedYears = [
  { year: "2003", theme: "the year of discipline" },
  { year: "2006", theme: "the year of purification of the Chitta" },
  { year: "2007", theme: "Year of Completion" },
  { year: "2008", theme: "Youth Year" },
  { year: "2009", theme: "Woman's Year" },
  { year: "2010", theme: "the year of resolution" },
  { year: "2011", theme: "the year of awakening" },
  { year: "2012", theme: "Year of Teacher" },
  { year: "2013-14", theme: "Year of Doctor" },
  { year: "2015", theme: "Year of Jain Unity" },
  { year: "2016-17", theme: "Year of Farmer" },
  { year: "2018-19", theme: "Year of the Security Forces" },
  { year: "2020-21", theme: "Year of Children" },
  { year: "2022", theme: "Year of surrender" },
  { year: "2023", theme: "Year of resolution" },
  { year: "2024", theme: "Year of Cordiality, Intimity" },
  { year: "2025", theme: "Year of Meditation" },
  { year: "2026", theme: "Year of Spiritual Company" },
];

const purposes = [
  {
    icon: Globe,
    title: "Universal Awakening",
    description: "Spreading inner knowledge to awaken humanity's consciousness, embracing 'Vasudhaiva Kutumbakam' - the world as one family."
  },
  {
    icon: Users,
    title: "Empowering Youth",
    description: "Guiding young souls through meditation to become worthy vessels for the incarnation of pious souls."
  },
  {
    icon: Sun,
    title: "Feminine Restoration",
    description: "Restoring women to their rightful high position in society, bridging centuries of inequality."
  },
  {
    icon: Flame,
    title: "Reviving Meditation in Religion",
    description: "Reconnecting saints across religions with the essence of meditation, transcending mere rituals."
  },
  {
    icon: Mountain,
    title: "Gurushaktidham Legacy",
    description: "Creating sacred spaces where souls can attain self-realization for generations to come."
  }
];

const teachings = [
  "The difference between religion and worship",
  "World peace begins with inner peace",
  "The coming era will be the era of Chitta (mind power)",
  "Awareness of thought pollution in society",
  "Guru is not a person but an indestructible element",
  "The difference between happiness and comfort",
  "Liberation (Moksha) is achieved while living, not after death",
  "Women are manifestations of divine power",
  "Powerful means of spiritual progress: Love and Prayer",
  "Science of energy flow through the body",
  "Possibility of achieving karma-free state",
  "Yogasana is only one part of complete Yoga"
];

const programs = [
  {
    title: "Eight-Day Mega Camps",
    description: "Profound knowledge on spiritual subjects shared in simple language, with direct energy transmission from Param Pujya Gurudev."
  },
  {
    title: "Video Camps",
    description: "Decentralized camps showing recordings of live sessions, reaching thousands worldwide every month."
  },
  {
    title: "Maha-Dhyan Sessions",
    description: "Special meditation gatherings where meditating with thousands equals the merit of meditating alone for thousands of days."
  },
  {
    title: "Community Programs",
    description: "Tailored meditation programs for specific communities, organizations, and institutions."
  }
];

export default function AboutGurudev() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section - same guru image as home page */}
        <section className="relative">
          <div className="w-full bg-muted/30">
            <img
              src={HERO_GURUDEV_IMAGE}
              alt="Param Pujya Shree Shivkrupanand Swamiji"
              className="w-full h-[50vh] md:h-[60vh] object-contain object-bottom"
              data-testid="img-hero-gurudev"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <motion.h1 
                className="text-3xl md:text-5xl font-serif font-bold text-white drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                The Himalayan Yogi
              </motion.h1>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Satguru Shree Shivkrupanand Swamiji
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A living embodiment of <span className="text-primary font-medium">love, compassion, and divine wisdom</span>, 
              Param Pujya Gurudev is the propagator of Samarpan Meditation from the sacred Himalayas. 
              His journey from a young seeker with an unquenchable thirst for the Divine to becoming 
              a beacon of spiritual light for millions is nothing short of miraculous.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <img 
                src={childhoodImage} 
                alt="Young seeker contemplating" 
                className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                data-testid="img-childhood-quest"
              />
            </motion.div>
            <motion.div {...fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                The Quest That Began in Childhood
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From the tender age of five, young Swamiji carried an extraordinary longing - 
                not for toys or play, but for something far greater. His heart burned with a 
                single desire: <span className="text-primary font-medium">to know Paramatma</span>, 
                to experience the Divine directly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Born into a humble Brahmin family on November 8th, 1954, He received spiritual 
                values from His devout mother and grandparents. Yet His quest transcended ordinary 
                religious practice - He sought nothing less than direct communion with the Supreme.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In moments of solitude, three mystical visions would appear repeatedly: 
                the ancient Pashupatinath temple, a majestic sage beckoning from the Himalayas, 
                and a small Shiva temple atop a hill. These divine signs would one day lead Him 
                to His destiny.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Three Visions Section */}
        <section className="py-16 gradient-section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Three Sacred Visions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Divine signs that illuminated the path to His spiritual destiny
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="relative mb-4">
                  <img 
                    src={pashupatinathImage} 
                    alt="Pashupatinath Temple" 
                    className="rounded-xl shadow-lg w-full h-48 object-cover"
                    data-testid="img-pashupatinath"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Pashupatinath Temple</h3>
                <p className="text-sm text-muted-foreground">The sacred temple of Nepal, appearing repeatedly in His meditation</p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative mb-4 bg-gradient-to-b from-primary/10 to-accent/10 rounded-xl p-4">
                  <img 
                    src={himalayanSageImage} 
                    alt="Himalayan Sage" 
                    className="rounded-xl shadow-lg w-full h-48 object-contain"
                    data-testid="img-himalayan-sage"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">The Himalayan Sage</h3>
                <p className="text-sm text-muted-foreground">A majestic sage with hands extended, calling Him to the mountains</p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative mb-4">
                  <img 
                    src={shivaTempleImage} 
                    alt="Shiva Temple" 
                    className="rounded-xl shadow-lg w-full h-48 object-cover"
                    data-testid="img-shiva-temple"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Hilltop Shiva Temple</h3>
                <p className="text-sm text-muted-foreground">A small, sacred temple perched upon a hill, awaiting His arrival</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Meeting Shiv Baba Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6 order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                The Supernatural Encounter
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                During a work trip, destiny led Param Pujya Gurudev to Nepal, fulfilling His 
                long-cherished desire to visit Pashupatinath. There, an unknown person 
                appeared - sent by <span className="text-primary font-medium">Shree Shiv Baba</span> 
                from the remote Shibu village to fetch Him.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After three days of arduous journey through treacherous terrain, Gurudev 
                finally beheld the sage from His visions. Recognition was instant - this 
                was the very being who had been calling Him across lifetimes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When Shree Shiv Baba sprinkled sacred water upon Him, Gurudev entered 
                <span className="text-primary font-medium"> Samadhi for three days</span>. 
                In that divine state, the great sage transferred the accumulated powers 
                of His entire life's penance to His destined successor.
              </p>
              <div className="bg-card/50 border border-border/50 rounded-lg p-4 italic text-muted-foreground">
                "You have work yet to complete. After that, you shall become a saint, and 
                millions of souls will attain liberation through you. This is the promise 
                you made in your previous birth."
                <span className="block mt-2 text-sm text-primary font-medium not-italic">— Shree Shiv Baba's prophecy</span>
              </div>
            </motion.div>
            <motion.div 
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={knowledgeTransferImage} 
                alt="Sacred knowledge transfer" 
                className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                data-testid="img-knowledge-transfer"
              />
            </motion.div>
          </div>
        </section>

        {/* Family & Departure Section */}
        <section className="py-16 gradient-section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  src={familyBlessingImage} 
                  alt="Brahmanand Swamiji blessing the family" 
                  className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                  data-testid="img-family-blessing"
                />
              </motion.div>
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif font-semibold text-foreground">
                  The Sacred Surrender
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  After meeting Shree Shiv Baba, Gurudev returned to ordinary life for a time - 
                  continuing His job, marrying, and being blessed with a son. Yet the inner 
                  calling never ceased.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When His son was about a year and a half old, an inner inspiration compelled 
                  Him to leave His position as marketing manager. His wife, 
                  <span className="text-primary font-medium"> Her Holiness Guruma</span>, 
                  wholeheartedly supported this sacred decision.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Then came Brahmanand Swamiji with divine words: 
                  <em>"He has not come for your family. His family is the entire world. 
                  His work will be on a global scale. Hand Him over to me."</em>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With Guruma's blessing, began the rigorous Himalayan journey - 
                  years of intense spiritual practice in the presence of multiple Satgurus.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Himalayan Journey Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                Sixteen Years of Sacred Tapasya
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                In the inaccessible peaks of the Himalayas, Param Pujya Swamiji underwent 
                <span className="text-primary font-medium"> sixteen years of intense spiritual practice</span>. 
                Each Satguru He encountered transferred their wisdom, then guided Him to the next master.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Crossing treacherous snow-covered mountains on foot, facing countless challenges, 
                He served each Guru with complete surrender - seeing them as Paramatma personified. 
                From sages, ascetics, and Kaivalya-Kumbhaka yogis, He absorbed the deepest secrets 
                of meditation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through this extraordinary journey, He received the sacred 
                <span className="text-primary font-medium"> meditation sanskaar</span> - 
                spiritual values that transcend religion, race, language, and gender. 
                These teachings form the foundation of Samarpan Meditation, now practiced 
                by millions worldwide.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={himalayanJourneyImage} 
                alt="Journey through the Himalayas" 
                className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                data-testid="img-himalayan-journey"
              />
            </motion.div>
          </div>
        </section>

        {/* Timeline Section - The Divine Journey (home-page style: flower markers, alternating cards) */}
        <section className="py-20 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                The Divine Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones in the extraordinary life of Param Pujya Gurudev
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5">
                <div className="h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
                <motion.div
                  className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-accent via-primary to-accent"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{ transformOrigin: "top" }}
                />
              </div>

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`hidden md:block w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-block p-6 rounded-2xl bg-gradient-to-br from-card via-card to-card/80 border border-card-border shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">{event.year}</span>
                      <h3 className="text-xl font-serif font-semibold text-foreground mt-2 mb-2">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{event.description}</p>
                    </motion.div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((rotate, i) => (
                        <div
                          key={i}
                          className="absolute w-4 h-8 rounded-full bg-gradient-to-t from-primary/40 to-accent/30"
                          style={{
                            clipPath: "ellipse(50% 100% at 50% 100%)",
                            transform: `rotate(${rotate}deg)`,
                            transformOrigin: "center bottom",
                          }}
                        />
                      ))}
                      <div className="relative z-10 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                        <span className="text-xs font-bold text-white">{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:hidden ml-16 p-5 rounded-2xl bg-gradient-to-br from-card via-card to-card/80 border border-card-border shadow-lg">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">{event.year}</span>
                    <h3 className="text-lg font-serif font-semibold text-foreground mt-2 mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>

                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Years Announced by Gurudev - distinct style (list/grid) */}
        <section className="py-20 gradient-section-alt">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Years Announced by Gurudev
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Annual themes proclaimed by Param Pujya Shree Shivkrupanand Swamiji for spiritual focus
              </p>
            </motion.div>

            <motion.div
              className="space-y-3"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {announcedYears.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={fadeInUp}
                  className="flex flex-wrap items-baseline gap-2 sm:gap-4 py-3 px-4 sm:px-6 rounded-xl bg-card/80 border border-card-border hover:bg-card transition-colors"
                >
                  <span className="font-serif font-bold text-primary text-lg shrink-0 w-20 sm:w-24">{item.year}</span>
                  <span className="text-muted-foreground flex-1">..................</span>
                  <span className="text-foreground font-medium text-sm sm:text-base">{item.theme}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Sacred Purposes Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Sacred Purposes of His Return
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              In 1994, Param Pujya Gurudev emerged from the Himalayas with divine missions 
              entrusted by His Gurus
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {purposes.map((purpose, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-border/50 hover-elevate">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <purpose.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                      {purpose.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {purpose.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Wisdom Section */}
        <section className="py-16 gradient-section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Illuminating Wisdom
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Param Pujya Gurudev shares profound insights that guide humanity from darkness to light
              </p>
            </motion.div>

            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {teachings.map((teaching, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">{teaching}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Living Example Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              A Living Embodiment of Divine Love
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              While fulfilling His family duties as a householder, Swamiji has attained the 
              <span className="text-primary font-medium"> highest state of enlightenment</span>. 
              He stands as living proof that meditation is not only for renunciates but for 
              everyone walking the path of life.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To give unconditionally is Swamiji's innate nature. He shares wisdom freely, 
              believing that every soul who comes to Him has been divinely sent for Self-Realization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In truth, He has achieved the <span className="text-primary font-medium">Shoonya state</span> - 
              beyond good and bad, completely merged with Divine Consciousness. 
              His presence alone transmits the energy of transformation.
            </p>
          </motion.div>
        </section>

        {/* Programs Section */}
        <section className="py-16 gradient-section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Tireless Service to Humanity
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Since 1994, Param Pujya Gurudev has been continuously performing Guru Karya, 
                offering transformative programs for spiritual seekers worldwide
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                        {program.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {program.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-8 bg-card/50 border border-border/50 rounded-lg p-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg italic text-muted-foreground">
                "Meditating for a day with thousands of souls is the same as 
                meditating alone for thousands of days."
              </p>
              <span className="text-sm text-primary font-medium mt-2 block">
                — Param Pujya Shree Shivkrupanand Swamiji
              </span>
            </motion.div>
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
              Begin Your Sacred Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the transformative power of Samarpan Meditation and connect with 
              the living tradition of Himalayan wisdom through Param Pujya Gurudev's grace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about-meditation">
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-learn-meditation">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Learn Meditation
                </Button>
              </Link>
              <Link href="/dhyanasthali">
                <Button variant="outline" size="lg" className="w-full sm:w-auto" data-testid="button-find-center">
                  <Mountain className="h-5 w-5 mr-2" />
                  Find a Center
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
