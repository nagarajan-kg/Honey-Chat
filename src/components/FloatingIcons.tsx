import { motion } from "framer-motion";

interface FloatingIconsProps {
  variant?: "dark" | "light" | "cream";
}

const floatingElements = [
  { delay: 0, size: 16, x: "8%", y: "15%" },
  { delay: 0.8, size: 20, x: "92%", y: "12%" },
  { delay: 1.6, size: 14, x: "85%", y: "75%" },
  { delay: 2.4, size: 18, x: "12%", y: "80%" },
  { delay: 3.2, size: 12, x: "95%", y: "45%" },
  { delay: 4, size: 16, x: "5%", y: "50%" },
  { delay: 0.5, size: 10, x: "20%", y: "30%" },
  { delay: 1.2, size: 14, x: "75%", y: "25%" },
  { delay: 2, size: 12, x: "60%", y: "85%" },
  { delay: 2.8, size: 10, x: "35%", y: "60%" },
];

const FloatingIcons = ({ variant = "dark" }: FloatingIconsProps) => {
  const opacity = variant === "dark" ? "opacity-20" : "opacity-15";
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute ${opacity}`}
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [0, -12, 0],
            x: [0, 4, 0],
            rotate: [0, 6, -6, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          <div 
            className="rounded-full bg-gradient-honey overflow-hidden"
            style={{ width: el.size, height: el.size }}
          >
            <img
              src={`https://images.unsplash.com/photo-${i % 4 === 0 ? '1587049633312-d628ae50a8ae' : i % 4 === 1 ? '1558642452-9d2a7deb7f62' : i % 4 === 2 ? '1606313564200-e75d5e31fcfd' : '1571875257727-256c48ca3172'}?w=${el.size * 10}&h=${el.size * 10}&fit=crop&q=80`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
