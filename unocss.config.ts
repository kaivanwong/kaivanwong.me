import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export const createConfig = () => {
  return defineConfig({
    theme: {
      colors: {
        bg: {
          default: '#fefefe',
          dark: '#050505',
        },
        text: {
          default: '#6f6f6f',
          dark: '#C8CCD0',
        },
      },
    },
    presets: [
      presetUno(),
      presetIcons({
        scale: 1.2,
        prefix: 'i-',
        extraProperties: {
          display: 'inline-block',
        },
      }),
      presetAttributify(),
      presetTypography(),
      presetWebFonts({
        fonts: {
          sans: 'Inter:400,600,800',
          mono: 'DM Mono',
        },
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
    shortcuts: [
      ['text', 'text-text-default dark:text-text-dark'],
      ['icon', 'w-5.5 h-5.5 cursor-pointer select-none text'],
      ['icon-transition', 'transition-opacity-300 ease-in-out '],
      ['icon-link', 'icon icon-transition color-inherit op64 hover-op100 hover-color-teal-500 hover-decoration-inherit'],
      ['icon-btn', 'icon icon-transition color-inherit op64 hover-op100 hover-color-red-300 hover-decoration-inherit '],
      ['icon-text', 'text icon-transition op64 hover-op100 hover-color-inherit'],
    ],
  })
}

export default createConfig()
