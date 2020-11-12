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

// 十进制转二进制函数封装
function dec2bin (decNumber) {
    // 1.引入栈对象
    let stack = new Stack()
    // 2.循环操作
    while(decNumber > 0) {
        // 2.1获取余数，并放到栈中
        stack.push(decNumber%2)
        // 2.2获取整除后的结果作为下一次运算的数字
        decNumber = Math.floor(decNumber / 2)
    }
    //3.从栈中取出0和1
    let binaryString = ''
    while(!stack.isEmpty()){
        binaryString += stack.pop()
    }
    return binaryString
}

// 测试
console.log(dec2bin(10));