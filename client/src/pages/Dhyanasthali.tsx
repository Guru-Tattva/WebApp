import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowLeft, MapPin, Home, UtensilsCrossed, Building, Calendar, Users, Phone, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import logoImage from "@assets/Gurutattva-Logo-Regi_1769940433810.png";

interface Facility {
  name: string;
  icon: typeof Home;
  description: string;
  available: boolean;
}

interface Dhyanasthali {
  id: string;
  name: string;
  location: string;
  state: string;
  image: string;
  description: string;
  facilities: Facility[];
  contactPhone: string;
  contactEmail: string;
  capacity: number;
}

const dhyanasthalis: Dhyanasthali[] = [
  {
    id: "1",
    name: "Rishikesh Dhyanasthali",
    location: "Rishikesh",
    state: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800",
    description: "Nestled in the foothills of the Himalayas, this sacred center offers the perfect environment for deep spiritual practice with the holy Ganga flowing nearby.",
    facilities: [
      { name: "Gurushakti Dham", icon: Home, description: "Main meditation hall with capacity for 500 sadhaks", available: true },
      { name: "Bhojanshala", icon: UtensilsCrossed, description: "Sattvic vegetarian meals served thrice daily", available: true },
      { name: "Sadhak Nivas", icon: Building, description: "Comfortable accommodation for visiting sadhaks", available: true },
    ],
    contactPhone: "+91 98765 43210",
    contactEmail: "rishikesh@gurutattva.org",
    capacity: 200,
  },
  {
    id: "2",
    name: "Haridwar Dhyanasthali",
    location: "Haridwar",
    state: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    description: "Located near the sacred Har Ki Pauri, this center provides a spiritually charged atmosphere for meditation and self-reflection.",
    facilities: [
      { name: "Gurushakti Dham", icon: Home, description: "Peaceful meditation hall overlooking the Ganga", available: true },
      { name: "Bhojanshala", icon: UtensilsCrossed, description: "Pure sattvic meals prepared with love", available: true },
      { name: "Sadhak Nivas", icon: Building, description: "Simple and clean rooms for spiritual seekers", available: true },
    ],
    contactPhone: "+91 98765 43211",
    contactEmail: "haridwar@gurutattva.org",
    capacity: 150,
  },
  {
    id: "3",
    name: "Varanasi Dhyanasthali",
    location: "Varanasi",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
    description: "In the ancient city of Kashi, this dhyanasthali offers a unique blend of timeless wisdom and meditative practices.",
    facilities: [
      { name: "Gurushakti Dham", icon: Home, description: "Historic meditation hall with ancient vibrations", available: true },
      { name: "Bhojanshala", icon: UtensilsCrossed, description: "Traditional Banarasi sattvic cuisine", available: true },
      { name: "Sadhak Nivas", icon: Building, description: "Modest accommodation near the ghats", available: true },
    ],
    contactPhone: "+91 98765 43212",
    contactEmail: "varanasi@gurutattva.org",
    capacity: 120,
  },
  {
    id: "4",
    name: "Dharamshala Dhyanasthali",
    location: "Dharamshala",
    state: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    description: "Surrounded by the majestic Dhauladhar mountains, this center provides an ideal setting for intensive meditation retreats.",
    facilities: [
      { name: "Gurushakti Dham", icon: Home, description: "Mountain-view meditation hall", available: true },
      { name: "Bhojanshala", icon: UtensilsCrossed, description: "Organic mountain cuisine", available: true },
      { name: "Sadhak Nivas", icon: Building, description: "Cozy cottages with Himalayan views", available: true },
    ],
    contactPhone: "+91 98765 43213",
    contactEmail: "dharamshala@gurutattva.org",
    capacity: 80,
  },
  {
    id: "5",
    name: "Kedarnath Dhyanasthali",
    location: "Kedarnath",
    state: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
    description: "At the sacred abode of Lord Shiva, experience the most profound meditative experiences in this high-altitude sanctuary.",
    facilities: [
      { name: "Gurushakti Dham", icon: Home, description: "Sacred meditation space near Kedarnath temple", available: true },
      { name: "Bhojanshala", icon: UtensilsCrossed, description: "Warm meals for pilgrims and sadhaks", available: true },
      { name: "Sadhak Nivas", icon: Building, description: "Seasonal accommodation (May-October)", available: false },
    ],
    contactPhone: "+91 98765 43214",
    contactEmail: "kedarnath@gurutattva.org",
    capacity: 50,
  },
  {
    id: "6",
    name: "Bodh Gaya Dhyanasthali",
    location: "Bodh Gaya",
    state: "Bihar",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800",
    description: "At the place of Buddha's enlightenment, this center offers a unique opportunity for deep contemplation and awakening.",
    facilities: [
      { name: "Gurushakti Dham", icon: Home, description: "Meditation hall near the Bodhi Tree", available: true },
      { name: "Bhojanshala", icon: UtensilsCrossed, description: "Simple Buddhist-inspired vegetarian meals", available: true },
      { name: "Sadhak Nivas", icon: Building, description: "Peaceful rooms for extended stays", available: true },
    ],
    contactPhone: "+91 98765 43215",
    contactEmail: "bodhgaya@gurutattva.org",
    capacity: 100,
  },
  {
    id: "7",
    name: "Kerala Dhyanasthali",
    location: "Munnar",
    state: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    description: "Amidst the lush tea gardens and mist-covered hills, find serenity and spiritual renewal in God's own country.",
    facilities: [
      { name: "Gurushakti Dham", icon: Home, description: "Eco-friendly meditation pavilion", available: true },
      { name: "Bhojanshala", icon: UtensilsCrossed, description: "Traditional Kerala sattvic cuisine", available: true },
      { name: "Sadhak Nivas", icon: Building, description: "Nature-inspired cottages", available: true },
    ],
    contactPhone: "+91 98765 43216",
    contactEmail: "kerala@gurutattva.org",
    capacity: 75,
  },
  {
    id: "8",
    name: "Vrindavan Dhyanasthali",
    location: "Vrindavan",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800",
    description: "In the land of divine love, immerse yourself in bhakti-infused meditation practices and experience the essence of devotion.",
    facilities: [
      { name: "Gurushakti Dham", icon: Home, description: "Devotion-centered meditation hall", available: true },
      { name: "Bhojanshala", icon: UtensilsCrossed, description: "Prasad-based sattvic meals", available: true },
      { name: "Sadhak Nivas", icon: Building, description: "Simple ashram-style accommodation", available: true },
    ],
    contactPhone: "+91 98765 43217",
    contactEmail: "vrindavan@gurutattva.org",
    capacity: 130,
  },
];

function BookingDialog({ dhyanasthali }: { dhyanasthali: Dhyanasthali }) {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    roomType: "single",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking request submitted for ${dhyanasthali.name}! We will contact you shortly.`);
  };

  return (
    <DialogContent className="sm:max-w-lg" data-testid="dialog-booking">
      <DialogHeader>
        <DialogTitle className="font-serif">Book Sadhak Nivas at {dhyanasthali.name}</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              data-testid="input-booking-name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              data-testid="input-booking-phone"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            data-testid="input-booking-email"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="checkIn">Check-in Date</Label>
            <Input
              id="checkIn"
              type="date"
              value={formData.checkIn}
              onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
              required
              data-testid="input-booking-checkin"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="checkOut">Check-out Date</Label>
            <Input
              id="checkOut"
              type="date"
              value={formData.checkOut}
              onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
              required
              data-testid="input-booking-checkout"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>
            <Select value={formData.guests} onValueChange={(v) => setFormData({ ...formData, guests: v })}>
              <SelectTrigger data-testid="select-booking-guests">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="roomType">Room Type</Label>
            <Select value={formData.roomType} onValueChange={(v) => setFormData({ ...formData, roomType: v })}>
              <SelectTrigger data-testid="select-booking-room">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single Room</SelectItem>
                <SelectItem value="double">Double Room</SelectItem>
                <SelectItem value="dormitory">Dormitory</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit" className="w-full bg-primary text-primary-foreground" data-testid="button-submit-booking">
          Submit Booking Request
        </Button>
      </form>
    </DialogContent>
  );
}

export default function Dhyanasthali() {
  const [selectedDhyanasthali, setSelectedDhyanasthali] = useState<Dhyanasthali | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 gradient-header border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="icon" className="text-white/90 hover:text-white hover:bg-white/10" data-testid="button-back-home">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/">
                <img src={logoImage} alt="GuruTattva" className="h-8 w-auto cursor-pointer brightness-0 invert" data-testid="img-dhyanasthali-logo" />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-white/80" />
              <h1 className="text-xl font-serif font-semibold text-white" data-testid="text-dhyanasthali-title">
                Dhyanasthali Centers
              </h1>
            </div>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Sacred Meditation Centers Across India
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the divine presence at our 8 dhyanasthalis, each offering unique spiritual
            environments and facilities for your meditation journey.
          </p>
        </div>

        {selectedDhyanasthali ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <Button
              variant="ghost"
              onClick={() => setSelectedDhyanasthali(null)}
              className="mb-4"
              data-testid="button-back-to-list"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all centers
            </Button>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedDhyanasthali.image}
                  alt={selectedDhyanasthali.name}
                  className="w-full aspect-video object-cover rounded-lg"
                />
              </div>
              <div>
                <Badge className="mb-3">{selectedDhyanasthali.state}</Badge>
                <h2 className="text-3xl font-serif font-bold mb-2">{selectedDhyanasthali.name}</h2>
                <p className="text-muted-foreground flex items-center gap-2 mb-4">
                  <MapPin className="h-4 w-4" />
                  {selectedDhyanasthali.location}, {selectedDhyanasthali.state}
                </p>
                <p className="text-foreground/80 mb-6">{selectedDhyanasthali.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    Capacity: {selectedDhyanasthali.capacity} sadhaks
                  </span>
                </div>
                <div className="space-y-2 mb-6">
                  <p className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    {selectedDhyanasthali.contactPhone}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    {selectedDhyanasthali.contactEmail}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {selectedDhyanasthali.facilities.map((facility) => (
                <Card key={facility.name} className={`${!facility.available ? "opacity-60" : ""}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <facility.icon className="h-8 w-8 text-primary" />
                      {!facility.available && (
                        <Badge variant="outline" className="text-xs">
                          Unavailable
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg font-serif">{facility.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                    {facility.name === "Sadhak Nivas" && facility.available && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full mt-4 bg-primary text-primary-foreground" data-testid="button-book-sadhak-nivas">
                            <Calendar className="h-4 w-4 mr-2" />
                            Book Now
                          </Button>
                        </DialogTrigger>
                        <BookingDialog dhyanasthali={selectedDhyanasthali} />
                      </Dialog>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dhyanasthalis.map((d, index) => (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="overflow-hidden hover-elevate cursor-pointer h-full"
                  onClick={() => setSelectedDhyanasthali(d)}
                  data-testid={`card-dhyanasthali-${d.id}`}
                >
                  <div className="aspect-video relative">
                    <img src={d.image} alt={d.name} className="w-full h-full object-cover" />
                    <Badge className="absolute top-3 left-3 bg-background/90 text-foreground">
                      {d.state}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-serif font-semibold text-lg mb-1">{d.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3">
                      <MapPin className="h-3 w-3" />
                      {d.location}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {d.capacity} capacity
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      <ScrollToTop />
    </div>
  );
}
