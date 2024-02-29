/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        bostonBlue: "#408abe", //Posible main color
        fireBush: "#e98b27", //Posible main color
        panache: "#f3faf6", //Posible main color
        poloBlue: "#91b9cd",
        chalky: "#eecf97",
        osloGray: "#7c8d93",
        spindle: "#c1e3ee",
        submarine: "#b6c0c4",
        limedSpruce: "#3c525a",
      },
    },
  },
  plugins: [],
};
