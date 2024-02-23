/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        FoundersGroteskCondensed: ["FoundersGroteskCondensed", "sans-serif"],
        NueueMontreal: ['"NueueMontreal"', "sans-serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
