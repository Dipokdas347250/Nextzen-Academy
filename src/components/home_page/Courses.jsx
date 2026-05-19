import React from 'react'
import Contaoner from '../../container/Contaoner'
import { FiSun } from "react-icons/fi";
import { GoZap } from "react-icons/go";
import { FaBatteryEmpty } from "react-icons/fa";
import { FaWrench } from "react-icons/fa6";
import { LuFlaskConical } from "react-icons/lu";
import { BsAward } from "react-icons/bs";






const courses = [{
  icon: FiSun,
  title: 'Solar Panel Installation',
  description: 'Master the art of solar panel installation, mounting systems, and grid integration techniques.',
  color: 'from-orange-500 to-yellow-500',
  bgColor: 'bg-orange-50'
}, {
  icon: GoZap,
  title: 'Electrical Wiring',
  description: 'Learn professional electrical wiring, circuit design, and safety standards for residential and commercial projects.',
  color: 'from-blue-500 to-cyan-500',
  bgColor: 'bg-blue-50'
}, {
  icon: FaBatteryEmpty,
  title: 'Inverter & Battery System',
  description: 'Understand inverter technology, battery storage systems, and energy management solutions.',
  color: 'from-green-500 to-teal-500',
  bgColor: 'bg-green-50'
}, {
  icon: FaWrench,
  title: 'Electrical Maintenance',
  description: 'Gain expertise in troubleshooting, preventive maintenance, and repair of electrical systems.',
  color: 'from-purple-500 to-pink-500',
  bgColor: 'bg-purple-50'
}, {
  icon: LuFlaskConical,
  title: 'Practical Lab Training',
  description: 'Get hands-on experience with real equipment in our state-of-the-art training facilities.',
  color: 'from-indigo-500 to-blue-500',
  bgColor: 'bg-indigo-50'
}, {
  icon: BsAward,
  title: 'Certification Program',
  description: 'Earn industry-recognized certifications that boost your career prospects and credibility.',
  color: 'from-teal-500 to-green-500',
  bgColor: 'bg-teal-50'
}];

const Courses = () => {
    return (
        <>
            <section className='py-25'>
                <Contaoner>
                    <div className="mx-auto text-center">
                        <div className="py-3 px-4 bg-[#D9FAEB]  rounded-full border border-green-500  inline-block">

                            <h2 className='text-[16px] text-[tertiary] font-normal font-inter '>Premium Technical Training Institute</h2>

                        </div>
                        <h2 className='text-[72px] font-nunito font-bold transition-colors  bg-linear-to-r from-primary to-tertiary bg-clip-text text-transparent drop-shadow-lg'>Comprehensive Courses</h2>
                        <p className='text-[18px] text-[secondary] font-normal font-inter max-w-2xl mx-auto '>Industry-leading training programs designed to equip you with practical skills and knowledge for a successful career</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 ">
                        {
                            courses.map((course, index) => (
                                <div key={index} className={` p-6 rounded-lg shadow-md group hover:shadow-xl transition-transform duration-300  ${course.bgColor}`}>
                                    <div className={`p-4 rounded-full bg-linear-to-r ${course.color} text-white inline-block group-hover:shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                                        <course.icon />
                                    </div>
                                    <div>
                                        <h3 className='text-[24px] font-bold text-primary font-inter'>{course.title}</h3>
                                        <p className='text-[16px] text-[secondary] font-normal font-inter'>{course.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Contaoner>
            </section>
        </>
    )
}

export default Courses