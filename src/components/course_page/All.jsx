import {
  Zap,
  Sun,
  Settings,
  Wrench,
  ShieldCheck,
  Award,
  Users,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Clock,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
// import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { useState } from "react";

export default function Courses() {
  // const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const faqs = [
    {
      question: "What is the course duration?",
      answer:
        "Our courses range from 2 to 6 months depending on the program. Each course is designed to provide comprehensive training with flexible schedules.",
    },
    {
      question: "Are certificates available?",
      answer:
        "Yes, we provide industry-recognized certificates upon successful completion of all courses, validated by technical education boards.",
    },
    {
      question: "Is practical training included?",
      answer:
        "Absolutely! Every course includes extensive hands-on training with real equipment, live projects, and practical workshops.",
    },
    {
      question: "Do you provide job support?",
      answer:
        "Yes, we offer career guidance, job placement assistance, and industry connections to help you start your professional journey.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-green-500/20 rounded-full blur-3xl"></div>

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
              <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
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
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
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

      {/* Featured Course Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-96 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1668097613572-40b7c11c8727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000"
                  alt="Featured Course"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-12">
                <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg text-sm mb-4">
                  Featured Course
                </span>
                <h2 className="text-3xl md:text-4xl text-white mb-6">
                  Solar Electrical System Installation
                </h2>

                {/* Key Benefits */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white mb-1">
                        6 Months Professional Training
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Comprehensive hands-on learning program
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white mb-1">
                        Industry Certification
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Recognized by technical education boards
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white mb-1">
                        Practical Project Experience
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Real-world solar installation projects
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white mb-1">
                        Job Placement Support
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Career guidance and industry connections
                      </p>
                    </div>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Enroll Today
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Student Success / Achievement Stats */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-green-500/20 rounded-full blur-3xl"></div>

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
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
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
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-teal-600 uppercase tracking-wider mb-3"
              style={{ fontSize: "0.875rem", fontWeight: 600 }}
            >
              Got Questions?
            </p>
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/50"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === idx ? null : idx)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-100 transition-colors duration-300"
                >
                  <h3 className="text-lg text-slate-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-600 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-6">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 relative overflow-hidden">
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
      </section>
    </div>
  );
}