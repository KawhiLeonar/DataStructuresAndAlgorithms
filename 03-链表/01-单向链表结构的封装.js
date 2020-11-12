function LinkedList(){
    // 内部的类:节点类
    function Node(data) {
        this.data = data
        this.next = null
    }
    // 属性
    this.head = null
    this.length = 0

    //1、追加方法——append
    LinkedList.prototype.append = function(data){
        let newNode = new Node(data)
        // 情况一：判断是否添加的第一个节点
        if(this.length == 0){
            this.head = newNode
        }
        // 情况二：不是第一个节点
        else{
            //目的：找到最后一个节点
            let current = this.head
            while(current.next){
                current=current.next
            }
            // 让最后节点的next指向新创建的节点
            current.next = newNode
        }
        this.length += 1
    }

    // 2、toString方法
    LinkedList.prototype.toString = function(){
        // 1.定义变量
        let current = this.head
        let listString = ''
        // 2.循环获取一个个的节点
        while(current){
            listString += current.data + ' '
            current = current.next
        }
        return listString
    }

    // 3.insert方法
    LinkedList.prototype.insert = function(position,data){
        //1.对position进行越界判断
        // （如果为负数）(如果position值特别大)
        if(position < 0 || position > this.length) return false
        // 2.根据data创建节点
        let newNode = new Node(data)
        // 3.开始插入数据
        // 3.1、position=0
        if(position == 0){
            newNode.next = this.head
            this.head = newNode
        }else{
            // 3.2、position>=1
            let index = 0
            let current = this.head
            let previous = null
            while(index++ < position){
                previous = current
                current = current.next
            }
            newNode.next = current
            previous.next = newNode
        }
        // 4.
        this.length += 1
        return true 

    }

    // 4.根据位置信息获取对应位置元素——get方法
    LinkedList.prototype.get = function (position) {
        // 1.越界判断
        if(position < 0 || position >= this.length) return null
        // 2.获取对应的数据
        let current = this.head
        let index = 0
        while(index++ < position){
            current = current.next
        }
        return current.data
    }

    // 5.返回元素在列表中的索引indexOf
    LinkedList.prototype.indexOf = function (data) {
        let current = this.head
        let index = 0
        while(current){
            if(current.data == data){
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    // 6.根据位置信息修改该位置的元素——update
    LinkedList.prototype.update = function (position,newData) {
        // 1.越界判断
        if(position < 0 || position >= this.length) return false
        // 2.查找正确节点
        let current = this.head
        let index = 0
        while(index++ < position){
            current = current.next
        }
        // 3.将position位置的data修改
        current.data = newData
        return true
    }

    // 7.根据位置移除某一项——removeAt
    LinkedList.prototype.removeAt = function (position) {
        let current = this.head
        // 1.越界判断
        if(position < 0 || position >= this.length) return null
        // 2.判断是否删除的是第一节点
        if(position == 0){
            this.head = this.head.next
        }else{
            // 3.不是第一个节点
            let previous = null
            let index = 0
            while (index++ < position){
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        // 4.长度-1
        this.length--
        return current.data
    }

    // 8、根据元素删除——remove
    LinkedList.prototype.remove =function(data){
        // 1.根据data获取在列表中的位置
        let position = this.indexOf(data)
        // 2.根据位置信息删除这一项
        return this.removeAt(position)
    }

    // 9、isEmpty
    LinkedList.prototype.isEmpty = function () {
        return this.length == 0 
    }

    // 10、size方法
    LinkedList.prototype.size = function () {
        return this.length
    }
}


// 测试代码
// 1.创建LinkList
let list = new LinkedList()
list.append('1')
list.append('2')
list.append('3')
list.append('4')
list.insert('3','hhh')
console.log(list.get('3'));
console.log(list);
console.log(list.indexOf('hhh'));
/* list.update('3','aaaa')
console.log(list);
console.log(list.removeAt('3'));
console.log(list); */
console.log(list.remove('hhh'));
console.log(list.isEmpty())
console.log(list.size());