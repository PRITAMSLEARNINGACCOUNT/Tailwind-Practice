/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      custombreakpoint: "500px",
    },
    extend: {
      borderRadius: {
        customborderradious: "230px",
      },
      letterSpacing: {
        customletterspacing: "10vw",
      },
    },
  },
  plugins: [],
};
