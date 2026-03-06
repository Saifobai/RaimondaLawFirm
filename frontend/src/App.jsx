import React from "react";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";
import Services from "./sections/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
    </div>
  );
};

export default App;
