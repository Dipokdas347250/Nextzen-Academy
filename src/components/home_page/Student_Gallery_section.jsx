import React from 'react'
import { motion } from 'motion/react';
import Container from '../../container/Container'

const galleryImages = [{
    url: 'https://images.unsplash.com/photo-1668097613572-40b7c11c8727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9uJTIwdGVjaG5pY2lhbnxlbnwxfHx8fDE3NzkyMDA3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Solar Panel Installation Training'
}, {
    url: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd2lyaW5nJTIwd29yayUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzkyMDA3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Electrical Wiring Practical'
}, {
    url: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGludmVydGVyJTIwYmF0dGVyeSUyMHN5c3RlbXxlbnwxfHx8fDE3NzkyMDA3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Inverter System Setup'
}, {
    url: 'https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwbWFpbnRlbmFuY2UlMjB3b3Jrc2hvcCUyMHRyYWluaW5nfGVufDF8fHx8MTc3OTIwMDcyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Workshop Training Session'
}, {
    url: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVscyUyMGZpZWxkfGVufDF8fHx8MTc3OTIwMDcyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Field Project Work'
}, {
    url: 'https://images.unsplash.com/photo-1640163561331-1b68a6474957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwdGVjaG5pY2FsJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzc5MjAwNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Hands-on Learning'
}];

const Student_Gallery_section = () => {
    return (
        <>
            <section className="py-20 bg-white relative overflow-hidden">
                <Container>
                    <div className=" mx-auto px-4 sm:px-6 lg:px-8">

                        <motion.div initial={{
                            opacity: 0,
                            y: 30
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} viewport={{
                            once: true
                        }} transition={{
                            duration: 0.6
                        }} className="text-center mb-16">
                            <div className="mx-auto text-center">
                                <div className="py-3 px-4 bg-[#D9FAEB]  rounded-full border border-green-500  inline-block">

                                    <h2 className='text-[16px] text-[tertiary] font-normal font-inter '>See Our Students in Action</h2>

                                </div>
                                <h2 className='lg:text-[72px] text-[40px] font-nunito font-bold transition-colors  bg-linear-to-r from-primary to-tertiary bg-clip-text text-transparent drop-shadow-lg'> <span className='text-black'>Student </span> Gallery</h2>
                                <p className='text-[20px] text-[secondary] font-normal font-inter max-w-2xl mx-auto '>Real students, real projects, real results. Take a look at our practical training sessions and fieldwork</p>
                            </div>
                        </motion.div>

                        {/* Gallery Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryImages.map((image, index) => <motion.div key={index} initial={{
                                opacity: 0,
                                scale: 0.9
                            }} whileInView={{
                                opacity: 1,
                                scale: 1
                            }} viewport={{
                                once: true
                            }} transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="aspect-4/3 overflow-hidden bg-gray-100">
                                    <img src={image.url} alt={image.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-white font-bold font-inter text-lg">{image.title}</h3>
                                        <div className="w-12 h-1 bg-linear-to-r from-blue-500 to-teal-500 mt-2 rounded-full" />
                                    </div>
                                </div>

                                {/* Border Effect */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-500/50 rounded-2xl transition-all duration-300 pointer-events-none" />
                            </motion.div>)}
                        </div>

                        {/* View All Button */}
                        <motion.div initial={{
                            opacity: 0,
                            y: 20
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} viewport={{
                            once: true
                        }} transition={{
                            duration: 0.6,
                            delay: 0.3
                        }} className="text-center mt-12">
                            <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                View More Projects
                            </button>
                        </motion.div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Student_Gallery_section