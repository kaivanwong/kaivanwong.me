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
          dark: '#1c1f24',
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
  })
}

export default createConfig()
