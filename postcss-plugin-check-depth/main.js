const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const css = fs.readFileSync(path.resolve(__dirname, './main.css'), 'utf8')

const checkDepth = postcss.plugin('check-depth', (opt) => {
  opt = opt || { depth: 3 }
  return root => {
    root.walkRules(rule => {
      let selector = rule.selector.replace(/(^\s*)|(\s*$)/g, '')
      if (selector.split(/\s/).length > opt.depth) {
        throw rule.error(`css selector depth is too long`)
      }
    })
  }
})

postcss([checkDepth({
  depth: 3
})])
  .process(css, { from: ``, to: `` })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    throw new Error(error)
  })
