const postcss = require('postcss') // postcss

module.exports = postcss.plugin('px2rem', function(opts) {
  opts = opts || {};
  return function (root, result) {
    root.replaceValues(/\d+px/, { fast: 'px' }, string => {
      return opts.ratio * parseInt(string) + 'rem'
    })
  }
});
