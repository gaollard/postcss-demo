var stylelint = require('stylelint')

var myConfig = {
  plugins: ["./my-rule.js"],
  rules: {
    "property-no-unknown": true,
    "plugin/my-rule": true
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
