import { motion } from "motion/react";
import { Star, Quote, Award } from "lucide-react";

const activities = [
  {
    image: "https://images.unsplash.com/photo-1690356107685-3725367f6f3f?w=600&h=400&fit=crop",
    title: "Electrical Workshop",
    description: "Hands-on training session"
  },
  {
    image: "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=600&h=400&fit=crop",
    title: "Solar Installation",
    description: "Practical learning experience"
  },
  {
    image: "https://images.unsplash.com/photo-1659353589241-f450b33f908a?w=600&h=400&fit=crop",
    title: "Safety Training",
    description: "Professional equipment handling"
  },
  {
    image: "https://images.unsplash.com/photo-1702128411190-5061e7756d5c?w=600&h=400&fit=crop",
    title: "Industrial Practice",
    description: "Real-world training"
  },
  {
    image: "https://images.unsplash.com/photo-1582638423482-a90640357638?w=600&h=400&fit=crop",
    title: "Group Learning",
    description: "Collaborative environment"
  },
  {
    image: "https://images.unsplash.com/photo-1660330589257-813305a4a383?w=600&h=400&fit=crop",
    title: "Rooftop Installation",
    description: "Solar panel training"
  },
];

export function BlueTestimonialSection() {
  return (
    <div className="py-28 bg-linear-to-b from-white via-[#EAF8FF]/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-5 py-2 bg-linear-to-r from-[#0066B3]/10 to-[#1BBE9B]/10 text-[#0066B3] rounded-full text-sm border border-[#0066B3]/20 font-medium">
              Student Activities
            </span>
          </motion.div>

          <h2 className="lg:text-[72px] text-[40px] font-nunito font-bold transition-colors  bg-linear-to-r from-primary to-tertiary bg-clip-text text-transparent drop-shadow-lg leading-[120%]">
            Workshop Moments & Team Learning
          </h2>
          <p className="text-[20px] font-normal font-inter text-[#0066B3] max-w-2xl mx-auto">
            Experience the vibrant learning environment at NextGen Academy
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Auto-scrolling Image Showcase */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -3200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          {[...activities, ...activities, ...activities].map((activity, index) => (
            <motion.div
              key={index}
              className="min-w-125 relative group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0066B3] via-[#0066B3]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#1BBE9B] rounded-full" />
                    <span className="text-sm text-white/90">{activity.description}</span>
                  </div>
                  <h3 className="text-3xl font-semibold">{activity.title}</h3>
                </div>

                {/* Glow Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    boxShadow: "0 0 40px rgba(26, 167, 209, 0.6)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pause instruction */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        
      </motion.div>
    </div>
  );
}
