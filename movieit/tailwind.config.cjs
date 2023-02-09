/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Source Sans Pro, sans-serif",
      },
      keyframes: {
        shining: {
          "0%": {
            bottom: "-208px",
            transform: "rotate(-45deg) translateX(-1px)",
          },
          "50%, 100%": {
            bottom: "-32px",
            transform: "rotate(-45deg) translateX(260px) ",
          },
        },
      },
      animation: {
        shining: "shining 3s ease-in-out infinite",
      },
      colors: {
        black: {
          100: "#000000",
          200: "#0F0F0F",
          400: "#2A2A2A",
          500: "#15161B",
          rgba: "rgba(0, 0, 0, 0.5)",
        },
        gray: {
          100: "#C2C2C2",
          200: "#B3B3B3",
          300: "#5E5E5E",
        },
        red: {
          100: "#AD241B",
        },
        green: {
          100: "#21D07A",
        },
        blue: {
          100: "#1b1c24",
        },
        yellow: {
          100: "#FBA94C",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
