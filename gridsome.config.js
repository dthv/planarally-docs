module.exports = {
  siteName: 'PlanarAlly',
  templates: {
    BlogPost: '/blog/:year/:month/:day/:slug',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './blog/*.md',
        typeName: 'BlogPost',
        refs: {
          author: 'Contributor'
        }
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        index: ['README'],
        baseDir: './docs',
        pathPrefix: '/docs',
        typeName: 'DocPage',
        template: './src/templates/DocPage.vue',
        plugins: [
          '@gridsome/remark-prismjs'
        ],
        remark: {
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#'
            }
          }
        }
      }
    },
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
