import React from 'react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/525644889012?text=¡Hola!%20Estoy%20interesado%20en%20una%20libreta."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
    >
      💬
    </a>
  );
};

export default FloatingWhatsApp;