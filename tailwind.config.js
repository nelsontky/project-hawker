module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/all/\[pageNumber\].tsx",
    "./pages/\[locationSlug\]/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
