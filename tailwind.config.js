/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{jsx,tsx,ts,js,vue}",
    "./example/**/*.{jsx,tsx,ts,js,vue}",
  ],
};
