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
        merriweatherLight: ['Merriweather', 'serif'],
        // merriweatherLightItalic: ['Merriweather', 'serif'],
        // merriweatherRegular: ['Merriweather', 'serif'],
        // merriweatherRegularItalic: ['Merriweather', 'serif'],
        // merriweatherBold: ['Merriweather', 'serif'],
        // merriweatherBoldItalic: ['Merriweather', 'serif'],
        // merriweatherBlack: ['Merriweather', 'serif'],
        // merriweatherBlackItalic: ['Merriweather', 'serif'],  
        serif: ["Playfair Display", "serif"],

      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
        black: 900,
      },
      colors: {
        bostonBlue: "#408abe", //Posible main color
        fireBush: "#e98b27", //Posible main color
        panache: "#f3faf6", //Posible main color
        darkBlueGray:"#111827bf",  
        navyBlue: "#073b4c",
        orange: "#ff8000",
        lightNavyBlue: "#1f618d",
        softOrange: "#ffa500",
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
