/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        vsm: "370px",
        xmd: "950px",
        xlg: "1300px",
      },
      colors: {
        primary: "#1FFBE8",
        secondary: "#34FF80",
        dark: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
