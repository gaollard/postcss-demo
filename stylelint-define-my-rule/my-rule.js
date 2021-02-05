/**
 * https://stylelint.io/developer-guide/rules#add-a-rule
 */

const stylelint = require('stylelint')
const ruleName = 'plugin/my-rule'

const messages = stylelint.utils.ruleMessages(ruleName, {
  // expected: 'Expected ...',
  rejected: 'disallow empty comment'
})

function rule(primary, secondary) {
  return function (root, result) {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {})

    if (!validOptions) {
      return
    }

    root.walkComments((comment) => {
      if (comment.text && comment.text.length !== 0) {
        return
      }

      stylelint.utils.report({
        message: messages.rejected,
        node: comment,
        result,
        ruleName,
      })
    })
  }
}

module.exports = stylelint.createPlugin(ruleName, rule);
module.exports.ruleName = ruleName
module.exports.messages = messages
