import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar/Navbar";

import Services from "./sections/Services";
import Contact from "./sections/Contact";

import ScrollToTop from "./components/ScrollToTop";
import RequestButton from "./components/RequestQuestions/RequestButton";

import Home from "./pages/Home/Home";
import Schuldnerberatung from "./pages/Debtcounselling/Schuldnerberatung";
import FirmOffers from "./sections/FirmOffers";
import Team from "./sections/Team";
import Footer from "./sections/Footer";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import Impressum from "./pages/impressum/Impressum";
import Reviews from "./sections/Testimonials";

const MainLayout = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />

      <Home />
      <Services />
      <FirmOffers />
      <Team />
      <Reviews />
      <Contact />

      <ScrollToTop />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      {/* Main Website */}
      <Route path="/" element={<MainLayout />} />

      {/* Request Form Page */}
      <Route path="/schuldnerberatung" element={<Schuldnerberatung />} />

      <Route path="/impressum" element={<Impressum />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
};

export default App;
