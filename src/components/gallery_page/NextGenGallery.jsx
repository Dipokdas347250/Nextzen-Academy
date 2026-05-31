import { useState } from "react";
import Container from "../../container/Container";

const categories = ["All", "Campus", "Classes", "Events", "Students", "Labs"];

const galleryItems = [
  { id: 1, category: "Campus", title: "Main Building", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80", wide: true },
  { id: 2, category: "Classes", title: "Science Class", img: "https://images.unsplash.com/photo-1532094349884-543559c5f2f0?w=600&q=80" },
  { id: 3, category: "Students", title: "Study Group", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80" },
  { id: 4, category: "Events", title: "Annual Day", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", tall: true },
  { id: 5, category: "Labs", title: "Computer Lab", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" },
  { id: 6, category: "Campus", title: "Library Hall", img: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=80" },
  { id: 7, category: "Students", title: "Sports Day", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80", wide: true },
  { id: 8, category: "Events", title: "Science Fair", img: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80" },
  { id: 9, category: "Classes", title: "Math Session", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80" },
  { id: 10, category: "Labs", title: "Physics Lab", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80" },
  { id: 11, category: "Campus", title: "Green Campus", img: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80", tall: true },
  { id: 12, category: "Students", title: "Graduation", img: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&q=80" },
];

export default function NextGenGallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter(i => i.category === active);

  return (

    <>
    <section className="relative overflow-hidden bg-linear-to-br from-sky-700 via-cyan-500 to-teal-400 py-20 ">
        <Container>


    <div className="min-h-screen font-sans pb-16">

      {/* Header */}
     

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 ">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-10 py-4 rounded-full text-[20px] font-inter font-semibold transition-all duration-200 cursor-pointer
              ${active === cat
                ? "bg-linear-to-r from-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-200"
                : "bg-white text-slate-500 border border-slate-200 hover:border-sky-300 hover:text-sky-600"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 mt-10 ">
        {filtered.map(item => (
          <div
            key={item.id}
            onClick={() => setLightbox(item)}
            className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300
              ${item.wide ? "col-span-2" : "col-span-1"}
              ${item.tall ? "row-span-2" : "row-span-1"}
            `}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block bg-cyan-500/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide mb-1">
                {item.category}
              </span>
              <p className="text-white font-semibold text-sm">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-slate-400">
          <p className="text-5xl mb-3">📷</p>
          <p className="text-lg font-medium">No photos in this category yet.</p>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={lightbox.img}
              alt={lightbox.title}
              className="w-full max-h-110 object-cover"
            />
            <div className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="font-bold text-lg text-slate-800">{lightbox.title}</p>
                <p className="text-sm text-slate-500 mt-0.5">{lightbox.category}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold text-sm px-4 py-2 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => setLightbox(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold text-sm px-4 py-2 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
        </Container>
    </section>
    </>

  );
}