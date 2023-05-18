/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://store.japantourguideagency.com/wp-content/uploads/2023/05/matcha-obon-bamboo.jpg')",
      },
    },
  },
  plugins: [
    require("tailwind-gradient-mask-image"),
    require("flowbite/plugin"),
  ],
};
