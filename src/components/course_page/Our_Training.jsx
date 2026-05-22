import React from 'react'
import Container from '../../container/Container'
import { Clock, Settings, ShieldCheck, Sun, Wrench, Zap } from 'lucide-react';

const Our_Training = () => {
    const courses = [
        {
          id: 1,
          name: "Electrical Installation & Maintenance",
          duration: "6 Months",
          type: "Hands-on Training",
          description:
            "Master complete electrical installation, wiring, and maintenance with practical projects.",
          image:
            "https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
          icon: Zap,
        },
        {
          id: 2,
          name: "Solar Electrical System Installation",
          duration: "4 Months",
          type: "Professional Course",
          description:
            "Learn solar panel installation, grid systems, and renewable energy technology.",
          image:
            "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
          icon: Sun,
        },
        {
          id: 3,
          name: "Industrial Electrical Maintenance",
          duration: "5 Months",
          type: "Advanced Training",
          description:
            "Industrial-grade electrical system maintenance and troubleshooting expertise.",
          image:
            "https://images.unsplash.com/photo-1660330589243-4c640d878052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
          icon: Settings,
        },
        {
          id: 4,
          name: "Basic Electrical Wiring",
          duration: "3 Months",
          type: "Foundation Course",
          description:
            "Essential electrical wiring fundamentals for residential and commercial buildings.",
          image:
            "https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
          icon: Wrench,
        },
        {
          id: 5,
          name: "Electrical Safety & Troubleshooting",
          duration: "2 Months",
          type: "Skill Development",
          description:
            "Safety protocols, risk management, and advanced troubleshooting techniques.",
          image:
            "https://images.unsplash.com/photo-1707247111552-aaf74241058b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
          icon: ShieldCheck,
        },
        {
          id: 6,
          name: "Solar Panel Setup & Maintenance",
          duration: "3 Months",
          type: "Practical Training",
          description:
            "Complete solar panel setup, maintenance, and system optimization training.",
          image:
            "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
          icon: Sun,
        },
      ];
  return (
   <>
   <section>
    <Container>
         <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-teal-600 uppercase tracking-wider mb-3"
              style={{ fontSize: "0.875rem", fontWeight: 600 }}
            >
              Learn & Grow
            </p>
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">
              Our Training Programs
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 mx-auto"></div>
          </div>

          {/* Course Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-slate-200/50"
              >
                {/* Course Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-lg text-sm">
                    {course.type}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl text-slate-900">
                        {course.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
   </section>
   </>
  )
}

export default Our_Training
