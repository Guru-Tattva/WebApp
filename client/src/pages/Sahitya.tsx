import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ShoppingCart, Search, Filter, BookOpen, Star, Plus, Minus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import logoImage from "@assets/Gurutattva-Logo-Regi_1769940433810.png";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const categories = [
  "All",
  "Books",
  "Audio CDs",
  "DVDs",
  "Meditation Accessories",
  "Spiritual Items",
  "Clothing",
];

const products: Product[] = [
  {
    id: "1",
    name: "Journey Within - Gurudev's Teachings",
    description: "A comprehensive guide to inner transformation through Himalayan meditation practices.",
    price: 599,
    originalPrice: 799,
    category: "Books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    rating: 4.9,
    reviews: 256,
    inStock: true,
    isBestseller: true,
  },
  {
    id: "2",
    name: "Path of Light - Meditation Guide",
    description: "Step-by-step instructions for beginners on the Himalayan meditation path.",
    price: 449,
    category: "Books",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    rating: 4.8,
    reviews: 189,
    inStock: true,
    isNew: true,
  },
  {
    id: "3",
    name: "Sacred Mantras - Audio Collection",
    description: "30 sacred mantras for daily practice, chanted by accomplished sadhaks.",
    price: 299,
    category: "Audio CDs",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400",
    rating: 4.7,
    reviews: 145,
    inStock: true,
  },
  {
    id: "4",
    name: "Himalayan Wisdom DVD Series",
    description: "10-part video series on advanced meditation techniques.",
    price: 1299,
    originalPrice: 1599,
    category: "DVDs",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400",
    rating: 4.9,
    reviews: 98,
    inStock: true,
  },
  {
    id: "5",
    name: "Meditation Cushion - Purple",
    description: "Ergonomic zafu cushion filled with organic buckwheat hulls.",
    price: 1499,
    category: "Meditation Accessories",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400",
    rating: 4.6,
    reviews: 87,
    inStock: true,
  },
  {
    id: "6",
    name: "Brass Meditation Bell",
    description: "Handcrafted brass bell with pure, resonant tone for meditation practice.",
    price: 799,
    category: "Spiritual Items",
    image: "https://images.unsplash.com/photo-1599719500956-d158a26ab3ee?w=400",
    rating: 4.8,
    reviews: 134,
    inStock: true,
  },
  {
    id: "7",
    name: "Gurutattva White Kurta",
    description: "Pure cotton kurta with subtle spiritual embroidery, perfect for meditation.",
    price: 899,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
    rating: 4.5,
    reviews: 67,
    inStock: true,
    isNew: true,
  },
  {
    id: "8",
    name: "Rudraksha Mala - 108 beads",
    description: "Authentic Nepali rudraksha beads strung with silk thread for japa meditation.",
    price: 1299,
    category: "Spiritual Items",
    image: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=400",
    rating: 4.9,
    reviews: 203,
    inStock: true,
    isBestseller: true,
  },
  {
    id: "9",
    name: "Incense Sticks - Sandalwood",
    description: "Premium sandalwood incense for creating sacred atmosphere during meditation.",
    price: 199,
    category: "Spiritual Items",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400",
    rating: 4.4,
    reviews: 312,
    inStock: true,
  },
  {
    id: "10",
    name: "The Eternal Truth - Hardcover",
    description: "Gurudev's most profound teachings on the nature of consciousness and reality.",
    price: 899,
    category: "Books",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
    rating: 5.0,
    reviews: 89,
    inStock: false,
  },
];

export default function Sahitya() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
      }
    });

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
                <img src={logoImage} alt="GuruTattva" className="h-8 w-auto cursor-pointer brightness-0 invert" data-testid="img-sahitya-logo" />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-white/80" />
              <h1 className="text-xl font-serif font-semibold text-white" data-testid="text-sahitya-title">
                Sahitya Store
              </h1>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="relative bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-cart">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 h-5 w-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent data-testid="sheet-cart">
                <SheetHeader>
                  <SheetTitle className="font-serif">Your Cart</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4 flex-1 overflow-y-auto">
                  {cart.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Your cart is empty</p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div key={item.id} className="flex gap-4 py-4 border-b border-border" data-testid={`cart-item-${item.id}`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            Rs. {item.price.toLocaleString()}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => updateQuantity(item.id, -1)}
                              data-testid={`button-decrease-${item.id}`}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => updateQuantity(item.id, 1)}
                              data-testid={`button-increase-${item.id}`}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 ml-auto"
                              onClick={() => removeFromCart(item.id)}
                              data-testid={`button-remove-${item.id}`}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {cart.length > 0 && (
                  <div className="border-t border-border pt-4 mt-4 space-y-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span data-testid="text-cart-total">Rs. {cartTotal.toLocaleString()}</span>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground" data-testid="button-checkout">
                      Proceed to Checkout
                    </Button>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-testid="input-search-products"
            />
          </div>
          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48" data-testid="select-category">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40" data-testid="select-sort">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                className={`overflow-hidden hover-elevate h-full flex flex-col ${
                  !product.inStock ? "opacity-75" : ""
                }`}
                data-testid={`card-product-${product.id}`}
              >
                <div className="aspect-square relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.isNew && (
                      <Badge className="bg-green-500 text-white">New</Badge>
                    )}
                    {product.isBestseller && (
                      <Badge className="bg-accent text-accent-foreground">Bestseller</Badge>
                    )}
                  </div>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                      <Badge variant="outline" className="text-lg">Out of Stock</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-4 flex-1 flex flex-col">
                  <Badge variant="outline" className="w-fit mb-2 text-xs">
                    {product.category}
                  </Badge>
                  <h3 className="font-serif font-semibold text-sm mb-1 line-clamp-2 flex-grow">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-primary">
                        Rs. {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          Rs. {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    className="w-full mt-3 bg-primary text-primary-foreground"
                    disabled={!product.inStock}
                    onClick={() => addToCart(product)}
                    data-testid={`button-add-to-cart-${product.id}`}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="font-serif text-lg font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </main>

      <ScrollToTop />
    </div>
  );
}
