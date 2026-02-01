import { useState } from "react";
import { Search, BookOpen, Clock, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorImage: string;
  date: string;
  image: string;
  readTime: string;
  tags: string[];
}

const categories = [
  { name: "All", count: 24 },
  { name: "Meditation Techniques", count: 8 },
  { name: "Spiritual Growth", count: 6 },
  { name: "Himalayan Wisdom", count: 5 },
  { name: "Daily Practice", count: 3 },
  { name: "Gurudev's Teachings", count: 2 },
];

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Successfully Distributed: How To Thrive As a Spiritual Seeker in Modern Times",
    excerpt: "Discover practical strategies for maintaining your spiritual practice while navigating the demands of contemporary life.",
    category: "Daily Practice",
    author: "Swami Ananda",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    date: "Jan 28, 2026",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600",
    readTime: "8 min read",
    tags: ["Meditation", "Modern Life", "Balance"],
  },
  {
    id: "2",
    title: "The Ancient Art of Himalayan Breathwork: A Complete Guide",
    excerpt: "Learn the sacred pranayama techniques passed down through generations of Himalayan masters for inner transformation.",
    category: "Meditation Techniques",
    author: "Dr. Priya Sharma",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    date: "Jan 25, 2026",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    readTime: "12 min read",
    tags: ["Pranayama", "Breathwork", "Techniques"],
  },
  {
    id: "3",
    title: "Finding Inner Peace: Lessons from the Mountains",
    excerpt: "What the stillness of the Himalayas can teach us about cultivating lasting peace in our hearts and minds.",
    category: "Himalayan Wisdom",
    author: "Yogacharya Mukesh",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    date: "Jan 22, 2026",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
    readTime: "6 min read",
    tags: ["Peace", "Himalayas", "Wisdom"],
  },
  {
    id: "4",
    title: "The Science of Mantra: How Sacred Sounds Transform Consciousness",
    excerpt: "Exploring the profound effects of mantra meditation on the brain and spiritual development.",
    category: "Meditation Techniques",
    author: "Dr. Arun Patel",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    date: "Jan 18, 2026",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600",
    readTime: "10 min read",
    tags: ["Mantra", "Science", "Consciousness"],
  },
  {
    id: "5",
    title: "Awakening the Inner Light: Gurudev's Teachings on Self-Realization",
    excerpt: "A deep dive into Gurudev's profound teachings on the nature of the self and the path to enlightenment.",
    category: "Gurudev's Teachings",
    author: "Sadguru Editorial",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600",
    readTime: "15 min read",
    tags: ["Self-Realization", "Teachings", "Enlightenment"],
  },
  {
    id: "6",
    title: "Creating a Sacred Space: Designing Your Home Meditation Corner",
    excerpt: "Practical tips for setting up a peaceful meditation space that supports your daily spiritual practice.",
    category: "Daily Practice",
    author: "Maya Krishnan",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    date: "Jan 12, 2026",
    image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=600",
    readTime: "5 min read",
    tags: ["Home", "Sacred Space", "Practice"],
  },
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-serif font-bold text-foreground" data-testid="text-blog-title">
              Spiritual Insights
            </h1>
          </div>
          <p className="text-muted-foreground">Wisdom and teachings from the Himalayan tradition</p>
        </div>
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            data-testid="input-blog-search"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-6">
                <h3 className="font-serif font-semibold text-lg mb-4 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Resources
                </h3>
                <div className="space-y-2">
                  <button
                    className="w-full text-left px-3 py-2 rounded-md text-sm text-primary bg-primary/10"
                    data-testid="button-resource-blog"
                  >
                    Blog
                  </button>
                  <button
                    className="w-full text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted/50 transition-colors"
                    data-testid="button-resource-academy"
                  >
                    Academy
                  </button>
                  <button
                    className="w-full text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted/50 transition-colors"
                    data-testid="button-resource-webinar"
                  >
                    Webinar
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-serif font-semibold text-lg mb-4 flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center justify-between transition-colors ${
                        selectedCategory === category.name
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:bg-muted/50"
                      }`}
                      data-testid={`button-category-${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <span>{category.name}</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover-elevate cursor-pointer h-full flex flex-col" data-testid={`card-blog-${post.id}`}>
                    <div className="aspect-video relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4 flex-1 flex flex-col">
                      <Badge className="w-fit mb-3 bg-accent/20 text-accent-foreground border-accent/30">
                        {post.category}
                      </Badge>
                      <h3 className="font-serif font-semibold text-lg mb-2 line-clamp-2 flex-grow">
                        {post.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-primary text-primary-foreground">
                        Read more
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-serif text-lg font-semibold mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </main>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}
