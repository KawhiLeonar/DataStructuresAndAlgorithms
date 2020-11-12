function DoublyLinkedList() {
  // 属性
  this.head = null;
  this.tail = null;
  this.length = 0;
  // 内部类:节点类
  function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }

  // ******************对常见操作的封装***********************
  // 1.向链表尾部添加项——append
  DoublyLinkedList.prototype.append = function (data) {
    let newNode = new Node(data);
    // 1.判断添加的是否是第一个节点
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 2.不是第一个节点
      // 找到最后一个节点
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // 最后一个节点的next指向newNode
      newNode.prev = current;
      current.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  };

  // 2.将链表转成字符串形式
  // 2.1、toString（倒）
  DoublyLinkedList.prototype.toString = function () {
    return this.backwardString();
  };

  // 2.2、forwardString（前）
  DoublyLinkedList.prototype.forwardString = function () {
    // 1.定义变量
    let current = this.tail;
    let resultString = "";
    // 2.依次向前遍历，获取每一个节点
    while (current) {
      resultString += current.data + " ";
      current = current.prev;
    }
    return resultString;
  };

  // 2.3、backwardString（倒）
  DoublyLinkedList.prototype.backwardString = function () {
    // 1.定义变量
    let current = this.head;
    let resultString = "";
    // 2.依次向后遍历，获取每一个节点
    while (current) {
      resultString += current.data + " ";
      current = current.next;
    }
    return resultString;
  };

  // 3、向链表的特定位置插入一个新项
  DoublyLinkedList.prototype.insert = function (position, data) {
    // 1.越界问题
    if (position < 0 || position > this.length) return false;
    // 2.根据data创建新的节点
    let newNode = new Node(data);
    // 3.插入新节点
    // 3.1链表里没有元素
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 3.2链表中原来就有元素
      // 3.2.1如果position=0
      if (position == 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else if (position == this.length) {
        // 3.2.2向最后一个节点添加
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        // 3.2.3往中间插节点
        let current = this.head;
        let index = 0;
        while (index++ < position) {
          current = current.next;
        }
        // 修改指针
        newNode.next = current;
        newNode.prev = current.prev;
        // 先写这个
        current.prev.next = newNode;
        // 再写这个（注意两个语句的先后顺序）
        current.prev = newNode;
      }
    }
    this.length++;
    return true;
  };

  // 4、获取对应位置的元素
  DoublyLinkedList.prototype.get = function (position) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return null;
    // 2.正常判断
    if (this.length / 2 > position) {
      let current = this.head;
      let index = 0;
      while (index++ < position) {
        current = current.next;
        return current.data;
      }
    } else {
      let current = this.tail;
      let index = this.length - 1;
      while (index-- > position) {
        current = current.prev;
      }
      return current.data;
    }
  };

  // 5、返回元素在列表中的索引
  DoublyLinkedList.prototype.indexOf = function (data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data == data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  };

  // 6、根据位置修改元素
  DoublyLinkedList.prototype.upDate = function (position, newData) {
    // 1.越界判断
    if (position < 0 && position >= this.length) return false;
    // 2.找到对应节点
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    current.data = newData;
    return true;
  };

  // 7、根据位置移出列表中的特定项
  DoublyLinkedList.prototype.removeAt = function (position) {
    // 1.越界判断
    if (position < 0 && position >= this.length){
        return null
    }

    let current = this.head
    // 2.删除节点
    // 2.1整个链表只有一个节点
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // 2.2长度>1，但删除第一个节点
      if (position == 0) {
        this.head.next.prev = null;
        this.head = this.head.next;
      }
      // 2.3长度>1,删除最后一个节点
      else if (position == this.length - 1) {
        current = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      }
      // 2.4删除中间节点
      else {
        let index = 0;
        while (index++ < position) {
          current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }
    this.length--;
    return current.data;
  };

  // 8、根据data移出列表中的一项
  DoublyLinkedList.prototype.remove =function (data){
    //   1.根据data获取下标值
    let index = this.indexOf(data)
    // 2.根据下标删除节点
    return this.removeAt(index)
  }

    //9、判断链表是否为空
    DoublyLinkedList.prototype.isEmpty = function (){
        return this.length === 0
    } 
    
    // 10、链表的长度
    DoublyLinkedList.prototype.size = function (){
        return this.length
    }
    // 11、获取链表的第一个节点
    DoublyLinkedList.prototype.getHead = function(){
        return this.head.data
    }

    // 12、获取链表的最后一个节点
    DoublyLinkedList.prototype.getTail = function(){
        return this.tail.data
    }
}

let dl = new DoublyLinkedList();
// 1.测试append方法
dl.append("1");
dl.append("2");
dl.append("3");
dl.append("4");
dl.append("5");
dl.append("6");
/* console.log(dl);
// 2.测试转成字符串的方法
console.log(dl.backwardString());
console.log(dl.forwardString());
console.log(dl.toString());
// 3、测试插入方法
dl.insert(0, "N1");
dl.insert(4, "NL");
dl.insert(3, "NM");
console.log(dl);
console.log(dl.toString());
console.log(dl.get(4));
console.log(dl.get(2));
console.log(dl.indexOf("NM"));
dl.upDate(3, "mm"); */
console.log(dl.toString());
// console.log(dl.removeAt(0));
// console.log(dl.remove(4));
// console.log(dl.isEmpty());
console.log(dl.size());
console.log(dl.getHead());
console.log(dl.getTail());
