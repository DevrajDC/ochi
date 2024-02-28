/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "1.5rem",
        lg: "2rem",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        FoundersGroteskCondensed: ["FoundersGroteskCondensed", "sans-serif"],
        NueueMontreal: ['"NueueMontreal"', "sans-serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
