
const Queue = (function() {
  const _item = new WeakMap();
  class Queue {
    constructor () {
      _item.set(this, []);
    }
    // 入队
    enqueue (...element) {
      _item.get(this).push(...element);
    }
    // 出队
    dequeue () {
      if(this.isEmpty()) {
				throw '出队错误，队为空'
			} 
      return _item.get(this).shift();
    }
    // 返回队顶元素
    front () {
      if(this.isEmpty()) {
				throw '队为空，队顶无元素'
			} 
			return _item.get(this)[0];
    }
    // 判断队列是否为空
    isEmpty () {
      return _item.get(this).length === 0;
    }
    // 移除队列中所有元素
    clear () {
			_item.set(this, []);
    }
    // 返回队列中元素个数
		size () {
			return _item.get(this).length;
    }
    // 打印队列
		print () {
			console.log(_item.get(this));
		}
		// 返回队列的数组
		returnArr () {
			return _item.get(this);
		}
  }
  return Queue;
})();

// 输出建队方法
module.exports = Queue;
