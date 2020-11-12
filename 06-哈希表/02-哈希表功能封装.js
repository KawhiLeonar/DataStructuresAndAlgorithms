
// 哈希表功能的封装
function HashTable (){
    // 属性
    this.storage = []//采用链地址法
    this.count = 0//作用：计算loadFactor = 已经存放的元素数量/数组长度，if loadFactor > 0.75 (对数组扩容)；if loadFactor < 0.25(减少数组容量)
    this.limit = 7//当前数组总长度
    
    // 方法
    // 添加hash函数
    HashTable.prototype.hashFunc = function(str,size){
        // 1.定义hashCode变量
        let hashCode = 0
        // 2.霍纳算法，来计算hashCode的值
        // eg:str = cats
        for(let i = 0; i < str.length; i++){
            // 获取字符串每一个字母的unicode编码
            hashCode = 37*hashCode+str.charCodeAt(i)
        }
        // 3.取余操作
        let index = hashCode % size
        return index
    }

    // 1.插入&修改操作
    HashTable.prototype.put = function(key,value){
        // 1.1根据key获取对应的index
        let index = this.hashFunc(key,this.limit)
        // 1.2根据index 取出对应的bucket
        let bucket = this.storage[index]
        // 1.3判断该bucket是否为空（注意:此处是==，不是===）
        if (bucket == null){
            bucket = []
            this.storage[index] = bucket
        }
        
        // 1.4判断是否修改数据
        for(let i = 0;i< bucket.length;i++){
            let tuple = bucket[i]
            if(tuple[0]=== key){
                tuple[1] = value
                return
            }
        }
        
        // 1.5添加操作
        bucket.push([key,value])
        
        this.count++
        // 1.6判断是否需要扩容操作
        if(this.count > this.limit * 0.75){
            // 1.7优化哈希表容量
            let newSize = this.limit*2
            let newPrime = this.getPrime(newSize)
            this.resize(newPrime)
        }
    }

    // 2.获取方法
    HashTable.prototype.get = function(key){
        // 2.1根据key，获取对应的index
        let index = this.hashFunc(key,this.limit)
        // 2.2根据index获取对应的bucket
        let bucket = this.storage[index]
        // 2.3判断bucket是否为null
        if(bucket == null) return null
        // 2.4有bucket，进行线性查找
        for(let i = 0; i < bucket.length;i++){
            let tuple = bucket[i]
            if(tuple[0]=== key){
                return tuple[1]
            }
        }
        return null
    }

    // 3.删除操作
    HashTable.prototype.remove = function(key){
        // 2.1根据key，获取对应的index
        let index = this.hashFunc(key,this.limit)
        
        // 2.2根据index获取对应的bucket
        let bucket = this.storage[index]

        // 2.3判断bucket是否为null
        if(bucket == null) return null
        
        // 2.4有bucket，那么就进行线性查找，并且删除
        for(let i = 0; i < bucket.length;i++){
            let tuple=bucket[i]
            if(tuple[0] == key){
                bucket.splice(i,1)
                this.count--
                return tuple[1]
                // 2.5判断是否需要缩小容量
                if(this.limit > 7 && this.count < this.limit * 0.25){
                    let newSize = Math.floor(this.limit / 2)
                    let newPrime = this.getPrime(newSize)
                    this.resize(newPrime)
                }
            }
        }
        // 2.5遍历完依然没有找到,则返回null
        return null
    }

    // 4.是否为空
    HashTable.prototype.isEmpty = function(){
        return this.count == 0
    }

    // 5.获取哈希表中元素的个数
    HashTable.prototype.size = function(){
        return this.count
    }

    // 6.哈希表改变容量
    HashTable.prototype.resize = function(newLimit){
        // 1.保存旧的数组内容
        let oldStorage = this.storage
        // 2.重置所有属性
        this.storage=[]
        this.count = 0
        this.limit = newLimit
        // 3.遍历oldStorage中所有的bucket
        for(let i = 0; i < oldStorage.length;i++){
            // 3.1取出对应痛的bucket
            let bucket = oldStorage[i]
            // 3.2判断bucket是否为null
            if(bucket == null){
                continue
            }
            // 3.3bucket中有数据,取出数据，重新插入
            for(let j = 0;j < bucket.length;j++){
                let tuple = bucket[j]
                this.put(tuple[0],tuple[1])
            }
        }
    }

    // 7.判断某个数字是不是质数
    HashTable.prototype.isPrime = function(num){
            // 获取num的sqrt
        let temp = parseInt(Math.sqrt(num))
        // 循环
        for(let i = 2; i <= temp;i++){
            if(num % i ==0){
                return false
            }
        }
        return true
    }

    // 8.获取质数的方法
    HashTable.prototype.getPrime = function(num){
        while(!this.isPrime(num)){
            num++
        }
        return num
    }



}

let hash = new HashTable()

hash.put('abc','N1')
hash.put('def','N2')
hash.put('ghi','N3')
hash.put('jkl','N4')
hash.put('mno','N5')

console.log(hash);

console.log(hash.get('abe'));

console.log(hash.remove('abc'));

