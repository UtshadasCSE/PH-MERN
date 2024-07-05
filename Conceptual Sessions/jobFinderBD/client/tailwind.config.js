import daisyui from "./node_modules/daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ' "Poppins", sans-serif',
      },
      backgroundImage: {
        slide1: "url('./src/assets/images/slide1.jpg')",
        slide2: "url('./src/assets/images/slide2.jpg')",
        slide3: "url('./src/assets/images/slide3.jpg')",
      },
    },
  },
  plugins: [daisyui],
};
