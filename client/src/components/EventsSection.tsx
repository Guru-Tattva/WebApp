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
    title: "Maha Shivaratri Dhyan Shivir",
    description: "A three-day intensive meditation retreat celebrating the great night of Lord Shiva with special practices and teachings.",
    date: "February 26, 2026",
    location: "Rishikesh Dhyanasthali",
    type: "Retreat",
  },
  {
    id: 2,
    title: "Shakti Sadhana Workshop",
    description: "Learn the ancient practices of awakening the divine feminine energy within through guided meditation sessions.",
    date: "March 15, 2026",
    location: "Mumbai Center",
    type: "Workshop",
  },
  {
    id: 3,
    title: "Guru Purnima Celebrations",
    description: "Join us for the sacred celebration honoring the Guru tradition with special satsang and meditation.",
    date: "July 21, 2026",
    location: "All Centers",
    type: "Festival",
  },
  {
    id: 4,
    title: "Youth Meditation Camp",
    description: "A specially designed program for young seekers to learn meditation and discover their inner potential.",
    date: "April 10, 2026",
    location: "Delhi Center",
    type: "Camp",
  },
  {
    id: 5,
    title: "Advanced Kriya Initiation",
    description: "For dedicated practitioners, receive initiation into advanced Himalayan Kriya practices.",
    date: "May 5, 2026",
    location: "Haridwar Ashram",
    type: "Initiation",
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
