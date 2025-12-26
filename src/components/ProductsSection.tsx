import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Star,
  ShoppingCart,
  Leaf,
  Heart,
  MapPin,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, MouseEvent, useEffect } from "react";
import FloatingIcons from "./FloatingIcons";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

// Importing your local images from src/images
import TulsiImg from "../images/Tulsi.png";
import ManukaImg from "../images/Manuka.png";
import EucalyptusImg from "../images/Eucalyptus.png";
import AcaciaImg from "../images/Acacia.png";
import WildflowerImg from "../images/Wildflower.png";
import CloverImg from "../images/Clover.png";

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
    image: TulsiImg,
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
    image: WildflowerImg,
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
    image: AcaciaImg,
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
    image: CloverImg,
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
    image: EucalyptusImg,
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
    image: ManukaImg,
  },
];

// 3D Card Component
const Product3DCard = ({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(2); // Default 250ml
  const { addItem } = useCart();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const currentPrice = Math.round(
    product.basePrice * sizeOptions[selectedSize].priceMultiplier
  );
  const currentOriginalPrice = Math.round(
    product.originalPrice * sizeOptions[selectedSize].priceMultiplier
  );

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
      image: product.image,
    });
    toast.success(
      `${product.name} (${sizeOptions[selectedSize].size}) added to cart!`
    );
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
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />

        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
            {product.badge}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 z-10 p-2.5 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground shadow-sm"
        >
          <Heart size={16} />
        </motion.button>

        <div
          className={`relative h-52 bg-gradient-to-br ${product.color} flex items-center justify-center overflow-hidden`}
        >
          <motion.div
            animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl bg-white/30 backdrop-blur-sm shadow-lg overflow-hidden mx-auto cursor-pointer"
            style={{ width: "38%", aspectRatio: "3/4" }}
            onClick={() => {
              const event = new CustomEvent("openProductLightbox", {
                detail: { productId: product.id },
              });
              window.dispatchEvent(event);
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
            style={{
              opacity: isHovered ? 0.6 : 0,
              transform: `translateX(${isHovered ? "100%" : "-100%"})`,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="p-5 relative z-10">
          <p className="text-xs font-medium text-primary mb-2 flex items-center gap-1">
            <MapPin size={12} />
            {product.origin}
          </p>

          <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

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

          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-primary text-primary" />
              <span className="text-sm font-semibold">{product.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews} reviews)
            </span>
          </div>

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

          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-foreground">
                ₹{currentPrice}
              </span>
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(2);
  const { addItem } = useCart();

  useEffect(() => {
    const handleOpenLightbox = (e: CustomEvent) => {
      const productIndex = products.findIndex(
        (p) => p.id === e.detail.productId
      );
      if (productIndex !== -1) {
        setCurrentProductIndex(productIndex);
        setLightboxOpen(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      else if (e.key === "ArrowLeft") handlePrevious();
      else if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("openProductLightbox", handleOpenLightbox as EventListener);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("openProductLightbox", handleOpenLightbox as EventListener);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen]);

  const currentProduct = products[currentProductIndex];

  const currentPrice = currentProduct
    ? Math.round(currentProduct.basePrice * sizeOptions[selectedSize].priceMultiplier)
    : 0;
  const currentOriginalPrice = currentProduct
    ? Math.round(currentProduct.originalPrice * sizeOptions[selectedSize].priceMultiplier)
    : 0;

  const handleNext = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
    setSelectedSize(2);
  };

  const handlePrevious = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
    setSelectedSize(2);
  };

  const handleAddToCart = () => {
    if (currentProduct) {
      addItem({
        id: currentProduct.id,
        name: currentProduct.name,
        size: sizeOptions[selectedSize].size,
        price: currentPrice,
        image: currentProduct.image,
      });
      toast.success(`${currentProduct.name} (${sizeOptions[selectedSize].size}) added to cart!`);
    }
  };

  return (
    <section id="products" style={{  }} className="section-light relative overflow-hidden">
      <FloatingIcons variant="light" />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <Leaf size={16} /> Our Collection
          </div>

          <div className="relative max-w-3xl mx-auto mb-6">
            <div className="relative">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="text-left">
                <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-500 to-primary tracking-tight" style={{ WebkitTextStroke: "1px hsl(var(--primary))" }}>Premium</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="text-center -mt-2 sm:-mt-4">
                <span className="font-serif text-6xl sm:text-7xl lg:text-8xl font-black text-gradient-honey tracking-tighter">HONEY</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="text-right -mt-2">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-muted-foreground/80 tracking-wide">from across</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="text-center mt-1">
                <span className="relative inline-block">
                  <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black tracking-widest text-foreground">INDIA</span>
                  <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.5 }} className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-honey origin-left rounded-full" />
                </span>
              </motion.div>
            </div>
          </div>
          <p className="text-muted-foreground text-lg">Each jar tells a story of nature's sweetness, carefully harvested from the finest regions.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Product3DCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-border hover:border-primary hover:bg-primary/5">View All Products</Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxOpen && currentProduct && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100]" onClick={() => setLightboxOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="fixed inset-4 md:inset-8 lg:inset-16 z-[101] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-card rounded-3xl shadow-elegant border border-border overflow-hidden flex flex-col lg:flex-row">
                <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"><X size={24} /></button>
                <div className="relative flex-1 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8 lg:p-12">
                  <motion.img key={currentProduct.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} src={currentProduct.image} alt={currentProduct.name} className="max-w-full max-h-[60vh] lg:max-h-[80vh] object-contain rounded-2xl shadow-2xl" />
                  <button onClick={handlePrevious} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground transition-colors"><ChevronLeft size={24} /></button>
                  <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground transition-colors"><ChevronRight size={24} /></button>
                </div>
                <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
                  <div className="mb-4"><span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">{currentProduct.badge}</span></div>
                  <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-2">{currentProduct.name}</h2>
                  <p className="text-sm font-medium text-primary mb-4 flex items-center gap-1"><MapPin size={14} /> {currentProduct.origin}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Star size={18} className="fill-primary text-primary" /><span className="text-lg font-semibold">{currentProduct.rating}</span>
                    <span className="text-sm text-muted-foreground">({currentProduct.reviews} reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentProduct.features.map((f, i) => <span key={i} className="text-sm px-3 py-1 bg-muted rounded-full text-muted-foreground">{f}</span>)}
                  </div>
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-3">Select Size:</p>
                    <div className="grid grid-cols-4 gap-2">
                      {sizeOptions.map((opt, i) => (
                        <button key={opt.size} onClick={() => setSelectedSize(i)} className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${selectedSize === i ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}>{opt.size}</button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-6 pt-4 border-t border-border">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">₹{currentPrice}</span>
                      <span className="text-lg text-muted-foreground line-through">₹{currentOriginalPrice}</span>
                    </div>
                  </div>
                  <Button size="lg" onClick={handleAddToCart} className="w-full bg-gradient-honey text-secondary-foreground hover:shadow-honey gap-2"><ShoppingCart size={18} /> Add to Cart</Button>
                  <div className="mt-4 text-center text-sm text-muted-foreground">{currentProductIndex + 1} of {products.length}</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsSection;