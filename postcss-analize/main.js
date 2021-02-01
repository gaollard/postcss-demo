const postcss = require('postcss');

const css = `.red { color: red }`

const root = postcss.parse(css)

console.log(root)
// postcss.parse(css)
// token
// [ 'word', '.red', 0, 3 ]
// [ 'space', ' ' ]
// [ 'word', 'color', 7, 11 ]
// [ 'space', ' ' ]
// [ '}', '}', 18 ]
