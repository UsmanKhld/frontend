/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '120': '28rem',
        '160': '40rem',
        '200': '60rem',
      },
      height: {
        '110': '28rem',
        '128': '32rem',
        '200': '40rem',
      },
    },
  },
  plugins: [],
}