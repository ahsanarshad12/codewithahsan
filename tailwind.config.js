const plugin = require("tailwindcss/plugin");

const originalTheme = {
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#3f2b96",
          deepPurple: "#2d1b70",
          vibrantPurple: "#5333ed",
          darkBg: "#1f1347",
          paper: "#f9f7f1",
          paperDark: "#f0ece1",
          tape: "rgba(255, 255, 230, 0.72)",
          tapePurple: "rgba(203, 190, 255, 0.65)",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        display: ["Outfit", "sans-serif"],
        doodle: ["Caveat", "cursive"],
        marker: ['"Permanent Marker"', "cursive"],
      },
      boxShadow: {
        scrapbook:
          "0 10px 25px -5px rgba(0, 0, 0, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.08)",
        "card-lift": "4px 8px 20px rgba(45, 27, 112, 0.25)",
        cutout: "3px 4px 0px #1e1346",
        "cutout-lg": "5px 7px 0px #11092b",
      },
    },
  },
};

module.exports = {
  ...originalTheme,
  content: ["./app/**/*.js", "./components/**/*.js"],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
    plugin(({ addVariant }) => {
      // Keep each supplied layout intact; lg is the desktop boundary.
      addVariant("mobile-layout", "@media (max-width: 1023.98px)");
      addVariant("desktop-layout", "@media (min-width: 1024px)");
    }),
  ],
};
