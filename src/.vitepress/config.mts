import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs-site/',
  title: "Liomsom",
  description: "我的博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'AA', link: '/aaa' },
      { text: 'BB', link: '/avv' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },

      {
        text: 'Vue3-music-demo',
        items: [
          { text: '01-demo', link: '/vue3-music-demo/01-init' },
          { text: '02-test', link: '/vue3-music-demo/02-test' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lionsom' }
    ],

    footer: {
      // https://vitepress.dev/reference/default-theme-config#footer
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 LinX'
    }
  },

  // build输出路径
  outDir: '../docs'
})
