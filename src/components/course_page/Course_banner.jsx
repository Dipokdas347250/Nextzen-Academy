import React from 'react'
import Container from '../../container/Container';
import { ArrowRight } from 'lucide-react';

const Course_banner = () => {
  return (
    <>
    <section>
        <Container>
             <section className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 py-40 px-4 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-green-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-blue-500/20 to-green-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Build Your Technical Career with Professional
              Training
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Learn practical electrical installation,
              maintenance, and solar technology with hands-on
              training and expert guidance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-linear-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                View Courses
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                Apply Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1660330589243-4c640d878052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
                alt="Solar panel installation training"
                className="w-full h-125 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
        </Container>
    </section>
    </>
  )
}

export default Course_banner
