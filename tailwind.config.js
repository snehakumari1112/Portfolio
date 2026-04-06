/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#07070a",
        panel: "rgba(15, 17, 28, 0.6)",
        border: "rgba(145, 155, 190, 0.2)",
        accent: "#5b7cfa",
        accent2: "#b668ff"
      },
      boxShadow: {
        glow: "0 0 24px rgba(91, 124, 250, 0.35)",
        soft: "0 18px 60px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "grid-fade": "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "aura": "radial-gradient(circle at 20% 20%, rgba(91,124,250,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(182,104,255,0.22), transparent 40%), radial-gradient(circle at 50% 100%, rgba(0,193,255,0.12), transparent 38%)"
      },
      keyframes: {
        floatA: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-24px,0)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.72" }
        },
        slideGrid: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(48px,48px,0)" }
        }
      },
      animation: {
        floatA: "floatA 9s ease-in-out infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
        slideGrid: "slideGrid 14s linear infinite"
      },
      fontFamily: {
        sans: ["Geist", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
