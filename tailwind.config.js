// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         cream: "#F8F5EF",
//         ink: "#121212",
//         forest: "#2F6F4E",
//         cherry: "#D1443B",
//         gold: "#F2B705",
//         sky: "#3E9FD1",
//         tangerine: "#E8792F",
//       },
//       fontFamily: {
//         heading: ["var(--font-heading)", "sans-serif"],
//         body: ["var(--font-body)", "sans-serif"],
//       },
//       borderRadius: {
//         xl2: "1.5rem",
//         xl3: "2rem",
//       },
//       boxShadow: {
//         soft: "0 8px 30px rgba(18,18,18,0.08)",
//         softer: "0 4px 16px rgba(18,18,18,0.06)",
//       },
//       keyframes: {
//         floaty: {
//           "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
//           "50%": { transform: "translateY(-14px) rotate(4deg)" },
//         },
//         diceSpin: {
//           "0%,100%": { transform: "rotate(-6deg)" },
//           "50%": { transform: "rotate(6deg)" },
//         },
//       },
//       animation: {
//         floaty: "floaty 5s ease-in-out infinite",
//         dice: "diceSpin 3s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [],
// };




// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         cream: "#F8F5EF",
//         ink: "#121212",
//         forest: "#16522C",
//         cherry: "#D8282B",
//         gold: "#EFC727",
//         sky: "#67C2C7",
//         tangerine: "#471518",
//         // Clear aliases for the same values above — use whichever name reads better in new code
//         teal: "#67C2C7",
//         maroon: "#471518",
//       },
//       fontFamily: {
//         heading: ["var(--font-heading)", "sans-serif"],
//         body: ["var(--font-body)", "sans-serif"],
//       },
//       borderRadius: {
//         xl2: "1.5rem",
//         xl3: "2rem",
//       },
//       boxShadow: {
//         soft: "0 8px 30px rgba(18,18,18,0.08)",
//         softer: "0 4px 16px rgba(18,18,18,0.06)",
//       },
//       keyframes: {
//         floaty: {
//           "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
//           "50%": { transform: "translateY(-14px) rotate(4deg)" },
//         },
//         diceSpin: {
//           "0%,100%": { transform: "rotate(-6deg)" },
//           "50%": { transform: "rotate(6deg)" },
//         },
//       },
//       animation: {
//         floaty: "floaty 5s ease-in-out infinite",
//         dice: "diceSpin 3s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [],
// };


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
        forest: { DEFAULT: "#16522C", light: "#678E75", dark: "#0E351C" },
        cherry: { DEFAULT: "#D8282B", light: "#E57375", dark: "#8C1A1B" },
        gold: { DEFAULT: "#EFC727", light: "#F4DA72", dark: "#9B8119" },
        sky: { DEFAULT: "#67C2C7", light: "#9CD7DA", dark: "#427E81" },
        tangerine: { DEFAULT: "#471518", light: "#876668", dark: "#2E0D0F" },
        // Clear aliases for the same values above — use whichever name reads better in new code
        teal: { DEFAULT: "#67C2C7", light: "#9CD7DA", dark: "#427E81" },
        maroon: { DEFAULT: "#471518", light: "#876668", dark: "#2E0D0F" },
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
