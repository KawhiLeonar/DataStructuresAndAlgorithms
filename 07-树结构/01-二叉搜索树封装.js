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
    BinarySearchTree.prototype.
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

console.log(bst);