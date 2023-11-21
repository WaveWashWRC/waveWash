module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-100": "#ECF0F1",
        "base-200": "#17e9e1",
        "base-300": "#007fFf",
        "base-400": "#17224D",
        "base-500": "#008c89",
        "base-600": "#023137",
      },
      backgroundColor: {
        "base-100": "#ECF0F1",
        "base-200": "#17e9e1",
        "base-300": "#007fFf",
        "base-400": "#17224D",
        "base-500": "#008c89",
        "base-600": "#023137",
      },
    },
  },
  plugins: [require("daisyui")],
};
