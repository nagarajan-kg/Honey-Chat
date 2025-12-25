import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";
import FloatingIcons from "./FloatingIcons";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "The Himalayan honey is absolutely divine! My family has been using Golden Nectar for years now. The quality is consistently excellent.",
  },
  {
    id: 2,
    name: "Dr. Arun Gupta",
    location: "Delhi",
    rating: 5,
    text: "As a physician, I recommend Golden Nectar to all my patients. It's the only honey I trust for its purity and therapeutic benefits.",
  },
  {
    id: 3,
    name: "Meera Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "Best honey I've ever tasted! The Wild Forest variety has such a rich, complex flavor. Worth every rupee!",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    rating: 5,
    text: "Started using their Multiflora honey 3 years ago. The consistent quality and quick delivery keeps me coming back.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-20 section-light relative overflow-hidden">
      <FloatingIcons variant="light" />
      
      {/* Background */}
      <div className="absolute inset-0 honeycomb-pattern opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <Star size={16} className="fill-primary" />
            Customer Love
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-gradient-honey">Customers</span> Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of happy customers who have made Golden Nectar a part of their daily lives.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-7 shadow-card hover:shadow-elegant transition-all duration-500 border border-border relative overflow-hidden">
                <Quote className="absolute top-4 right-4 text-primary/10" size={48} />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-5 relative z-10">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-honey flex items-center justify-center shadow-honey overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${testimonial.id === 1 ? '1494790108377' : testimonial.id === 2 ? '1507003211169' : testimonial.id === 3 ? '1500648767791' : '1494790108755'}?w=100&h=100&fit=crop&q=80`}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-secondary text-secondary-foreground rounded-2xl shadow-elegant">
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
            <div className="text-left pl-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
                <span className="text-xl font-bold ml-2">4.9/5</span>
              </div>
              <div className="text-sm text-muted-foreground">Based on 10,000+ reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
