import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const tabs = ["All", "Photos", "Videos", "Projects"];

const data = [
  {
    id: 1,
    type: "Photos",
    title: "Solar Lab Training",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
  },
  {
    id: 2,
    type: "Photos",
    title: "Electrical Wiring Practice",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276",
  },
  {
    id: 3,
    type: "Projects",
    title: "Student Final Project",
    image:
      "https://images.unsplash.com/photo-1581091870622-2c5b6f5d5f1b",
  },
  {
    id: 4,
    type: "Videos",
    title: "Class Overview Session",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(null);

  const filtered =
    active === "All"
      ? data
      : data.filter((item) => item.type === active);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#050816] via-[#0a0f2c] to-[#050816] text-white px-6 py-12">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          NextGen Academy Gallery
        </h1>
        <p className="text-gray-400 mt-2">
          Explore our students' learning journey
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="flex gap-3 bg-white/5 p-2 rounded-full backdrop-blur-md border border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                active === tab
                  ? "bg-linear-to-r from-cyan-400 to-blue-500 text-black font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden border border-white/10 shadow-lg"
              onClick={() => setOpen(item)}
            >
              <img
                src={item.image}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <h2 className="text-lg font-semibold">
                  {item.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              className="relative max-w-4xl w-full"
            >
              <img
                src={open.image}
                className="w-full rounded-2xl shadow-2xl"
              />

              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
              >
                <X size={18} />
              </button>

              <div className="text-center mt-4 text-lg">
                {open.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}