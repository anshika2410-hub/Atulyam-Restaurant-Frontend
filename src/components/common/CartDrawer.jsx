import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShoppingBag,
  ArrowRight,
  Trash2,
  Plus,
  Minus,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    items,
    updateQuantity,
    removeFromCart,
    cartSubtotal,
    cartCount,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Drawer Wrapper */}
          <div className="fixed inset-y-0 right-0 flex w-full max-w-full">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 28,
                stiffness: 260,
              }}
              className="
                ml-auto
                h-full
                w-full
                sm:w-[420px]
                max-w-full
                bg-[#090909]
                border-l border-white/10
                shadow-2xl
                flex flex-col
                overflow-hidden
              "
            >
              {/* Header */}
              <div className="shrink-0 px-4 sm:px-6 py-4 sm:py-5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <ShoppingBag className="w-5 h-5 text-[#f28a2e] shrink-0" />

                  <h3 className="font-serif text-base sm:text-lg font-semibold tracking-wider uppercase text-white truncate">
                    Your Order ({cartCount})
                  </h3>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="
                    ml-3
                    shrink-0
                    w-9
                    h-9
                    rounded-full
                    border border-white/10
                    flex items-center justify-center
                    text-white/60
                    hover:text-white
                    hover:bg-white/5
                    transition-colors
                  "
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
                {items.length === 0 ? (
                  <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center px-4 text-white/50">
                    <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mb-4">
                      <ShoppingBag className="w-8 h-8 text-white/30" />
                    </div>

                    <h4 className="text-white font-serif text-lg mb-2">
                      Your cart is empty
                    </h4>

                    <p className="text-xs text-white/40 max-w-[280px] leading-6 mb-6">
                      Explore our handcrafted delicacies and add your favorite
                      dishes to your order.
                    </p>

                    <Link
                      to="/menu"
                      onClick={() => setIsCartOpen(false)}
                      className="
                        text-[10px]
                        tracking-[0.2em]
                        uppercase
                        px-5
                        py-3
                        rounded-full
                        bg-[#f28a2e]
                        hover:bg-[#ff9a45]
                        text-black
                        font-semibold
                        transition-all
                      "
                    >
                      Browse Menu
                    </Link>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="
                        w-full
                        p-3
                        sm:p-3.5
                        rounded-xl
                        bg-[#101010]
                        border border-white/[0.07]
                      "
                    >
                      {/* Item Top */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full shrink-0 ${
                                item.is_veg
                                  ? 'bg-emerald-400'
                                  : 'bg-rose-400'
                              }`}
                            />

                            <h4 className="text-sm font-medium text-white truncate">
                              {item.name}
                            </h4>
                          </div>

                          <p className="text-xs text-[#f28a2e] mt-1 font-mono">
                            ₹{Number(item.price).toFixed(2)}
                          </p>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="
                            shrink-0
                            w-8
                            h-8
                            rounded-full
                            flex items-center justify-center
                            text-white/30
                            hover:text-red-400
                            hover:bg-red-400/10
                            transition-colors
                          "
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Quantity + Item Total */}
                      <div className="mt-3 flex items-center justify-between gap-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center bg-[#171717] rounded-lg border border-white/[0.07] overflow-hidden">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="
                              w-9
                              h-9
                              flex items-center justify-center
                              text-white/50
                              hover:text-white
                              hover:bg-white/10
                              transition-colors
                            "
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>

                          <span className="w-8 text-center text-xs font-semibold text-white">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="
                              w-9
                              h-9
                              flex items-center justify-center
                              text-white/50
                              hover:text-white
                              hover:bg-white/10
                              transition-colors
                            "
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Item Total */}
                        <span className="text-sm font-serif font-semibold text-white">
                          ₹
                          {(
                            Number(item.price) * Number(item.quantity)
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div
                  className="
                    shrink-0
                    px-4
                    sm:px-6
                    pt-4
                    sm:pt-5
                    pb-[max(1rem,env(safe-area-inset-bottom))]
                    border-t
                    border-white/10
                    bg-[#080808]
                  "
                >
                  {/* Subtotal */}
                  <div className="flex justify-between items-center gap-4 mb-2">
                    <span className="text-xs sm:text-sm text-white/50">
                      Estimated Subtotal
                    </span>

                    <span className="text-lg sm:text-xl font-serif font-bold text-[#f28a2e] whitespace-nowrap">
                      ₹{cartSubtotal.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-[10px] sm:text-[11px] leading-5 text-white/30 mb-4">
                    Taxes and delivery charges are calculated during checkout.
                  </p>

                  {/* Checkout */}
                  <Link
                    to="/order-online"
                    onClick={() => setIsCartOpen(false)}
                    className="
                      w-full
                      min-h-[48px]
                      flex items-center justify-center
                      gap-2
                      px-4
                      py-3
                      rounded-full
                      bg-[#f28a2e]
                      hover:bg-[#ff9a45]
                      text-black
                      font-semibold
                      text-[10px]
                      sm:text-xs
                      uppercase
                      tracking-[0.16em]
                      transition-all
                    "
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;