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

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <Home />
      <Services />
      <FirmOffers />
      <Team />
      <Contact />

      <RequestButton />
      <ScrollToTop />
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
    </Routes>
  );
};

export default App;
