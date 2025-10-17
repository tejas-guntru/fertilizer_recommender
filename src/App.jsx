import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navabr.jsx"; // fixed import typo
import HomePage from "./components/homepage";
import Aboutuspage from "./components/aboutuspage";
import Contactpage from "./components/contactpage";
import Services from "./components/services";
import Fertilizer from "./components/x.jsx";
import FertilizerHindi from "./components/FertilizerHindi";
import FertilizerTelugu from "./components/FertilizerTelugu";
import Footer from "./components/fotter"; // capitalized import

import Wheatpage from "./components/Wheatpage";
import Ricepage from "./components/Ricepage";
import Cornpage from "./components/Cornpage";
import Carrotpage from "./components/Carrotpage";
import Cottonpage from "./components/Cottonpage";
import Milletspage from "./components/Milletspage";
import Soyapage from "./components/Soyapage";
import Sugarpage from "./components/Sugarpage";
import Groundnutpage from "./components/Groundnutpage";
import Applepage from "./components/Apple";
import Orangepage from "./components/Orangepage";
import Potatopage from "./components/Potatopage";

function App() {
  return (
    <Router>
      {/* Navbar is always visible */}
      <Navbar />

      {/* Page Routes */}
      <div className="pt-20"> {/* add padding to prevent Navbar overlap */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutuspage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/Fertilizer" element={<Fertilizer />} />
          <Route path="/fertilizer-hindi" element={<FertilizerHindi />} />
          <Route path="/fertilizer-telugu" element={<FertilizerTelugu />} />
          <Route path="/wheat" element={<Wheatpage />} />
          <Route path="/rice" element={<Ricepage />} />
          <Route path="/corn" element={<Cornpage />} />
          <Route path="/carrot" element={<Carrotpage />} />
          <Route path="/cotton" element={<Cottonpage />} />
          <Route path="/millets" element={<Milletspage />} />
          <Route path="/soya" element={<Soyapage />} />
          <Route path="/sugarcane" element={<Sugarpage />} />
          <Route path="/groundnut" element={<Groundnutpage />} />
          <Route path="/apple" element={<Applepage />} />
          <Route path="/orange" element={<Orangepage />} />
          <Route path="/potato" element={<Potatopage />} />
          <Route path="*" element={<HomePage />} /> {/* fallback route */}
        </Routes>
      </div>

      {/* Footer is always visible */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
