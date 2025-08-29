import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ana L.",
      text: "¡La agenda que me hizo cambiar mi vida! Es tan bonita que me da gusto abrir el día con ella.",
      role: "Diseñadora Gráfica"
    },
    {
      name: "Carlos M.",
      text: "Pedí una libreta personalizada para mi novia y quedó perfecta. ¡Todo el mundo la quiere ahora!",
      role: "Estudiante"
    },
    {
      name: "Lucía R.",
      text: "Me encanta el toque artesanal. Escribo mejor cuando tengo una herramienta que me inspira.",
      role: "Escritora"
    },
    {
      name: "Miguel T.",
      text: "La calidad es excepcional. Mi libreta ha resistido viajes y uso diario sin dañarse.",
      role: "Viajero"
    },
    {
      name: "Sofía G.",
      text: "Personalicé una agenda para mi negocio y quedó perfecta. Mis clientes siempre la elogian.",
      role: "Emprendedora"
    },
    {
      name: "David P.",
      text: "El detalle en la personalización es increíble. Cada hoja tiene un toque especial.",
      role: "Arquitecto"
    },
    {
      name: "Valeria M.",
      text: "Compré una libreta para mi hija y quedó hermosa. La envoltura era tan bonita como el producto.",
      role: "Mamá"
    },
    {
      name: "Roberto S.",
      text: "La atención al cliente es excelente. Me guiaron en todo el proceso de personalización.",
      role: "Consultor"
    },
    {
      name: "Camila R.",
      text: "Mis agendas son únicas cada año. Me encanta poder cambiar el diseño según mi estilo.",
      role: "Diseñadora"
    },
    {
      name: "Jorge L.",
      text: "Perfectas para regalar. Todos mis amigos han pedido las suyas después de ver la mía.",
      role: "Empresario"
    },
    {
      name: "Elena V.",
      text: "La pasta es resistente y el diseño interior es funcional. Ideal para mi trabajo diario.",
      role: "Periodista"
    },
    {
      name: "Fernando H.",
      text: "Me encargué una libreta para mi boda y fue un éxito. Todos querían saber dónde la compré.",
      role: "Novio"
    }
  ];

  // Cambiar testimonio automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Mostrar 3 testimonios a la vez
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary to-[#006b7a] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-16">
          Lo que dicen nuestros clientes
        </h2>
        
        {/* Carrusel de testimonios */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {getVisibleTestimonials().map((t, i) => (
              <div 
                key={t.originalIndex}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white border-opacity-20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-heading">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t.name}</h4>
                    <p className="text-sm text-white text-opacity-80">{t.role}</p>
                  </div>
                </div>
                <p className="italic text-lg mb-4">"{t.text}"</p>
                <div className="flex text-yellow-300">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            ))}
          </div>

          {/* Controles de navegación */}
          <div className="flex justify-center items-center space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            {/* Indicadores */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-30'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;