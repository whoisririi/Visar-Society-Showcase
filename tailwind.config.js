/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: "Palanquin Dark",
        caveat: "Caveat",
        montagu: "Montagu Slab",
        lemon: "Lemon",
      },
      width: {
        21: "80px",
        100: "720px",
        97: "600px",
      },
      height: {
        21: "80px",
        97: "600px",
      },
      colors: {
        "royal-blue": "#0F4F72",
        "grass-green": "#3F4521",
        "hover-grass": "#747C4C",
        "hover-gray": "#F9FFD9",
      },
      fontSize: {
        "4xl": "36px",
      },
      margin: {
        53: "215px",
        27: "112px",
        101: "540px",
      },
    },
  },
  plugins: [],
};
