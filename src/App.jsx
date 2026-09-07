import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PageLayout from "./components/layout/PageLayout.jsx";
import PageTransition from "./components/animation/PageTransition.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";


import HomePage from "./pages/public/HomePage.jsx";
import AboutPage from "./pages/public/AboutPage.jsx";
import MenuPage from "./pages/public/MenuPage.jsx";
import GalleryPage from "./pages/public/GalleryPage.jsx";
import CateringPage from "./pages/public/CateringPage.jsx";
import ContactPage from "./pages/public/ContactPage.jsx";
import ReservationPage from "./pages/public/ReservationPage.jsx";
import OrderOnlinePage from "./pages/public/OrderOnlinePage.jsx";

import Container from "./components/ui/Container.jsx";
import Button from "./components/ui/Button.jsx";

import { UtensilsCrossed } from "lucide-react";

const PagePlaceholder = ({ title, description }) => (
  <Container className="py-36 min-h-[70vh] flex flex-col items-center justify-center text-center">

    <div className="w-12 h-12 rounded-full border border-brand-500/40 bg-dark-850 flex items-center justify-center text-brand-400 mb-6 shadow-glow">
      <UtensilsCrossed className="w-5 h-5 text-brand-500" />
    </div>

    <span className="text-[11px] uppercase tracking-widest-xl text-brand-400 font-semibold mb-2">
      ✦ Atulyam Luxury Fine Dining ✦
    </span>

    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory-100 mb-4">
      {title}
    </h1>

    <p className="text-sm sm:text-base text-ivory-400 max-w-md mb-8 font-light leading-relaxed">
      {description}
    </p>

    <Link to="/">
      <Button variant="secondary" size="md">
        Return Home
      </Button>
    </Link>

  </Container>
);

function App() {
  const location = useLocation();

  return (
    <PageLayout>

      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.pathname}
        >

          {/* ================= HOME ================= */}
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />

          {/* ================= ABOUT ================= */}
          <Route
            path="/about"
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            }
          />

          {/* ================= MENU ================= */}
          <Route
            path="/menu"
            element={
              <PageTransition>
                <MenuPage />
              </PageTransition>
            }
          />

          {/* ================= GALLERY ================= */}
          <Route
            path="/gallery"
            element={
              <PageTransition>
                <GalleryPage />
              </PageTransition>
            }
          />

          {/* ================= CATERING ================= */}
          <Route
            path="/catering"
            element={
              <PageTransition>
                <CateringPage />
              </PageTransition>
            }
          />

          {/* ================= CONTACT ================= */}
          <Route
            path="/contact"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />

          {/* ================= RESERVATION ================= */}
          <Route
            path="/reservation"
            element={
              <PageTransition>
                <ReservationPage />
              </PageTransition>
            }
          />

          {/* ================= ORDER ONLINE ================= */}
          <Route
            path="/order-online"
            element={
              <PageTransition>
                <OrderOnlinePage />
              </PageTransition>
            }
          />

          {/* ================= OFFERS ================= */}
          <Route
            path="/offers"
            element={
              <PageTransition>
                <PagePlaceholder
                  title="Exclusive Offers"
                  description="Special dining offers and seasonal experiences will be managed from the admin panel."
                />
              </PageTransition>
            }
          />

          {/* ================= ADMIN LOGIN ================= */}
          <Route
            path="/admin/login"
            element={
              <PageTransition>
                <PagePlaceholder
                  title="Admin Login"
                  description="Secure restaurant administration will be built in the admin phase."
                />
              </PageTransition>
            }
          />

          {/* ================= ADMIN ================= */}
          <Route
            path="/admin"
            element={
              <PageTransition>
                <PagePlaceholder
                  title="Admin Dashboard"
                  description="Restaurant content and order management will be built here."
                />
              </PageTransition>
            }
          />

          {/* ================= 404 ================= */}
          <Route
            path="*"
            element={
              <PageTransition>
                <PagePlaceholder
                  title="Page Not Found"
                  description="The page you are looking for could not be found."
                />
              </PageTransition>
            }
          />

        </Routes>
      </AnimatePresence>

    </PageLayout>
  );
}

export default App;