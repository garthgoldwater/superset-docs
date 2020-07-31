const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---readme-md": hot(preferDefault(require("/Users/garth/code/superset-docs/README.md"))),
  "component---src-components-alert-mdx": hot(preferDefault(require("/Users/garth/code/superset-docs/src/components/Alert.mdx"))),
  "component---src-index-mdx": hot(preferDefault(require("/Users/garth/code/superset-docs/src/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/garth/code/superset-docs/.docz/src/pages/404.js")))
}

