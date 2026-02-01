import { useState } from "react";
import { MapPin, Search, Navigation, Phone, Clock, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const centers = [
  {
    id: 1,
    name: "Rishikesh Dhyanasthali",
    type: "Dhyanasthali",
    address: "Near Laxman Jhula, Rishikesh, Uttarakhand - 249302",
    phone: "+91 98765 43210",
    timing: "5:00 AM - 9:00 PM",
    distance: "2.5 km",
    pincode: "249302",
  },
  {
    id: 2,
    name: "Haridwar Ashram",
    type: "Dhyanasthali",
    address: "Shantikunj, Haridwar, Uttarakhand - 249411",
    phone: "+91 98765 43211",
    timing: "4:30 AM - 10:00 PM",
    distance: "5.2 km",
    pincode: "249411",
  },
  {
    id: 3,
    name: "Delhi Home Center",
    type: "Home Center",
    address: "123, Spiritual Lane, Vasant Kunj, New Delhi - 110070",
    phone: "+91 98765 43212",
    timing: "6:00 AM - 8:00 PM",
    distance: "8.1 km",
    pincode: "110070",
  },
  {
    id: 4,
    name: "Mumbai Meditation Hub",
    type: "Home Center",
    address: "456, Peace Avenue, Andheri West, Mumbai - 400058",
    phone: "+91 98765 43213",
    timing: "6:00 AM - 9:00 PM",
    distance: "12.3 km",
    pincode: "400058",
  },
  {
    id: 5,
    name: "Bengaluru Dhyanasthali",
    type: "Dhyanasthali",
    address: "789, Serenity Road, Indiranagar, Bengaluru - 560038",
    phone: "+91 98765 43214",
    timing: "5:30 AM - 9:30 PM",
    distance: "15.7 km",
    pincode: "560038",
  },
];

export default function FindCenter() {
  const [pincode, setPincode] = useState("");
  const [searchResults, setSearchResults] = useState(centers);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    setHasSearched(true);
    if (pincode.trim()) {
      const filtered = centers.filter((center) =>
        center.pincode.startsWith(pincode.substring(0, 3))
      );
      setSearchResults(filtered.length > 0 ? filtered : centers.slice(0, 3));
    } else {
      setSearchResults(centers);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6" data-testid="button-back-home">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <MapPin className="h-8 w-8" />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Find Your Nearest Center
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter your pin code to discover meditation centers and Dhyanasthalis in your area
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto mb-12"
          >
            <div className="flex gap-3">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter your PIN code"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="pl-10 h-12 text-lg"
                  data-testid="input-pincode"
                />
              </div>
              <Button
                size="lg"
                onClick={handleSearch}
                className="h-12 px-8"
                data-testid="button-search-centers"
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                {hasSearched ? `Found ${searchResults.length} centers` : "Nearby Centers"}
              </h2>

              {searchResults.map((center, index) => (
                <motion.div
                  key={center.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card
                    className="border-card-border hover-elevate cursor-pointer"
                    data-testid={`center-card-${center.id}`}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">
                            {center.name}
                          </h3>
                          <Badge
                            variant={center.type === "Dhyanasthali" ? "default" : "secondary"}
                            className="mt-1"
                          >
                            {center.type}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-primary font-medium">
                            {center.distance}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{center.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span>{center.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{center.timing}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Navigation className="h-4 w-4 mr-2" />
                          Directions
                        </Button>
                        <Button size="sm" className="flex-1">
                          <Phone className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl overflow-hidden border border-border h-[500px] lg:h-auto bg-muted/30 flex items-center justify-center"
            >
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Map View
                </h3>
                <p className="text-muted-foreground">
                  Interactive map showing all centers will be displayed here.
                  <br />
                  Enter your PIN code to see nearby locations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
