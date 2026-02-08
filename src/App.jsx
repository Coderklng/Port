import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Portfolio from "./Pages/Portfolio";

const Contact = () => <h1 className="text-center mt-20 text-3xl">Contact Page</h1>;

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
