import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const elementsRef = useScrollAnimation();

  return (
    <section className="py-16 px-4 bg-[#f5f7fa]">
      <div 
        ref={(el) => elementsRef.current[0] = el}
        className="max-w-4xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-700"
      >
        <h2 className="text-3xl md:text-4xl font-heading mb-8">¿Quiénes somos?</h2>
        <p className="text-lg leading-relaxed">
          En <span className="font-heading text-primary">IKIGAIVED</span>, creemos que cada idea merece un hogar especial. 
          Nuestras libretas no son solo cuadernos: son compañeras de viaje, testigos de tus pensamientos más íntimos, 
          y reflejo de tu estilo único. Hechas a mano, con cuidado y pasión, cada una lleva un alma.
        </p>
      </div>
    </section>
  );
};

export default About;