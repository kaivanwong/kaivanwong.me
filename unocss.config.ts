import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export const createConfig = () => {
  return defineConfig({
    theme: {
      fontFamily: {
        mono: 'dm,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
      },
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
      }),
      presetAttributify(),
      presetTypography(),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
    shortcuts: [
      ['text', 'text-text-default dark:text-text-dark'],
      ['icon', 'w-5.5 h-5.5 cursor-pointer select-none transition-opacity-300 ease-in-out text'],
      ['icon-link', 'icon color-inherit op64 hover-op100 hover-color-teal-500 hover-decoration-inherit color-inherit'],
      ['icon-btn', 'icon color-inherit op64 hover-op100 hover-color-red-300 hover-decoration-inherit  color-inherit'],
    ],
  })
}

export default createConfig()
