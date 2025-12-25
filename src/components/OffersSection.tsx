import { motion, AnimatePresence } from "framer-motion";
import { Tag, Gift, X, ShoppingCart, Sparkles, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FloatingIcons from "./FloatingIcons";

const offers = [
  {
    id: 1,
    title: "Buy 2 Get 1 Free",
    description: "On all Himalayan Honey variants",
    discount: "33% OFF",
    validTill: "Dec 31, 2025",
    code: "HONEY3FOR2",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 2,
    title: "First Order Discount",
    description: "Flat ₹200 off on your first purchase",
    discount: "₹200 OFF",
    validTill: "Limited Time",
    code: "WELCOME200",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    title: "Bulk Order Special",
    description: "Order 5kg or more and save big",
    discount: "25% OFF",
    validTill: "Ongoing",
    code: "BULK25",
    color: "from-purple-500 to-pink-600",
  },
];

const OffersSection = () => {
  const [selectedOffer, setSelectedOffer] = useState<typeof offers[0] | null>(null);

  return (
    <section className="py-16 lg:py-20 section-dark relative overflow-hidden">
      <FloatingIcons variant="dark" />
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary font-medium text-sm mb-4">
            <Gift size={16} />
            Special Offers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            Sweet <span className="text-gradient-honey">Deals</span> For You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Grab these exclusive offers and save on your favorite honey products
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedOffer(offer)}
              className="cursor-pointer group"
            >
              <div className="relative bg-card/10 backdrop-blur-sm rounded-3xl p-6 border border-primary/20 hover:border-primary/40 transition-all overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                />
                
                {/* Floating Honey Image */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-4 right-4 w-16 h-20 rounded-xl bg-primary/20 overflow-hidden"
                >
                  <img src={`https://images.unsplash.com/photo-${offer.id % 3 === 0 ? '1558642452-9d2a7deb7f62' : offer.id % 3 === 1 ? '1606313564200-e75d5e31fcfd' : '1571875257727-256c48ca3172'}?w=150&h=200&fit=crop&q=80`} alt="Honey" className="w-full h-full object-cover" />
                </motion.div>

                <div className="relative z-10">
                  {/* Discount Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r ${offer.color} rounded-full text-white text-sm font-bold mb-4`}>
                    <Percent size={14} />
                    {offer.discount}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-secondary-foreground mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {offer.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium">
                      Valid: {offer.validTill}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Click to claim
                    </span>
                  </div>
                </div>

                {/* Sparkle Effect */}
                <Sparkles className="absolute bottom-4 right-4 text-primary/30 group-hover:text-primary/60 transition-colors" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Offer Modal */}
      <AnimatePresence>
        {selectedOffer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedOffer(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-3xl p-8 max-w-md w-full relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedOffer(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Content */}
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-24 mx-auto mb-6 rounded-2xl bg-gradient-honey overflow-hidden shadow-honey"
                >
                  <img src={`https://images.unsplash.com/photo-${selectedOffer.id % 3 === 0 ? '1558642452-9d2a7deb7f62' : selectedOffer.id % 3 === 1 ? '1606313564200-e75d5e31fcfd' : '1571875257727-256c48ca3172'}?w=200&h=250&fit=crop&q=80`} alt="Honey" className="w-full h-full object-cover" />
                </motion.div>

                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${selectedOffer.color} rounded-full text-white font-bold mb-4`}>
                  <Tag size={16} />
                  {selectedOffer.discount}
                </div>

                <h3 className="font-serif text-2xl font-bold mb-2">{selectedOffer.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedOffer.description}</p>

                <div className="bg-muted/50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Use Code:</p>
                  <p className="font-mono text-lg font-bold text-primary">{selectedOffer.code}</p>
                </div>

                <Button className="w-full bg-gradient-honey text-secondary-foreground hover:shadow-honey gap-2">
                  <ShoppingCart size={18} />
                  Shop Now & Apply Offer
                </Button>

                <p className="text-xs text-muted-foreground mt-4">
                  Valid till: {selectedOffer.validTill}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OffersSection;
