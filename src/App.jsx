import React from 'react';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Socials from './components/Socials';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="bg-white text-primary">
      <Hero />
      <Catalog />
      <About />
      <Testimonials />
      <Socials />
      <Contact />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;