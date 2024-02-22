import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro'

export default defineConfig({
    site: 'https://kaivanwong.me',
    server: {
        port: 1977
    },
    integrations: [
        mdx(),
        sitemap(),
        UnoCSS({
            injectReset: true
        })
    ]
});
