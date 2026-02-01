import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Youtube, Facebook, Instagram, Twitter } from "lucide-react";
import logoImage from "@assets/Gurutattva-Logo-Regi_1769940433810.png";

const quickLinks = [
  { label: "About GuruTattva", href: "/about" },
  { label: "Dhyanasthalis", href: "/dhyanasthali" },
  { label: "Sahitya", href: "/sahitya" },
  { label: "Events", href: "/events" },
  { label: "Blogs", href: "/blogs" },
];

const supportLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Certificates", href: "/certificates" },
  { label: "Gallery", href: "/gallery" },
  { label: "Donate", href: "/donate" },
];

const socialLinks = [
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="gradient-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/">
              <img
                src={logoImage}
                alt="GuruTattva"
                className="h-12 w-auto mb-4"
                data-testid="img-footer-logo"
              />
            </Link>
            <p className="text-muted-foreground mb-6">
              Spreading the light of Himalayan wisdom and meditation practices
              to seekers across the world.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">
              Stay updated with our latest events and spiritual teachings.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1"
                data-testid="input-subscribe-email"
              />
              <Button data-testid="button-subscribe">
                <Mail className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@gurutattva.org</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Himalayan Meditation Center, Rishikesh, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 GuruTattva. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy">
                <span className="hover:text-primary cursor-pointer">Privacy Policy</span>
              </Link>
              <Link href="/terms">
                <span className="hover:text-primary cursor-pointer">Terms of Service</span>
              </Link>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            ॐ सर्वे भवन्तु सुखिनः । सर्वे सन्तु निरामयाः ।
          </p>
        </div>
      </div>
    </footer>
  );
}
