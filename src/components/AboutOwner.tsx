import { motion } from "framer-motion";
import { Award, Users, Calendar, MapPin, Heart, Sparkles, Flower2, Sun } from "lucide-react";
import FloatingIcons from "./FloatingIcons";

const stats = [
  { icon: Calendar, value: "25+", label: "Years Legacy" },
  { icon: Users, value: "50K+", label: "Happy Families" },
  { icon: MapPin, value: "15+", label: "States Covered" },
  { icon: Award, value: "100%", label: "Pure Quality" },
];

const highlights = [
  { emoji: "🌸", text: "Hand-picked from meadows" },
  { emoji: "🐝", text: "Bee-friendly practices" },
  { emoji: "🌿", text: "100% Natural process" },
  { emoji: "💛", text: "Made with love" },
];

const AboutOwner = () => {
  return (
    <section id="about" className="py-24 lg:py-32 section-cream relative overflow-hidden">
      <FloatingIcons variant="cream" />
      
      {/* Soft Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full text-primary font-medium text-sm">
            <Heart size={16} className="fill-primary" />
            Our Beautiful Story
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Cute Illustration Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-card rounded-[2rem] p-8 shadow-elegant border border-border overflow-hidden">
              {/* Soft Pattern Background */}
              <div className="absolute inset-0 honeycomb-pattern opacity-30" />
              
              {/* Owner Avatar */}
              <div className="relative text-center mb-8">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative inline-block"
                >
                  {/* Glow Ring */}
                  <div className="absolute inset-0 bg-gradient-honey rounded-full blur-xl opacity-40 scale-110" />
                  
                  <div className="relative w-36 h-36 mx-auto rounded-full bg-gradient-honey flex items-center justify-center shadow-honey overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80" alt="Founder" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Decorative Bee Image */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full overflow-hidden"
                    style={{ transformOrigin: "50px 50px" }}
                  >
                    <img src="https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=100&h=100&fit=crop&q=80" alt="Bee" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>
                
                <h3 className="font-serif text-2xl font-bold text-foreground mt-4">Rajesh Sharma</h3>
                <p className="text-muted-foreground text-sm flex items-center justify-center gap-1 mt-1">
                  <Sparkles size={14} className="text-primary" />
                  Founder & Master Beekeeper
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 relative z-10">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-background/80 backdrop-blur-sm rounded-xl p-4 text-center border border-border hover:border-primary/30 transition-colors"
                  >
                    <span className="text-2xl mb-2 block">{item.emoji}</span>
                    <span className="text-xs text-muted-foreground font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -top-4 -right-4"
            >
              <div className="bg-gradient-honey p-4 rounded-2xl shadow-honey">
                <div className="flex items-center gap-2">
                  <Sun className="text-secondary-foreground" size={20} />
                  <span className="text-secondary-foreground font-bold text-sm">Since 1998</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-4 -left-4"
            >
              <div className="bg-secondary p-4 rounded-2xl shadow-elegant">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-gradient-honey">25+</span>
                  <span className="text-secondary-foreground/80 text-xs">Years Legacy</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              A Legacy of <span className="text-gradient-honey">Love & Purity</span>
            </h2>

            <div className="relative mb-8 pl-6 border-l-4 border-primary/30">
              <Flower2 className="absolute -left-4 top-0 text-primary bg-section-cream" size={24} />
              <p className="text-muted-foreground text-lg leading-relaxed italic">
                "My journey began in the valleys of Himachal Pradesh, where I learned 
                the ancient art of beekeeping from my grandfather. Every jar carries 
                25 years of passion, tradition, and the promise of pure goodness."
              </p>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              At Golden Nectar, we believe in preserving traditional beekeeping while embracing 
              sustainable practices. Our bees roam free in nature's most beautiful landscapes, 
              creating honey that's as pure as it is delicious. Every drop is a gift from nature, 
              carefully harvested to bring you the authentic taste of India.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-4 text-center border border-border hover:border-primary/30 hover:shadow-card transition-all"
                >
                  <stat.icon className="text-primary mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutOwner;
