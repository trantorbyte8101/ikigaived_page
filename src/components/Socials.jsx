import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Socials = () => {
  const elementsRef = useScrollAnimation();

  return (
    <section className="py-16 px-4 bg-[#0d5c6c] text-white">
      <div 
        ref={(el) => elementsRef.current[0] = el}
        className="text-center opacity-0 translate-y-8 transition-all duration-700"
      >
        <h2 className="text-3xl font-heading mb-8">Síguenos</h2>
        <div className="flex justify-center space-x-8">
          <a 
            href="https://instagram.com/ikigaived01" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-primary transform hover:scale-110 transition-all duration-300"
          >
            <i className="fab fa-instagram text-3xl"></i>
          </a>
          <a 
            href="https://facebook.com/IkigaivedDesigns" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-primary transform hover:scale-110 transition-all duration-300"
          >
            <i className="fab fa-facebook-f text-3xl"></i>
          </a>
          <a 
            href="https://tiktok.com/@ikigaived" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-primary transform hover:scale-110 transition-all duration-300"
          >
            <i className="fab fa-tiktok text-3xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;