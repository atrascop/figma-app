/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Nike: ["Krona One", "sans-serif"],
      NOKA: ["Julius Sans One", "sans-serif"],
      NAko: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
