/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Orbitron: ["Orbitron", "sans-serif"],
        Saira: ["Saira", "sans-serif"],
      },
      fontSize: {
        "custom-xs": "25px",
        "custom-xsm": "28px",
        "custom-sm": "32px",
        "custom-md": "45px",
        "custom-lg": "55px",
        "custom-xl": "66px",
      },
      colors: {
        "off-white": "#ffffff0f",
        "off-blue": "#5893FF",
        "dark-blue": "#2253F5",
        grey: "#D9D9D9",
        "off-grey": "#FFFFFF0A",
        "light-grey": "#CCCCCC",
        "off-black": "#d9d9d980",
      },
      boxShadow: {
        nav: "0px 7px 10.9px 0px #0000002E",
      },
      textShadow: {
        "nav-links": "0.5px 0.5px 2px 0px #00000040",
      },
      lineHeight: {
        120: "120%",
        154: "154%",
      },
      backgroundImage: {
        "header-bg": "url('assets/images/png/header-bg.png')",
        "gradient-bg":
          "linear-gradient(180deg, rgba(7, 11, 27, 0) 7.35%, #111111 75.74%)",
        "gradient-white":
          "linear-gradient(228.77deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 41.25%, rgba(255, 255, 255, 0) 63.78%, rgba(255, 255, 255, 0) 97.97%)",
        "explore-bg": "url('assets/images/png/bg-explore.png')",
        "gradient-explore":
          "linear-gradient(180deg, rgba(17, 17, 17, 0) 7.35%, #111111 75.74%)",
      },
      backgroundSize: {
        "size-100": "100% 100%",
      },
    },
  },
  plugins: [],
};
