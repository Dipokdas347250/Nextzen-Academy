import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
const testimonials = [{
  name: 'Rajesh Kumar',
  role: 'Solar Installation Technician',
  company: 'SunPower Solutions',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  rating: 5,
  text: 'Nextzen Academy provided me with the practical skills I needed to start my career. The hands-on training and expert instructors made all the difference. I got my first job within 2 weeks of completing the course!'
}, {
  name: 'Priya Sharma',
  role: 'Electrical Maintenance Engineer',
  company: 'TechGrid Industries',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  rating: 5,
  text: 'The certification program was comprehensive and well-structured. I particularly loved the real project experience which gave me confidence to handle complex installations independently.'
}, {
  name: 'Amit Patel',
  role: 'Renewable Energy Consultant',
  company: 'GreenTech Innovations',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  rating: 5,
  text: 'Best investment in my career! The instructors are industry experts who shared invaluable insights. The practical lab training prepared me for real-world challenges.'
}, {
  name: 'Sneha Reddy',
  role: 'Solar Project Manager',
  company: 'EcoEnergy Systems',
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  rating: 5,
  text: 'Nextzen Academy exceeded my expectations. The course content was up-to-date with industry standards, and the career guidance helped me land my dream job. Highly recommended!'
}, {
  name: 'Vikram Singh',
  role: 'Electrical Systems Specialist',
  company: 'PowerGrid Solutions',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
  rating: 5,
  text: 'The affordable fees and flexible payment options made quality education accessible. The practical approach to teaching is what sets Nextzen Academy apart from others.'
}, {
  name: 'Anjali Mehta',
  role: 'Solar Energy Technician',
  company: 'BrightFuture Energy',
  image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop',
  rating: 5,
  text: 'From theory to practice, everything was perfect! The small batch sizes ensured personalized attention, and the modern equipment made learning enjoyable and effective.'
}];
export function TestimonialsSection() {
  return <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230891B2' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }} />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
        <div className="mx-auto text-center">
          <div className="py-3 px-4 bg-[#D9FAEB]  rounded-full border border-green-500  inline-block">

            <h2 className='text-[16px] text-[tertiary] font-normal font-inter '>What Our Students Say</h2>

          </div>
          <h2 className='lg:text-[72px] text-[40px] font-nunito font-bold transition-colors  bg-linear-to-r from-primary to-tertiary bg-clip-text text-transparent drop-shadow-lg'> <span className='text-black'>Success  </span> Stories</h2>
          <p className='text-[18px] text-[secondary] font-normal font-inter max-w-2xl mx-auto '>Don't just take our word for it. Hear from our graduates who have successfully launched their careers</p>
        </div>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }}>
          <div className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm group">
            <div className="p-8 flex flex-col h-full">
              {/* Quote Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div>
                  <div className="font-bold font-inter text-gray-900">{testimonial.name}</div>
                  <div className="text-sm font-inter text-gray-600">{testimonial.role}</div>
                  <div className="text-xs font-inter text-teal-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
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
        delay: 0.3
      }} className="text-center mt-16">
        <p className="text-gray-700 text-lg mb-6">
          Ready to write your own success story?
        </p>
        <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-teal-600 text-white font-semibold font-inter rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          Join Our Next Batch
        </button>
      </motion.div>
    </div>
  </section>;
}