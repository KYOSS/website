import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'KYOSS',
  description: 'Kentucky Open Source Society — Louisville, KY',
  lang: 'en-US',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/tux.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/tux.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KYOSS/' }
    ]
  }
})
