import { motion } from "framer-motion";
import { Shield, Leaf, Award, Truck, Heart, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import FloatingIcons from "./FloatingIcons";

const features = [
  {
    icon: Shield,
    title: "100% Pure & Natural",
    description: "Every drop tested and certified. No additives, no preservatives.",
  },
  {
    icon: Leaf,
    title: "Ethically Sourced",
    description: "Fair trade practices with local beekeepers across India.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Cold-extracted to preserve natural enzymes and vitamins.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description: "Fast, secure delivery to your doorstep anywhere in India.",
  },
  {
    icon: Heart,
    title: "Customer Happiness",
    description: "Over 50,000 happy customers trust Honey Chat.",
  },
  {
    icon: Sparkles,
    title: "Lab Tested",
    description: "Every batch tested in FSSAI approved labs.",
  },
];

const honeyOrigins = [
  { name: "Himalaya", x: "35%", y: "20%", specialty: "Mountain Honey" },
  { name: "Kashmir", x: "28%", y: "25%", specialty: "Acacia Honey" },
  { name: "Western Ghats", x: "25%", y: "65%", specialty: "Forest Honey" },
  { name: "Rajasthan", x: "30%", y: "45%", specialty: "Multiflora" },
  { name: "Bihar", x: "60%", y: "40%", specialty: "Litchi Honey" },
  { name: "Madhya Pradesh", x: "45%", y: "50%", specialty: "Tulsi Honey" },
];

const certifications = [
  { label: "FSSAI Certified", desc: "Food Safety Standard" },
  { label: "ISO 22000", desc: "Quality Management" },
  { label: "Organic India", desc: "Certified Organic" },
  { label: "4.9/5 Rating", desc: "Customer Reviews" },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 lg:py-20 section-dark relative overflow-hidden">
      <FloatingIcons variant="dark" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary font-medium text-sm mb-6">
            <Award size={16} />
            Why Honey Chat
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-secondary-foreground">
            The <span className="text-gradient-honey">Golden Standard</span> of Honey
          </h2>
          <p className="text-muted-foreground text-lg">
            What makes us India's most trusted honey brand? Here's why thousands choose Honey Chat.
          </p>
        </motion.div>

        {/* Map Board Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="relative bg-gradient-to-br from-amber-900/40 to-amber-950/60 rounded-3xl p-6 lg:p-10 border border-primary/20 overflow-hidden shadow-glow">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary/20 rounded-full mb-4">
                <MapPin className="text-primary" size={18} />
                <span className="text-primary font-semibold">Origin Map</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-secondary-foreground">
                Sourced from India's Finest Regions
              </h3>
            </div>

            {/* Map Container */}
            <div className="relative aspect-[16/10] max-w-4xl mx-auto">
              {/* Simplified India Map Shape */}
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 absolute inset-0">
                <path
                  d="M30,10 Q50,5 70,15 Q85,25 80,50 Q75,75 60,90 Q40,95 25,80 Q15,60 20,40 Q25,20 30,10 Z"
                  fill="none"
                  stroke="hsl(38 80% 50%)"
                  strokeWidth="0.5"
                />
              </svg>

              {/* Origin Points */}
              {honeyOrigins.map((origin, index) => (
                <motion.div
                  key={origin.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring" }}
                  className="absolute group cursor-pointer"
                  style={{ left: origin.x, top: origin.y }}
                >
                  {/* Pulse Ring */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-primary/30 rounded-full"
                  />
                  
                  {/* Point */}
                  <div className="relative w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-gradient-honey rounded-full shadow-honey border-2 border-secondary" />
                  
                  {/* Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-10">
                    <div className="glass-dark px-4 py-2 rounded-xl whitespace-nowrap text-center">
                      <div className="font-semibold text-secondary-foreground text-sm">{origin.name}</div>
                      <div className="text-xs text-primary">{origin.specialty}</div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {honeyOrigins.map((origin, i) => (
                  <motion.line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={origin.x}
                    y2={origin.y}
                    stroke="hsl(38 80% 50% / 0.2)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  />
                ))}
              </svg>

              {/* Center Logo */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-honey flex items-center justify-center shadow-honey overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&h=200&fit=crop&q=80" alt="Logo" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {honeyOrigins.slice(0, 4).map((origin) => (
                <div key={origin.name} className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>{origin.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features - Infinite Scroll */}
        <div className="mb-14 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[hsl(0,0%,6%)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[hsl(0,0%,6%)] to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1800] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...features, ...features, ...features].map((feature, index) => (
              <div
                key={`${feature.title}-${index}`}
                className="flex-shrink-0 w-[320px] group"
              >
                <div className="h-full glass rounded-2xl p-6 hover:bg-primary/5 transition-all duration-300 border border-primary/10 hover:border-primary/30">
                  <div className="w-12 h-12 rounded-xl bg-gradient-honey flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-honey">
                    <feature.icon className="text-secondary-foreground" size={24} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-secondary-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Certifications - Glassmorphism Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-secondary-foreground">
              Trusted & <span className="text-gradient-honey">Certified</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-5 text-center border border-primary/10 hover:border-primary/30 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-honey flex items-center justify-center shadow-honey overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1606313564200-e75d5e31fcfd' : '1571875257727-256c48ca3172'}?w=100&h=100&fit=crop&q=80`} alt={cert.label} className="w-full h-full object-cover" />
                </div>
                <div className="font-bold text-primary mb-1 group-hover:text-primary transition-colors">
                  {cert.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {cert.desc}
                </div>
                <CheckCircle2 className="w-4 h-4 text-primary mx-auto mt-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
