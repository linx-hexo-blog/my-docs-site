import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/my-docs-site/',
  title: "Liomsom",
  description: "我的博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/markdown-examples' },
      { text: 'Vue3音乐', link: '/vue3-music-demo/01-init' },
      { text: 'BB', link: '/avv' },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/examples/': getExamplesSidebar(),
      '/vue3-music-demo/': getMusicSidebar(),
    },

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

function getExamplesSidebar() {
  return [
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/examples/markdown-examples' },
        { text: 'Runtime API Examples', link: '/examples/api-examples' }
      ]
    }
  ]
}

function getMusicSidebar() {
  return [
    {
      text: 'Vue3音乐播放器',
      items: [
        { text: '01-demo', link: '/vue3-music-demo/01-init' },
        { text: '02-test', link: '/vue3-music-demo/02-test' }
      ]
    }
  ]
}

// ******************* Guide *******************
function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is VitePress?', link: '/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Asset Handling', link: '/guide/assets' },
        { text: 'Markdown Extensions', link: '/guide/markdown' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'Deploying', link: '/guide/deploy' }
      ]
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Theming', link: '/guide/theming' },
        { text: 'API Reference', link: '/guide/api' },
        {
          text: 'Differences from Vuepress',
          link: '/guide/differences-from-vuepress'
        }
      ]
    }
  ]
}