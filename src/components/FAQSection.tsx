import { motion } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";
import FloatingIcons from "./FloatingIcons";

const faqs = [
  {
    question: "What makes Golden Nectar honey different from regular honey?",
    answer: "Our honey is 100% raw, unprocessed, and ethically sourced from specific regions across India. We never heat-treat or filter our honey, preserving all natural enzymes, antioxidants, and health benefits. Each variety has unique characteristics based on its regional floral source."
  },
  {
    question: "How do I know if the honey is genuine and pure?",
    answer: "Every batch of Golden Nectar honey undergoes rigorous testing in FSSAI-approved laboratories. We provide authenticity certificates with each purchase, and our honey passes the water test, flame test, and crystallization test for purity verification."
  },
  {
    question: "Why does honey crystallize? Is it still good to consume?",
    answer: "Crystallization is a natural sign of pure, raw honey! It occurs due to the glucose content and doesn't affect quality or taste. Simply warm the jar in lukewarm water to restore its liquid form. Crystallized honey is perfectly safe and retains all its nutritional benefits."
  },
  {
    question: "What is the best way to store honey?",
    answer: "Store honey at room temperature in a dry place away from direct sunlight. Keep the lid tightly sealed to prevent moisture absorption. Raw honey has an indefinite shelf life when stored properly - it never truly spoils!"
  },
  {
    question: "Do you offer bulk orders for businesses?",
    answer: "Yes! We offer special pricing for bulk orders, corporate gifting, and B2B partnerships. Contact us directly for customized packaging and wholesale rates. We also provide white-label solutions for restaurants and wellness brands."
  },
  {
    question: "What is your return and refund policy?",
    answer: "We offer a 100% satisfaction guarantee. If you're not happy with your purchase for any reason, contact us within 7 days of delivery for a full refund or replacement. Quality issues are addressed immediately with no questions asked."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 section-light relative overflow-hidden">
      <FloatingIcons variant="light" />
      
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <HelpCircle size={16} />
            Frequently Asked
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Got <span className="text-gradient-honey">Questions?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our honey and services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <div
                className={`bg-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? "border-primary/30 shadow-card" 
                    : "border-border hover:border-primary/20"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className={`font-serif text-lg font-semibold transition-colors ${
                    openIndex === index ? "text-primary" : "text-foreground group-hover:text-primary"
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index 
                        ? "bg-gradient-honey text-secondary-foreground" 
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </motion.div>
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-honey text-secondary-foreground rounded-full font-semibold hover:shadow-honey transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
