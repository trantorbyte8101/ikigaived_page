import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Catalog = () => {
  const elementsRef = useScrollAnimation();

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary to-[#e1f0f5]">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={(el) => elementsRef.current[0] = el}
          className="text-4xl md:text-5xl font-heading text-center mb-16 text-primary opacity-0 translate-y-8 transition-all duration-700"
        >
          Nuestros Productos
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Libretas Personalizadas */}
          <div 
            ref={(el) => elementsRef.current[1] = el}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 opacity-0 translate-y-8"
          >
            <div className="bg-gradient-to-r from-primary to-[#006b7a] p-6">
              <h3 className="text-2xl font-heading text-white text-center">Libretas Personalizadas</h3>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                  <span className="text-lg"><strong>Tamaño A5</strong> forma francesa</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                  <span className="text-lg"><strong>Espiral metálico</strong> resistente</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                  <span className="text-lg"><strong>Pasta dura</strong> y laminada</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                  <span className="text-lg">Opciones de <strong>80, 100 y 200 hojas</strong></span>
                </li>
              </ul>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">Desde $350 MXN</p>
                <p className="text-gray-600">Precio base • Personalización incluida</p>
              </div>
            </div>
          </div>

          {/* Agendas Personalizadas */}
          <div 
            ref={(el) => elementsRef.current[2] = el}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 opacity-0 translate-y-8 delay-100"
          >
            <div className="bg-gradient-to-r from-[#006b7a] to-primary p-6">
              <h3 className="text-2xl font-heading text-white text-center">Agendas Personalizadas</h3>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                  <span className="text-lg"><strong>Perpetuas</strong> (sin fecha)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                  <span className="text-lg"><strong>Tamaño A5</strong> forma francesa</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                  <span className="text-lg"><strong>Espiral metálico</strong> duradero</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                  <span className="text-lg">Formatos <strong>diarios, semanales, mensuales</strong></span>
                </li>
              </ul>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">Desde $450 MXN</p>
                <p className="text-gray-600">*Cualquier otro tamaño, sobre pedido</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carrusel de imágenes con animaciones */}
        <div className="mt-20">
          <h3 className="text-3xl font-heading text-center mb-12 text-primary">Muestras de Nuestro Trabajo</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Libretas */}
            <div 
              ref={(el) => elementsRef.current[3] = el}
              className="rounded-2xl overflow-hidden shadow-lg opacity-0 translate-y-8 transition-all duration-700 delay-300"
            >
              <img src="/libreta1.jpg" alt="Libreta personalizada" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div 
              ref={(el) => elementsRef.current[4] = el}
              className="rounded-2xl overflow-hidden shadow-lg opacity-0 translate-y-8 transition-all duration-700 delay-400"
            >
              <img src="/libreta2.jpg" alt="Libreta personalizada" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div 
              ref={(el) => elementsRef.current[5] = el}
              className="rounded-2xl overflow-hidden shadow-lg opacity-0 translate-y-8 transition-all duration-700 delay-500"
            >
              <img src="/libreta3.jpg" alt="Libreta personalizada" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div 
              ref={(el) => elementsRef.current[6] = el}
              className="rounded-2xl overflow-hidden shadow-lg opacity-0 translate-y-8 transition-all duration-700 delay-600"
            >
              <img src="/libreta4.jpg" alt="Libreta personalizada" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
            </div>

            {/* Agendas */}
            <div 
              ref={(el) => elementsRef.current[7] = el}
              className="rounded-2xl overflow-hidden shadow-lg opacity-0 translate-y-8 transition-all duration-700 delay-700"
            >
              <img src="/agenda1.jpg" alt="Agenda personalizada" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div 
              ref={(el) => elementsRef.current[8] = el}
              className="rounded-2xl overflow-hidden shadow-lg opacity-0 translate-y-8 transition-all duration-700 delay-800"
            >
              <img src="/agenda2.jpg" alt="Agenda personalizada" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div 
              ref={(el) => elementsRef.current[9] = el}
              className="rounded-2xl overflow-hidden shadow-lg opacity-0 translate-y-8 transition-all duration-700 delay-900"
            >
              <img src="/agenda3.jpg" alt="Agenda personalizada" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div 
              ref={(el) => elementsRef.current[10] = el}
              className="rounded-2xl overflow-hidden shadow-lg opacity-0 translate-y-8 transition-all duration-700 delay-1000"
            >
              <img src="/agenda4.jpg" alt="Agenda personalizada" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;