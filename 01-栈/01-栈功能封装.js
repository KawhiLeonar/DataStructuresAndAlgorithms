// 栈的封装
function Stack (){
    // 栈中元素
    this.items = []

    //栈的相关操作
    // 1.进栈push
    Stack.prototype.push = function (element) {
        this.items.push(element)
    }
    // 2.从栈中取出元素
    Stack.prototype.pop = function () {
        return this.items.pop()
    }
    // 3.查看栈顶元素
    Stack.prototype.peek = function () {
        return this.items[this.items.length -1]
    }
    // 4.判断栈是否为空
    Stack.prototype.isEmpty = function () {
        return this.items.length == 0
    }
    // 5.获取栈中元素个数
    Stack.prototype.size = function () {
        return this.items.length
    }
    // 6.toString方法
    Stack.prototype.toString = function () {
        let newString =  ''
        this.items.forEach(item => {
            newString += item + ' '
        })
        return newString
    }
}

// 栈的使用
// var s = new Stack()
// 进栈
/* s.push(20)
s.push(10)
s.push(100)
s.push(77)
console.log(s);
// 出栈
console.log(s.pop());
console.log(s.peek());
console.log(s.isEmpty());
console.log(s.size());
console.log(s.toString()); */
