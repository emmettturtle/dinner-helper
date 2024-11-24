import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

export default withUt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dhYellow: "#ECF842",
        dhPurple: "#A80A44",
        dhOrange: "#EB5E39",
        dhWhite: "#F7F3DA"
      },
      padding: {
        '1/5': '20vw',
      },
    },
  },
  plugins: [],
}) satisfies Config;
