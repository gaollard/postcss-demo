const postcss = require('postcss') // postcss
const { Declaration, Rule } = postcss

// Rule
const rule = new Rule({ selector: 'a' })
const decl = new Declaration({ prop: 'color', value: 'black' })

const cloned = decl.clone({ prop: '-moz-' + decl.prop })

console.log(decl.toString()); //=> color: black
console.log(cloned.toString())   //=> -moz-transform: scale(0)

