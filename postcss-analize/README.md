###

`.red` ["word", ".red", 0, 3]

  进入 other

  tokens [
    ["word", ".red", 0, 3]
  ]

  ` `
    token ["space", " "]
    tokens [
      ["word", ".red", 0, 3],
      ["space", " "]
    ]

  `{`                                       
    token ["{", "{", 5]
    tokens [
      ["word", ".red", 0, 3],
      ["space", " "],
      ["{", "{", 5]
    ]

    Make Rule node, mark current point `rule1`

`\s` ["space", " "]
  `this.spaces += token[1]`

`color`  ["word", "color", 7, 11]

  进入 other
  
  tokens [
    ["word", "color", 7, 11]
  ]

  `:` [":", ":", 12]

  tokens [
    ["word", "color", 7, 11],
    [":", ":", 12]
  ]

  colon = true;

  `\s` ["space", " "]

  tokens 

  tokens [
    ["word", "color", 7, 11],
    [":", ":", 12],
    ["space", " "]
  ]

  `red` ["word", "red", 14, 16]

  tokens [
    ["word", "color", 7, 11],
    [":", ":", 12],
    ["space", " "],
    ["word", "red", 14, 16]
  ]

  `\s` ["space", " "]
  
  tokens [
    ["word", "color", 7, 11],
    [":", ":", 12],
    ["space", " "],
    ["word", "red", 14, 16],
    ["space", " "]
  ]

  `}` ["}", "}", 18]

  tokens [
    ["word", "color", 7, 11],
    [":", ":", 12],
    ["space", " "],
    ["word", "red", 14, 16],
    ["space", " "],
    ["}", "}", 18]
  ]

  ```js
  this.tokenizer.back(tokens.pop());
  end = true;

  // returned => [
  //   ["}", "}", 18]
  // ]
  ```

  // 将末尾的空格全部去掉
  ```js
  if (end && colon) {
    while (tokens.length) {
      token = tokens[tokens.length - 1][0];
      if (token !== 'space' && token !== 'comment') break
      this.tokenizer.back(tokens.pop());
    }
    this.decl(tokens, customProperty);
  } else {
    this.unknownWord(tokens);
  }
  ```

  // returned => [
  //   ["}", "}", 18],
  //   ["space", " "]
  // ]

paser

  依次弹出 returned
  