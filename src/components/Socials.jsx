import React from 'react';

const Socials = () => {
  return (
    <section className="py-12 px-4 bg-[#008e9f] text-white text-center">
      <h2 className="text-3xl font-heading mb-6">Síguenos</h2>
      <div className="flex justify-center space-x-6 text-2xl">
        <a href="https://instagram.com/ikigaived01" target="_blank" rel="noreferrer" className="hover:text-secondary">IG</a>
        <a href="https://www.facebook.com/share/1Cvuk2V3LQ/" target="_blank" rel="noreferrer" className="hover:text-secondary">FB</a>
        <a href="https://tiktok.com/@ikigaived" target="_blank" rel="noreferrer" className="hover:text-secondary">TT</a>
      </div>
    </section>
  );
};

export default Socials;
