function Queue () {
    // 队列内容
    this.items = []

    // 队列方法
    // 1.将元素加入队列
    Queue.prototype.enqueue = function (element) {
        this.items.push(element)
    }
    // 2.从队列中删除前端元素
    Queue.prototype.dequeue = function () {
        // 删除时注意一定要返回删除的值！！！！
        return this.items.shift()
    }
    // 3.查看前端元素
    Queue.prototype.front = function () {
        return this.items[0]
    }
    // 4.查看队列是否为空
    Queue.prototype.isEmpty = function () {
        return this.items.length == 0
    }
    // 5.查看队列中元素个数
    Queue.prototype.size = function () {
        return this.items.length
    }
    // 6.toString方法
    Queue.prototype.toString = function () {
        let resultString = ''
        this.items.forEach(item => {
            resultString += item + ' '
        })
        return resultString
    }
}

let queue = new Queue()
queue.enqueue('abc')
queue.enqueue('cba')
queue.enqueue('nba')
queue.enqueue('mba')
queue.dequeue()
queue.dequeue()
console.log(queue);
console.log(queue.front());
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.toString());