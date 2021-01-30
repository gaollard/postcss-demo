
const postcss = require('postcss') // postcss
const fs = require('fs')
const path = require('path')
const { Declaration, Rule } = postcss

const css = `a {color: black;}`

const root = postcss.parse(css);

console.log(root.toString())
// a {color: black;}

root.nodes[0].cleanRaws();
console.log(root.toString())
// a {
//   color: black;
// }