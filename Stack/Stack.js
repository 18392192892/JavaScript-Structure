

// 栈类
// class Stack {
// 	// 初始化
// 	constructor () {
// 		this.item = [];
// 	}
// 	// 入栈
// 	push (...element) {
// 		this.item.push(...element);
// 	}
// 	// 出栈
// 	pop () {
// 		this.item.pop();
// 	}
// 	// 返回栈顶元素
// 	peek () {
// 		let _item = this.item;
// 		return _item[_item.length - 1];
// 	}
// 	// 判断栈是否为空
// 	isEmpty () {
// 		return this.item.length === 0 ? true : false;
// 	}
// 	// 移除栈中所有元素
// 	clear () {
// 		this.item = [];
// 	}
// 	// 返回栈中元素个数
// 	size () {
// 		return this.item.length;
// 	}
// 	// 打印栈
// 	print () {
// 		console.log(this.item);
// 	}
// }

// let b = new Stack();
// b.push('ddd','ssss','s');
// b.print();
// console.log(b.size());

// 上面暴露了一个私有变量，item不应该由外部访问，所以我们改变一下
// 用到 WeakMap
const Stack = (function () {
	const _item = new WeakMap();
	class Stack {
		// 初始化
		constructor () {
			_item.set(this, []);
		}
		// 入栈
		push (...element) {
			_item.get(this).push(...element);
		}
		// 出栈
		pop () {
			if(this.isEmpty()) {
				throw '出栈错误，栈为空'
			} 
			return _item.get(this).pop();
		}
		// 返回栈顶元素
		peek () {
			if(this.isEmpty()) {
				throw '栈为空，栈顶无元素'
			} 
			let _arr = _item.get(this);
			return _arr[_arr.length - 1];
		}
		// 判断栈是否为空
		isEmpty () {
			return _item.get(this).length === 0 ? true : false;
		}
		// 移除栈中所有元素
		clear () {
			_item.set(this, []);
		}
		// 返回栈中元素个数
		size () {
			return _item.get(this).length;
		}
		// 打印栈
		print () {
			console.log(_item.get(this));
		}
	}
	return Stack;
})();

// 输出建栈方法
module.exports = Stack;