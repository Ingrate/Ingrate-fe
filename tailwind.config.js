/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        4.5: "20px",
      },
      width: {
        400: "400px",
        500: "500px",
        600: "600px",
      },
      fontSize: {
        header: "7rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
      colors: {
        "custom-grey": "#e6e6e6",
      },
      margin: {
        81: "21rem",
      },
    },
  },
  plugins: [],
};
