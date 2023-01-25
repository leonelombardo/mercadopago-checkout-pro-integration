/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Inter Tight", "Inter", "sans-serif", "system-ui"]
      },
      colors: {
        primary: {
          500: "#1a1a1a"
        },
        secondary: {
          500: "#f9f9f9"
        },
        success:{
          500: "#39b85b"
        },
        error:{
          500: "#d92e2e"
        },
        lightblue: {
          500: "#06f"
        }
      },
      boxShadow: {
        custom: "10px 10px 20px 0px #efefef"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}