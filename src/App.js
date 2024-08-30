import React from 'react';
import Header from './components/Header';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home.js'; // Create this new component
import AboutUs from "./routes/AboutUs.js";
import Footer from "./components/Footer.js";
import ContactForm from "./routes/ContactUs.js";
import Products from "./routes/Products.js";
import { ZeissPage } from './routes/zeiss/Zeiss.js';
import { VirtualVisionPage } from './routes/virtualvision/virtualvision.js';
import { S4optikPage } from "./routes/s4optik/s4optik.js";
import { ReichertPage } from "./routes/reichert/Reichert.js";
import { MarcoPage } from "./routes/marco/marco.js";
import { ICarePage } from "./routes/icare/iCare.js";
import { HuvitzPage } from './routes/huvitz/huvitz.js';
import { HaagPage } from './routes/haag-streit/HS.js';
import { EyefficientPage } from './routes/eyefficient/eyefficient.js';
import { ESwinPage } from "./routes/e-swin/e-swin.js";


function App() {
  const links = [
    { name: "Products", href: "/" },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <Header title="Vision Technologies NW" links={links} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/reichert" element={<Products n={1} />} />
          <Route path="/reichert/*" element={<ReichertPage />} />
          <Route path="/haag-streit" element={<Products n={2} />} />
          <Route path="/haag-streit/*" element={<HaagPage />} />
          <Route path="/icare" element={<Products n={3} />} />
          <Route path="/icare/*" element={<ICarePage />} />
          <Route path="/s4optik" element={<Products n={4} />} />
          <Route path="/s4optik/*" element={<S4optikPage />} />
          <Route path="/huvitz" element={<Products n={5} />} />
          <Route path="/huvitz/*" element={<HuvitzPage />} />
          <Route path="/eyefficient" element={<Products n={7} />} />
          <Route path="/eyefficient/*" element={<EyefficientPage />} />
          <Route path="/virtual-vision" element={<Products n={8} />} />
          <Route path="/virtual-vision/*" element={<VirtualVisionPage />} />
          <Route path="/zeiss" element={<Products n={9} />} />
          <Route path="/zeiss/*" element={<ZeissPage />} />
          <Route path="/marco" element={<Products n={10} />} />
          <Route path="/marco/*" element={<MarcoPage />} />
          <Route path="/e-swin" element={<Products n={11} />} />
          <Route path="/e-swin/*" element={<ESwinPage />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
