const autoprefixer = require('autoprefixer') // plugin
const postcss = require('postcss') // postcss
const precss = require('precss') // plugin
const fs = require('fs')
const path = require('path')

const src = path.resolve('./src/app.css');
const dest = path.resolve('./dest/app.css');

fs.readFile(src, (err, css) => {
  postcss([precss, autoprefixer])
    .process(css)
    .then(result => {
      fs.writeFile(dest, result.css, function(err) {
        if (err) throw err;
      });
    })
})