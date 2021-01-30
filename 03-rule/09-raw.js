/**
 * 遍历儿子节点(immediate children)
 * 如果需要遍历所有的子孙节点，请使用 walk
 */
const postcss = require('postcss') // postcss

const root = postcss.parse('a { background: white }')
root.nodes[0].append({ prop: 'color', value: 'black' })
root.nodes[0].nodes[1].raws.before   //=> undefined
root.nodes[0].nodes[1].raw('before') //=> ' '

console.log(root.toString());

