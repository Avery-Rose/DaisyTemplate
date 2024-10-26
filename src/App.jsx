import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ThemeTest from "./pages/ThemeTest";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theme" element={<ThemeTest />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
