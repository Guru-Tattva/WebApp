import { useState, useEffect, useCallback } from "react";
import { Clock, User, TrendingUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
  isFeatured?: boolean;
}

const categories = [
  "All",
  "Spiritual Events",
  "Meditation",
  "Community",
  "Dhyanasthali Updates",
  "Teachings",
];

const generateNewsItems = (page: number): NewsItem[] => {
  const newsData = [
    {
      title: "Grand Mahashivratri Celebration at Rishikesh Dhyanasthali",
      excerpt: "Thousands of sadhaks gathered for the annual Mahashivratri celebrations with special meditation sessions and spiritual discourses.",
      category: "Spiritual Events",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600",
    },
    {
      title: "New Dhyanasthali Inaugurated in Kerala",
      excerpt: "GuruTattva expands its presence in South India with a new meditation center in the serene backwaters of Kerala.",
      category: "Dhyanasthali Updates",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    },
    {
      title: "International Meditation Day: Global Online Gathering",
      excerpt: "Sadhaks from 70+ countries joined together in a historic online meditation session led by Gurudev.",
      category: "Community",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600",
    },
    {
      title: "The Science Behind Himalayan Meditation Techniques",
      excerpt: "Research studies validate the profound benefits of ancient Himalayan meditation practices on mental and physical health.",
      category: "Meditation",
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600",
    },
    {
      title: "Youth Meditation Workshop Series Launches Nationwide",
      excerpt: "Special programs designed to introduce young seekers to the transformative power of meditation.",
      category: "Community",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600",
    },
    {
      title: "Gurudev's Teachings on Inner Peace in Modern Times",
      excerpt: "Wisdom from Gurudev on navigating life's challenges while maintaining spiritual equilibrium.",
      category: "Teachings",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    },
  ];

  return newsData.map((news, index) => ({
    ...news,
    id: `${page}-${index}`,
    author: "GuruTattva Editorial",
    date: `${Math.floor(Math.random() * 28) + 1} Jan 2026`,
    readTime: `${Math.floor(Math.random() * 5) + 3} min read`,
    isFeatured: page === 1 && index < 2,
  }));
};

const trendingNews = [
  {
    id: "t1",
    title: "Annual Sadhak Sammelan Dates Announced",
    category: "Spiritual Events",
    date: "2 hours ago",
  },
  {
    id: "t2",
    title: "New Book Release: Path of Light",
    category: "Teachings",
    date: "5 hours ago",
  },
  {
    id: "t3",
    title: "Meditation Retreat Registration Open",
    category: "Community",
    date: "1 day ago",
  },
  {
    id: "t4",
    title: "Dhyanasthali Seva Program Expanded",
    category: "Dhyanasthali Updates",
    date: "2 days ago",
  },
];

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    const newItems = generateNewsItems(page);
    setNews((prev) => [...prev, ...newItems]);
    setPage((prev) => prev + 1);
    if (page >= 5) setHasMore(false);
    setLoading(false);
  }, [loading, hasMore, page]);

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 500
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMore]);

  const filteredNews =
    selectedCategory === "All"
      ? news
      : news.filter((item) => item.category === selectedCategory);

  const featuredNews = filteredNews.filter((item) => item.isFeatured);
  const regularNews = filteredNews.filter((item) => !item.isFeatured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-2" data-testid="text-news-title">
            Latest News
          </h1>
          <p className="text-muted-foreground">Stay updated with the latest from GuruTattva</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-primary" : ""}
              data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {featuredNews.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {featuredNews.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover-elevate cursor-pointer h-full" data-testid={`card-featured-news-${item.id}`}>
                      <div className="aspect-video relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                          {item.category}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-serif font-semibold text-lg mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {item.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="space-y-4">
              {regularNews.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden hover-elevate cursor-pointer" data-testid={`card-news-${item.id}`}>
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-48 aspect-video sm:aspect-square flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4 flex-1">
                        <Badge variant="outline" className="mb-2">
                          {item.category}
                        </Badge>
                        <h3 className="font-serif font-semibold text-lg mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {item.author}
                          </span>
                          <span>{item.date}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {loading && (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" data-testid="loader-news" />
              </div>
            )}

            {!hasMore && (
              <p className="text-center text-muted-foreground py-8">
                You've reached the end of the news feed
              </p>
            )}
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <Card className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <h3 className="font-serif font-semibold text-lg">Trending Now</h3>
                </div>
                <div className="space-y-4">
                  {trendingNews.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-md transition-colors"
                      data-testid={`trending-news-${item.id}`}
                    >
                      <span className="text-2xl font-bold text-primary/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <Badge variant="outline" className="text-xs mb-1">
                          {item.category}
                        </Badge>
                        <h4 className="text-sm font-medium line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </main>

      <ScrollToTop />
    </div>
  );
}
