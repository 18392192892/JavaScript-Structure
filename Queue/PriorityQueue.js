
/***
 * 
 * 优先队列总共有两种
 * 1. 按照一定顺序入队，正常出队
 * 2. 正常入队，按照一定顺序出队
 * ***/

const PriorityQueueFirst = (function() {
  let _item = new WeakMap();
  class PriorityQueue {
    constructor () {
      _item.set(this, []);  
    }
    // 按照一定顺序入队
    enqueue (element, priority) {
      let _arr = _item.get(this);
      let added = false;
      for (let i = 0; i < _arr.length; i++) {
        if (priority < _arr[i].priority) {
          _arr.splice(i, 0, {element: element, priority: priority});
          added = true;
          break;
        }
      }
      if (!added) {
        _arr.push({element: element, priority: priority});
      }
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
  return PriorityQueue;
});

const PriorityQueueSecond = (function() {
  let _item = new WeakMap();
  class PriorityQueue {
    constructor () {
      _item.set(this, []);  
    }
    // 入队
    enqueue (element, priority) {
      _item.get(this).push({element: element, priority: priority});
    }
    // 按照一定顺序出队
    dequeue () {
      if(this.isEmpty()) {
				throw '出队错误，队为空'
			} else {
        let _arr = _item.get(this);
        let minIndex = 0;
        for (let i = 1; i < _arr.length; i++) {
          minIndex = _arr[minIndex].priority < _arr[i].priority ? minIndex : i;
        }
        return _arr.splice(minIndex, 1);
      }
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
  return PriorityQueue;
})();

// module.exports = PriorityQueue;