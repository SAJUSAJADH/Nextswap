/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      lexend: "Lexend",
      roboto: ["Roboto Slab", "serif"],
      marryweather: ["Merriweather Sans", "sans-serif"],
      poppins: ["Poppins, sans-serif"],
    },
    backgroundImage: {
      pinkish: ["radial-gradient(75% 100% at 70% 100%,#ff007a1a 0,#fff0 100%)"],
    },
    screens: {
      sm: "480px",
      md: "1335px",
      lg: "1340px",
      xl: "1675px",
    },
  },
  plugins: [],
};
