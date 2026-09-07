// GalleryPage.jsx
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1];

const galleryData = [
  {
    category: "Dining",
    title: "The Atulyam Table",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=90",
  },
  {
    category: "Food",
    title: "Made to be Shared",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=90",
  },
  {
    category: "Ambience",
    title: "A Place to Gather",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=90",
  },
  {
    category: "Food",
    title: "Flavours of Atulyam",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1600&q=90",
  },
  {
    category: "Dining",
    title: "Around the Table",
    image:
      "https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&w=1600&q=90",
  },
  {
    category: "Food",
    title: "Fresh From the Kitchen",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=1600&q=90",
  },
  {
    category: "Ambience",
    title: "Evenings at Atulyam",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=90",
  },
  {
    category: "Food",
    title: "Every Bite Matters",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=1600&q=90",
  },
  {
    category: "Dining",
    title: "Good Food. Good Company.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=90",
  },
];

const filters = ["All", "Food", "Dining", "Ambience"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeFilter === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeFilter);

  const selectedIndex = selectedImage
    ? filteredImages.findIndex((item) => item.image === selectedImage.image)
    : -1;

  const showPrevious = () => {
    if (selectedIndex === -1) return;

    const index =
      selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1;

    setSelectedImage(filteredImages[index]);
  };

  const showNext = () => {
    if (selectedIndex === -1) return;

    const index =
      selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1;

    setSelectedImage(filteredImages[index]);
  };

  return (
    <main className="bg-black text-white min-h-screen">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[85vh] mt-[80px] overflow-hidden">

        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease }}
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=90"
          alt="Atulyam Restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />

        <div className="relative z-10 min-h-[85vh] max-w-[1400px] mx-auto px-6 md:px-10 flex items-center -translate-y-8 md:-translate-y-10">

          <div className="max-w-5xl">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="flex items-center gap-4 mb-7"
            >
              <span className="text-[#f28a2e] font-serif italic text-lg">
                01
              </span>

              <span className="w-14 h-px bg-[#f28a2e]" />

              <span className="text-white/60 text-[10px] uppercase tracking-[0.3em]">
                The Atulyam Gallery
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="font-serif text-[16vw] md:text-[9vw] leading-[0.8] tracking-[-0.06em]"
            >
              Moments
              <br />
              <span className="italic text-[#f28a2e]">
                worth sharing.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
              className="mt-8 max-w-md text-white/55 text-sm md:text-base leading-7"
            >
              A glimpse into the food, people and moments
              that make Atulyam more than just a place to eat.
            </motion.p>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">

        <div className="grid md:grid-cols-12 gap-10 items-end">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="md:col-span-8"
          >

            <div className="flex items-center gap-4 mb-7">
              <span className="text-[#f28a2e] font-serif italic text-lg">
                02
              </span>

              <span className="w-12 h-px bg-white/20" />

              <span className="text-white/35 text-[10px] uppercase tracking-[0.3em]">
                Inside Atulyam
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-7xl lg:text-[6vw] leading-[0.86] tracking-[-0.05em]">
              See the story
              <br />
              <span className="italic text-[#f28a2e]">
                behind the plate.
              </span>
            </h2>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="md:col-span-4"
          >
            <p className="text-white/45 text-sm leading-7 border-l border-[#f28a2e]/40 pl-6">
              From the first plate leaving our kitchen to the
              conversations that continue long after dinner,
              every moment is part of the Atulyam experience.
            </p>
          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FILTER BAR
      ===================================================== */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10">

        <div className="border-y border-white/10 py-4 flex items-center justify-between gap-5">

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">

            {filters.map((filter) => (

              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  shrink-0 px-5 py-3
                  text-[10px] uppercase tracking-[0.25em]
                  transition-all duration-300
                  ${
                    activeFilter === filter
                      ? "bg-[#f28a2e] text-black"
                      : "text-white/40 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {filter}
              </button>

            ))}

          </div>

          <span className="hidden md:block text-white/20 text-[9px] uppercase tracking-[0.25em]">
            {filteredImages.length} moments
          </span>

        </div>

      </section>


      {/* =====================================================
          EDITORIAL GALLERY
      ===================================================== */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-14 md:py-20">

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-3"
        >

          {filteredImages.map((item, index) => {

            const layouts = [
              "md:col-span-7 md:row-span-2",
              "md:col-span-5",
              "md:col-span-5",
              "md:col-span-5",
              "md:col-span-7 md:row-span-2",
              "md:col-span-5",
              "md:col-span-7",
              "md:col-span-5",
              "md:col-span-7",
            ];

            const aspect =
              index % 5 === 0
                ? "aspect-[4/5]"
                : index % 3 === 0
                ? "aspect-[16/10]"
                : "aspect-[4/3]";

            return (
              <motion.button
                layout
                key={item.image}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.04,
                  ease,
                }}
                onClick={() => setSelectedImage(item)}
                className={`
                  group relative overflow-hidden text-left
                  ${layouts[index % layouts.length]}
                  ${aspect}
                `}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute inset-0
                    w-full h-full object-cover
                    transition-transform duration-[1.2s]
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">

                  <div className="flex items-end justify-between">

                    <div>
                      <p className="text-[#f28a2e] text-[9px] uppercase tracking-[0.25em] mb-2">
                        {item.category}
                      </p>

                      <h3 className="font-serif text-xl md:text-2xl">
                        {item.title}
                      </h3>
                    </div>

                    <span className="w-9 h-9 border border-white/30 flex items-center justify-center">
                      <ArrowUpRight size={15} />
                    </span>

                  </div>

                </div>

              </motion.button>
            );
          })}

        </motion.div>

      </section>


     {/* =====================================================
    GALLERY CLOSING — CINEMATIC
===================================================== */}
<section className="relative overflow-hidden border-t border-white/10">

  {/* BACKGROUND IMAGE */}
  <motion.div
    initial={{ scale: 1.08 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.4, ease }}
    className="absolute inset-0"
  >
    <img
      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=90"
      alt="Atulyam dining experience"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/75" />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30" />
  </motion.div>


  {/* CONTENT */}
  <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36">

    {/* TOP LABEL */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease }}
      className="flex items-center gap-4 mb-12"
    >

      <span className="text-[#f28a2e] font-serif italic text-lg">
        03
      </span>

      <span className="w-14 h-px bg-[#f28a2e]" />

      <span className="text-white/45 text-[10px] uppercase tracking-[0.3em]">
        More Than A Meal
      </span>

    </motion.div>


    {/* MAIN STATEMENT */}
    <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease }}
        className="md:col-span-8"
      >

        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[7vw] leading-[0.84] tracking-[-0.055em]">

          Every table has

          <br />

          <span className="italic text-[#f28a2e]">
            a story.
          </span>

        </h2>

      </motion.div>

{/* RIGHT TEXT */}
<motion.div
  initial={{ opacity: 0, x: 25 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.15, ease }}
  className="md:col-span-4 md:pb-2"
>
  <div className="border-l border-[#f28a2e]/50 pl-6 md:pl-8">

    <p className="text-white/75 text-sm md:text-[15px] leading-7 max-w-md">
      Some moments are captured in photographs.
      Others stay with you long after the last bite.
    </p>

    <div className="w-10 h-px bg-[#f28a2e]/50 my-7" />

    <p className="text-white/50 text-xs md:text-sm leading-6 max-w-md">
      At Atulyam, we believe great food is only
      the beginning of a memorable experience.
    </p>

  </div>
</motion.div>
    </div>


    {/* BOTTOM DETAILS */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.25, ease }}
      className="mt-20 md:mt-28 pt-6 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-5"
    >

      <div className="flex items-center gap-3">

        <span className="w-2 h-2 rounded-full bg-[#f28a2e]" />

        <span className="text-white/35 text-[9px] uppercase tracking-[0.25em]">
          Food
        </span>

      </div>


      <span className="hidden md:block text-white/20 text-[9px] uppercase tracking-[0.25em]">
        People · Moments · Memories
      </span>


      <span className="text-[#f28a2e] text-[9px] uppercase tracking-[0.25em]">
        Atulyam Restaurant
      </span>

    </motion.div>

  </div>

</section>


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}
      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-5 md:p-10"
            onClick={() => setSelectedImage(null)}
          >

            {/* CLOSE */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 md:top-8 md:right-8 w-11 h-11 border border-white/20 flex items-center justify-center hover:bg-[#f28a2e] hover:text-black transition-colors z-20"
            >
              <X size={19} />
            </button>


            {/* PREVIOUS */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
              className="absolute left-4 md:left-8 w-11 h-11 border border-white/20 flex items-center justify-center hover:bg-[#f28a2e] hover:text-black transition-colors"
            >
              <ChevronLeft size={20} />
            </button>


            {/* IMAGE */}
            <motion.div
              key={selectedImage.image}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[78vh] w-full object-contain"
              />

              <div className="mt-5 flex items-center justify-between">

                <div>
                  <p className="text-[#f28a2e] text-[9px] uppercase tracking-[0.25em] mb-2">
                    {selectedImage.category}
                  </p>

                  <h3 className="font-serif text-2xl md:text-3xl">
                    {selectedImage.title}
                  </h3>
                </div>

                <span className="text-white/30 text-[9px] uppercase tracking-[0.25em]">
                  {selectedIndex + 1} / {filteredImages.length}
                </span>

              </div>

            </motion.div>


            {/* NEXT */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 md:right-8 w-11 h-11 border border-white/20 flex items-center justify-center hover:bg-[#f28a2e] hover:text-black transition-colors"
            >
              <ChevronRight size={20} />
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}