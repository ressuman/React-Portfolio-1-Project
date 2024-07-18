/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "20rem",
      md: "48rem",
      lg: "64rem",
    },
    colors: {
      "chinese-black": "hsl(0, 0%, 8%)",
      eucalyptus: "hsl(153, 71%, 59%)",
      "raisin-black": "hsl(0, 0%, 14%)",
      "light-silver": "hsl(0, 0%, 85%)",
      white: "hsl(0, 0%, 100%)",
      bittersweet: "hsl(7, 100%, 68%)",
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
      fontFamily: {
        display: "Space Grotesk, sans-serif",
      },
      transitionDuration: {
        250: "250ms",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
