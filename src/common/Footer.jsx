
import React from "react";
import { FaFacebookF, FaWhatsapp, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import { Link } from "react-router";


const Footer = () => {
  return (
    <footer className="bg-[#0B4F7B] text-white pt-16 pb-8 relative overflow-hidden">
      
      {/* Top Gradient Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#39B54A]/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4">

        {/* Top Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-nunito font-bold">
              NextGen <span className="text-[#6DFA18]">Academy</span>
            </h2>

            <p className="text-gray-300 mt-5 leading-7 font-inter">
              Professional training institute for Solar & Electrical
              System Installation and Maintenance with practical learning.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="/"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#39B54A] duration-300 flex items-center justify-center"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="/"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#39B54A] duration-300 flex items-center justify-center"
              >
                <FaYoutube />
              </Link>

              <Link
                href="/"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#39B54A] duration-300 flex items-center justify-center"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold font-inter mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/About">About Us</Link>
              </li>

              <li>
                <Link href="/Courses">Courses</Link>
              </li>

              <li>
                <Link href="/Gallery">Gallery</Link>
              </li>

              <li>
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-semibold font-inter mb-5">
              Courses
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Electrical Wiring</li>
              <li>Solar Installation</li>
              <li>Inverter System</li>
              <li>Home Electrical</li>
              <li>Maintenance Training</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold font-inter mb-5">
              Contact Info
            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="flex gap-3">
                <MdCall className="text-[#6DFA18] text-xl mt-1" />
                <p>+880 1332104015</p>
              </div>

              <div className="flex gap-3">
                <MdEmail className="text-[#6DFA18] text-xl mt-1" />
                <p>nextgenacademy@gmail.com</p>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-[#6DFA18] text-xl mt-1" />
                <p>Homna, Daudkandi, Cumilla</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-gray-300 text-sm">
          <p>
            © 2026 NextGen Academy. All Rights Reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Developed by NextGen Academy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;