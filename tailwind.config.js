/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "background": "#E7DCFF",
        "mainBg": "#F6F4F8",
        "primary": "#4B0097",
        "primaryHover": "#3B0075",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
