import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ShoppingBag, Search, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const honeyProducts = [
  { name: "Himalayan Raw Honey", href: "#products" },
  { name: "Wild Forest Honey", href: "#products" },
  { name: "Kashmir Acacia Honey", href: "#products" },
  { name: "Multiflora Honey", href: "#products" },
  { name: "Tulsi Infused Honey", href: "#products" },
  { name: "Litchi Honey", href: "#products" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const { items, totalItems, totalPrice, removeItem } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products", hasDropdown: true },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const filteredProducts = honeyProducts.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
    setIsSearchOpen(false);
    setIsCartOpen(false);
    
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      if (href === "#home" || href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (href === "#footer") {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      } else {
        const element = document.querySelector(href);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }, 100);
  };

  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen || isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isSearchOpen, isCartOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-xl shadow-elegant py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-honey flex items-center justify-center shadow-honey">
              <span className="text-lg">🍯</span>
            </div>
            <span className="font-serif text-xl font-bold text-primary">
              Honey Chats
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <motion.a
                      href={link.href}
                      className="relative px-4 py-2 text-sm font-medium text-primary transition-colors duration-300 rounded-lg hover:bg-primary/10 flex items-center gap-2"
                      whileHover={{ y: -1 }}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={14} className={`transition-transform text-primary ${isProductsOpen ? "rotate-180" : ""}`} />
                    </motion.a>
                    
                    {/* Products Dropdown */}
                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-card rounded-2xl shadow-elegant border border-border overflow-hidden"
                        >
                          <div className="p-4">
                            <a
                              href="#products"
                              className="flex items-center gap-3 p-3 rounded-xl bg-gradient-honey text-secondary-foreground font-semibold mb-3 hover:shadow-honey transition-shadow"
                            >
                              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=100&h=100&fit=crop&q=80" alt="" className="w-full h-full object-cover" />
                              </div>
                              <span>View All Products</span>
                            </a>
                            <div className="space-y-1">
                              {honeyProducts.map((product) => (
                                <a
                                  key={product.name}
                                  href={product.href}
                                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted transition-colors group"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden group-hover:bg-primary/20 transition-colors">
                                    <img src={`https://images.unsplash.com/photo-${honeyProducts.indexOf(product) % 3 === 0 ? '1558642452-9d2a7deb7f62' : honeyProducts.indexOf(product) % 3 === 1 ? '1606313564200-e75d5e31fcfd' : '1571875257727-256c48ca3172'}?w=100&h=100&fit=crop&q=80`} alt="" className="w-full h-full object-cover" />
                                  </div>
                                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                                    {product.name}
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.a
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-primary transition-colors duration-300 rounded-lg hover:bg-primary/10"
                    whileHover={{ y: -1 }}
                  >
                    {link.name}
                  </motion.a>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2.5 rounded-xl hover:bg-primary/5 transition-colors"
              >
                <Search size={18} className="text-primary" />
              </motion.button>
              
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 250 }}
                    exit={{ opacity: 0, width: 0 }}
                    className="absolute right-0 top-full mt-2 bg-card rounded-xl shadow-elegant border border-border overflow-hidden"
                  >
                    <input
                      ref={searchRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search honey..."
                      className="w-full px-4 py-3 bg-transparent outline-none text-sm"
                    />
                    {searchQuery && (
                      <div className="border-t border-border max-h-60 overflow-y-auto">
                        {filteredProducts.length > 0 ? (
                          filteredProducts.map((product) => (
                            <a
                              key={product.name}
                              href={product.href}
                              className="flex items-center gap-3 p-3 hover:bg-muted transition-colors"
                              onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                            >
                              <div className="w-8 h-8 rounded-lg bg-primary/10 overflow-hidden">
                                <img src={`https://images.unsplash.com/photo-${honeyProducts.indexOf(product) % 3 === 0 ? '1558642452-9d2a7deb7f62' : honeyProducts.indexOf(product) % 3 === 1 ? '1606313564200-e75d5e31fcfd' : '1571875257727-256c48ca3172'}?w=100&h=100&fit=crop&q=80`} alt="" className="w-full h-full object-cover" />
                              </div>
                              <span className="text-sm">{product.name}</span>
                            </a>
                          ))
                        ) : (
                          <p className="p-3 text-sm text-muted-foreground">No products found</p>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl hover:bg-primary/5 transition-colors"
            >
              <User size={18} className="text-primary" />
            </motion.button>

            {/* Cart */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="p-2.5 rounded-xl hover:bg-primary/5 transition-colors relative"
              >
                <ShoppingBag size={18} className="text-primary" />
                <motion.span
                  key={totalItems}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {isCartOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 w-80 bg-card rounded-2xl shadow-elegant border border-border overflow-hidden"
                  >
                    <div className="p-4 border-b border-border">
                      <h3 className="font-semibold">Your Cart ({totalItems})</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {items.length > 0 ? (
                        items.map((item) => (
                          <div key={`${item.id}-${item.size}`} className="flex items-center gap-3 p-3 border-b border-border/50">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 overflow-hidden">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{item.name}</p>
                              <p className="text-xs text-muted-foreground">{item.size} × {item.quantity}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-semibold">₹{item.price * item.quantity}</p>
                              <button
                                onClick={() => removeItem(item.id, item.size)}
                                className="text-xs text-destructive hover:underline"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="p-6 text-center text-muted-foreground text-sm">Your cart is empty</p>
                      )}
                    </div>
                    {items.length > 0 && (
                      <div className="p-4 border-t border-border">
                        <div className="flex justify-between mb-3">
                          <span className="text-muted-foreground">Total:</span>
                          <span className="font-bold">₹{totalPrice}</span>
                        </div>
                        <Button className="w-full bg-gradient-honey text-secondary-foreground">
                          Checkout
                        </Button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-px h-6 bg-border mx-2" />

            {/* Phone */}
            <a href="tel:+9100000000" className="flex items-center gap-2 text-sm text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/10">
              <Phone size={16} />
              <span className="font-medium">+91 00000000</span>
            </a>

            <Button className="bg-gradient-honey text-secondary-foreground hover:shadow-honey transition-all font-semibold">
              Order Now
            </Button>
          </div>

          {/* Mobile Actions - Search & Cart */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 rounded-xl hover:bg-primary/5 transition-colors"
            >
              <Search size={20} className="text-primary" />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="p-2.5 rounded-xl hover:bg-primary/5 transition-colors relative"
              >
                <ShoppingBag size={20} className="text-primary" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <AnimatePresence>
                {isCartOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="fixed inset-x-4 top-20 bg-card rounded-2xl shadow-elegant border border-border overflow-hidden z-50 max-h-[70vh] flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-4 border-b border-border flex items-center justify-between">
                      <h3 className="font-semibold">Your Cart ({totalItems})</h3>
                      <button onClick={() => setIsCartOpen(false)} className="text-muted-foreground hover:text-foreground">
                        <X size={20} />
                      </button>
                    </div>
                    <div className="overflow-y-auto flex-1">
                      {items.length > 0 ? (
                        items.map((item) => (
                          <div key={`${item.id}-${item.size}`} className="flex items-center gap-3 p-3 border-b border-border/50">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 overflow-hidden">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{item.name}</p>
                              <p className="text-xs text-muted-foreground">{item.size} × {item.quantity}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-semibold">₹{item.price * item.quantity}</p>
                              <button
                                onClick={() => removeItem(item.id, item.size)}
                                className="text-xs text-destructive hover:underline"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="p-6 text-center text-muted-foreground text-sm">Your cart is empty</p>
                      )}
                    </div>
                    {items.length > 0 && (
                      <div className="p-4 border-t border-border">
                        <div className="flex justify-between mb-3">
                          <span className="text-muted-foreground">Total:</span>
                          <span className="font-bold">₹{totalPrice}</span>
                        </div>
                        <Button className="w-full bg-gradient-honey text-secondary-foreground" onClick={() => setIsCartOpen(false)}>
                          Checkout
                        </Button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              className="p-2.5 rounded-xl bg-primary/10 text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {(isMobileMenuOpen || isSearchOpen || isCartOpen) && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsSearchOpen(false);
            setIsCartOpen(false);
          }}
        />
      )}

      {/* Mobile Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-x-4 top-20 bg-card rounded-2xl shadow-elegant border border-border z-50 overflow-hidden"
          >
            <div className="p-4 border-b border-border flex items-center gap-2">
              <Search className="text-primary" size={20} />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search honey..."
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <button onClick={() => setIsSearchOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
            </div>
            {searchQuery && (
              <div className="max-h-60 overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <a
                      key={product.name}
                      href={product.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsSearchOpen(false);
                        setSearchQuery("");
                        handleNavClick(product.href);
                      }}
                      className="flex items-center gap-3 p-3 hover:bg-muted transition-colors border-b border-border/50"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 overflow-hidden">
                        <img src={`https://images.unsplash.com/photo-${honeyProducts.indexOf(product) % 3 === 0 ? '1558642452-9d2a7deb7f62' : honeyProducts.indexOf(product) % 3 === 1 ? '1606313564200-e75d5e31fcfd' : '1571875257727-256c48ca3172'}?w=100&h=100&fit=crop&q=80`} alt="" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-sm">{product.name}</span>
                    </a>
                  ))
                ) : (
                  <p className="p-3 text-sm text-muted-foreground">No products found</p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border shadow-elegant z-50 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                link.hasDropdown ? (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                      className="text-base font-medium text-primary hover:text-primary/80 hover:bg-primary/5 py-3 px-4 rounded-xl transition-colors flex items-center justify-between w-full"
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={18} className={`transition-transform text-primary ${isMobileProductsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isMobileProductsOpen && (
                      <div className="pl-4 mt-2 space-y-1">
                        <a
                          href="#products"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("#products");
                          }}
                          className="block py-2 px-4 rounded-lg hover:bg-primary/5 text-sm text-primary"
                        >
                          View All Products
                        </a>
                        {honeyProducts.map((product) => (
                          <a
                            key={product.name}
                            href={product.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(product.href);
                            }}
                            className="block py-2 px-4 rounded-lg hover:bg-primary/5 text-sm text-primary"
                          >
                            {product.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-base font-medium text-primary hover:text-primary/80 hover:bg-primary/5 py-3 px-4 rounded-xl transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                  </motion.a>
                )
              ))}
              <div className="pt-4 mt-2 border-t border-border flex flex-col gap-3">
                <a href="tel:+9100000000" className="flex items-center justify-center gap-2 text-foreground/70 py-3">
                  <Phone size={18} />
                  <span>+91 00000000</span>
                </a>
                <Button className="w-full bg-gradient-honey text-secondary-foreground font-semibold">
                  Order Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
