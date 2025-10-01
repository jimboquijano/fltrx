import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  title: 'Fltrx',
  description: 'The ultimate lightweight JS filtering library',
  base: '/fltrx/',
  appearance: 'dark',
  head: [['link', { rel: 'icon', type: 'image/x-icon', href: '/fltrx/favicon.ico' }]],
  themeConfig: {
    siteTitle: 'Fltrx',
    logo: {
      light: '/logo-light-36.png',
      dark: '/logo-dark-36.png',
      alt: 'Fltrx logo'
    },
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/filter' },
      { text: 'Showcase', link: '/showcase/filter' }
    ],
    sidebar: {
      '/': [
        {
          text: 'Guide',
          collapsed: true,
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Key Features', link: '/guide/key-features' },
            { text: 'Sample Usage', link: '/guide/sample-usage' }
          ]
        },
        {
          text: 'API',
          collapsed: true,
          items: [
            { text: 'Filter', link: '/api/filter' },
            { text: 'Highlight', link: '/api/highlight' },
            { text: 'Grouping', link: '/api/grouping' },
            { text: 'Sorting', link: '/api/sorting' },
            { text: 'Pagination', link: '/api/pagination' },
            { text: 'Async Data', link: '/api/async-data' }
          ]
        },
        {
          text: 'Showcase',
          collapsed: true,
          items: [
            { text: 'Filter', link: '/showcase/filter' },
            { text: 'Highlight', link: '/showcase/highlight' },
            { text: 'Grouping', link: '/showcase/grouping' },
            { text: 'Sorting', link: '/showcase/sorting' },
            { text: 'Pagination', link: '/showcase/pagination' },
            { text: 'Async Data', link: '/showcase/async-data' },
            { text: 'Combination', link: '/showcase/combination' }
          ]
        },
        {
          text: 'Community',
          collapsed: true,
          items: [
            { text: 'Contributing', link: '/community/contributing' },
            { text: 'FAQ', link: '/community/faq' },
            { text: 'Changelog', link: '/community/changelog' }
          ]
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Jimbo Quijano'
    }
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  }
})
