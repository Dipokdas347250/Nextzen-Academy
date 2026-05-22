import React from 'react'
import Container from '../../container/Container'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const Solar_Electrical = () => {
  return (
   <>
    <section className="py-20 px-4 bg-white">
   <Container>

  
           <div className="">
             <div className="bg-linear-to-br from-slate-900 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
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
                       <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
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
                       <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
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
                       <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
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
                       <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
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
   
                   <button className="bg-linear-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                     Enroll Today
                     <ArrowRight className="w-5 h-5" />
                   </button>
                 </div>
               </div>
             </div>
           </div>
            </Container>
         </section>
   </>
  )
}

export default Solar_Electrical
