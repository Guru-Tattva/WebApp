import { useState } from "react";
import { Bell, Check, Calendar, BookOpen, MapPin, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "event" | "blog" | "dhyanasthali" | "sahitya";
  read: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: "1",
    title: "New Event Added",
    message: "Mahashivratri Meditation Camp registration is now open",
    time: "2 hours ago",
    type: "event",
    read: false,
  },
  {
    id: "2",
    title: "New Blog Post",
    message: "Understanding the Path of Himalayan Meditation",
    time: "5 hours ago",
    type: "blog",
    read: false,
  },
  {
    id: "3",
    title: "Dhyanasthali Update",
    message: "Rishikesh center now accepting bookings for March",
    time: "1 day ago",
    type: "dhyanasthali",
    read: false,
  },
  {
    id: "4",
    title: "New Arrival in Sahitya",
    message: "Gurudev's latest book 'Journey Within' now available",
    time: "2 days ago",
    type: "sahitya",
    read: true,
  },
];

const getNotificationIcon = (type: Notification["type"]) => {
  switch (type) {
    case "event":
      return <Calendar className="h-4 w-4 text-primary" />;
    case "blog":
      return <BookOpen className="h-4 w-4 text-accent" />;
    case "dhyanasthali":
      return <MapPin className="h-4 w-4 text-green-600" />;
    case "sahitya":
      return <ShoppingBag className="h-4 w-4 text-amber-600" />;
  }
};

export default function NotificationDropdown() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label="Notifications"
          data-testid="button-notifications"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80" data-testid="dropdown-notifications">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h3 className="font-semibold text-foreground">Notifications</h3>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              className="text-xs text-primary hover:text-primary/80"
              data-testid="button-mark-all-read"
            >
              <Check className="h-3 w-3 mr-1" />
              Mark all as read
            </Button>
          )}
        </div>
        <div className="max-h-80 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="px-4 py-8 text-center text-muted-foreground">
              No notifications
            </div>
          ) : (
            notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={`px-4 py-3 cursor-pointer ${
                  !notification.read ? "bg-muted/50" : ""
                }`}
                onClick={() => markAsRead(notification.id)}
                data-testid={`notification-item-${notification.id}`}
              >
                <div className="flex gap-3 w-full">
                  <div className="flex-shrink-0 mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${!notification.read ? "text-foreground" : "text-muted-foreground"}`}>
                      {notification.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      {notification.time}
                    </p>
                  </div>
                  {!notification.read && (
                    <div className="flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                  )}
                </div>
              </DropdownMenuItem>
            ))
          )}
        </div>
        <DropdownMenuSeparator />
        <div className="px-4 py-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-primary"
            data-testid="button-view-all-notifications"
          >
            View all notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
