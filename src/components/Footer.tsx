import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowUp, Heart, Leaf, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    products: [
      "Himalayan Raw Honey",
      "Wild Forest Honey",
      "Kashmir Acacia",
      "Multiflora Honey",
      "Tulsi Honey",
      "Litchi Honey",
    ],
    company: ["About Us", "Our Story", "Why Choose Us", "Testimonials", "Blog", "Careers"],
    support: ["Contact Us", "FAQs", "Shipping Policy", "Return Policy", "Track Order", "Bulk Orders"],
    legal: ["Privacy Policy", "Terms of Service", "Refund Policy", "Cookie Policy"],
  };

  const certifications = [
    { icon: Leaf, label: "100% Organic" },
    { icon: Award, label: "FSSAI Certified" },
    { icon: Shield, label: "Lab Tested" },
  ];

  return (
    <footer id="footer" className="relative overflow-hidden">
      {/* Wave Separator */}
      <div className="bg-background">
        <svg viewBox="0 0 1440 100" className="w-full h-16 fill-secondary" preserveAspectRatio="none">
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="bg-secondary text-secondary-foreground relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 honeycomb-pattern opacity-5" />
        
        {/* Decorative Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 relative z-10">
          {/* Top Section - Brand & Newsletter */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 pb-16 border-b border-primary/20">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-honey flex items-center justify-center shadow-honey">
                  <span className="text-2xl">🍯</span>
                </div>
                <div>
                  <span className="font-serif text-3xl font-bold block">
                    Honey <span className="text-primary">Chats</span>
                  </span>
                  <span className="text-sm text-muted-foreground">Premium Indian Honey</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bringing you the finest, purest honey from every corner of India since 1998. 
                Our commitment to quality and sustainability makes us India's most trusted honey brand.
              </p>
              
              {/* Certifications */}
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full"
                  >
                    <cert.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{cert.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:ml-auto lg:max-w-md"
            >
              <h3 className="font-serif text-2xl font-bold mb-4">Join Our Honey Club</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe for exclusive offers, honey recipes, and wellness tips delivered to your inbox.
              </p>
              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3.5 rounded-xl bg-background/10 border border-primary/20 text-secondary-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <Button variant="hero" size="lg" className="whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                </p>
              </form>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-serif text-lg font-bold mb-5 text-primary">Our Honey</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link}>
                    <a href="#products" className="text-muted-foreground hover:text-primary transition-colors text-sm group flex items-center gap-2">
                      <span className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-serif text-lg font-bold mb-5 text-primary">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm group flex items-center gap-2">
                      <span className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-serif text-lg font-bold mb-5 text-primary">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link}>
                    <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm group flex items-center gap-2">
                      <span className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-2 md:col-span-1 lg:col-span-2"
            >
              <h4 className="font-serif text-lg font-bold mb-5 text-primary">Get In Touch</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+9100000000" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-secondary-foreground">+91 00000000</div>
                      <div className="text-xs">Mon-Sat, 9AM-7PM</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@Honey Chats.in" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-secondary-foreground">hello@Honey Chats.in</div>
                      <div className="text-xs">We reply within 24 hours</div>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-secondary-foreground">123, Honey Lane</div>
                    <div className="text-xs">Shimla, HP - 171001</div>
                  </div>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {[
                  { Icon: Facebook, href: "#", label: "Facebook" },
                  { Icon: Instagram, href: "#", label: "Instagram" },
                  { Icon: Twitter, href: "#", label: "Twitter" },
                  { Icon: Youtube, href: "#", label: "Youtube" },
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4 py-8 border-t border-b border-primary/20"
          >
            <span className="text-sm text-muted-foreground mr-2">We Accept:</span>
            {["Visa", "Mastercard", "UPI", "PayTM", "PhonePe", "GPay"].map((method) => (
              <div
                key={method}
                className="px-4 py-2 bg-background/10 rounded-lg text-sm font-medium"
              >
                {method}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-secondary border-t border-primary/10">
          <div className="container mx-auto px-4 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground text-sm text-center md:text-left flex items-center gap-1">
                © 2024 Honey Chat. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India 🇮🇳
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                {footerLinks.legal.map((link) => (
                  <a key={link} href="#" className="hover:text-primary transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-2xl bg-gradient-honey shadow-honey flex items-center justify-center z-50 hover:shadow-elegant transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="text-secondary-foreground w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
