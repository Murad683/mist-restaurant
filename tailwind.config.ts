import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom ethereal palette
        gold: {
          DEFAULT: "hsl(var(--gold))",
          muted: "hsl(var(--gold-muted))",
        },
        silver: {
          dark: "hsl(var(--silver-dark))",
        },
        charcoal: "hsl(var(--charcoal))",
        mist: {
          DEFAULT: "hsl(var(--mist))",
          light: "hsl(var(--mist-light))",
        },
        fog: "hsl(var(--fog))",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        mono: ["Space Mono", "monospace"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        glass: "0 8px 32px hsl(var(--glass-shadow))",
        "glass-lg": "0 16px 48px hsl(var(--glass-shadow))",
        float: "0 20px 40px -15px hsl(220 20% 30% / 0.12)",
        "float-lg": "0 30px 60px -20px hsl(220 20% 30% / 0.15)",
        soft: "0 4px 20px hsl(220 20% 50% / 0.06)",
        glow: "0 0 40px hsl(var(--gold) / 0.15)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "mist-float": {
          "0%, 100%": { transform: "translateX(0) translateY(0)", opacity: "0.3" },
          "25%": { transform: "translateX(10px) translateY(-5px)", opacity: "0.5" },
          "50%": { transform: "translateX(-5px) translateY(10px)", opacity: "0.4" },
          "75%": { transform: "translateX(-10px) translateY(-10px)", opacity: "0.6" },
        },
        "blur-in": {
          "0%": { filter: "blur(20px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "fade-in-slow": "fade-in-slow 1.5s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        "mist-float": "mist-float 20s ease-in-out infinite",
        "blur-in": "blur-in 1.2s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-mist": "linear-gradient(180deg, hsl(var(--mist-light)) 0%, hsl(var(--background)) 100%)",
        "gradient-gold": "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold-muted)) 100%)",
        "gradient-radial-mist": "radial-gradient(ellipse at center, hsl(var(--mist-light)) 0%, hsl(var(--background)) 70%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
