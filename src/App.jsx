import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import UiComponents from "./components/UiComponents/UiComponents";
import Features from "./components/Features/Features";
import Team from "./components/Team/Team";
import Pricing from "./components/Pricing/Pricing";
import Blanding from "./components/Blanding/Blanding";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

// Theme Provider
import ThemeProvider from "./components/ThemeProvider/ThemeProvider";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  // init AOS once
  useEffect(() => {
    AOS.init({
      duration: 800,  // animation speed
      once: true,     // only animate once
      offset: 50,     // offset from top
    });
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />

          <main>
            <Routes>
              {/* Home Page with all sections */}
              <Route
                path="/"
                element={
                  <>
                    <section id="hero" data-aos="fade-up" data-aos-delay="200">
                      <HeroSection />
                    </section>

                    <section id="ui-components" className="pt-20" data-aos="fade-up" data-aos-delay="300">
                      <UiComponents />
                    </section>

                    <section id="features" className="pt-20" data-aos="fade-up" data-aos-delay="400">
                      <Features />
                    </section>

                    <section id="team" className="pt-20" data-aos="fade-up" data-aos-delay="500">
                      <Team />
                    </section>

                    <section id="pricing" className="pt-20" data-aos="fade-up" data-aos-delay="600">
                      <Pricing />
                    </section>

                    <section id="blanding" className="pt-20" data-aos="fade-up" data-aos-delay="700">
                      <Blanding />
                    </section>
                  </>
                }
              />

              {/* Separate pages */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
