import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'bg-main': 'bg-white dark:bg-black',
      'text-main': 'text-truegray-600 dark:text-truegray-400',
      'text-title': 'text-dark dark:text-white text-4xl font-800',
    },
    {
      'nav-link': 'text-dark dark:text-white opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-pointer',
      'prose-link': 'text-dark dark:text-white text-nowrap cursor-pointer border-b-1 !border-opacity-30 hover:!border-opacity-100 border-neutral-500 hover:border-truegray-600 dark:border-neutral-500 hover:dark:border-truegray-400 transition-border-color duration-200 decoration-none',
      'container-link': 'rd p-2 opacity-60 hover:opacity-100 cursor-pointer hover:bg-truegray-500 !bg-opacity-10 transition-colors transition-opacity duration-200',
    }
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    'i-mdi-cactus',
    'i-ri-shopping-bag-line',
    'i-mdi-car-wash',
    'i-ant-design-ant-design-outlined',
    'i-tabler-cactus-filled',
    'i-ri-file-list-2-line',
    'i-carbon-campsite'
  ]
})
