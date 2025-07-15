/** tailwind.config.js */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        ragnear: ["Ragnear", "sans‑serif"],
      },
      colors: {
        primary: "#1D4ED8",
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        year: "year    120s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        year: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
