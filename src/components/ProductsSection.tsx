import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star, ShoppingCart, Leaf, Heart, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, MouseEvent } from "react";
import FloatingIcons from "./FloatingIcons";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const sizeOptions = [
  { size: "50 ml", priceMultiplier: 0.33 },
  { size: "100 ml", priceMultiplier: 0.55 },
  { size: "250 ml", priceMultiplier: 1 },
  { size: "500 ml", priceMultiplier: 1.7 },
];

const products = [
  {
    id: 1,
    name: "Himalayan Raw Honey",
    origin: "Uttarakhand",
    basePrice: 899,
    originalPrice: 1199,
    rating: 4.9,
    reviews: 342,
    badge: "Bestseller",
    features: ["100% Pure", "Cold Extracted"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 2,
    name: "Wild Forest Honey",
    origin: "Western Ghats",
    basePrice: 749,
    originalPrice: 999,
    rating: 4.8,
    reviews: 256,
    badge: "Organic",
    features: ["Forest Flowers", "Rich Antioxidants"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 3,
    name: "Kashmir Acacia Honey",
    origin: "Kashmir Valley",
    basePrice: 1299,
    originalPrice: 1599,
    rating: 5.0,
    reviews: 189,
    badge: "Premium",
    features: ["Light & Delicate", "Slow Crystallizing"],
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 4,
    name: "Multiflora Honey",
    origin: "Rajasthan",
    basePrice: 599,
    originalPrice: 799,
    rating: 4.7,
    reviews: 412,
    badge: "Value Pack",
    features: ["Mixed Flowers", "Daily Use"],
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    id: 5,
    name: "Tulsi Infused Honey",
    origin: "Madhya Pradesh",
    basePrice: 699,
    originalPrice: 899,
    rating: 4.8,
    reviews: 178,
    badge: "Immunity Boost",
    features: ["Holy Basil", "Ayurvedic"],
    color: "from-teal-500/20 to-green-500/20",
  },
  {
    id: 6,
    name: "Litchi Honey",
    origin: "Bihar",
    basePrice: 849,
    originalPrice: 1099,
    rating: 4.9,
    reviews: 234,
    badge: "Seasonal",
    features: ["Fruity Aroma", "Light Color"],
    color: "from-red-500/20 to-pink-500/20",
  },
];

// 3D Card Component
const Product3DCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(2); // Default 250ml
  const { addItem } = useCart();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 });

  const currentPrice = Math.round(product.basePrice * sizeOptions[selectedSize].priceMultiplier);
  const currentOriginalPrice = Math.round(product.originalPrice * sizeOptions[selectedSize].priceMultiplier);
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      size: sizeOptions[selectedSize].size,
      price: currentPrice,
      image: `https://images.unsplash.com/photo-${product.id % 3 === 0 ? '1558642452-9d2a7deb7f62' : product.id % 3 === 1 ? '1606313564200-e75d5e31fcfd' : '1571875257727-256c48ca3172'}?w=200&h=300&fit=crop&q=80`,
    });
    toast.success(`${product.name} (${sizeOptions[selectedSize].size}) added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elegant transition-shadow duration-500 border border-border hover:border-primary/20"
      >
        {/* 3D Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
        
        {/* Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
            {product.badge}
          </span>
        </div>

        {/* Wishlist Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 z-10 p-2.5 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground shadow-sm"
        >
          <Heart size={16} />
        </motion.button>

        {/* Product Image Area */}
        <div className={`relative h-52 bg-gradient-to-br ${product.color} flex items-center justify-center overflow-hidden`}>
          <motion.div
            animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-24 h-32 rounded-2xl bg-white/30 backdrop-blur-sm shadow-lg overflow-hidden"
          >
            <img 
              src={`https://images.unsplash.com/photo-${product.id % 3 === 0 ? '1558642452-9d2a7deb7f62' : product.id % 3 === 1 ? '1606313564200-e75d5e31fcfd' : '1571875257727-256c48ca3172'}?w=200&h=300&fit=crop&q=80`}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* 3D Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
            style={{
              opacity: isHovered ? 0.6 : 0,
              transform: `translateX(${isHovered ? '100%' : '-100%'})`,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Product Details */}
        <div className="p-5 relative z-10">
          {/* Origin */}
          <p className="text-xs font-medium text-primary mb-2 flex items-center gap-1">
            <MapPin size={12} />
            {product.origin}
          </p>

          {/* Name */}
          <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {product.features.map((feature, i) => (
              <span
                key={i}
                className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-primary text-primary" />
              <span className="text-sm font-semibold">{product.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Size Selector */}
          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-2">Select Size:</p>
            <div className="grid grid-cols-4 gap-1.5">
              {sizeOptions.map((option, i) => (
                <button
                  key={option.size}
                  onClick={() => setSelectedSize(i)}
                  className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedSize === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground"
                  }`}
                >
                  {option.size}
                </button>
              ))}
            </div>
          </div>

          {/* Price & Action */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-foreground">₹{currentPrice}</span>
              <span className="text-sm text-muted-foreground line-through">
                ₹{currentOriginalPrice}
              </span>
            </div>
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className="bg-gradient-honey text-secondary-foreground hover:shadow-honey gap-1.5"
            >
              <ShoppingCart size={14} />
              Add
            </Button>
          </div>
        </div>
        
        {/* 3D Edge Highlight */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            boxShadow: isHovered 
              ? "inset 0 0 30px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.2)" 
              : "none",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 lg:py-20 section-light relative overflow-hidden">
      <FloatingIcons variant="light" />
      
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6"
          >
            <Leaf size={16} />
            Our Collection
          </motion.div>
          
          {/* Creative Typography Title */}
          <div className="relative max-w-3xl mx-auto mb-6">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-left"
              >
                <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-500 to-primary tracking-tight" style={{ WebkitTextStroke: '1px hsl(var(--primary))' }}>
                  Premium
                </span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center -mt-2 sm:-mt-4"
              >
                <span className="font-serif text-6xl sm:text-7xl lg:text-8xl font-black text-gradient-honey tracking-tighter">
                  HONEY
                </span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-right -mt-2"
              >
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-muted-foreground/80 tracking-wide">
                  from across
                </span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center mt-1"
              >
                <span className="relative inline-block">
                  <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black tracking-widest text-foreground">
                    INDIA
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-honey origin-left rounded-full"
                  />
                  <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-2xl opacity-60">✦</span>
                  <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-2xl opacity-60">✦</span>
                </span>
              </motion.div>
            </div>
          </div>

          <p className="text-muted-foreground text-lg">
            Each jar tells a story of nature's sweetness, carefully harvested from the finest regions.
          </p>
        </motion.div>

        {/* Products Grid with 3D Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Product3DCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="border-border hover:border-primary hover:bg-primary/5">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
