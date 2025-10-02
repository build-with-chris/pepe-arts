import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Black Tones
        'pepe-black': 'var(--pepe-black)',
        'pepe-dark': 'var(--pepe-dark)',
        'pepe-ink': 'var(--pepe-ink)',
        'pepe-coal': 'var(--pepe-coal)',
        'pepe-surface': 'var(--pepe-surface)',

        // Text Hierarchy
        'pepe-white': 'var(--pepe-white)',
        'pepe-t80': 'var(--pepe-t80)',
        'pepe-t64': 'var(--pepe-t64)',
        'pepe-t48': 'var(--pepe-t48)',
        'pepe-t32': 'var(--pepe-t32)',

        // UI Elements
        'pepe-line': 'var(--pepe-line)',
        'pepe-line2': 'var(--pepe-line2)',
        'pepe-line-light': 'var(--pepe-line-light)',

        // Accent Colors
        'pepe-gold': {
          DEFAULT: 'var(--pepe-gold)',
          hover: 'var(--pepe-gold-hover)',
          active: 'var(--pepe-gold-active)',
          glow: 'var(--pepe-gold-glow)',
          'glow-strong': 'var(--pepe-gold-glow-strong)',
        },

        // Secondary Warm Tones
        'pepe-bronze': {
          DEFAULT: 'var(--pepe-bronze)',
          hover: 'var(--pepe-bronze-hover)',
          active: 'var(--pepe-bronze-active)',
          glow: 'var(--pepe-bronze-glow)',
        },
        'pepe-amber': 'var(--pepe-amber)',
        'pepe-copper': 'var(--pepe-copper)',

        // Semantic Colors
        'pepe-success': 'var(--pepe-success)',
        'pepe-success-bg': 'var(--pepe-success-bg)',
        'pepe-warning': 'var(--pepe-warning)',
        'pepe-warning-bg': 'var(--pepe-warning-bg)',
        'pepe-error': 'var(--pepe-error)',
        'pepe-error-bg': 'var(--pepe-error-bg)',
        'pepe-info': 'var(--pepe-info)',
        'pepe-info-bg': 'var(--pepe-info-bg)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },
      fontSize: {
        'xs': 'var(--text-xs)',
        'sm': 'var(--text-sm)',
        'base': 'var(--text-base)',
        'lg': 'var(--text-lg)',
        'xl': 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        '6xl': 'var(--text-6xl)',
        '7xl': 'var(--text-7xl)',
      },
      spacing: {
        '0.5': 'var(--space-0-5)',
        '1.5': 'var(--space-1-5)',
        '2.5': 'var(--space-2-5)',
        '3.5': 'var(--space-3-5)',
        '14': 'var(--space-14)',
        '18': 'var(--space-18)',
        '72': 'var(--space-72)',
        '80': 'var(--space-80)',
        '96': 'var(--space-96)',
      },
      borderRadius: {
        'none': 'var(--radius-none)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        'full': 'var(--radius-full)',
      },
      boxShadow: {
        'glow-sm': 'var(--shadow-glow-sm)',
        'glow-md': 'var(--shadow-glow-md)',
        'glow-lg': 'var(--shadow-glow-lg)',
        'glow-xl': 'var(--shadow-glow-xl)',
      },
      animation: {
        'fade-in': 'fadeIn var(--duration-normal) var(--ease-out)',
        'slide-up': 'slideUp var(--duration-normal) var(--ease-spring)',
        'glow': 'glow var(--duration-slow) var(--ease-in-out) infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: 'var(--shadow-glow-sm)' },
          '100%': { boxShadow: 'var(--shadow-glow-lg)' },
        },
      },
      transitionTimingFunction: {
        'spring': 'var(--ease-spring)',
        'bounce': 'var(--ease-bounce)',
      },
      transitionDuration: {
        'fast': 'var(--duration-fast)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
        'slower': 'var(--duration-slower)',
      },
    },
  },
  plugins: [],
};
export default config;