import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        marquee: {
          red: "#E1261C",
          redDeep: "#B31712",
          ink: "#170F0C",
          paper: "#FFF4E1",
          gold: "#F2B33D",
          goldDeep: "#C98A1F",
        },
        chain: {
          violet: "#00C805",
          teal: "#00C805",
        },
      },
      fontFamily: {
        marquee: ["var(--font-marquee)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "bulb-row":
          "radial-gradient(circle, rgba(242,179,61,0.9) 0 3px, transparent 4px)",
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        ticket: "0 12px 0 0 rgba(23,15,12,0.9)",
      },
    },
  },
  plugins: [],
};
export default config;
