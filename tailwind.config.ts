import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#009379",
      },
    },
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Mulish", "sans-serif"],
    },
  },
  // eslint-disable-line global-require
  // plugins: [require('@headlessui/tailwindcss')],
};
export default config;
