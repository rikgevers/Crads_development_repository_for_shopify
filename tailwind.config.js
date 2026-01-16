/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.{liquid,json}',
    './templates/*.{liquid,json}',
    './sections/*.{liquid,json}',
    './snippets/*.{liquid,json}',
    './config/*.{liquid,json}',
    './src/*.{js,ts,css}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
