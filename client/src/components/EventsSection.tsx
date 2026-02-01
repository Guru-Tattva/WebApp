import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";

const events = [
  {
    id: 1,
    title: "45 Days Intensive Meditation Practice",
    description: "A transformative 45-day deep dive into Himalayan Meditation with daily practice, guidance, and spiritual discipline.",
    date: "Various dates",
    location: "Centers nationwide",
    type: "Retreat",
  },
  {
    id: 2,
    title: "Guru-Purnima",
    description: "The sacred full-moon celebration honoring the Guru tradition with satsang, meditation, and gratitude offerings.",
    date: "July 2026",
    location: "All Centers",
    type: "Festival",
  },
  {
    id: 3,
    title: "Chaitanya Mahotsava",
    description: "A grand festival of divine consciousness—celebrating spiritual awakening with collective meditation and devotional programs.",
    date: "Annual event",
    location: "Multiple venues",
    type: "Festival",
  },
  {
    id: 4,
    title: "International Meditation Retreats",
    description: "Join seekers from across the world for immersive meditation retreats in the Himalayan tradition.",
    date: "Throughout the year",
    location: "India & abroad",
    type: "Retreat",
  },
  {
    id: 5,
    title: "Samarpan Wedding Festival - Arsh Sankalp Wedding",
    description: "Sacred union in the presence of the Guru—weddings solemnized with meditation, vows, and divine blessings.",
    date: "On request",
    location: "Designated centers",
    type: "Festival",
  },
  {
    id: 6,
    title: "Shree Shivkrupanand Swami Music Festival",
    description: "Devotional music and bhajans in praise of the divine—an evening of soul-stirring melodies and meditation.",
    date: "Annual event",
    location: "Various cities",
    type: "Festival",
  },
  {
    id: 7,
    title: "Meditation Camp for Specific Community",
    description: "Tailored meditation camps for communities—corporate, youth, women, or other groups—with customized programs.",
    date: "On request",
    location: "As per group",
    type: "Camp",
  },
];

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const nextEvent = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const visibleEvents = [
    events[currentIndex],
    events[(currentIndex + 1) % events.length],
    events[(currentIndex + 2) % events.length],
  ];

  return (
    <section className="py-20 gradient-section-alt" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with us through transformative spiritual gatherings
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevEvent}
              className="shrink-0 rounded-full"
              data-testid="button-prev-event"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex-1 grid md:grid-cols-3 gap-6">
              {visibleEvents.map((event, index) => (
                <motion.div
                  key={`${event.id}-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    className="h-full border-card-border hover-elevate"
                    data-testid={`event-card-${event.id}`}
                  >
                    <CardContent className="p-6">
                      <Badge
                        variant="secondary"
                        className="mb-4"
                      >
                        {event.type}
                      </Badge>

                      <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                        {event.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {event.description}
                      </p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4 text-primary" />
                          {event.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextEvent}
              className="shrink-0 rounded-full"
              data-testid="button-next-event"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted hover:bg-primary/50"
                }`}
                data-testid={`button-event-indicator-${index}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link href="/events">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              data-testid="button-view-all-events"
            >
              View All Events
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
