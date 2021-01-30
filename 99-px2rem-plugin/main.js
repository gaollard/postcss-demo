const postcss = require('postcss') // postcss
const px2remPlugin = require('./px2rem-plugin');

const css = `a {
  background: white;
  color: red;
  font-size: 20px;
  width: 100PX; // 大写不转译
  span {
    font-size: 10px;
  }
}`

postcss([px2remPlugin({
  ratio: 0.75
})])
.process(css)
.then(result => {
  console.log(result.css);
  // a {
  //   background: white;
  //   color: red;
  //   font-size: 15rem;
  //   span {
  //     font-size: 7.5rem;
  //   }
  // }
});
