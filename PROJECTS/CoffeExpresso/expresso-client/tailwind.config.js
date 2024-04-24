import daisyui from "./node_modules/daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rancho: '"Rancho", cursive',
      },
      backgroundImage: {
        headerImg: "url('./src/assets/images/more/3.png')",
      },
    },
  },
  plugins: [daisyui],
};
