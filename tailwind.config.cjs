/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#3294F8",
      "base-title": "#E7EDF4",
      "base-subtitle": "#C4D4E3",
      "base-text": "#AFC2D4",
      "base-span": "#7B96B2",
      "base-label": "#3A536B",
      "base-border": "#1C2F41",
      "base-post": "#112131",
      "base-profile": "#0B1B2B",
      "base-background": "#071422",
      "base-input": "#040F1A",
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        header: "url(src/assets/images/cover.svg)",
      },
      boxShadow: {
        "profile-card": "0px 2px 28px rgba(0, 0, 0, 0.2)",
        "input-focus": "0 0 0 2px #3294F8",
      },
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "0.03125rem",
      1: "0.0625rem",
      1.5: "0.09375rem",
      2: "0.125rem",
      2.5: "0.15625rem",
      3: "0.1875rem",
      3.5: "0.21875rem",
      4: "0.25rem",
      5: "0.3125rem",
      6: "0.375rem",
      7: "0.4375rem",
      8: "0.5rem",
      9: "0.5625rem",
      10: "0.625rem",
      11: "0.6875rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      28: "1.75rem",
      32: "2rem",
      36: "2.25rem",
      40: "2.5rem",
      44: "2.75rem",
      48: "3rem",
      52: "3.25rem",
      56: "3.5rem",
      60: "3.75rem",
      64: "4rem",
      72: "4.5rem",
      80: "5rem",
      96: "6rem",
    },
  },
  plugins: [],
};
