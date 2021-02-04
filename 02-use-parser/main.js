const postcss = require('postcss') // postcss
const fs = require('fs')
const path = require('path')

const src = path.resolve('./src/app.css');
const css = fs.readFileSync(src);
const root = postcss.parse(css);

console.log(root);