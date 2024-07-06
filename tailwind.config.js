/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1216px",
    },
    colors: {
      "chinese-black": "#151515",
      eucalyptus: "#4EE1A0",
      "raisin-black": "#242424",
      "light-silver": "#D9D9D9",
      white: "#FFFFFF",
      mahogany: "#CC3300",
    },
    extend: {
      fontSize: {
        fs18: "1.125rem",
        fs20: "1.25rem",
        fs24: "1.5rem",
        fs32: "2rem",
        fs36: "2.25rem",
        fs40: "2.5rem",
        fs48: "3rem",
        fs72: "4.5rem",
        fs88: "5.5rem",
      },
    },
  },
  plugins: [],
};
