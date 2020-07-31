const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Example Basic',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/garth/code/superset-docs/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Example Basic',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/garth/code/superset-docs',
          templates:
            '/Users/garth/code/superset-docs/node_modules/docz-core/dist/templates',
          docz: '/Users/garth/code/superset-docs/.docz',
          cache: '/Users/garth/code/superset-docs/.docz/.cache',
          app: '/Users/garth/code/superset-docs/.docz/app',
          appPackageJson: '/Users/garth/code/superset-docs/package.json',
          appTsConfig: '/Users/garth/code/superset-docs/tsconfig.json',
          gatsbyConfig: '/Users/garth/code/superset-docs/gatsby-config.js',
          gatsbyBrowser: '/Users/garth/code/superset-docs/gatsby-browser.js',
          gatsbyNode: '/Users/garth/code/superset-docs/gatsby-node.js',
          gatsbySSR: '/Users/garth/code/superset-docs/gatsby-ssr.js',
          importsJs: '/Users/garth/code/superset-docs/.docz/app/imports.js',
          rootJs: '/Users/garth/code/superset-docs/.docz/app/root.jsx',
          indexJs: '/Users/garth/code/superset-docs/.docz/app/index.jsx',
          indexHtml: '/Users/garth/code/superset-docs/.docz/app/index.html',
          db: '/Users/garth/code/superset-docs/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
