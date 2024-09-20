import { type Config } from "tailwindcss";
export default {
  // all the paths to the files that you want to scan for classes
  content: ["./app/**.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
