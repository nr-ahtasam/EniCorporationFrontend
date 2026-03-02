import tailwindcssMotion from "tailwindcss-motion";  

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        geistSans: "var(--font-geist-sans)",
        geistMono: "var(--font-geist-mono)",
        openSans: "var(--font-open-sans)",
        albert: "var(--font-albert)",
        fsAlbert: "var(--font-fs-albert)",
      },
      
      keyframes: {
        "motion-up": { "0%": { opacity: "0", transform: "translateY(40px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "motion-left": { "0%": { opacity: "0", transform: "translateX(-40px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        "motion-right": { "0%": { opacity: "0", transform: "translateX(40px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        "motion-zoom": { "0%": { opacity: "0", transform: "scale(0.9)" }, "100%": { opacity: "1", transform: "scale(1)" } },
      },
      animation: {
        "motion-up": "motion-up 0.7s ease-out forwards",
        "motion-left": "motion-left 0.7s ease-out forwards",
        "motion-right": "motion-right 0.7s ease-out forwards",
        "motion-zoom": "motion-zoom 0.6s ease-out forwards",
      },
    },
  },
  plugins: [tailwindcssMotion],
};