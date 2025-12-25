import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import HoneyGallery from "@/components/HoneyGallery";
import ProductsSection from "@/components/ProductsSection";
import AboutOwner from "@/components/AboutOwner";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import OffersSection from "@/components/OffersSection";
import Footer from "@/components/Footer";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms for different sections
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -30]);
  const galleryY = useTransform(scrollYProgress, [0.1, 0.25], [30, -20]);
  const productsY = useTransform(scrollYProgress, [0.2, 0.35], [20, -15]);
  const aboutY = useTransform(scrollYProgress, [0.3, 0.45], [25, -15]);
  const whyUsY = useTransform(scrollYProgress, [0.4, 0.55], [20, -10]);
  const testimonialsY = useTransform(scrollYProgress, [0.5, 0.65], [15, -10]);
  const faqY = useTransform(scrollYProgress, [0.6, 0.75], [15, -8]);
  const contactY = useTransform(scrollYProgress, [0.7, 0.85], [10, -5]);
  const offersY = useTransform(scrollYProgress, [0.8, 0.95], [10, -5]);

  return (
    <main ref={containerRef} className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <motion.div style={{ y: heroY }}>
        <HeroSlider />
      </motion.div>
      
      <motion.div style={{ y: galleryY }}>
        <HoneyGallery />
      </motion.div>
      
      <motion.div style={{ y: productsY }}>
        <ProductsSection />
      </motion.div>
      
      <motion.div style={{ y: aboutY }}>
        <AboutOwner />
      </motion.div>
      
      <motion.div style={{ y: whyUsY }}>
        <WhyChooseUs />
      </motion.div>
      
      <motion.div style={{ y: testimonialsY }}>
        <TestimonialsSection />
      </motion.div>
      
      <motion.div style={{ y: faqY }}>
        <FAQSection />
      </motion.div>
      
      <motion.div style={{ y: contactY }}>
        <ContactSection />
      </motion.div>
      
      <motion.div style={{ y: offersY }}>
        <OffersSection />
      </motion.div>
      
      <Footer />
    </main>
  );
};

export default Index;
