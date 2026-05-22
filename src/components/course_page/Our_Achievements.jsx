import React from 'react'
import Container from '../../container/Container'
import { Award, TrendingUp, Users, Wrench } from 'lucide-react'

const Our_Achievements = () => {
  return (
    <>
     <section className="py-20 px-4 bg-linear-to-br from-slate-900 to-blue-900 relative overflow-hidden">
    <Container>

  
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-green-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-blue-500/20 to-green-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-slate-300 text-lg">
              Building skilled professionals for Bangladesh's
              technical industry
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "1500+",
                label: "Students Trained",
                icon: Users,
              },
              {
                number: "5000+",
                label: "Practical Sessions",
                icon: Wrench,
              },
              {
                number: "95%",
                label: "Success Rate",
                icon: TrendingUp,
              },
              {
                number: "10+",
                label: "Years Experience",
                icon: Award,
              },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-slate-300 text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
          </Container>
      </section>
    </>
  )
}

export default Our_Achievements
