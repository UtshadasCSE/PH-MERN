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
        rightBluBg: "url(/../src/assets/bg.png)",
      },
    },
  },
  plugins: [daisyui],
};
