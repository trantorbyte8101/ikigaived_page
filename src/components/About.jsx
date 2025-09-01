import React from 'react';

const About = () => {
  return (
    <section className="py-16 px-4 bg-[#008e9f] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading mb-6">¿Quiénes somos?</h2>
        <p className="text-lg">
          En <span className="font-heading">IKIGAIVED</span>, creemos que cada idea merece un hogar especial. 
          Nuestras libretas no son solo cuadernos: son compañeras de viaje, testigos de tus pensamientos más íntimos, 
          y reflejo de tu estilo único. Hechas a mano, con cuidado y pasión, cada una lleva un alma.
        </p>
      </div>
    </section>
  );
};

export default About;