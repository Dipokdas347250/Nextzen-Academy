
import React from "react";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";




const ContactForm = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F5FAFD] to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>
            <p className="text-[#0397BE] font-semibold uppercase tracking-wider font-inter">
              Contact Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold font-inter text-[#0B4F7B] mt-3 leading-tight">
              Get In Touch With
              <span className="text-[#39B54A]"> Nextzen Academy</span>
            </h2>

            <p className="text-gray-600 mt-5 text-lg font-inter">
              Learn Solar & Electrical System Installation and Maintenance
              through hands-on practical training. Contact us for admission,
              consultancy, and course details.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-2xl">
                <div className="w-12 h-12 bg-[#0397BE]/10 rounded-full flex items-center justify-center text-[#0397BE] text-xl">
                  <IoCall />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B4F7B]">
                    Call Us
                  </h4>
                  <p className="text-gray-600">+880 1XXXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-2xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl">
                  <IoLogoWhatsapp />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B4F7B]">
                    WhatsApp
                  </h4>
                  <p className="text-gray-600">+880 1XXXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-2xl">
                <div className="w-12 h-12 bg-[#39B54A]/10 rounded-full flex items-center justify-center text-[#39B54A] text-xl">
                  <FaLocationDot />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B4F7B]">
                    Location
                  </h4>
                  <p className="text-gray-600">
                    Homna, Daudkandi, Cumilla
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white rounded-[30px] shadow-xl p-8 border border-gray-100">
            <h3 className="text-3xl font-bold font-inter text-[#0B4F7B] mb-6">
              Send Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#0397BE]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#0397BE]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#0397BE]"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#0397BE]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0B4F7B] to-[#0397BE] hover:scale-[1.02] transition-all duration-300 text-white font-semibold py-4 rounded-xl"
              >
                Send Message →
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;