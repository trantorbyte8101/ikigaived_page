import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana L.",
      text: "¡La agenda que me hizo cambiar mi vida! Es tan bonita que me da gusto abrir el día con ella."
    },
    {
      name: "Carlos M.",
      text: "Pedí una libreta personalizada para mi novia y quedó perfecta. ¡Todo el mundo la quiere ahora!"
    },
    {
      name: "Lucía R.",
      text: "Me encanta el toque artesanal. Escribo mejor cuando tengo una herramienta que me inspira."
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#f5f7fa]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-10">Lo que dicen nuestras clientas</h2>
        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="italic">"{t.text}"</p>
              <p className="mt-4 text-right font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;