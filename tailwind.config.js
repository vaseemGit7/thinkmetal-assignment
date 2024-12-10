/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeGradientStart: "#FF591E",
        orangeGradientEnd: "#FB432C",
      },
    },
  },
  plugins: [],
};
