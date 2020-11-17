function BinarySearchTree (){
    // 属性
    // 1.需要一个内部类
    function Node(key){
        this.key = key
        this.left = null
        this.right = null
    }
    // 2.需要一个root
    this.root = null

    // 方法
    // 1.封装递归函数
    BinarySearchTree.prototype.insertNode = function(node,newNode){
        if(newNode.key < node.key){ // 向左查找
            if(node.left == null) {
                node.left = newNode
            }else {
                this.insertNode(node.left,newNode)
            }
        }else{                      //向右查找
            if(node.right == null) {
                node.right = newNode
            }else {
                this.insertNode(node.right,newNode)
            }
        }
    }

    // 2.插入数据(对外给用户调用的方法)
    BinarySearchTree.prototype.insert = function(key){
        // 2.1根据key创建节点
        let newNode = new Node(key)
        // 2.2判断根节点是否有值
        if(this.root == null){
            this.root = newNode
        }else{
            // 1.3利用递归进行比较
            this.insertNode(this.root,newNode)
        }
    }

    // 3.遍历二叉搜索树
    // 3.1先序遍历
    BinarySearchTree.prototype.preOrderTraversal = function(handler){
        // 1.调用递归函数
        this.preOrderTraversalNode(this.root,handler)
    }
        //递归函数的封装
    BinarySearchTree.prototype.preOrderTraversalNode = function(node,handler){
        // 1.判断节点是不是null
        if(node !== null){
            // 1.1处理经过的节点
            handler(node.key)
            // 1.2处理经过节点的左子节点
            this.preOrderTraversalNode(node.left,handler)
            // 1.3处理经过节点的右子节点
            this.preOrderTraversalNode(node.right,handler)
        }
    }

    // 3.2中序遍历
    BinarySearchTree.prototype.midOrderTraversal = function(handler){
        this.midOrderTraversalNode(this.root,handler)
    }
    //递归函数的封装
    BinarySearchTree.prototype.midOrderTraversalNode = function(node,handler){
        // 1.判断节点是不是null
        if(node !== null){
            // 1.1处理经过节点的左子节点
            this.midOrderTraversalNode(node.left,handler)
            // 1.2处理经过的节点
            handler(node.key)
            // 1.3处理经过节点的右子节点
            this.midOrderTraversalNode(node.right,handler)
        }
    }

    // 3.3后序遍历
    BinarySearchTree.prototype.postOrderTraversal = function(handler){
        this.postOrderTraversalNode(this.root,handler)
    }
    //递归函数的封装
    BinarySearchTree.prototype.postOrderTraversalNode = function(node,handler){
        // 1.判断节点是不是null
        if(node !== null){
            // 1.1查找经过节点的左子节点
            this.postOrderTraversalNode(node.left,handler)
            // 1.2查找经过节点的右子节点
            this.postOrderTraversalNode(node.right,handler)
            // 1.3处理经过的节点
            handler(node.key)
        }
    }

    // 4.寻找最值
    // 4.1最大值
    BinarySearchTree.prototype.max = function(){
        // 1获取根节点
        let node = this.root
        // 2.引入变量key
        let key = null
        // 3.依次向右不断的查找，直到节点为null的时候停止
        while(node != null){
            key = node.key
            node = node.right
        }
        return key
    }

    // 4.2最小值
    BinarySearchTree.prototype.min = function(){
        // 1获取根节点
        let node = this.root
        // 2.引入变量key
        let key = null
        // 3.依次向左不断的查找，直到节点为null的时候停止
        while(node != null){
            key = node.key
            node = node.left
        }
        return key
    }

    // 5.搜索特定值
    BinarySearchTree.prototype.search = function(key){
        // 1.获取根节点
        let node = this.root
        // 2.循环搜索key
        while(node !=null){
            if(node.key > key){
                node = node.left
            }else if (node.key < key){
                node = node.right
            }else {
                return true
            }
        }
        return false
    }

    // 6.删除节点
    BinarySearchTree.prototype.remove = function (key){
        // 1.找到对应的节点
        // 1.1定义变量，保存一些信息
        let current = this.root
        let parent = null
        let isLeftChild = true
        // 1.2开始寻找要删除的节点
        while(current.key != key){
            parent = current
            if(key < current.key){
                isLeftChild = true
                current = current.left
            }else {
                isLeftChild = false
                current = current.right
            }
            if(current == null) return false
        }

        // 2.根据对应的情况删除节点(能执行第二步的前提是已经找到了对应的值为key节点)
        // 2.1删除的节点是叶子节点
        if (current.left == null && current.right == null){
            // 1.根节点且根节点就是叶子节点
            if(current == this.root){
                this.root = null
            }else if (isLeftChild){ //2.如果是左叶子节点
                parent.left = null
            }else {                 //3.如果是右叶子节点
                parent.right = null
            }
        }

        // 2.2删除的节点只有一个子节点
        else if(current.right == null){ //该节点的右子节点为空
            if(current == this.root){ //如果该节点为根节点
                this.root = current.left
            }
            else if(isLeftChild){
                parent.left = current.left
            }else{
                parent.right = current.left
            }
        }else if (current.left == null){ //该节点的左子节点为空
            if(current == this.root){
                this.root = current.right
            }
            else if(isLeftChild){
                parent.left = current.right
            }else{
                parent.right = current.right
            }
        }

        // 2.3删除的节点有两个子节点
        else{
            // 1获取后继节点
            let successor = this.getSuccessor(current)
            // 2判断是不是根节点
            if(current == this.root){
                this.root = successor
            }else if(isLeftChild){
                parent.left = successor
            }else{
                parent.right = successor
            }
            // 3.将删除节点的左子树 = current.left
            successor.left = current.left
        }
    }
    // 找后继的方法
    BinarySearchTree.prototype.getSuccessor = function(delNode){
        // 1定义变量，保存我们找到的后继
        let successor = delNode
        let current = delNode.right
        let successorParent = delNode
        // 2循环查找
        while(current != null){
            successorParent = successor
            successor = current
            current = current.left
        }
        // 3判断寻找到的后继节点是否直接是删除节点的right节点
        if(successor != delNode.right){
            successorParent.left = successor.right
            successor.right = delNode.right
        }

        return successor
    }

}

// 测试代码
let bst = new BinarySearchTree()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

// console.log(bst);

// 测试二叉搜索树遍历
// 1.测试先序遍历
let sp = ''
bst.preOrderTraversal(function(key){
    sp += key + ' '
})
console.log(sp); //11 7 5 3 6 9 8 10 15 13 12 14 20 18 25 

// 2.测试中序遍历
let sm = ''
bst.midOrderTraversal(function(key){
    sm += key + ' '
})
console.log(sm);//3 5 6 7 8 9 10 11 12 13 14 15 18 20 25

// 3.测试后序遍历
let spt = ''
bst.postOrderTraversal(function(key){
    spt += key + ' '
})
console.log(spt); //3 6 5 8 10 9 7 12 14 13 18 25 20 15 11

// 测试最值
console.log(bst.max());

console.log(bst.min());

// 测试指定值得搜索
console.log(bst.search(25));

// 测试删除
bst.remove(9)
bst.remove(7)
bst.remove(15)
let r = ''
bst.postOrderTraversal(function(key){
    r += key + ' '
})
console.log(r);