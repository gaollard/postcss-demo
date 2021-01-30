
const postcss = require('postcss') // postcss
const fs = require('fs')
const path = require('path')

const root = postcss.parse('a { color: black }')

root.nodes.length           //=> 1
root.nodes[0].selector      //=> 'a'
root.nodes[0].nodes[0].prop //=> 'color'

console.log(root)