import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import CartDrawer from "../common/CartDrawer.jsx";
import PageTransition from "../animation/PageTransition.jsx";

export const PageLayout = ({
  children,
  cart,
  setCart,
  addToCart,
  decreaseFromCart,
  cartCount,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0C] text-ivory-100 selection:bg-brand-500/30 selection:text-white relative">

      {/* Fixed ambient subtle glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-radial-luxury pointer-events-none z-0 opacity-60" />

      {/* Global Navbar */}
      <Navbar
        cart={cart}
        setCart={setCart}
        addToCart={addToCart}
        decreaseFromCart={decreaseFromCart}
        cartCount={cartCount}
      />

      {/* Global Cart */}
      <CartDrawer
        cart={cart}
        setCart={setCart}
        addToCart={addToCart}
        decreaseFromCart={decreaseFromCart}
        cartCount={cartCount}
      />

      {/* Main Page Area */}
      <main className="flex-1 relative z-10">
      
          {children}
        
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default PageLayout;