import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#2ECC71",
          blue: "#3498DB"
        }
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #2ECC71 0%, #3498DB 100%)"
      }
    }
  },
  plugins: []
};

export default config;
