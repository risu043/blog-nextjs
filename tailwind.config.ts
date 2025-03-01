import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kiwi: ['Kiwi Maru', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        pudding: {
          '0%, 100%': { transform: 'scale(1) translateY(0)' },
          '25%': { transform: 'scale(1.05, 0.95) translateY(0)' },
          '50%': { transform: 'scale(0.95, 1.05) translateY(-5px)' },
          '75%': { transform: 'scale(1.05, 0.95) translateY(0)' },
        },
      },
      animation: {
        pudding: 'pudding .7s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
