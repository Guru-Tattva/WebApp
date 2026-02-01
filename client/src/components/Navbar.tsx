import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Gurutattva-Logo-Regi_1769940433810.png";
import SidePanel from "./SidePanel";

export default function Navbar() {
  const [showSecondNav, setShowSecondNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowSecondNav(false);
      } else {
        setShowSecondNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const primaryNavItems = [
    { label: "What is GuruTattva?", href: "#about" },
    { label: "Events", href: "#events" },
  ];

  const secondaryNavItems = [
    { label: "Dhyanasthali", href: "#dhyanasthali" },
    { label: "Sahitya", href: "#sahitya" },
    { label: "Blogs", href: "#blogs" },
    { label: "Gurudev", href: "#gurudev" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-background/95 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 gap-4 flex-wrap">
              <Link href="/" data-testid="link-home">
                <img
                  src={logoImage}
                  alt="GuruTattva"
                  className="h-10 w-auto cursor-pointer"
                  data-testid="img-logo"
                />
              </Link>

              <div className="hidden md:flex items-center gap-6">
                {primaryNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  data-testid="button-notifications"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-secondary text-secondary-foreground text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </Button>

                <div
                  className="relative"
                  onMouseEnter={() => setIsPanelOpen(true)}
                  onMouseLeave={() => setIsPanelOpen(false)}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid="button-menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                  <SidePanel isOpen={isPanelOpen} />
                </div>
              </div>
            </div>
          </div>
        </nav>

        <nav
          className={`bg-primary text-primary-foreground transition-all duration-300 ${
            showSecondNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-12 gap-8">
              {secondaryNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors relative group"
                  data-testid={`link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <div className={`transition-all duration-300 ${showSecondNav ? "h-28" : "h-16"}`} />
    </>
  );
}
