import React, { useEffect, useRef, useState } from 'react';
import Contaoner from '../container/Container';
import logo from '../assets/images/logo.png';
import Navberdata from '../data/navdata';
import { FiMessageCircle } from "react-icons/fi";
import { GiTireIronCross } from 'react-icons/gi';
import { FaBarsStaggered } from 'react-icons/fa6';
import { Link } from 'react-router';

const Navber = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    // click outside করলে menu বন্ধ হবে
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener(
                'mousedown',
                handleClickOutside
            );
        };
    }, []);

    return (
        <nav className='py-4 bg-[#F7FBFF] fixed top-0 left-0 w-full z-50 shadow-md'>
            <Contaoner>
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/">
                        <div className="flex items-center gap-2">
                            <img
                                src={logo}
                                alt="Logo"
                                width={50}
                                height={50}
                            />
                            <h2 className='text-lg md:text-xl font-bold font-nunito bg-linear-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg'>
                                Nextgen Academy
                            </h2>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-10">
                        <ul className='flex gap-10'>
                            {Navberdata?.navlist?.map((item) => (
                                <li
                                    key={item.id}
                                    className='text-[16px] text-tertiary font-inter font-medium duration-300 hover:text-primary'
                                >
                                    <Link to={item.url}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* <button className="bg-primary text-white font-inter font-medium px-4 py-2 rounded-md hover:bg-tertiary transition-colors flex items-center gap-2 cursor-pointer">
                            <FiMessageCircle size={20} />
                            Enroll Now
                        </button> */}
                    </div>

                    {/* Mobile Menu Button */}
                    <div
                        className="lg:hidden text-2xl cursor-pointer z-50"
                        onClick={() =>
                            setShowMenu(!showMenu)
                        }
                    >
                        {showMenu ? (
                            <GiTireIronCross />
                        ) : (
                            <FaBarsStaggered />
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    ref={menuRef}
                    className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
                        showMenu
                            ? 'max-h-[500px] opacity-100'
                            : 'max-h-0 opacity-0'
                    }`}
                >
                    <ul className='flex flex-col p-5 gap-5'>
                        {Navberdata?.navlist?.map((item) => (
                            <li
                                key={item.id}
                                className='text-[16px] text-tertiary font-inter font-medium hover:text-primary'
                            >
                                <Link
                                    to={item.url}
                                    onClick={() =>
                                        setShowMenu(false)
                                    }
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* <div className="px-5 pb-5">
                        <button className="w-full bg-primary text-white font-inter font-medium px-4 py-3 rounded-md hover:bg-tertiary transition-colors flex items-center justify-center gap-2">
                            <FiMessageCircle size={20} />
                            Enroll Now
                        </button>
                    </div> */}
                </div>
            </Contaoner>
        </nav>
    );
};

export default Navber;