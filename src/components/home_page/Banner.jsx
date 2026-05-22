import React from 'react'
import Contaoner from '../../container/Container'
import hero from "../../assets/images/hero.jpg"
import { IoCheckmarkDoneSharp } from "react-icons/io5";


const Banner = () => {
  return (
    <>
      <section className='lg:pb-25 pb-10 pt-40 bg-[#D9FAEB]/50 relative'>
       <div className=" absolute bottom-0 left-200 w-75 h-75 bg-secondary/10 rounded-full blur-3xl "></div>
            <div className=" absolute bottom-0 right-0 w-75 h-75 bg-tertiary/10 rounded-full blur-3xl "></div>
        <Contaoner>
          <div className="lg:flex gap-20  ">
           
            <div className="lg:w-1/2 w-full">
              <div className="button ">

                <h2 className='text-[16px] text-[tertiary] font-normal font-inter '>Premium Technical Training Institute</h2>
              </div>
              <h1 className='lg:text-[72px] text-[40px] font-nunito font-bold transition-colors  bg-linear-to-r from-primary to-tertiary bg-clip-text text-transparent drop-shadow-lg'>Nextgen Academy</h1>
              <h3 className='lg:text-[32px] text-[20px] font-inter font-medium text-tertiary '>Solar & Electrical SystemInstallation and Maintenance</h3>
              <p className='lg:text-[18px] text-[16px] text-black font-inter font-normal lg:mt-7 mt-5'>Transform your future with hands-on practical training in solar and electrical systems. Work on real projects, learn from expert instructors, and unlock career opportunities in the booming renewable energy industry.</p>
              <div className="">
                <button className="bg-primary text-white font-inter font-medium px-6 py-3 rounded-md hover:bg-tertiary transition-colors mt-7">Get Started</button>
                <button className="bg-transparent text-primary font-inter font-medium px-6 py-3 rounded-md border border-primary hover:bg-primary hover:text-white transition-colors mt-7 ml-4">Free Consultation</button>
              </div>
              <div className=" flex items-center lg:gap-15 gap-5 mt-10 lg:mb-0 mb-10">
                <div className="">
                  <h3 className='lg:text-[36px] text-[24px] text-primary font-bold font-inter'>500+ </h3>
                  <h4 className='text-[16px] text-black font-inter font-normal'>Students Trained</h4>
                </div>
                <div className="">
                  <h3 className='lg:text-[36px] text-[24px] text-tertiary font-bold font-inter'>150+ </h3>
                  <h4 className='text-[16px] text-black font-inter font-normal'>Projucts</h4>
                </div>
                <div className="">
                  <h3 className='lg:text-[36px] text-[24px] text-primary font-bold font-inter'>98% </h3>
                  <h4 className='text-[16px] text-black font-inter font-normal'>Success Rate</h4>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
            <div className="">
              <img src={hero} alt="Hero" />
              <div className="py-6 px-10 bg-white inline-block rounded-[10px]">
                <div className="flex items-center gap-5">
                  <div className="p-2 bg-secondary inline-block rounded-full">
                  <IoCheckmarkDoneSharp size={30}/>
                </div>
                <div className="">
                  <h3 className='text-[20px] text-black font-bold font-inter'>Certified Training</h3>
                  <p className='text-[14px] text-black font-normal font-inter'>Industry Recognized</p>
                </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </Contaoner>
      </section>
    </>
  )
}

export default Banner