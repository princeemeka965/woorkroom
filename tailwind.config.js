/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      headerFont: ["Montserrat"]
    },
    extend: {
      colors: {
        woorkBlue: "#3F8CFF",
        woorkDGrey: "#7D8592",
        woorkWhite: "#FFFFFF",
        fadeBlue: "#F4F9FD"
      }
    }
  },
  plugins: [],
};
