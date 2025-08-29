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
      
      {/* Sección con parallax 1 */}
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/parallax1.jpg')" }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-30">
          <div className="text-center text-white px-4">
            <h2 className="text-4xl md:text-6xl font-heading mb-6">Creatividad sin límites</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Cada página es un lienzo en blanco esperando tu inspiración
            </p>
          </div>
        </div>
      </div>

      <Catalog />
      
      {/* Sección con parallax 2 */}
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/parallax2.jpg')" }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-40">
          <div className="text-center text-white px-4">
            <h2 className="text-4xl md:text-6xl font-heading mb-6">Hecho con pasión</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Cada detalle cuenta una historia única
            </p>
          </div>
        </div>
      </div>

      <About />
      <Testimonials />
      <Socials />
      <Contact />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;