import React from 'react'
import Contaoner from '../container/Contaoner'
import logo from '../assets/images/logo.png'
import Navberdata from '../data/navdata'
import { Link } from 'react-router'
import { FiMessageCircle } from "react-icons/fi";


const Navber = () => {
  return (
   <nav className='py-4 bg-[#F7FBFF]'>
    <Contaoner>
        <div className="flex items-center justify-between ">
                <Link to="/">
            <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" width={50} height={50 }  />
                    <h2 className='text-xl font-bold transition-colors  bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent text-black drop-shadow-lg'>Nextzen Academy</h2>
            </div>
                </Link>
            <div className="flex items-center gap-10">
                <ul className='flex gap-10 '>
                    {Navberdata?.navlist?.map((item) => (
                        <li className='text-[16px] text-tertiary font-inter font-medium duration-300 ease-in-out hover:text-primary' key={item.id}>
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
                <div className="">
                    <button className="bg-primary text-white font-inter font-medium px-4 py-2 rounded-md hover:bg-tertiary transition-colors flex items-center gap-2 cursor-pointer"><FiMessageCircle size={20} />  Enroll Now</button>
                </div>
            </div>


        </div>
    </Contaoner>
   </nav>
  )
}

export default Navber