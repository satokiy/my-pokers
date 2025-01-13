import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Poker Challenges",
  description: "poker app collections with various languages",
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Collections', link: '/collections' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'What is poker challenges?', link: '/about/index' },
          { text: 'Rule', link: '/about/rule' },
          { text: 'Testing', link: '/about/testing' },
          { text: 'Artifacts', link: '/about/artifacts' }
        ]
      },
      {
        text: 'Collections',
        items: [
          { text: 'Ruby on Rails', link: '/collections/ruby_on_rails' },
          { text: 'Node.js', link: '/collections/node_js' },
          { text: 'Vue.js', link: '/collections/vue_js' },
          { text: 'NestJS', link: '/collections/nest_js' },
          { text: 'Gradle', link: '/collections/gradle' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
