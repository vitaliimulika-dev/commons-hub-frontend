/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          dark: 'hsl(var(--accent-dark))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
          secondary: 'hsl(var(--card-secondary))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
        xl: '1.125rem',
        '2xl': '1.25rem',
      },
      maxWidth: {
        app: '1180px',
        flow: '980px',
        content: '860px',
        landing: '960px',
      },
      boxShadow: {
        brand: '0 18px 50px hsl(150 26% 9% / 0.12)',
        'brand-sm': '0 6px 18px hsl(150 48% 25% / 0.35)',
        'brand-lg': '0 22px 60px hsl(0 0% 0% / 0.28)',
      },
      backdropBlur: {
        xs: '2px',
      },
      lineHeight: {
        tight: '1.35',
      },
      letterSpacing: {
        tighter: '-0.03em',
      },
      keyframes: {
        flowPulse: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        riseFade: {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
            filter: 'blur(1px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0)',
          },
        },
        ctaBreathe: {
          '0%, 100%': {
            transform: 'translateY(0)',
            boxShadow: '0 6px 18px hsl(150 26% 9% / 0.10)',
          },
          '50%': {
            transform: 'translateY(-1px)',
            boxShadow: '0 10px 26px hsl(150 26% 9% / 0.14)',
          },
        },
      },
      animation: {
        flowPulse: 'flowPulse 3s ease-in-out infinite',
        riseFade: 'riseFade 520ms ease-out forwards',
        ctaBreathe: 'ctaBreathe 2.8s ease-in-out 1.2s infinite',
      },
    },
  },
  plugins: [],
}
