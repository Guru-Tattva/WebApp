import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Calendar,
  Edit,
  CheckCircle,
  XCircle,
  LogOut,
  Bell,
  Shield,
  Heart,
  BookOpen,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/authContext";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import logoImage from "@assets/Gurutattva-Logo-Regi_1769940433810.png";

const recentActivity = [
  {
    id: "1",
    type: "booking",
    title: "Booked Sadhak Nivas at Rishikesh",
    date: "Jan 25, 2026",
    icon: MapPin,
  },
  {
    id: "2",
    type: "purchase",
    title: "Purchased 'Journey Within' book",
    date: "Jan 20, 2026",
    icon: BookOpen,
  },
  {
    id: "3",
    type: "event",
    title: "Registered for Mahashivratri Camp",
    date: "Jan 15, 2026",
    icon: Calendar,
  },
];

const savedItems = [
  {
    id: "1",
    title: "The Ancient Art of Himalayan Breathwork",
    type: "Blog",
    date: "Jan 22, 2026",
  },
  {
    id: "2",
    title: "Rudraksha Mala - 108 beads",
    type: "Product",
    date: "Jan 18, 2026",
  },
  {
    id: "3",
    title: "Dharamshala Dhyanasthali",
    type: "Center",
    date: "Jan 10, 2026",
  },
];

export default function Profile() {
  const [, setLocation] = useLocation();
  const { user, logout, isLoggedIn } = useAuth();
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    events: true,
    news: false,
  });

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-card/30 to-muted/20 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center p-8">
          <User className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-xl font-serif font-bold mb-2">Not Logged In</h2>
          <p className="text-muted-foreground mb-6">
            Please log in to view your profile
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/login">
              <Button className="bg-primary text-primary-foreground" data-testid="button-go-to-login">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline" data-testid="button-go-to-signup">
                Sign Up
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="icon" data-testid="button-back-home">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/">
                <img src={logoImage} alt="GuruTattva" className="h-8 w-auto cursor-pointer" data-testid="img-profile-logo" />
              </Link>
            </div>
            <h1 className="text-xl font-serif font-semibold text-primary" data-testid="text-profile-title">
              My Profile
            </h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-destructive"
              data-testid="button-logout"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {user?.name?.charAt(0) || "S"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
                  <h2 className="text-2xl font-serif font-bold" data-testid="text-user-name">
                    {user?.name}
                  </h2>
                  <Button variant="ghost" size="sm" data-testid="button-edit-profile">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center justify-center sm:justify-start gap-2">
                    <Mail className="h-4 w-4" />
                    {user?.email}
                    {user?.isEmailVerified ? (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    ) : (
                      <Link href="/verify">
                        <Badge variant="outline" className="text-amber-600 border-amber-600 cursor-pointer">
                          <XCircle className="h-3 w-3 mr-1" />
                          Verify
                        </Badge>
                      </Link>
                    )}
                  </p>
                  <p className="flex items-center justify-center sm:justify-start gap-2">
                    <Phone className="h-4 w-4" />
                    {user?.phone}
                    {user?.isPhoneVerified ? (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    ) : (
                      <Link href="/verify">
                        <Badge variant="outline" className="text-amber-600 border-amber-600 cursor-pointer">
                          <XCircle className="h-3 w-3 mr-1" />
                          Verify
                        </Badge>
                      </Link>
                    )}
                  </p>
                  <p className="flex items-center justify-center sm:justify-start gap-2">
                    <Calendar className="h-4 w-4" />
                    Member since {user?.joinedDate}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="activity" className="space-y-6">
          <TabsList className="w-full">
            <TabsTrigger value="activity" className="flex-1" data-testid="tab-activity">
              Activity
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex-1" data-testid="tab-saved">
              Saved
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex-1" data-testid="tab-settings">
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      data-testid={`activity-item-${activity.id}`}
                    >
                      <div className="p-2 rounded-full bg-primary/10">
                        <activity.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saved">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5 text-accent" />
                  Saved Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {savedItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                      data-testid={`saved-item-${item.id}`}
                    >
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.type} • Saved on {item.date}
                        </p>
                      </div>
                      <Badge variant="outline">{item.type}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-lg flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-notifications" className="flex flex-col gap-1">
                      <span>Email Notifications</span>
                      <span className="text-sm text-muted-foreground font-normal">
                        Receive updates via email
                      </span>
                    </Label>
                    <Switch
                      id="email-notifications"
                      checked={notifications.email}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, email: checked })
                      }
                      data-testid="switch-email-notifications"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-notifications" className="flex flex-col gap-1">
                      <span>Push Notifications</span>
                      <span className="text-sm text-muted-foreground font-normal">
                        Receive browser notifications
                      </span>
                    </Label>
                    <Switch
                      id="push-notifications"
                      checked={notifications.push}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, push: checked })
                      }
                      data-testid="switch-push-notifications"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="event-notifications" className="flex flex-col gap-1">
                      <span>Event Reminders</span>
                      <span className="text-sm text-muted-foreground font-normal">
                        Get notified about upcoming events
                      </span>
                    </Label>
                    <Switch
                      id="event-notifications"
                      checked={notifications.events}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, events: checked })
                      }
                      data-testid="switch-event-notifications"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="news-notifications" className="flex flex-col gap-1">
                      <span>News & Updates</span>
                      <span className="text-sm text-muted-foreground font-normal">
                        Receive latest news and announcements
                      </span>
                    </Label>
                    <Switch
                      id="news-notifications"
                      checked={notifications.news}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, news: checked })
                      }
                      data-testid="switch-news-notifications"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" data-testid="button-change-password">
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start" data-testid="button-two-factor">
                    Enable Two-Factor Authentication
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-destructive hover:text-destructive"
                    data-testid="button-delete-account"
                  >
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
