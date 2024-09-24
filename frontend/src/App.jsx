import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Contact from "./screens/Contact";
import Services from "./screens/Services";
import About from "./screens/About";
import Privacypolicy from "./screens/Privacypolicy";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  // Scroll handler function
  const scrollToSection = (section) => {
    switch (section) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "services":
        servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <Router>
      <Navbar onScrollToSection={scrollToSection} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div ref={homeRef}>
                <Home />
              </div>
              <div ref={aboutRef}>
                <About />
              </div>
              <div ref={servicesRef}>
                <Services />
              </div>
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
