import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Sparkles, Play, Star, Check, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingIcons from "./FloatingIcons";

const slides = [
  {
    id: 1,
    titleLine1: "Pure",
    titleLine2: "Himalayan",
    titleLine3: "Honey",
    description: "Harvested from pristine valleys at 10,000 feet",
    badge: "Bestseller",
    origin: "Himalaya",
  },
  {
    id: 2,
    titleLine1: "Wild",
    titleLine2: "Forest",
    titleLine3: "Nectar",
    description: "Untouched by machinery, pure liquid gold",
    badge: "100% Natural",
    origin: "Western Ghats",
  },
  {
    id: 3,
    titleLine1: "Kashmir",
    titleLine2: "Acacia",
    titleLine3: "Gold",
    description: "The golden treasure of Kashmir's orchards",
    badge: "Premium",
    origin: "Kashmir",
  },
];

const quantityOptions = [
  { size: "50 ml", price: "₹299", popular: false },
  { size: "100 ml", price: "₹499", popular: false },
  { size: "250 ml", price: "₹899", popular: true },
  { size: "500 ml", price: "₹1,499", popular: false },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden section-dark pt-28 lg:pt-32">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&h=800&fit=crop&q=80')`,
          opacity: 0.15
        }}
      />
      
      {/* Floating Decorative Icons */}
      <FloatingIcons variant="dark" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Honey Drips from Top */}
      <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-2 rounded-b-full"
            style={{ 
              left: `${15 + i * 15}%`,
              background: 'linear-gradient(180deg, hsl(38 80% 50% / 0.6), hsl(38 80% 50% / 0.1))'
            }}
            animate={{
              height: [0, 80 + Math.random() * 40, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          
          {/* Left Side - Content */}
          <div className="relative z-20 pt-8 lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 mb-6"
                >
                  <span className="px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary tracking-wide">
                        {slides[currentSlide].badge}
                      </span>
                    </span>
                  </span>
                  <span className="text-sm text-muted-foreground">
                    From {slides[currentSlide].origin}
                  </span>
                </motion.div>

                {/* Title */}
                <div className="space-y-0 mb-6">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="overflow-hidden"
                  >
                    <span className="block font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-secondary-foreground/90 tracking-tight">
                      {slides[currentSlide].titleLine1}
                    </span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="overflow-hidden pl-4 lg:pl-8"
                  >
                    <span className="block font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-gradient-honey tracking-tight">
                      {slides[currentSlide].titleLine2}
                    </span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="overflow-hidden relative inline-block pb-4"
                  >
                    <span className="block font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-foreground/80 tracking-tight">
                      {slides[currentSlide].titleLine3}
                    </span>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-honey origin-left rounded-full"
                    />
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg sm:text-xl text-muted-foreground max-w-md leading-relaxed mb-6"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Quantity Selector */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                  className="mb-6"
                >
                  <p className="text-sm text-muted-foreground mb-3">Select Size</p>
                  <div className="flex flex-wrap gap-3">
                    {quantityOptions.map((option, index) => (
                      <motion.button
                        key={option.size}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedQuantity(index)}
                        className={`relative px-5 py-3 rounded-2xl border-2 transition-all duration-300 ${
                          selectedQuantity === index
                            ? "border-primary bg-primary/10 shadow-honey"
                            : "border-secondary-foreground/20 hover:border-primary/50 bg-secondary/30"
                        }`}
                      >
                        {option.popular && (
                          <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-honey text-secondary-foreground text-[10px] font-bold rounded-full">
                            POPULAR
                          </span>
                        )}
                        <div className="text-center">
                          <span className={`block font-semibold ${
                            selectedQuantity === index ? "text-primary" : "text-secondary-foreground"
                          }`}>
                            {option.size}
                          </span>
                          <span className={`text-sm ${
                            selectedQuantity === index ? "text-primary/80" : "text-muted-foreground"
                          }`}>
                            {option.price}
                          </span>
                        </div>
                        {selectedQuantity === index && (
                          <motion.div
                            layoutId="selected-quantity"
                            className="absolute inset-0 border-2 border-primary rounded-2xl"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-honey text-secondary-foreground hover:shadow-honey transition-all h-14 px-8 text-base font-semibold group"
                  >
                    Explore Collection
                    <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/5 h-14 px-8 text-base"
                  >
                    <Play className="mr-2 w-4 h-4" />
                    Watch Story
                  </Button>
                </motion.div>

                {/* Trust Row - Customer Avatars */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex items-center gap-6 py-8 mt-4 border-t border-secondary-foreground/10"
                >
                  <div className="flex -space-x-2">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-primary/60 ring-2 ring-secondary flex items-center justify-center overflow-hidden"
                      >
                        <User className="w-5 h-5 text-secondary-foreground" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-primary font-bold">
                      <Star className="w-4 h-4 fill-primary" />
                      4.9/5
                    </div>
                    <div className="text-sm text-muted-foreground">10,000+ Happy Customers</div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Premium Honey Display */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Glowing Background */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl"
              />

              {/* Hexagon Frame */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 400 400" className="w-full h-full opacity-30">
                  <polygon
                    points="200,20 370,110 370,290 200,380 30,290 30,110"
                    fill="none"
                    stroke="url(#hexGrad)"
                    strokeWidth="1"
                    strokeDasharray="20 10"
                  />
                  <defs>
                    <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(38 80% 50%)" />
                      <stop offset="100%" stopColor="hsl(45 90% 60%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Center Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-square flex items-center justify-center"
                >
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-center"
                  >
                    {/* Honey Jar Image Placeholder */}
                    <div className="w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80 rounded-3xl bg-gradient-honey shadow-honey flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=600&fit=crop&q=80" 
                        alt="Honey Jar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-4 px-6 py-2 bg-secondary/90 backdrop-blur-sm rounded-full inline-block"
                    >
                      <span className="font-serif font-bold text-lg text-secondary-foreground">
                        {slides[currentSlide].origin}
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-1/4 -left-4 sm:left-0 glass-dark p-3 rounded-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-honey flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1571875257727-256c48ca3172?w=100&h=100&fit=crop&q=80" alt="Pure" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">100% Pure</div>
                    <div className="font-semibold text-sm text-secondary-foreground">No Additives</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-1/4 -right-4 sm:right-0 glass-dark p-3 rounded-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-honey flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1606313564200-e75d5e31fcfd?w=100&h=100&fit=crop&q=80" alt="Award" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Award</div>
                    <div className="font-semibold text-sm text-secondary-foreground">Best Quality</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-gradient-honey"
                : "w-2 bg-secondary-foreground/30 hover:bg-secondary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
