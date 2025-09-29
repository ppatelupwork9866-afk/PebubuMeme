import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundOpacity: {
        "50": "0.5",
      },
      fontFamily: {
        luckiest: ["var(--font-luckiest)", "cursive"],
        fuzzy: ["Fuzzy Bubbles", "sans-serif"],
        corleone: ["Corleone", "sans-serif"],
        sans: ["var(--font-open-sans)", "sans-serif"],
        metana: "Metana",
        ttfirs: "TTFirs",
        ttfirsBold: "TTFirsBold",
        metanaBold: "MetanaBold",
        abeezeeItalic: "Abeezee_Italic",
        abeezeeRegular: "Abeezee_Regular",
      },
      screens: {
        desktop: "1000px",
        mobile: "700px",
        gridWidth: "870px",
        modalWidth: "1400px",
      },
    },
  },
  plugins: [],
};
export default config;
