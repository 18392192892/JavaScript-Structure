// 十进制转换二进制

// 引入栈
const Stack = require('./Stack');

function divideBy2(number) {
    const remStack = new Stack();
    let binaryString = '';
    let _number = number;
    // 入栈
    while(_number > 0) {
        remStack.push(Math.floor(_number % 2));
        _number = Math.floor(_number / 2);
    }
    // 出栈
    while(!remStack.isEmpty()) {
        binaryString += remStack.pop();
    }
    return binaryString;
}

console.log(divideBy2(190));
