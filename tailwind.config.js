/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F5EF",
        ink: "#121212",
        forest: "#2F6F4E",
        cherry: "#D1443B",
        gold: "#F2B705",
        sky: "#3E9FD1",
        tangerine: "#E8792F",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.5rem",
        xl3: "2rem",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(18,18,18,0.08)",
        softer: "0 4px 16px rgba(18,18,18,0.06)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(4deg)" },
        },
        diceSpin: {
          "0%,100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
      },
      animation: {
        floaty: "floaty 5s ease-in-out infinite",
        dice: "diceSpin 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
