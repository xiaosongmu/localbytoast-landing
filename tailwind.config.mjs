/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#F8F5F2',
      },
      fontFamily: {
        sans: [
          'Source-Sans-Pro',
          'system-ui',
          '-apple-system',
          '"Helvetica Neue"',
          'Arial'
        ],
        effra: [
          'Effra',
          'system-ui',
          '-apple-system',
          '"Helvetica Neue"',
          'Arial'
        ],
      animation: {
        'loop-scroll-slow': 'loop-scroll 400s linear infinite',
        'loop-scroll-med': 'loop-scroll 300s linear infinite',
        'loop-scroll-fast': 'loop-scroll 150s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100vw)' },
        },
      },
    },
  },
  plugins: [],
  }, 
}
