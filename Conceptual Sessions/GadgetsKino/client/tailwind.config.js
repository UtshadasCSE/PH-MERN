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
        slider1: 'url("./src/assets/image/headphone.jpg")',
        slider2: 'url("./src/assets/image/radio.jpg")',
        slider3: 'url("./src/assets/image/smartwatch.jpg")',
        myCart: 'url("./src/assets/image/gadgetsmycart.jpg")',
      },
    },
  },
  plugins: [daisyui],
};
