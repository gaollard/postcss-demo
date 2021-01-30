/**
 * 遍历儿子节点(immediate children)
 * 如果需要遍历所有的子孙节点，请使用 walk
 */
const postcss = require('postcss') // postcss

const root = postcss.parse('a { background: white; color: red }')
const decl = root.nodes[0].nodes[1].remove();

console.log(root.toString());
// a { background: white }