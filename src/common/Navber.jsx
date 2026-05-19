import React from 'react'
import Contaoner from '../container/Contaoner'
import logo from '../assets/images/logo.png'
import Navberdata from '../data/navdata'
import { Link } from 'react-router'

const Navber = () => {
  return (
   <nav className='py-4 bg-[#F7FBFF]'>
    <Contaoner>
        <div className="flex items-center justify-between ">
            <div className="">
                <Link to="/">
                    <img src={logo} alt="Logo" width={50} height={50 }  />
                </Link>
            </div>
            <div className="">
                <ul className='flex gap-10'>
                    {Navberdata?.navlist?.map((item) => (
                        <li key={item.id}>
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </Contaoner>
   </nav>
  )
}

export default Navber