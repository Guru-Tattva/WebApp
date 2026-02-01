import { Link } from "wouter";
import { User, Phone, FlaskConical, Bell, Award, Image, Heart, Users } from "lucide-react";

interface SidePanelProps {
  isOpen: boolean;
}

const menuItems = [
  { icon: User, label: "Your Profile", labelHindi: "प्रोफाइल", href: "/profile" },
  { icon: Users, label: "Management", labelHindi: "प्रबंधन", href: "/management" },
  { icon: Phone, label: "Sampark", labelHindi: "संपर्क", href: "/contact" },
  { icon: FlaskConical, label: "Vigyan", labelHindi: "विज्ञान", href: "/science" },
  { icon: Bell, label: "Suchna", labelHindi: "सूचना", href: "/updates" },
  { icon: Award, label: "Certificates", labelHindi: "प्रमाणपत्र", href: "/certificates" },
  { icon: Image, label: "Gallery", labelHindi: "गैलरी", href: "/gallery" },
  { icon: Heart, label: "Donate Us", labelHindi: "दान करें", href: "/donate" },
];

export default function SidePanel({ isOpen }: SidePanelProps) {
  return (
    <div
      className={`absolute right-0 top-full mt-2 w-64 bg-card border border-card-border rounded-md shadow-lg z-50 transition-all duration-200 ease-out ${
        isOpen
          ? "opacity-100 translate-x-0 scale-100 visible"
          : "opacity-0 translate-x-4 scale-95 invisible"
      }`}
      data-testid="side-panel"
    >
      <div className="p-2">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-md p-4 mb-2">
          <h3 className="font-serif text-lg text-foreground font-semibold">
            Namaste
          </h3>
          <p className="text-sm text-muted-foreground">
            Welcome to GuruTattva
          </p>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <div
                className="flex items-center gap-3 px-3 py-2.5 rounded-md hover-elevate cursor-pointer group"
                data-testid={`sidepanel-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-sm font-medium text-foreground block">
                    {item.label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.labelHindi}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-border p-3 bg-muted/30">
        <p className="text-xs text-center text-muted-foreground">
          मैं एक पवित्र आत्मा हूॅं।<br />
          मैं एक शुद्ध आत्मा हूॅं।
        </p>
      </div>
    </div>
  );
}
