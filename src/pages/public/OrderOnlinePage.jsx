import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext.jsx";
import {
  ShoppingBag,
  Plus,
  Minus,
  ArrowUpRight,
  X,
  Check,
  ChevronRight,
} from "lucide-react";

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

const menuItems = [
  {
    id: 1,
    name: "Tomato Basil Soup",
    category: "Soups",
    price: 149,
    description: "Slow-cooked tomato soup finished with fresh basil.",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=90",
    veg: true,
  },
  {
    id: 2,
    name: "Cream of Mushroom Soup",
    category: "Soups",
    price: 179,
    description: "Rich and creamy mushroom soup with subtle herbs.",
    image:
      "https://plus.unsplash.com/premium_photo-1669631647044-3201d7f737ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JlYW0lMjBvZiUyMG11c2hyb29tJTIwc291cHxlbnwwfHwwfHx8MA%3D%3D",
    veg: true,
  },
  {
    id: 3,
    name: "Paneer Tikka",
    category: "Starters",
    price: 249,
    description: "Char-grilled cottage cheese with peppers and spices.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=90",
    veg: true,
  },
  {
    id: 4,
    name: "Chilli Paneer",
    category: "Starters",
    price: 229,
    description: "Crispy paneer tossed with peppers in a chilli glaze.",
    image:
      "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?q=80&w=1013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    veg: true,
  },
  {
    id: 5,
    name: "Honey Chilli Potatoes",
    category: "Starters",
    price: 199,
    description: "Crispy potatoes coated in a sweet and spicy glaze.",
    image:
      "https://images.unsplash.com/photo-1710508774177-7ac2f3492675?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9uZXklMjBjaGlsbGklMjBwb3RhdG98ZW58MHx8MHx8fDA%3D",
    veg: true,
  },
  {
    id: 6,
    name: "Veg Manchurian",
    category: "Chinese",
    price: 219,
    description: "Crispy vegetable dumplings in a savoury Manchurian sauce.",
    image:
      "https://images.pexels.com/photos/28674530/pexels-photo-28674530.jpeg",
    veg: true,
  },
  {
    id: 7,
    name: "Schezwan Noodles",
    category: "Chinese",
    price: 229,
    description: "Wok-tossed noodles with vegetables and Schezwan sauce.",
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=1200&q=90",
    veg: true,
  },
  {
    id: 8,
    name: "Veg Hakka Noodles",
    category: "Chinese",
    price: 209,
    description: "Classic Hakka noodles tossed with fresh vegetables.",
    image:
      "https://images.pexels.com/photos/2764905/pexels-photo-2764905.jpeg",
    veg: true,
  },
  {
    id: 9,
    name: "Paneer Butter Masala",
    category: "Main Course",
    price: 279,
    description: "Soft paneer in a rich tomato, butter and cream gravy.",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=90",
    veg: true,
  },
  {
    id: 10,
    name: "Kadhai Paneer",
    category: "Main Course",
    price: 269,
    description: "Paneer cooked with capsicum, onion and aromatic spices.",
    image:
      "https://images.pexels.com/photos/12737799/pexels-photo-12737799.jpeg",
    veg: true,
  },
  {
    id: 11,
    name: "Dal Makhani",
    category: "Main Course",
    price: 229,
    description: "Slow-cooked black lentils finished with butter and cream.",
    image:
      "https://plus.unsplash.com/premium_photo-1712678664930-ef7051cd1b31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRhbCUyMG1ha2huaXxlbnwwfHwwfHx8MA%3D%3D",
    veg: true,
  },
  {
    id: 12,
    name: "Butter Naan",
    category: "Breads",
    price: 59,
    description: "Soft tandoor-baked naan brushed with butter.",
    image:
      "https://images.pexels.com/photos/28125427/pexels-photo-28125427.jpeg",
    veg: true,
  },
  {
    id: 13,
    name: "Garlic Naan",
    category: "Breads",
    price: 79,
    description: "Tandoor-baked naan topped with garlic and coriander.",
    image:
      "https://images.pexels.com/photos/30203311/pexels-photo-30203311.jpeg",
    veg: true,
  },
  {
    id: 14,
    name: "Veg Biryani",
    category: "Rice & Biryani",
    price: 249,
    description: "Fragrant basmati rice layered with vegetables and spices.",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwYmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
    veg: true,
  },
  {
    id: 15,
    name: "Schezwan Fried Rice",
    category: "Rice & Biryani",
    price: 219,
    description: "Wok-fried rice tossed with vegetables and Schezwan sauce.",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=90",
    veg: true,
  },
  {
    id: 16,
    name: "Masala Dosa",
    category: "South Indian",
    price: 169,
    description: "Crisp dosa filled with spiced potato masala.",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D",
    veg: true,
  },
  {
    id: 17,
    name: "Idli Sambar",
    category: "South Indian",
    price: 129,
    description: "Soft steamed idlis served with sambar and chutneys.",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=90",
    veg: true,
  },
  {
    id: 18,
    name: "Gulab Jamun",
    category: "Desserts",
    price: 99,
    description: "Warm milk dumplings soaked in fragrant sugar syrup.",
    image:
      "https://images.pexels.com/photos/37294501/pexels-photo-37294501.jpeg",
    veg: true,
  },
  {
    id: 19,
    name: "Chocolate Brownie",
    category: "Desserts",
    price: 159,
    description: "Warm chocolate brownie with a rich fudgy centre.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=90",
    veg: true,
  },
  {
    id: 20,
    name: "Fresh Lime Soda",
    category: "Beverages",
    price: 89,
    description: "Refreshing lime soda served sweet, salty or classic.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=90",
    veg: true,
  },
];

const OrderOnlinePage = () => {
  const {
    items: cartItems,
    addToCart,
    updateQuantity,
    setIsCartOpen,
  } = useCart();

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [ordered, setOrdered] = useState(false);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return menuItems;

    return menuItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + (Number(item.price) || 0) * (item.quantity || 0),
    0
  );

  const getQuantity = (id) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);
    return item?.quantity || 0;
  };

  const handleAdd = (item) => {
    addToCart(item, 1);
  };

  const handleDecrease = (id) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);

    if (!item) return;

    updateQuantity(id, item.quantity - 1);
  };

  const handlePlaceOrder = () => {
    if (!totalItems) return;

    setIsCartOpen(false);
    setOrdered(true);
  };

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">

      {/* =========================================================
          HERO
         ========================================================= */}

      {/* =========================================================
          MENU
      ========================================================= */}
      <section
        id="online-menu"
        className="bg-[#0b0b0b] border-y border-white/10"
      >

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24">

          {/* SECTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-12 md:mb-16"
          >

            <div className="md:col-span-7">

              <span className="text-white/35 text-[9px] uppercase tracking-[0.3em]">
                Explore The Menu
              </span>

              <h2 className="font-serif text-5xl md:text-6xl lg:text-[5.5vw] leading-[0.86] tracking-[-0.055em] mt-4">
                Pick your
                <br />
                <span className="italic text-[#f28a2e]">
                  favourites.
                </span>
              </h2>

            </div>

            <div className="md:col-span-5">

              <div className="border-l border-white/15 pl-6 md:pl-8">

                <p className="text-white/45 text-sm md:text-[15px] leading-7 max-w-md">
                  From comforting classics to flavour-packed
                  favourites, choose something delicious for
                  every mood.
                </p>

              </div>

            </div>

          </motion.div>


          {/* CATEGORY FILTER */}
          <div className="relative mb-12 md:mb-16">

            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">

              {categories.map((category) => {

                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      relative shrink-0 px-5 py-3
                      text-[10px] uppercase tracking-[0.18em]
                      border transition-all duration-300
                      ${
                        active
                          ? "bg-[#f28a2e] text-black border-[#f28a2e]"
                          : "border-white/10 text-white/45 hover:text-white hover:border-white/25"
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}

            </div>

          </div>


          {/* FOOD GRID */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          >

            <AnimatePresence mode="popLayout">

              {filteredItems.map((item, index) => {

                const quantity = getQuantity(item.id);

                return (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.025,
                      ease,
                    }}
                    className="group bg-black border border-white/10 hover:border-[#f28a2e]/40 transition-colors duration-500"
                  >

                    {/* IMAGE */}
                    <div
                      className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

                      {/* VEG */}
                      {item.veg && (
                        <div className="absolute top-4 left-4 w-5 h-5 border border-green-400/70 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                      )}

                      {/* QUICK VIEW */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedItem(item);
                        }}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-[#f28a2e] hover:text-black hover:border-[#f28a2e] transition-all duration-300"
                        aria-label={`View ${item.name}`}
                      >
                        <ArrowUpRight size={15} />
                      </button>

                      {/* CATEGORY */}
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white/60 text-[8px] uppercase tracking-[0.25em]">
                          {item.category}
                        </span>
                      </div>

                    </div>


                    {/* CONTENT */}
                    <div className="p-5 md:p-6">

                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <h3 className="font-serif text-2xl md:text-[26px] leading-tight tracking-[-0.03em]">
                            {item.name}
                          </h3>

                          <p className="text-white/35 text-xs leading-6 mt-2 line-clamp-2">
                            {item.description}
                          </p>
                        </div>

                        <span className="font-serif text-xl text-[#f28a2e] shrink-0">
                          ₹{item.price}
                        </span>

                      </div>


                      {/* ADD / QUANTITY */}
                      <div className="mt-6">

                        {quantity === 0 ? (

                          <button
                            onClick={() => handleAdd(item)}
                            className="w-full h-12 border border-white/15 hover:border-[#f28a2e] hover:bg-[#f28a2e] hover:text-black flex items-center justify-between px-4 text-[10px] uppercase tracking-[0.2em] transition-all duration-300"
                          >
                            <span>Add To Order</span>

                            <Plus
                              size={16}
                              className="text-[#f28a2e] group-hover:text-black"
                            />
                          </button>

                        ) : (

                          <div className="w-full h-12 border border-[#f28a2e]/50 bg-[#f28a2e]/5 flex items-center justify-between">

                            <button
                              onClick={() =>
                                handleDecrease(item.id)
                              }
                              className="w-12 h-full flex items-center justify-center text-white/60 hover:text-[#f28a2e] transition-colors"
                            >
                              <Minus size={15} />
                            </button>

                            <div className="flex items-center gap-3">

                              <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                                Added
                              </span>

                              <span className="font-serif text-xl text-[#f28a2e]">
                                {quantity}
                              </span>

                            </div>

                            <button
                              onClick={() => handleAdd(item)}
                              className="w-12 h-full flex items-center justify-center text-white/60 hover:text-[#f28a2e] transition-colors"
                            >
                              <Plus size={15} />
                            </button>

                          </div>

                        )}

                      </div>

                    </div>

                  </motion.article>
                );
              })}

            </AnimatePresence>

          </motion.div>


          {/* EMPTY */}
          {filteredItems.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl text-white/50">
                Nothing here yet.
              </p>
            </div>
          )}

        </div>
      </section>


      {/* =========================================================
          ORDER SUMMARY STRIP
      ========================================================= */}
      <section className="bg-black border-b border-white/10">

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 md:py-12">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-7">

            <div className="flex items-center gap-5">

              <div className="w-12 h-12 rounded-full border border-[#f28a2e]/40 flex items-center justify-center">
                <ShoppingBag
                  size={19}
                  className="text-[#f28a2e]"
                />
              </div>

              <div>
                <p className="text-white/35 text-[9px] uppercase tracking-[0.25em]">
                  Your Order
                </p>

                <p className="font-serif text-2xl mt-1">
                  {totalItems}{" "}
                  {totalItems === 1 ? "item" : "items"}
                </p>
              </div>

            </div>


            <div className="flex items-center gap-8">

              <div>
                <p className="text-white/30 text-[9px] uppercase tracking-[0.2em]">
                  Subtotal
                </p>

                <p className="font-serif text-2xl text-[#f28a2e] mt-1">
                  ₹{subtotal}
                </p>
              </div>

              <button
                onClick={() => setIsCartOpen(true)}
                disabled={!totalItems}
                className="h-12 px-6 md:px-8 bg-[#f28a2e] text-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-colors duration-300"
              >
                View Cart
                <ChevronRight size={15} />
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          STATEMENT
      ========================================================= */}
      <section className="relative bg-[#0b0b0b]">

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36">

          <div className="grid md:grid-cols-12 gap-12">

            <div className="md:col-span-8">

              <span className="text-white/25 text-[9px] uppercase tracking-[0.3em]">
                The Atulyam Way
              </span>

              <h2 className="font-serif text-5xl md:text-7xl lg:text-[7vw] leading-[0.9] tracking-[-0.06em] mt-6">
                Your table.
                <br />
                Your people.
                <br />
                <span className="italic text-[#f28a2e]">
                  Your moment.
                </span>
              </h2>

            </div>

            <div className="md:col-span-4 md:flex md:items-end">

              <p className="text-white/40 text-sm md:text-[15px] leading-7 max-w-md">
                Whether you're dining with family, meeting friends
                or simply treating yourself, Atulyam brings
                something special to every table.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          QUICK VIEW MODAL
      ========================================================= */}
      <AnimatePresence>

        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-5 md:p-10"
            onClick={() => setSelectedItem(null)}
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              transition={{ duration: 0.4, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#0b0b0b] border border-white/10 overflow-hidden"
            >

              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-white/70 hover:bg-[#f28a2e] hover:text-black transition-all"
              >
                <X size={17} />
              </button>


              <div className="grid md:grid-cols-2">

                <div className="aspect-square md:aspect-auto min-h-[300px] md:min-h-[520px]">

                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />

                </div>


                <div className="p-7 md:p-10 flex flex-col justify-center">

                  <span className="text-[#f28a2e] text-[9px] uppercase tracking-[0.3em]">
                    {selectedItem.category}
                  </span>

                  <h3 className="font-serif text-4xl md:text-5xl leading-[0.9] tracking-[-0.05em] mt-5">
                    {selectedItem.name}
                  </h3>

                  <p className="font-serif text-xl text-[#f28a2e] mt-5">
                    ₹{selectedItem.price}
                  </p>

                  <div className="w-10 h-px bg-[#f28a2e]/60 my-7" />

                  <p className="text-white/45 text-sm leading-7">
                    {selectedItem.description}
                  </p>


                  <div className="mt-8">

                    {getQuantity(selectedItem.id) === 0 ? (

                      <button
                        onClick={() => handleAdd(selectedItem)}
                        className="w-full h-13 bg-[#f28a2e] text-black flex items-center justify-between px-5 text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300"
                      >
                        <span>Add To Order</span>
                        <Plus size={17} />
                      </button>

                    ) : (

                      <div className="w-full h-13 border border-[#f28a2e]/50 flex items-center justify-between">

                        <button
                          onClick={() =>
                            handleDecrease(selectedItem.id)
                          }
                          className="w-14 h-full flex items-center justify-center hover:text-[#f28a2e]"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="font-serif text-xl text-[#f28a2e]">
                          {getQuantity(selectedItem.id)}
                        </span>

                        <button
                          onClick={() =>
                            handleAdd(selectedItem)
                          }
                          className="w-14 h-full flex items-center justify-center hover:text-[#f28a2e]"
                        >
                          <Plus size={16} />
                        </button>

                      </div>

                    )}

                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>


      {/* =========================================================
          ORDER SUCCESS
      ========================================================= */}
      <AnimatePresence>

        {ordered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/85 backdrop-blur-md flex items-center justify-center p-6"
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              className="w-full max-w-lg bg-[#0b0b0b] border border-white/10 p-8 md:p-12 text-center"
            >

              <div className="w-16 h-16 rounded-full border border-[#f28a2e]/50 flex items-center justify-center mx-auto mb-7">
                <Check
                  size={26}
                  className="text-[#f28a2e]"
                />
              </div>

              <span className="text-[#f28a2e] text-[9px] uppercase tracking-[0.3em]">
                Thank You
              </span>

              <h3 className="font-serif text-4xl md:text-5xl leading-[0.9] tracking-[-0.05em] mt-4">
                Order request
                <br />
                <span className="italic text-[#f28a2e]">
                  received.
                </span>
              </h3>

              <p className="text-white/40 text-sm leading-7 mt-6 max-w-sm mx-auto">
                Your order has been noted. Our team will
                confirm the details with you shortly.
              </p>

              <button
                onClick={() => setOrdered(false)}
                className="mt-8 h-12 px-8 border border-white/15 text-[10px] uppercase tracking-[0.2em] hover:bg-[#f28a2e] hover:text-black hover:border-[#f28a2e] transition-all"
              >
                Continue Browsing
              </button>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>


      {/* =========================================================
          MOBILE CART BAR
      ========================================================= */}
      <AnimatePresence>

        {totalItems > 0 && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-[90] md:hidden bg-[#0b0b0b]/95 backdrop-blur-xl border-t border-white/10 p-4"
          >

            <button
              onClick={() => setIsCartOpen(true)}
              className="w-full h-13 bg-[#f28a2e] text-black flex items-center justify-between px-5"
            >

              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                  <ShoppingBag size={15} />
                </div>

                <span className="text-[10px] uppercase tracking-[0.18em]">
                  {totalItems}{" "}
                  {totalItems === 1 ? "Item" : "Items"}
                </span>

              </div>

              <div className="flex items-center gap-3">

                <span className="font-serif text-lg">
                  ₹{subtotal}
                </span>

                <ChevronRight size={16} />

              </div>

            </button>

          </motion.div>
        )}

      </AnimatePresence>

    </main>
  );
};

export default OrderOnlinePage;