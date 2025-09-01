import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 px-4 bg-[#006b7a] text-white text-center">
      <h2 className="text-3xl md:text-4xl font-heading mb-6">¿Quieres una libreta única?</h2>
      <p className="max-w-xl mx-auto mb-6">
        ¡Personaliza la tuya! Contáctanos por WhatsApp o llena nuestro formulario.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdXaQp0hVhboGwDeeSHb0xC_m88YnbR1gKIXUpZAhY64wC-0w/viewform?usp=header"
          target="_blank"
          rel="noreferrer"
          className="bg-primary hover:bg-[#005a69] text-white px-6 py-3 rounded-full transition"
        >
          Formulario de Pedido
        </a>
        <a
          href="https://wa.me/525644889012?text=¡Hola!%20Quiero%20una%20libreta%20personalizada."
          target="_blank"
          rel="noreferrer"
          className="bg-secondary hover:bg-[#e1e5e9] text-[#006b7a] px-6 py-3 rounded-full transition"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;