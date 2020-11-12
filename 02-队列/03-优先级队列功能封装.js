// 优先级队列功能封装
function PriorityQueue() {
    // 内部处理数据
    function QueueElement(element,priority){
        this.element = element
        this.priority = priority
    }

    // 队列元素
    this.items = []

    //实现插入方法
    PriorityQueue.prototype.enqueue = function(element,priority){
        let queueElement = new QueueElement(element,priority)
        // 情况1：如果队列是空的
        if(this.items.length == 0){
            this.items.push(queueElement)
        }else{
            let flag = false
            for(let i=0;i<this.items.length;i++){
                if(queueElement.priority < this.items[i].priority){
                    this.items.splice(i,0,queueElement)
                    flag = true
                    break
                }
            }
            if(!flag){
                this.items.push(queueElement)
            }
        }
    }
}

let pq = new PriorityQueue()
pq.enqueue(1,11)
pq.enqueue(2,10)
pq.enqueue(3,9)
console.log(pq);