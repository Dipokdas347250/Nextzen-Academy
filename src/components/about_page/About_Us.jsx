import React from 'react'
import { FaBullseye, FaChalkboardTeacher, FaEye, FaUserGraduate } from "react-icons/fa";
import { MdElectricalServices } from "react-icons/md";
import { GiSolarPower } from "react-icons/gi";
import Container from '../../container/Container';

const About_Us = () => {
    return (
            <section className="pt-40 pb-20 bg-white overflow-hidden relative ">
        <Container>
            <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-blue-200/40 via-teal-200/30 to-green-200/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-green-200/30 via-teal-200/40 to-blue-200/30 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="text-[#0EA5E9] font-semibold uppercase tracking-widest">
                        About NextGen Academy
                    </span>

                    <h2 className="lg:text-[72px] text-[40px] font-nunito font-bold transition-colors  bg-linear-to-r from-primary to-tertiary bg-clip-text text-transparent drop-shadow-lg mt-3">
                        <span className='text-black'>Building</span> Future Skilled Professionals
                    </h2>

                    <p className=" w-[80%] mx-auto mt-5 leading-8 text-[20px] text-tertiary font-inter">
                        NextGen Academy is a technical skill development institute
                        dedicated to Electrical Installation, Maintenance,
                        Solar System Training, and practical career-focused learning.
                        We help students gain real-world skills for professional success.
                    </p>
                </div>

                {/* About Content */}


                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8 mt-20">

                    <div className="bg-[#F8FAFC] p-8 rounded-[30px] text-center hover:shadow-lg duration-300">
                        <MdElectricalServices className="text-5xl text-cyan-500 mx-auto mb-4" />
                        <h4 className="text-[30px] text-primary font-inter font-bold mb-2">
                            Electrical Training
                        </h4>
                        <p className="text-[20px] text-tertiary font-normal font-inter">
                            Hands-on practical electrical installation
                            and maintenance training.
                        </p>
                    </div>

                    <div className="bg-[#F8FAFC] p-8 rounded-[30px] text-center hover:shadow-lg duration-300">
                        <GiSolarPower className="text-5xl text-green-500 mx-auto mb-4" />
                        <h4 className="text-[30px] text-primary font-inter font-bold mb-2">
                            Solar Technology
                        </h4>
                        <p className="text-[20px] text-tertiary font-normal font-inter">
                            Professional solar electrical system
                            installation and maintenance training.
                        </p>
                    </div>

                    <div className="bg-[#F8FAFC] p-8 rounded-[30px] text-center hover:shadow-lg duration-300">
                        <FaChalkboardTeacher className="text-5xl text-blue-500 mx-auto mb-4" />

                        <h4 className="text-[30px] text-primary font-inter font-bold mb-2">
                            Expert Instructors
                        </h4>

                        <p className="text-[20px] text-tertiary font-normal font-inter">
                            Learn from experienced trainers with practical
                            industry knowledge and real-world expertise.
                        </p>
                    </div>

                </div>
            </div>
        </Container>
        </section>
    )
}

export default About_Us