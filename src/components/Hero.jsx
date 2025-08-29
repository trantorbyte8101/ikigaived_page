import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white px-4 overflow-hidden">
      {/* Fondo de imagen */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      ></div>
      
      {/* Overlay para mejor contraste de texto */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Contenido */}
      <div className="relative z-10 text-center">
        {/* Tarjeta circular con efectos adicionales */}
        <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-40 shadow-2xl flex items-center justify-center mb-8 mx-auto animate-logo-pulse logo-glass-card">
          <img 
            src="/logo.png"
            alt="IKIGAIVED Logo"
            className="w-56 h-56 md:w-64 md:h-64 animate-logo-appearance logo-with-shine"
          />
        </div>
        
        <p className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-in delay-300">
          Libretas personalizadas con alma
        </p>
        <p className="text-xl max-w-2xl mx-auto animate-fade-in delay-500">
          Cada libreta es única, hecha a mano con amor y atención al detalle. Diseño que inspira, papel que abraza tus ideas.
        </p>
      </div>
    </section>
  );
};

export default Hero;