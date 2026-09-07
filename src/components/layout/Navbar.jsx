import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu as MenuIcon, X, UtensilsCrossed, Phone } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';
import Button from '../ui/Button.jsx';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Catering', path: '/catering' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-950/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-dark-950/80 via-dark-950/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link to="/" className="flex items-center gap-3.5 group select-none">
            <div className="w-10 h-10 rounded-full border border-brand-500/40 bg-dark-850 flex items-center justify-center text-brand-400 group-hover:border-brand-400 group-hover:scale-105 transition-all duration-400 shadow-[0_0_15px_rgba(224,122,36,0.2)]">
              <UtensilsCrossed className="w-4 h-4 text-brand-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-[26px] tracking-[0.2em] uppercase text-ivory-100 font-normal leading-none">
                Atulyam
              </span>
              <span className="text-[9px] uppercase tracking-widest-xl text-brand-400 font-medium mt-1">
                Haute Indian Cuisine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-widest-xl font-medium transition-all duration-300 relative py-1.5 ${
                    isActive
                      ? 'text-brand-400 font-semibold'
                      : 'text-ivory-300 hover:text-ivory-100'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-500 via-gold-500 to-brand-500 rounded-full shadow-glow"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs: Phone, Cart & Order Online */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Direct Reservation Call (Hidden on small mobile) */}
            <a
              href="tel:+919876543210"
              className="hidden xl:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ivory-400 hover:text-brand-400 transition-colors py-2 px-3 rounded-full hover:bg-white/[0.04]"
              aria-label="Call Atulyam Concierge"
            >
              <Phone className="w-3.5 h-3.5 text-brand-500" />
              <span>+91 98765 43210</span>
            </a>

            {/* Interactive Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 sm:p-3 rounded-full bg-dark-850/80 border border-white/10 hover:border-brand-500/50 text-ivory-200 hover:text-brand-400 transition-all duration-300 focus:outline-none group"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform group-hover:scale-110" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-brand-500 to-gold-500 text-white text-[10px] font-bold flex items-center justify-center shadow-glow animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Order Online Primary CTA */}
            <Link to="/order-online" className="hidden sm:inline-block">
              <Button variant="primary" size="sm" className="tracking-widest">
                Order Online
              </Button>
            </Link>
            

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-ivory-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6 text-brand-400" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Framer Motion */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-dark-950/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-sm uppercase tracking-widest-xl block py-2.5 transition-colors ${
                        isActive
                          ? 'text-brand-400 font-semibold pl-2 border-l-2 border-brand-500'
                          : 'text-ivory-300 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <Link to="/order" className="w-full">
                  <Button variant="primary" size="md" className="w-full">
                    Order Online
                  </Button>
                </Link>
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-ivory-400 py-2.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-500" />
                  <span>Call Concierge: +91 98765 43210</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
