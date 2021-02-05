const postcss = require('postcss');

const css = `.red { color: red }`

const root = postcss.parse(css)

console.log(root)