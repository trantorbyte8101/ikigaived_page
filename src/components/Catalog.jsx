import React from 'react';

const Catalog = () => {
  return (
    <section className="py-16 px-4 bg-[#f5f7fa]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Catálogo de Productos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Libretas */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-heading text-primary mb-4">Libretas Personalizadas</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Tamaño A5 forma francesa</li>
              <li>Espiral metálico</li>
              <li>Pasta dura y laminada</li>
              <li>80, 100 y 200 hojas</li>
            </ul>
            <p className="mt-4 font-semibold">Precio desde $350 MXN</p>
          </div>

          {/* Agendas */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-heading text-primary mb-4">Agendas Personalizadas</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Perpetuas (sin fecha)</li>
              <li>Tamaño A5 forma francesa</li>
              <li>Espiral metálico</li>
              <li>Formatos diarios, semanales y mensuales</li>
            </ul>
            <p className="mt-4 font-semibold">Precio desde $450 MXN</p>
            <p className="mt-2 text-sm text-gray-600">*Cualquier otro tamaño, sobre pedido</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;