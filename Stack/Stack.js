

// 栈类
class Stack {
	// 初始化
	constructor () {
		this.item = [];
	}
	// 入栈
	push (...element) {
		this.item.push(...element);
	}
	// 出栈
	pop () {
		this.item.pop();
	}
	// 返回栈顶元素
	peek () {
		let _item = this.item;
		return _item[_item.length - 1];
	}
	// 判断栈是否为空
	isEmpty () {
		return this.item.length === 0 ? true : false;
	}
	// 移除栈中所有元素
	clear () {
		this.item = [];
	}
	// 返回栈中元素个数
	size () {
		return this.item.length;
	}
	// 打印栈
	print () {
		console.log(this.item);
	}
}

let b = new Stack();
b.push('ddd','ssss','s');
b.print();
console.log(b.size());

