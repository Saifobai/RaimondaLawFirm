import React from "react";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
