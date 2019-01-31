
const LinkedList = (function() {
  // 元素类
  class Node {
    constructor (element) {
      this.element = element;
      this.node = null;
    }
  }
  // 链表长度和表头参数
  let parameter = new WeakMap();
  class LinkedList {
    constructor () {
      parameter.set(this, {
        // 链表长度
        length: 0,
        // 链表头
        head: null
      });
    }
    // 在尾部添加节点
    append (element) {
      
    }
  }
})