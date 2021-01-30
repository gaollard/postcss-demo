const postcss = require('postcss') // postcss
const { Declaration, Rule } = postcss

const rule = new Rule({
  selector: 'a'
});
const decl = new Declaration({ prop: 'color', value: 'black' })
rule.append(decl);
decl.cloneAfter({ prop: '-moz-' + decl.prop })

console.log(rule.toString())   //=> -moz-transform: scale(0)
// a {
//   color: black;
//   -moz-color: black
// }