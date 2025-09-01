import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#008e9f] text-white px-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-heading mb-6">IKIGAIVED</h1>
        <p className="text-xl md:text-2xl font-semibold mb-6">Libretas personalizadas con alma</p>
        <p className="text-lg max-w-xl mx-auto">
          Cada libreta es única, hecha a mano con amor y atención al detalle. Diseño que inspira, papel que abraza tus ideas.
        </p>
      </div>
    </section>
  );
};

export default Hero;