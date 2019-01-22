/***
    
LeeCode 有效的括号

***/

// 引入栈
const Stack = require('./Stack');

function ValidParentheses(string) {
  let inStack = new Stack();
  let _obj = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
      inStack.push(string[i]);        
    } else {
      if (inStack.isEmpty() || _obj[inStack.peek()] !== string[i]) {
        return false;
      } else {
        inStack.pop();
      }
    }
  }
  return inStack.isEmpty() ? true : false;
}

console.log(ValidParentheses('((){}[]')); // true


