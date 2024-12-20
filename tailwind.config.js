import { type Config } from "tailwindcss"

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1', // Indigo
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#EC4899', // Pink
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#22D3EE', // Cyan
          foreground: '#FFFFFF',
        },
        background: {
          DEFAULT: '#F9FAFB',
          dark: '#111827',
        },
        foreground: {
          DEFAULT: '#111827',
          dark: '#F9FAFB',
        },
        muted: '#F3F4F6',
        'muted-foreground': '#6B7280',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

export default config

