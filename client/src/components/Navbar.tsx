import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Bell, Menu, User, LogIn, LogOut, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Gurutattva-Logo-Regi_1769940433810.png";
import SidePanel from "./SidePanel";

export default function Navbar() {
  const [showSecondNav, setShowSecondNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowSecondNav(false);
      } else if (currentScrollY < lastScrollY) {
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
    { label: "News", href: "#news" },
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
            <div className="flex items-center justify-between h-16 gap-4">
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
                {isLoggedIn ? (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hidden sm:flex items-center gap-2"
                      data-testid="button-profile"
                    >
                      <User className="h-4 w-4" />
                      <span className="hidden lg:inline">Profile</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsLoggedIn(false)}
                      className="hidden sm:flex items-center gap-2"
                      data-testid="button-logout"
                    >
                      <LogOut className="h-4 w-4" />
                      <span className="hidden lg:inline">Logout</span>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsLoggedIn(true)}
                      className="hidden sm:flex items-center gap-2"
                      data-testid="button-login"
                    >
                      <LogIn className="h-4 w-4" />
                      <span className="hidden lg:inline">Login</span>
                    </Button>
                    <Button
                      size="sm"
                      className="hidden sm:flex items-center gap-2"
                      data-testid="button-signup"
                    >
                      <UserPlus className="h-4 w-4" />
                      <span className="hidden lg:inline">Sign Up</span>
                    </Button>
                  </>
                )}

                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  aria-label="Notifications"
                  data-testid="button-notifications"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
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
                    aria-label="Menu"
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
          className={`bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground transition-all duration-300 ease-in-out ${
            showSecondNav 
              ? "max-h-12 opacity-100" 
              : "max-h-0 opacity-0 overflow-hidden"
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
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
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
