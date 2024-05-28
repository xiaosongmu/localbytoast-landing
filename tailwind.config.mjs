import baseConfig from "@toasttab/buffet-pui-styles/consumer"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@toasttab/**/dist/**/*.@(js|jsx|ts|tsx|css)'
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      colors: {
        surface: '#F8F5F2',
      },
    },
    
  },
  plugins: [...baseConfig.plugins]
};