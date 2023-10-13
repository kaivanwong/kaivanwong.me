/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'header': '#000',
        'header-foreground': '#fff',
        'link': 'var(--color-primary)',
        'primary': 'var(--color-primary)',
        'primary-foreground': '#fff',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.link'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
