import React from "react";
import { Routes, Route } from "react-router-dom";

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

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <Home />
      <Services />
      <FirmOffers />
      <Team />
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
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
};

export default App;
