import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Calendar, MapPin, Users, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import ScrollToTop from "@/components/ScrollToTop";
import logoImage from "@assets/Gurutattva-Logo-Regi_1769940433810.png";

interface Gurukarya {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  locationType: "dhyanasthali" | "event" | "online";
  startDate: string;
  endDate?: string;
  startTime: string;
  endTime: string;
  maxSadhaks: number;
  enrolledSadhaks: number;
  image: string;
  requirements?: string[];
  benefits?: string[];
  status: "open" | "filling" | "full" | "completed";
}

const categories = [
  "All",
  "Seva",
  "Sadhana",
  "Shivir",
  "Satsang",
  "Special Events",
];

const gurukaryas: Gurukarya[] = [
  {
    id: "1",
    title: "Mahashivratri Seva at Rishikesh",
    description: "Join the sacred seva during Mahashivratri celebrations. Help in organizing the grand meditation session and serve fellow sadhaks.",
    category: "Seva",
    location: "Rishikesh Dhyanasthali",
    locationType: "dhyanasthali",
    startDate: "Feb 26, 2026",
    endDate: "Feb 28, 2026",
    startTime: "4:00 AM",
    endTime: "10:00 PM",
    maxSadhaks: 50,
    enrolledSadhaks: 38,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600",
    requirements: ["Prior meditation experience", "Physical fitness for long hours"],
    benefits: ["Direct Gurudev darshan", "Special prasad", "Certificate of seva"],
    status: "filling",
  },
  {
    id: "2",
    title: "Weekly Bhojanshala Seva",
    description: "Serve sattvic meals to visiting sadhaks and guests at the Haridwar center. A beautiful opportunity to practice karma yoga.",
    category: "Seva",
    location: "Haridwar Dhyanasthali",
    locationType: "dhyanasthali",
    startDate: "Every Sunday",
    startTime: "11:00 AM",
    endTime: "2:00 PM",
    maxSadhaks: 20,
    enrolledSadhaks: 12,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
    requirements: ["Willingness to serve", "Basic cooking knowledge helpful"],
    benefits: ["Blessings of Annapurna", "Community connection"],
    status: "open",
  },
  {
    id: "3",
    title: "21-Day Intensive Sadhana",
    description: "Commit to 21 days of intensive meditation practice under guidance. Transform your spiritual journey with dedicated practice.",
    category: "Sadhana",
    location: "Online & All Centers",
    locationType: "online",
    startDate: "Mar 1, 2026",
    endDate: "Mar 21, 2026",
    startTime: "5:00 AM",
    endTime: "6:30 AM",
    maxSadhaks: 500,
    enrolledSadhaks: 423,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    requirements: ["Daily commitment", "Quiet space for practice"],
    benefits: ["Spiritual growth", "Community support", "Guided sessions"],
    status: "filling",
  },
  {
    id: "4",
    title: "Guru Purnima Arrangements",
    description: "Be part of the team organizing Guru Purnima celebrations. Multiple roles available from decoration to coordination.",
    category: "Special Events",
    location: "Varanasi Dhyanasthali",
    locationType: "dhyanasthali",
    startDate: "Jul 19, 2026",
    endDate: "Jul 21, 2026",
    startTime: "6:00 AM",
    endTime: "9:00 PM",
    maxSadhaks: 100,
    enrolledSadhaks: 67,
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600",
    requirements: ["Flexibility in schedule", "Team coordination skills"],
    benefits: ["Special Guru Purnima blessings", "Prasad", "Accommodation provided"],
    status: "open",
  },
  {
    id: "5",
    title: "Monthly Satsang Coordination",
    description: "Help coordinate monthly satsang gatherings at your nearest center. Manage registrations, seating, and technical setup.",
    category: "Satsang",
    location: "Delhi Center",
    locationType: "event",
    startDate: "First Saturday of Month",
    startTime: "6:00 PM",
    endTime: "8:30 PM",
    maxSadhaks: 15,
    enrolledSadhaks: 15,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600",
    requirements: ["Regular availability", "Good communication skills"],
    benefits: ["Leadership experience", "Direct involvement in spiritual community"],
    status: "full",
  },
  {
    id: "6",
    title: "Himalayan Retreat Seva - Summer",
    description: "Serve during the summer retreat at our Kedarnath center. A rare opportunity to serve in the sacred Himalayas.",
    category: "Shivir",
    location: "Kedarnath Dhyanasthali",
    locationType: "dhyanasthali",
    startDate: "May 15, 2026",
    endDate: "May 30, 2026",
    startTime: "5:00 AM",
    endTime: "8:00 PM",
    maxSadhaks: 30,
    enrolledSadhaks: 28,
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600",
    requirements: ["Physical fitness for altitude", "Minimum 7-day commitment"],
    benefits: ["Himalayan experience", "Deep spiritual connection", "Full board provided"],
    status: "filling",
  },
  {
    id: "7",
    title: "Youth Meditation Camp Support",
    description: "Help organize and mentor at the upcoming youth meditation camp. Guide young seekers on their spiritual path.",
    category: "Shivir",
    location: "Kerala Dhyanasthali",
    locationType: "dhyanasthali",
    startDate: "Apr 10, 2026",
    endDate: "Apr 15, 2026",
    startTime: "7:00 AM",
    endTime: "9:00 PM",
    maxSadhaks: 25,
    enrolledSadhaks: 18,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600",
    requirements: ["Experience with youth", "Prior camp participation"],
    benefits: ["Mentoring experience", "Certificate", "Accommodation provided"],
    status: "open",
  },
  {
    id: "8",
    title: "Online Content Seva",
    description: "Help create and manage spiritual content for our online platforms. Writing, editing, or social media management.",
    category: "Seva",
    location: "Online / Remote",
    locationType: "online",
    startDate: "Ongoing",
    startTime: "Flexible",
    endTime: "Flexible",
    maxSadhaks: 40,
    enrolledSadhaks: 22,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
    requirements: ["Good writing skills", "Regular internet access"],
    benefits: ["Skill development", "Flexible timing", "Spiritual growth"],
    status: "open",
  },
];

function JoinDialog({ gurukarya, onSuccess }: { gurukarya: Gurukarya; onSuccess: () => void }) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    availability: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: `Thank you for joining "${gurukarya.title}". You will receive confirmation shortly.`,
    });
    onSuccess();
  };

  return (
    <DialogContent className="sm:max-w-lg" data-testid="dialog-join-gurukarya">
      <DialogHeader>
        <DialogTitle className="font-serif">Join {gurukarya.title}</DialogTitle>
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
              data-testid="input-join-name"
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
              data-testid="input-join-phone"
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
            data-testid="input-join-email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="experience">Prior Experience</Label>
          <Select
            value={formData.experience}
            onValueChange={(value) => setFormData({ ...formData, experience: value })}
          >
            <SelectTrigger data-testid="select-experience">
              <SelectValue placeholder="Select your experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner (New to GuruTattva)</SelectItem>
              <SelectItem value="intermediate">Intermediate (1-2 years)</SelectItem>
              <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
              <SelectItem value="senior">Senior Sadhak</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="availability">Availability Notes</Label>
          <Input
            id="availability"
            placeholder="Any specific dates or constraints"
            value={formData.availability}
            onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            data-testid="input-join-availability"
          />
        </div>

        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
          <h4 className="font-medium text-sm">Gurukarya Details:</h4>
          <div className="text-sm text-muted-foreground space-y-1">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {gurukarya.location}
            </p>
            <p className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {gurukarya.startDate}{gurukarya.endDate ? ` - ${gurukarya.endDate}` : ""}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {gurukarya.startTime} - {gurukarya.endTime}
            </p>
          </div>
        </div>

        <Button type="submit" className="w-full" data-testid="button-submit-join">
          Submit Request
        </Button>
      </form>
    </DialogContent>
  );
}

function GurukaryaCard({ gurukarya }: { gurukarya: Gurukarya }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const progress = (gurukarya.enrolledSadhaks / gurukarya.maxSadhaks) * 100;
  const spotsLeft = gurukarya.maxSadhaks - gurukarya.enrolledSadhaks;

  const getStatusBadge = () => {
    switch (gurukarya.status) {
      case "open":
        return <Badge className="bg-accent text-accent-foreground">Open</Badge>;
      case "filling":
        return <Badge className="bg-primary text-primary-foreground">Filling Fast</Badge>;
      case "full":
        return <Badge variant="secondary">Full</Badge>;
      case "completed":
        return <Badge variant="outline">Completed</Badge>;
      default:
        return null;
    }
  };

  const getLocationBadge = () => {
    switch (gurukarya.locationType) {
      case "dhyanasthali":
        return <Badge variant="outline" className="text-xs">Dhyanasthali</Badge>;
      case "event":
        return <Badge variant="outline" className="text-xs">Event</Badge>;
      case "online":
        return <Badge variant="outline" className="text-xs">Online</Badge>;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden gradient-card gradient-card-hover hover-elevate h-full flex flex-col" data-testid={`card-gurukarya-${gurukarya.id}`}>
        <div className="aspect-video relative">
          <img
            src={gurukarya.image}
            alt={gurukarya.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            {getStatusBadge()}
            {getLocationBadge()}
          </div>
          <div className="absolute top-3 right-3">
            <Badge className="bg-background/90 text-foreground">{gurukarya.category}</Badge>
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="font-serif text-lg line-clamp-2">{gurukarya.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{gurukarya.description}</p>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{gurukarya.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{gurukarya.startDate}{gurukarya.endDate ? ` - ${gurukarya.endDate}` : ""}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <span>{gurukarya.startTime} - {gurukarya.endTime}</span>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {gurukarya.enrolledSadhaks}/{gurukarya.maxSadhaks} Sadhaks
              </span>
              {spotsLeft > 0 ? (
                <span className="text-accent font-medium">{spotsLeft} spots left</span>
              ) : (
                <span className="text-muted-foreground">No spots</span>
              )}
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="mt-auto">
            {gurukarya.status !== "full" && gurukarya.status !== "completed" ? (
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full" data-testid={`button-join-${gurukarya.id}`}>
                    Join This Karya
                  </Button>
                </DialogTrigger>
                <JoinDialog gurukarya={gurukarya} onSuccess={() => setDialogOpen(false)} />
              </Dialog>
            ) : gurukarya.status === "full" ? (
              <Button className="w-full" variant="secondary" disabled>
                <AlertCircle className="h-4 w-4 mr-2" />
                Karya Full
              </Button>
            ) : (
              <Button className="w-full" variant="outline" disabled>
                <CheckCircle className="h-4 w-4 mr-2" />
                Completed
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Gurukarya() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const filteredGurukaryas = gurukaryas.filter((karya) => {
    const matchesCategory = selectedCategory === "All" || karya.category === selectedCategory;
    const matchesLocation = selectedLocation === "all" || karya.locationType === selectedLocation;
    return matchesCategory && matchesLocation;
  });

  const openKaryas = filteredGurukaryas.filter((k) => k.status === "open" || k.status === "filling");
  const fullKaryas = filteredGurukaryas.filter((k) => k.status === "full" || k.status === "completed");

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
                <img src={logoImage} alt="GuruTattva" className="h-8 w-auto cursor-pointer brightness-0 invert" data-testid="img-gurukarya-logo" />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-white/80" />
              <h1 className="text-xl font-serif font-semibold text-white" data-testid="text-gurukarya-title">
                Gurukarya
              </h1>
            </div>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Sacred Service Opportunities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join fellow sadhaks in various seva and sadhana activities. Each gurukarya is an opportunity 
            to grow spiritually while serving the community.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </Button>
            ))}
          </div>
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-48" data-testid="select-location-filter">
              <SelectValue placeholder="Filter by location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="dhyanasthali">Dhyanasthali Only</SelectItem>
              <SelectItem value="event">Events Only</SelectItem>
              <SelectItem value="online">Online Only</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {openKaryas.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-serif font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Open Gurukaryas
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openKaryas.map((karya) => (
                <GurukaryaCard key={karya.id} gurukarya={karya} />
              ))}
            </div>
          </div>
        )}

        {fullKaryas.length > 0 && (
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6 flex items-center gap-2 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-muted"></span>
              Filled / Completed
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-75">
              {fullKaryas.map((karya) => (
                <GurukaryaCard key={karya.id} gurukarya={karya} />
              ))}
            </div>
          </div>
        )}

        {filteredGurukaryas.length === 0 && (
          <div className="text-center py-16">
            <Users className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-xl font-serif font-semibold text-muted-foreground mb-2">
              No Gurukaryas Found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your filters to see more opportunities.
            </p>
          </div>
        )}
      </main>

      <ScrollToTop />
    </div>
  );
}
