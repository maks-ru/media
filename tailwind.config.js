/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(102deg, rgb(247, 27, 44) 100%, rgb(237, 27, 141) 100%, rgb(255, 112, 39) 100%)",
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
    },
  },
  plugins: [],
};
