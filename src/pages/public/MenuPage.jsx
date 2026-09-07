// MenuPage.jsx
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1];

const categories = [
  "All",
  "Soups",
  "Starters",
  "Chinese",
  "Main Course",
  "Breads",
  "Rice & Biryani",
  "South Indian",
  "Desserts",
  "Beverages",
];

const menuData = [
  {
    category: "Soups",
    featured: true,
     image:
    "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1400&q=90",
    items: [
      {
        name: "Tomato Soup",
        description:
          "Classic tomato soup finished with herbs and gentle spices.",
        price: "₹149",
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=90",
        tag: "Classic",
      },
      {
        name: "Sweet Corn Soup",
        description:
          "Comforting sweet corn soup with fresh vegetables.",
        price: "₹159",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Manchow Soup",
        description:
          "Spicy Indo-Chinese soup topped with crispy noodles.",
        price: "₹169",
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=90",
        tag: "Popular",
      },
    ],
  },

  
  {
    category: "Starters",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=1400&q=90",
    items: [
      {
        name: "Paneer Tikka",
        description:
          "Char-grilled cottage cheese marinated with Indian spices and herbs.",
        price: "₹299",
        image:
          "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=90",
        tag: "Chef's Pick",
      },
      {
        name: "Chilli Paneer",
        description:
          "Crispy paneer tossed with peppers, onions, garlic and chilli sauce.",
        price: "₹289",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Honey Chilli Potatoes",
        description:
          "Golden fried potatoes glazed with a sweet and spicy chilli sauce.",
        price: "₹249",
        image:
          "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=900&q=90",
        tag: "Popular",
      },
      {
        name: "Veg Momos",
        description:
          "Steamed dumplings filled with seasoned vegetables and served with dip.",
        price: "₹219",
        image:
          "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Paneer 65",
        description:
          "Crispy paneer tossed in South Indian-inspired spices.",
        price: "₹289",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },

  {
    category: "Chinese",
    featured: true,
    image:
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1400&q=90",
    items: [
      {
        name: "Veg Hakka Noodles",
        description:
          "Wok-tossed noodles with seasonal vegetables and aromatic sauces.",
        price: "₹229",
        image:
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Schezwan Fried Rice",
        description:
          "Fragrant rice tossed with vegetables and bold Schezwan sauce.",
        price: "₹239",
        image:
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=90",
        tag: "Popular",
      },
      {
        name: "Veg Manchurian",
        description:
          "Crispy vegetable dumplings in a rich Indo-Chinese gravy.",
        price: "₹249",
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Chilli Mushroom",
        description:
          "Mushrooms tossed with peppers, onions and spicy chilli glaze.",
        price: "₹269",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },

  {
    category: "Main Course",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1400&q=90",
    items: [
      {
        name: "Paneer Butter Masala",
        description:
          "Soft paneer in a creamy tomato gravy finished with butter and spices.",
        price: "₹299",
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=90",
        tag: "Chef's Pick",
      },
      {
        name: "Kadhai Paneer",
        description:
          "Paneer cooked with capsicum, onion and freshly ground spices.",
        price: "₹299",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Dal Makhani",
        description:
          "Slow-cooked black lentils finished with butter and cream.",
        price: "₹239",
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=90",
        tag: "Signature",
      },
      {
        name: "Dal Tadka",
        description:
          "Yellow lentils tempered with garlic, cumin and aromatic spices.",
        price: "₹199",
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Mix Veg",
        description:
          "Seasonal vegetables cooked in a rich and comforting Indian gravy.",
        price: "₹229",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Chana Masala",
        description:
          "Chickpeas cooked in a fragrant onion-tomato masala.",
        price: "₹219",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },

  {
    category: "Breads",
    featured: true,
     image:
    "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1400&q=90",
    items: [
      {
        name: "Butter Naan",
        description:
          "Soft tandoori naan brushed with melted butter.",
        price: "₹69",
        image:
          "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Garlic Naan",
        description:
          "Tandoori naan topped with garlic and fresh coriander.",
        price: "₹89",
        image:
          "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=90",
        tag: "Popular",
      },
      {
        name: "Tandoori Roti",
        description:
          "Traditional whole wheat roti cooked in the tandoor.",
        price: "₹39",
        image:
          "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Lachha Paratha",
        description:
          "Flaky layered Indian bread cooked to perfection.",
        price: "₹79",
        image:
          "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },

  {
    category: "Rice & Biryani",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=1400&q=90",
    items: [
      {
        name: "Veg Biryani",
        description:
          "Aromatic basmati rice layered with vegetables and fragrant spices.",
        price: "₹269",
        image:
          "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=900&q=90",
        tag: "Signature",
      },
      {
        name: "Jeera Rice",
        description:
          "Long-grain basmati rice tempered with cumin and herbs.",
        price: "₹179",
        image:
          "https://images.unsplash.com/photo-1596560444929-7f8c7b0b6d1e?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Veg Fried Rice",
        description:
          "Wok-tossed basmati rice with fresh vegetables and sauces.",
        price: "₹219",
        image:
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Plain Rice",
        description:
          "Steamed basmati rice, light and comforting.",
        price: "₹139",
        image:
          "https://images.unsplash.com/photo-1596560444929-7f8c7b0b6d1e?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },

  {
    category: "South Indian",
    featured: true,
  image:
    "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=1400&q=90",
    items: [
      {
        name: "Masala Dosa",
        description:
          "Crisp dosa filled with spiced potato masala, served with chutney and sambar.",
        price: "₹179",
        image:
          "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=90",
        tag: "Popular",
      },
      {
        name: "Plain Dosa",
        description:
          "Classic crisp dosa served with fresh chutneys and sambar.",
        price: "₹149",
        image:
          "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Idli Sambar",
        description:
          "Soft steamed idlis served with warm sambar and chutney.",
        price: "₹139",
        image:
          "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Paneer Dosa",
        description:
          "Crisp dosa filled with a delicious paneer and vegetable filling.",
        price: "₹199",
        image:
          "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },

  {
    category: "Desserts",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=90",
    items: [
      {
        name: "Gulab Jamun",
        description:
          "Soft milk-solid dumplings soaked in warm sugar syrup.",
        price: "₹99",
        image:
          "https://images.unsplash.com/photo-1601303516534-7f8a8e4e6f66?auto=format&fit=crop&w=900&q=90",
        tag: "Classic",
      },
      {
        name: "Brownie with Ice Cream",
        description:
          "Warm chocolate brownie served with creamy vanilla ice cream.",
        price: "₹179",
        image:
          "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=900&q=90",
        tag: "Popular",
      },
      {
        name: "Vanilla Ice Cream",
        description:
          "Classic creamy vanilla ice cream.",
        price: "₹99",
        image:
          "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Chocolate Ice Cream",
        description:
          "Rich and indulgent chocolate ice cream.",
        price: "₹109",
        image:
          "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },

  {
    category: "Beverages",
    featured: true,
  image:
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1400&q=90",
    items: [
      {
        name: "Masala Tea",
        description:
          "Indian tea brewed with aromatic spices.",
        price: "₹69",
        image:
          "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Cold Coffee",
        description:
          "Chilled creamy coffee blended to perfection.",
        price: "₹139",
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=90",
        tag: "Popular",
      },
      {
        name: "Fresh Lime Soda",
        description:
          "Refreshing lime with a sparkling finish.",
        price: "₹99",
        image:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=90",
      },
      {
        name: "Mango Shake",
        description:
          "Creamy seasonal mango blended with chilled milk.",
        price: "₹149",
        image:
          "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },
];
const categoryImages = {
  All: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",

  Soups: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=85",

  Starters: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85",

  Chinese: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85",

  "Main Course": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=85",

  Breads: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1200&q=85",

  "Rice & Biryani": "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=1200&q=85",

  "South Indian": "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=1200&q=85",

  Desserts: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",

  Beverages: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=85",
};
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease },
  },
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const visibleSections =
    activeCategory === "All"
      ? menuData
      : menuData.filter(
          (section) => section.category === activeCategory
        );

  const handleCategory = (category) => {
    setActiveCategory(category);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-[#0b0b0b] text-[#f5efe6] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[85vh] mt-[80px] flex items-end overflow-hidden">

        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease }}
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=90"
          alt="Atulyam Restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-black/20 to-black/10" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-8 md:pb-12">


          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-serif text-[18vw] md:text-[10vw] leading-[0.78] tracking-[-0.05em]"
          >
            The
            <br />
            <span className="italic text-[#f28a2e]">Atulyam</span>
            <br />
            Menu
          </motion.h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-10">

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-xl text-white/75 text-sm md:text-base leading-relaxed"
            >
              Home-inspired recipes, comforting flavours and carefully
              crafted dishes — made to be shared around the table.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 text-white/60"
            >
              <ArrowDown size={18} />
              <span className="text-xs uppercase tracking-[0.25em]">
                Explore Menu
              </span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36">

        <div className="absolute top-0 left-6 right-6 md:left-10 md:right-10 border-t border-white/10" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-end">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-8"
          >
            <div className="flex items-center gap-4 mb-8">

              <span className="text-[#f28a2e] font-serif italic text-lg">
                01
              </span>

              <span className="h-px w-14 bg-[#f28a2e]/60" />

              <p className="text-white/45 uppercase tracking-[0.35em] text-[10px] md:text-xs">
                Our Menu
              </p>

            </div>

            <h2 className="font-serif text-[15vw] md:text-[8vw] leading-[0.82] tracking-[-0.05em]">
              Food made
              <br />
              <span className="italic text-[#f28a2e]">
                with feeling.
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-4 md:pb-2"
          >
            <div className="border-l border-[#f28a2e]/40 pl-6 md:pl-8">

              <p className="text-white/65 text-sm md:text-base leading-7">
                At Atulyam, every plate carries a little piece of
                tradition. From familiar Indian favourites to flavours
                inspired by kitchens across the country, our menu is
                created for comfort, connection and good conversations.
              </p>

              <div className="flex items-center gap-3 mt-8">

                <span className="text-[#f28a2e] text-xs">
                  ●
                </span>

                <span className="text-white/35 text-[10px] uppercase tracking-[0.25em]">
                  Made to be shared
                </span>

              </div>

            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 md:mt-28 pt-6 border-t border-white/10"
        >

          {[
            ["Philosophy", "Simple · Honest"],
            ["Cuisine", "Indian · Inspired"],
            ["Experience", "Warm · Familiar"],
            ["Atulyam", "Food with a story"],
          ].map(([label, value], index) => (
            <div
              key={label}
              className={index === 3 ? "text-left md:text-right" : ""}
            >
              <p className="text-white/25 text-[9px] uppercase tracking-[0.25em] mb-2">
                {label}
              </p>

              <p
                className={`font-serif text-lg ${
                  index === 3
                    ? "italic text-[#f28a2e]"
                    : "text-white/80"
                }`}
              >
                {value}
              </p>
            </div>
          ))}

        </motion.div>

      </section>

      {/* CATEGORY NAV */}
      <div className="sticky top-0 z-50 bg-[#0b0b0b]/95 backdrop-blur-xl border-y border-white/10">

        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          <div className="flex gap-7 md:gap-10 overflow-x-auto py-5 scrollbar-hide">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => handleCategory(category)}
                className={`relative whitespace-nowrap text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
                  activeCategory === category
                    ? "text-[#f28a2e]"
                    : "text-white/45 hover:text-white"
                }`}
              >
                {category}

                {activeCategory === category && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute -bottom-[21px] left-0 right-0 h-[1px] bg-[#f28a2e]"
                  />
                )}

              </button>

            ))}

          </div>

        </div>
      </div>

      {/* MENU */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">

        <div className="space-y-28 md:space-y-40">

          {visibleSections.map((section, sectionIndex) => (

            <motion.section
              key={section.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              variants={fadeUp}
            >

              <div className="flex items-end justify-between border-b border-white/15 pb-6 mb-10">

                <div>

                  <p className="text-[#f28a2e] text-xs tracking-[0.3em] uppercase mb-4">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </p>

                  <h2 className="font-serif text-5xl md:text-7xl leading-none">
                    {section.category}
                  </h2>

                </div>

                <span className="hidden md:block text-white/30 text-xs uppercase tracking-[0.2em]">
                  {section.items.length} Items
                </span>

              </div>

              {section.featured ? (

                <div className="grid md:grid-cols-12 gap-8 md:gap-12">

                  <motion.div
                    variants={imageReveal}
                    className="md:col-span-5 h-[420px] md:h-[620px] overflow-hidden"
                  >
                    <img
                      src={section.image}
                      alt={section.category}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]"
                    />
                  </motion.div>

                  <div className="md:col-span-7 flex flex-col justify-center">

                    {section.items.map((item, index) => (
                      <MenuItem
                        key={item.name}
                        item={item}
                        index={index}
                        onClick={() => setSelectedItem(item)}
                      />
                    ))}

                  </div>

                </div>

              ) : (

                <div className="grid md:grid-cols-2 gap-x-16">

                  {section.items.map((item, index) => (
                    <MenuItem
                      key={item.name}
                      item={item}
                      index={index}
                      onClick={() => setSelectedItem(item)}
                    />
                  ))}

                </div>

              )}

            </motion.section>

          ))}

        </div>

      </section>
{/* =====================================================
    PREMIUM MENU CLOSING
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
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/40" />
  </motion.div>


  {/* CONTENT */}
  <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">

    <div className="grid md:grid-cols-12 gap-14 md:gap-16 items-end">


      {/* LEFT */}
      <div className="md:col-span-8">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="text-[#f28a2e] font-serif italic text-lg">
            09
          </span>

          <span className="w-14 h-px bg-[#f28a2e]" />

          <span className="text-white/50 text-[10px] uppercase tracking-[0.3em]">
            The Atulyam Experience
          </span>
        </motion.div>


        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-serif text-6xl md:text-[8vw] leading-[0.82] tracking-[-0.05em]"
        >
          Come hungry.
          <br />
          <span className="italic text-[#f28a2e]">
            Leave happy.
          </span>
        </motion.h2>


        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 max-w-xl text-white/60 text-sm md:text-base leading-7"
        >
          Great food tastes even better when shared.
          Bring your people, take your time and make
          yourself at home at Atulyam.
        </motion.p>

      </div>


      {/* RIGHT — RESERVATION CARD */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:col-span-4"
      >

        <div className="relative border border-white/20 bg-black/45 backdrop-blur-md p-7 md:p-9">

          <div className="flex justify-between items-start mb-12">

            <div>
              <p className="text-[#f28a2e] text-[10px] uppercase tracking-[0.3em] mb-3">
                Your table awaits
              </p>

              <h3 className="font-serif text-3xl md:text-4xl">
                Dine with us.
              </h3>
            </div>

            <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
              <ArrowUpRight size={17} />
            </div>

          </div>


          {/* DETAILS */}
          <div className="space-y-5 mb-8">

            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-white/35 text-[9px] uppercase tracking-[0.2em]">
                Experience
              </span>

              <span className="text-white/75 text-xs">
                Lunch · Dinner
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-white/35 text-[9px] uppercase tracking-[0.2em]">
                Cuisine
              </span>

              <span className="text-white/75 text-xs">
                Indian · Multi Cuisine
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-white/35 text-[9px] uppercase tracking-[0.2em]">
                Atmosphere
              </span>

              <span className="text-white/75 text-xs">
                Warm · Elegant
              </span>
            </div>

          </div>


          {/* BUTTON */}
          <button
            onClick={() => window.location.href = "/reservation"}
            className="group w-full flex items-center justify-between bg-[#f28a2e] text-black px-6 py-4 hover:bg-white transition-colors duration-500"
          >

            <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
              Reserve a Table
            </span>

            <ArrowUpRight
              size={18}
              className="group-hover:rotate-45 transition-transform duration-300"
            />

          </button>

        </div>

      </motion.div>

    </div>


    {/* BOTTOM INFO */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-20 pt-6 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-5"
    >

      <p className="text-white/30 text-[9px] uppercase tracking-[0.25em]">
        Food · People · Moments
      </p>

      <p className="text-white/30 text-[9px] uppercase tracking-[0.25em]">
        Atulyam Restaurant
      </p>

      <p className="text-[#f28a2e] text-[9px] uppercase tracking-[0.25em]">
        Made with warmth
      </p>

    </motion.div>

  </div>

</section>
      {/* QUICK VIEW MODAL */}
      <AnimatePresence>

        {selectedItem && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-5 md:p-10"
          >

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.45, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#151515] border border-white/10 overflow-hidden"
            >

              <button
                onClick={() => setSelectedItem(null)}
                className="absolute z-20 top-5 right-5 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-[#f28a2e] hover:text-black transition-all"
              >
                <X size={18} />
              </button>

              <div className="grid md:grid-cols-2">

                <div className="h-[330px] md:h-[560px]">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">

                  {selectedItem.tag && (
                    <span className="text-[#f28a2e] text-[10px] uppercase tracking-[0.3em] mb-5">
                      {selectedItem.tag}
                    </span>
                  )}

                  <h3 className="font-serif text-4xl md:text-6xl leading-none mb-5">
                    {selectedItem.name}
                  </h3>

                  <div className="w-12 h-px bg-[#f28a2e] mb-6" />

                  <p className="text-white/55 text-sm md:text-base leading-7">
                    {selectedItem.description}
                  </p>

                  <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">

                    <span className="font-serif text-2xl text-[#f28a2e]">
                      {selectedItem.price}
                    </span>

                    <span className="text-white/30 text-[9px] uppercase tracking-[0.25em]">
                      Atulyam Kitchen
                    </span>

                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}


/* =====================================================
   MENU ITEM
===================================================== */

function MenuItem({ item, index, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.04,
        ease,
      }}
      className="group w-full text-left border-b border-white/10 py-6 md:py-7"
    >

      <div className="flex items-start justify-between gap-6">

        <div className="max-w-[80%]">

          <div className="flex items-center gap-3">

            <h3 className="font-serif text-xl md:text-2xl group-hover:text-[#f28a2e] transition-colors duration-300">
              {item.name}
            </h3>

            {item.tag && (
              <span className="hidden sm:block text-[8px] uppercase tracking-[0.2em] text-[#f28a2e] border border-[#f28a2e]/30 px-2 py-1">
                {item.tag}
              </span>
            )}

          </div>

          <p className="text-white/40 text-xs md:text-sm leading-6 mt-2 max-w-lg">
            {item.description}
          </p>

        </div>

        <div className="flex flex-col items-end gap-2">

          <span className="font-serif text-lg md:text-xl text-[#f28a2e] whitespace-nowrap">
            {item.price}
          </span>

          <ArrowUpRight
            size={15}
            className="text-white/20 group-hover:text-[#f28a2e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
          />

        </div>

      </div>

    </motion.button>
  );
}