/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nobile', 'sans-serif'],
        heading: ['Corben', 'cursive'],
      },
      colors: {
        primary: '#008e9f', // Azul turquesa (acento)
        secondary: '#f5f7fa', // Blanco suave (fondo)
        text: '#1a1a1a',     // Gris oscuro (texto)
        accent: '#006b7a',   // Azul oscuro (hover)
      }
    },
  },
  plugins: [],
}