var stylelint = require('stylelint')

var myConfig = {
  rules: {
    "property-no-unknown": true
  }
}

// 格式化错误
stylelint
  .lint({
    config: myConfig,
    files: '*.css',
    formatter: "verbose"
  })
  .then(function(data) {
    console.log(data.output)
  })
  .catch(function(err) {
    console.error(err.stack)
  })

// 自己处理
// stylelint
//   .lint({
//     config: myConfig,
//     files: '*.css',
//   })
//   .then(function(data) {
//     const output = JSON.parse(data.output);
//     output.forEach(el => {
//       console.log(el)
//     })
//   })
//   .catch(function(err) {
//     console.error(err.stack)
//   })
