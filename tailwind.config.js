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
      },
      colors: {
        "custom-grey": "#e6e6e6",
      },
    },
  },
  plugins: [],
};
