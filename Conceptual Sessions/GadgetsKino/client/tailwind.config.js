import daisyui from "./node_modules/daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
      },
      backgroundImage: {
        slider1: 'url("https://i.ibb.co/wJw6QJ8/headphone.jpg")',
        slider2: 'url("https://i.ibb.co/jGrgDYk/radio.jpg")',
        slider3: 'url("https://i.ibb.co/7J66gYB/smartwatch.jpg")',
        myCart: 'url("https://i.ibb.co/PmmSqRQ/gadgetsmycart.jpg")',
      },
    },
  },
  plugins: [daisyui],
};
