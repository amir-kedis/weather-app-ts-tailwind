/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "ibm-condensed": "IBM Plex Sans Condensed, sans-serif",
      "public-sans": "Public Sans, sans-serif",
    },
  },
  plugins: [],
};
