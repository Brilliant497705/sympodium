module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "'Montserrat', sans-serif",
      },
      backgroundImage: {
        "main-background": "url('/images/mainBackground.png')",
        "main-logo": "url('/images/logo.png')",
        "image-avtr": "url('/images/avtr.png')",
      },
    },
  },
  plugins: [],
};
