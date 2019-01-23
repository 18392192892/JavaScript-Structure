/***
    
LeeCode 每日温度

***/

// 引入栈
const Stack = require('./Stack');

// 栈
function DailyTemperatures(t) {
  let outStack = new Stack();
  let result = t.map((item, index) => {
    
  })
  return result;
}


// 双重循环
function DailyTemperatures(t) {
  let result = t.map((item, index) => {
    let num = 0;
    for (let j = index + 1; j < t.length; j++) {
      if (t[j] > item) {
        break;
      } else {
        num++;
      }
    }
    return (num < t.length - (index + 1)) ? num + 1 : 0;
  })
  return result;
}

console.log(DailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

