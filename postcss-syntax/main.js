const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const css = fs.readFileSync(path.resolve(__dirname, './main.css'), 'utf8')
const stripInlineComments = require('postcss-strip-inline-comments');

const postcssScss = require('postcss-scss');
const parser = require('postcss-less');

postcss([stripInlineComments()])
  .process(css, { from: ``, to: ``, parser: parser })
  .then(result => {
    console.log(result.css);
  })
  .catch(error => {
    throw new Error(error)
  })
