import React, { useState } from 'react'
import Container from '../../container/Container'
import { ChevronDown } from 'lucide-react'

const Course_Faq = () => {
  const [openFaq, setOpenFaq] = useState(null)

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
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-teal-600 uppercase tracking-[3px] font-semibold mb-3">
              Got Questions?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>

            <div className="w-24 h-1 rounded-full bg-linear-to-r from-blue-500 via-teal-500 to-green-500 mx-auto"></div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <h3 className="text-lg md:text-xl font-medium text-slate-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`w-6 h-6 text-slate-600 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openFaq === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-6 text-slate-600 leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Course_Faq