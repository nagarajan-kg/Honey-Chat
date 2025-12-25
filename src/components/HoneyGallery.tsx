import { motion } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import FloatingIcons from "./FloatingIcons";

const honeyImages = [
  { id: 1, name: "Raw Forest Honey", color: "from-amber-400 to-amber-600" },
  { id: 2, name: "Himalayan Honey", color: "from-yellow-400 to-amber-500" },
  { id: 3, name: "Wildflower Blend", color: "from-orange-400 to-amber-500" },
  { id: 4, name: "Tulsi Honey", color: "from-amber-500 to-yellow-500" },
  { id: 5, name: "Litchi Honey", color: "from-yellow-500 to-amber-600" },
  { id: 6, name: "Acacia Honey", color: "from-amber-300 to-yellow-500" },
  { id: 7, name: "Multiflora Honey", color: "from-amber-400 to-orange-500" },
  { id: 8, name: "Organic Raw", color: "from-yellow-400 to-amber-400" },
];

const HoneyGallery = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden relative">
      <FloatingIcons variant="light" />
      
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Sparkles size={16} />
            Our Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Explore Our <span className="text-gradient-honey">Honey Varieties</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover the rich diversity of pure Indian honey, each with its unique flavor profile
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Gallery */}
      <div className="relative overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container - CSS Animation for smoothness */}
        <motion.div
          className="flex gap-6 py-8"
          animate={{ x: [0, -1600] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...honeyImages, ...honeyImages, ...honeyImages].map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              whileHover={{ scale: 1.05, y: -10 }}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-elegant">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`} />
                
                {/* Honeycomb Pattern */}
                <div className="absolute inset-0 honeycomb-pattern opacity-10" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                  {/* Honey Jar Image Placeholder */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    className="w-48 h-64 rounded-2xl bg-white/20 backdrop-blur-sm mb-4 overflow-hidden shadow-lg"
                  >
                    <img 
                      src={`https://images.unsplash.com/photo-${index % 3 === 0 ? '1558642452-9d2a7deb7f62' : index % 3 === 1 ? '1606313564200-e75d5e31fcfd' : '1571875257727-256c48ca3172'}?w=200&h=300&fit=crop&q=80`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <h3 className="font-serif text-xl font-bold text-white drop-shadow-md">
                    {item.name}
                  </h3>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-secondary/80 backdrop-blur-sm flex items-center justify-center"
                  >
                    <div className="text-center text-secondary-foreground">
                      <div className="w-28 h-36 rounded-xl bg-primary/20 mx-auto mb-3 overflow-hidden">
                        <img 
                          src={`https://images.unsplash.com/photo-${index % 3 === 0 ? '1558642452-9d2a7deb7f62' : index % 3 === 1 ? '1606313564200-e75d5e31fcfd' : '1571875257727-256c48ca3172'}?w=150&h=200&fit=crop&q=80`}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="font-serif font-bold text-lg mb-2">{item.name}</p>
                      <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                        View Details
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HoneyGallery;
