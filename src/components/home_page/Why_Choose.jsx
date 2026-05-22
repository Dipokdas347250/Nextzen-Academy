import React from 'react'
import Contaoner from '../../container/Container'
import { motion } from 'motion/react';
import { GraduationCap, Users, Briefcase, TrendingUp, DollarSign } from 'lucide-react';



const reasons = [{
    icon: GraduationCap,
    title: 'Hands-on Practical Training',
    description: 'Learn by doing with real equipment and live projects. Our practical approach ensures you\'re job-ready from day one.'
}, {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of field experience in solar and electrical installations.'
}, {
    icon: Briefcase,
    title: 'Real Project Experience',
    description: 'Work on actual installation projects and build a portfolio that showcases your skills to potential employers.'
}, {
    icon: TrendingUp,
    title: 'Career Guidelines',
    description: 'Get personalized career guidance, job placement assistance, and networking opportunities in the renewable energy sector.'
}, {
    icon: DollarSign,
    title: 'Affordable Fees',
    description: 'Quality education at competitive prices with flexible payment plans and scholarship opportunities available.'
}];

const Why_Choose = () => {
    return (
        <>

            <section className="py-20 bg-linear-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
                <Contaoner>
                    {/* Decorative Elements */}
                    <div className="absolute top-20 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                    <div className="absolute top-40 right-0 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
                    <div className="mx-auto text-center">
                        <div className="py-3 px-4 bg-[#D9FAEB]  rounded-full border border-green-500  inline-block">

                            <h2 className='text-[16px] text-[tertiary] font-normal font-inter '>What Makes Us Different</h2>

                        </div>
                        <h2 className='lg:text-[72px] text-[36px] font-nunito font-bold transition-colors  bg-linear-to-r from-primary to-tertiary bg-clip-text text-transparent drop-shadow-lg'> <span className='text-black'>Why Choose</span> Nextgen Academy?</h2>
                        <p className='text-[18px] text-[secondary] font-normal font-inter max-w-2xl mx-auto '>Industry-leading training programs designed to equip you with practical skills and knowledge for a successful career</p>
                    </div>

                    <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-15">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div initial={{
                                opacity: 0,
                                x: -50
                            }} whileInView={{
                                opacity: 1,
                                x: 0
                            }} viewport={{
                                once: true
                            }} transition={{
                                duration: 0.6
                            }}>


                                {/* Feature Cards */}
                                <div className="space-y-4">
                                    {reasons.map((reason, index) => {
                                        const Icon = reason.icon;
                                        return <div key={index} initial={{
                                            opacity: 0,
                                            x: -30
                                        }} whileInView={{
                                            opacity: 1,
                                            x: 0
                                        }} viewport={{
                                            once: true
                                        }} transition={{
                                            duration: 0.5,
                                            delay: index * 0.1
                                        }}>
                                            <div className="border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                                                <div className="p-6 flex items-start gap-4">
                                                    <div className="shrink-0">
                                                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg">
                                                            <Icon className="w-6 h-6 text-white" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
                                                        <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>;
                                    })}
                                </div>
                            </div>

                            {/* Right Image/Visual */}
                            <motion.div initial={{
                                opacity: 0,
                                x: 50
                            }} whileInView={{
                                opacity: 1,
                                x: 0
                            }} viewport={{
                                once: true
                            }} transition={{
                                duration: 0.6
                            }} className="relative">
                                <div className="relative">
                                    {/* Main Image */}
                                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                                        <img src="https://images.unsplash.com/photo-1640163561331-1b68a6474957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwdGVjaG5pY2FsJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzc5MjAwNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Students Learning" className="w-full h-auto object-cover" />
                                        <div className="absolute inset-0 bg-linear-to-tr from-blue-600/30 to-transparent" />
                                    </div>

                                    {/* Floating Stats Cards */}
                                    <motion.div initial={{
                                        opacity: 0,
                                        scale: 0.8
                                    }} whileInView={{
                                        opacity: 1,
                                        scale: 1
                                    }} viewport={{
                                        once: true
                                    }} transition={{
                                        duration: 0.6,
                                        delay: 0.3
                                    }} className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl lg:p-6 p-3 border border-gray-100">
                                        <div className="text-center">
                                            <div className="lg:text-3xl text-xl font-bold bg-linear-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-1">
                                                500+
                                            </div>
                                            <div className="text-sm text-gray-600 font-medium">Students Trained</div>
                                        </div>
                                    </motion.div>

                                    <motion.div initial={{
                                        opacity: 0,
                                        scale: 0.8
                                    }} whileInView={{
                                        opacity: 1,
                                        scale: 1
                                    }} viewport={{
                                        once: true
                                    }} transition={{
                                        duration: 0.6,
                                        delay: 0.5
                                    }} className="absolute -bottom-6 -left-6 bg-linear-to-br from-blue-500 to-teal-500 rounded-2xl shadow-2xl lg:p-6 p-3 text-white">
                                        <div className="text-center">
                                            <div className="lg:text-3xl text-xl font-bold mb-1">98%</div>
                                            <div className="text-sm font-medium opacity-90">Success Rate</div>
                                        </div>
                                    </motion.div>

                                    {/* Decorative Element */}
                                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-linear-to-br from-teal-400 to-green-400 rounded-full blur-3xl opacity-30" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Contaoner>
            </section>

        </>
    )
}

export default Why_Choose