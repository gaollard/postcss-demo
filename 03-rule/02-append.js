const postcss = require('postcss') // postcss
const { Declaration, Rule } = postcss

// Rule
const rule = new Rule({ selector: 'a' })
const decl1 = new Declaration({ prop: 'color', value: 'black' })
const decl2 = new Declaration({ prop: 'background-color', value: 'white' })
rule.append(decl1, decl2)
rule.append({ prop: 'color', value: 'black' }) // declaration
rule.append({ text: 'Comment' }) // comment
console.log(rule.toString())

// a {
//   color: black;
//   background-color: white;
//   color: black
//   /* Comment */
// }

const root = postcss.parse('a { color: black }')
root.append({ name: 'charset', params: '"UTF-8"' }) // at-rule
root.append({ name: 'charset', params: '"UTF-8"' }) // at-rule
root.append({ selector: 'a' }) // rule

console.log(root.toString())
// a { color: black }
// @charset "UTF-8";
// @charset "UTF-8";
// a {}