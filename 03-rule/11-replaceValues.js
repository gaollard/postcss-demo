/**
 * 遍历儿子节点(immediate children)
 * 如果需要遍历所有的子孙节点，请使用 walk
 */
const postcss = require('postcss') // postcss

const css = `a {
  background: white;
  color: red;
  font-size: 20rem;
  span {
    font-size: 10rem;
  }
}`

const root = postcss.parse(css)

root.replaceValues(/\d+rem/, { fast: 'rem' }, string => {
  return 15 * parseInt(string) + 'px'
})

console.log(root.toString());