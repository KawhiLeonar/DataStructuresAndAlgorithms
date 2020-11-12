// 队列功能封装
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

// 击鼓传花函数封装
function passGame(nameList,num) {
    // 1.创建一个队列结构
    let queue = new Queue()
    // 2.将所有人一次加入到入队列中
    for(let i = 0; i < nameList.length;i++){
        queue.enqueue(nameList[i])
    }
    console.log(queue);

    // 4.当队列只有一个人时，停止
    while(queue.size() > 1){
        //3.开始数数字
        //3.1、不是num重新加入队列
        for(let i = 0; i < num-1; i++){
            queue.enqueue(queue.dequeue())
        }
        //3.2、是num移出队列 
        queue.dequeue()
    }

    console.log(queue);
    let endName = queue.front()
    return nameList.indexOf(endName); 
}

names = [1,2,3,4,5]
console.log(passGame(names,3));