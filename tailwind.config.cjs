/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        gridTemplateRows: {
            'testcard': 'max-content max-content' 
        }
    },
  },
  plugins: [],
};

module.exports = config;
