import React from 'react'
import { Target, Lightbulb, Users, Award, Zap, GraduationCap } from 'lucide-react';


const Mission = () => {
  return (
    <>
    <section>
         <div className="relative  bg-white py-20 px-4 overflow-hidden">

      {/* Abstract Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-blue-200/40 via-teal-200/30 to-green-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-green-200/30 via-teal-200/40 to-blue-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-6">
          <p className="text-teal-600 uppercase tracking-wider mb-3" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em' }}>
            Our Purpose
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-4">
            Mission & Vision
          </h1>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 via-teal-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: '1.125rem' }}>
            Empowering future professionals with practical skills, technical education, and career-focused learning opportunities.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 mt-12">

          {/* Mission Card */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-10 border border-slate-200/50 group overflow-hidden">

            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-teal-500/10 to-green-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
              {/* Icon */}
              <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h2 className="text-3xl text-slate-900 mb-4">
                Our Mission
              </h2>
              <p className="text-slate-600 leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                To provide high-quality practical training in electrical installation, maintenance, solar technology, and technical education through industry-focused learning, hands-on experience, and career guidance.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-10 border border-slate-200/50 group overflow-hidden">

            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-linear-to-br from-green-500/10 via-teal-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
              {/* Icon */}
              <div className="w-16 h-16 bg-linear-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h2 className="text-3xl text-slate-900 mb-4">
                Our Vision
              </h2>
              <p className="text-slate-600 leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                To become a leading technical training academy in Bangladesh by creating skilled professionals who contribute to innovation, employment, and sustainable energy development.
              </p>
            </div>
          </div>

        </div>

        {/* Achievement Stats */}
        <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl p-12 overflow-hidden">

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-teal-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-green-500/20 to-teal-500/20 rounded-full blur-3xl"></div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* Stat 1 */}
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-teal-400 mb-2" style={{ fontSize: '1.125rem' }}>
                Skilled Students
              </h3>
              <p className="text-slate-400 text-sm">
                Building Excellence
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-linear-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-green-400 mb-2" style={{ fontSize: '1.125rem' }}>
                Hands-on Training
              </h3>
              <p className="text-slate-400 text-sm">
                Practical Experience
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-linear-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-blue-400 mb-2" style={{ fontSize: '1.125rem' }}>
                Career Support
              </h3>
              <p className="text-slate-400 text-sm">
                Professional Growth
              </p>
            </div>

            {/* Stat 4 */}
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-teal-400 mb-2" style={{ fontSize: '1.125rem' }}>
                Industry-Focused
              </h3>
              <p className="text-slate-400 text-sm">
                Real-World Learning
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
    </section>
    </>
  )
}

export default Mission
