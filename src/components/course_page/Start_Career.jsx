import React from 'react'
import Container from '../../container/Container'
import { ArrowRight } from 'lucide-react'

const Start_Career = () => {
  return (
    <>
      <section className="py-24 px-4 bg-linear-to-br from-blue-600 via-teal-600 to-green-600 relative overflow-hidden">
    <Container>

   
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
    
            <div className="relative max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Start Your Career Journey Today
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
                Join NextGen Academy and transform your future with
                industry-leading technical education and practical
                skills.
              </p>
              <button className="bg-white text-blue-600 px-10 py-5 rounded-xl text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
                Admission Open
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
             </Container>
          </section>
    </>
  )
}

export default Start_Career
