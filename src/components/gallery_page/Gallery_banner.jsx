import React from 'react'
import Container from '../../container/Container'
import { motion } from "motion/react";
import { Zap, Sun, ArrowRight, Sparkles, Award } from "lucide-react";

const Gallery_banner = () => {
  return (
    <>
   
             <section className="relative lg:py-30 py-10 mt-10 flex items-center justify-center overflow-hidden bg-linear-to-br from-[#EAF8FF] via-white to-[#EAF8FF]">
        <Container>
      {/* Wave Background */}
      <div className="absolute inset-0">
        <svg className="absolute bottom-0 w-full h-auto" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="url(#wave-gradient)"
            fillOpacity="0.3"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066B3" />
              <stop offset="50%" stopColor="#1AA7D1" />
              <stop offset="100%" stopColor="#1BBE9B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Energy Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              background: `linear-gradient(135deg, ${
                i % 3 === 0 ? '#0066B3' : i % 3 === 1 ? '#1AA7D1' : '#1BBE9B'
              }20, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-[10%]"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="p-4 bg-white/40 backdrop-blur-lg rounded-2xl shadow-xl">
          <Zap className="w-12 h-12 text-[#0066B3]" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-40 right-[15%]"
        animate={{
          y: [0, 25, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="p-4 bg-white/40 backdrop-blur-lg rounded-2xl shadow-xl">
          <Sun className="w-14 h-14 text-[#1BBE9B]" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-[20%]"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="p-3 bg-white/40 backdrop-blur-lg rounded-2xl shadow-xl">
          <Sparkles className="w-10 h-10 text-[#1AA7D1]" />
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-lg rounded-full border border-[#0066B3]/20 shadow-lg">
            <Award className="w-5 h-5 text-[#0066B3]" />
            <span className="text-[#0B4D91] font-medium">Premium Technical Training Institute</span>
            <span className="text-[#0B4D91] font-medium">Premium Technical Training Institute</span>
          </div>
        </motion.div>

        <motion.h1
          className="lg:text-[72px] text-[40px] font-nunito font-bold transition-colors  bg-linear-to-r from-primary to-tertiary bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          NextGen Academy
          <motion.span
            className="block text-[#1BBE9B] mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Gallery
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-inter text-[#0B4D91] mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Explore Real Training Sessions, Practical Learning & Student Success
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="group relative px-10 py-5 bg-linear-to-r from-[#0066B3] to-[#1AA7D1] text-white rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0, 102, 179, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-[#0B4D91] to-[#0066B3]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-3 text-xl font-medium">
              Explore Gallery
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </span>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            className="px-10 py-5 bg-white/80 backdrop-blur-lg text-[#0066B3] rounded-2xl border-2 border-[#0066B3]/30 hover:border-[#0066B3] shadow-xl transition-all"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl font-medium">View Courses</span>
          </motion.button>
        </motion.div>

        {/* Quick Info Cards */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { icon: Zap, label: "Electrical Training", color: "#0066B3" },
            { icon: Sun, label: "Solar Installation", color: "#1BBE9B" },
            { icon: Sparkles, label: "Hands-on Practice", color: "#1AA7D1" },
            { icon: Award, label: "Certified Courses", color: "#56C271" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/60 backdrop-blur-lg rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -8, borderColor: item.color }}
            >
              <item.icon className="w-10 h-10 mb-3 mx-auto" style={{ color: item.color }} />
              <span className="text-xl text-[#0B4D91] text-center block font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
        </Container>
    </section>
   
    </>
  )
}

export default Gallery_banner
