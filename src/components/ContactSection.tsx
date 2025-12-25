import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FloatingIcons from "./FloatingIcons";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = [
    { icon: Phone, title: "Call Us", details: ["+91 98765 43210", "+91 12345 67890"] },
    { icon: Mail, title: "Email Us", details: ["hello@Honey Chats.in", "support@Honey Chats.in"] },
    { icon: MapPin, title: "Visit Us", details: ["123, Honey Lane, Shimla", "Himachal Pradesh - 171001"] },
    { icon: Clock, title: "Business Hours", details: ["Mon - Sat: 9AM - 7PM", "Sunday: 10AM - 5PM"] },
  ];

  return (
    <section id="contact" className="py-16 lg:py-20 section-cream relative overflow-hidden">
      <FloatingIcons variant="cream" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Premium Contact Intro Card */}
          <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-3xl p-8 lg:p-10 border border-primary/20 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-background/80 backdrop-blur rounded-full text-primary text-sm font-semibold mb-5 shadow-card border border-primary/20"
              >
                <MessageCircle className="w-4 h-4" />
                Get In Touch
              </motion.div>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                We'd Love to{" "}
                <span className="relative inline-block">
                  <span className="text-gradient-honey">Hear From You</span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-honey rounded-full origin-left"
                  />
                </span>
              </h2>
              
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Have questions about our honey? Want to place a bulk order? We're here to help!
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card p-5 rounded-2xl shadow-card border border-border hover:shadow-elegant transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-3xl shadow-elegant border border-border"
            >
              <h3 className="font-serif text-2xl font-bold mb-5">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    required
                  />
                </div>
                <Button size="lg" className="w-full bg-gradient-honey text-secondary-foreground hover:shadow-honey">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.123456789!2d77.1734!3d31.1048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDA2JzE3LjMiTiA3N8KwMTAnMjQuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Golden Nectar Location"
                  />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-md p-4 rounded-2xl shadow-elegant border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-honey flex items-center justify-center flex-shrink-0 shadow-honey">
                      <MapPin className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif font-bold text-lg mb-1">Golden Nectar Honey</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        123, Honey Lane, Shimla, HP - 171001
                      </p>
                      <a
                        href="https://maps.google.com/?q=31.1048,77.1734"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* WhatsApp & Call Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-5">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-secondary text-secondary-foreground rounded-2xl font-medium hover:bg-secondary/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-honey text-secondary-foreground rounded-2xl font-medium hover:shadow-honey transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
