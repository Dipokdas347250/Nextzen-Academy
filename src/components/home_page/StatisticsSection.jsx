import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
function Counter({
  end,
  duration = 2,
  suffix = ''
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime;
    let animationFrame;
    const animate = currentTime => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  return <span>
      {count}
      {suffix}
    </span>;
}
const stats = [{
  value: 500,
  suffix: '+',
  label: 'Students Trained',
  description: 'Successfully completed our programs',
  color: 'from-blue-500 to-cyan-500'
}, {
  value: 150,
  suffix: '+',
  label: 'Projects Completed',
  description: 'Real-world installations and maintenance',
  color: 'from-teal-500 to-green-500'
}, {
  value: 98,
  suffix: '%',
  label: 'Success Rate',
  description: 'Student satisfaction and achievement',
  color: 'from-green-500 to-emerald-500'
}, {
  value: 15,
  suffix: '+',
  label: 'Expert Instructors',
  description: 'Industry professionals with years of experience',
  color: 'from-purple-500 to-pink-500'
}];
export function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  return <section className="py-20 bg-linear-to-br from-blue-600 via-teal-600 to-green-600 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }} className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <motion.div animate={{
        scale: [1, 1.3, 1],
        rotate: [0, -90, 0]
      }} transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }} className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-white">
              Our Achievements
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Numbers That Speak <br />
            For Themselves
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in the success of our students and the quality of our training
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} onViewportEnter={() => setIsVisible(true)}>
              <div className="relative group">
                {/* Glass Card */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Icon/Decoration */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-6 flex items-center justify-center shadow-lg`}>
                    <div className="w-6 h-6 bg-white/30 rounded-full" />
                  </div>

                  {/* Number */}
                  <div className="text-5xl font-bold text-white mb-2">
                    {isVisible ? <Counter end={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
                  </div>

                  {/* Label */}
                  <div className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-sm text-white/70">
                    {stat.description}
                  </div>
                </div>

                {/* Shadow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10`} />
              </div>
            </motion.div>)}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="text-center mt-16">
          <p className="text-white/90 text-lg mb-6">
            Join hundreds of successful graduates who transformed their careers
          </p>
          <button className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>;
}