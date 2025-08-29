import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const elementsRef = useScrollAnimation();

  return (
    <section className="py-16 px-4 bg-[#0d5c6c] text-white">
      <div 
        ref={(el) => elementsRef.current[0] = el}
        className="max-w-4xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-700"
      >
        <h2 className="text-3xl md:text-4xl font-heading mb-6">¿Quieres una libreta única?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          ¡Personaliza la tuya! Contáctanos por WhatsApp o llena nuestro formulario.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdXaQp0hVhboGwDeeSHb0xC_m88YnbR1gKIXUpZAhY64wC-0w/viewform?usp=header"
            target="_blank"
            rel="noreferrer"
            className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-full transition transform hover:scale-105 duration-300 font-semibold"
          >
            ¡Diseña tu libreta soñada! ✨
          </a>
          <a
            href="https://wa.me/525644889012?text=¡Hola!%20Quiero%20una%20libreta%20personalizada."
            target="_blank"
            rel="noreferrer"
            className="bg-white hover:bg-gray-100 text-[#0d5c6c] px-8 py-4 rounded-full transition transform hover:scale-105 duration-300 font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;