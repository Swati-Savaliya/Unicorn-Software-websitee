/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandNavy: '#0f2d55',
        brandCoral: '#f16338',
        brandSun: '#f9c48a',
        brandTeal: '#1c918a',
        brandCream: '#fff3e6',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        soft: '0 25px 70px rgba(15, 45, 85, 0.08)',
      },
    },
  },
  plugins: [],
}

