/**
 * 遍历儿子节点(immediate children)
 * 如果需要遍历所有的子孙节点，请使用 walk
 */
const postcss = require('postcss') // postcss
const root = postcss.parse('a { color: black; z-index: 1 }')
const rule = root.first

// Bad 会陷入死循环
// for (const decl of rule.nodes) {
//   decl.cloneBefore({ prop: '-webkit-' + decl.prop })
//   // Cycle will be infinite, because cloneBefore moves the current node
//   // to the next index
// }

rule.each(decl => {
  decl.cloneBefore({ prop: '-webkit-' + decl.prop })
  // Will be executed only for color and z-index
})

console.log(rule.toString())