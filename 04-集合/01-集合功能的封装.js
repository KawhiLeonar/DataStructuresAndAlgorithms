function Set (){
    // 1.属性
    this.items = {}
    
    // 2.方法
    // 1.判断集合中是否有某个元素has
    Set.prototype.has = function (value){
        return this.items.hasOwnProperty(value)
    }

    // 2.将元素添加到集合中add
    Set.prototype.add = function (value){
        // 判断集合中是否有该元素
        if(this.has(value)){
            return false
        }
        this.items[value] = value
        return true
    }

    // 3.remove
    Set.prototype.remove = function(value){
        // 判断集合中是否有该元素
        if(!this.has(value)) return false
        delete this.items[value]
        return true
    }
    // 4.clear
    Set.prototype.clear = function(){
        this.items = {}
    }

    // 5.size
    Set.prototype.size = function (){
        return Object.keys(this.items).length
    }

    // 6.value获取集合中所有值
    Set.prototype.values = function(){
        return Object.keys(this.items)
    }
    // 7.并集操作union
    Set.prototype.union = function(otherSet){
        // 1.创建一个新集合
        let unionSet = new Set()
        // 2.将this集合中的所有元素添加到新集合中
        let values = this.values()
        for(let i = 0; i < values.length;i++){
            unionSet.add(values[i])
        }
        // 3.取出otherSet集合中的元素，判断是否加到新集合中去
        values = otherSet.values()
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i])
        }
        return unionSet
    }

    // 8.交集操作
    Set.prototype.intersection = function(otherSet){
        // 1.创建一个新集合
        let intersectionSet = new Set()
        // 2.从this中一个个取出每个节点来判断是否存在于otherSet中，如果存在，放入新集合中
        let values = this.values()
        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    // 9.差集操作
    Set.prototype.difference = function(otherSet){
        // 1.创建一个新集合
        let differenceSet = new Set()
        // 2.取出this集合中的所有元素，如果不存在与otherSet中，放入新集合中
        let values = this.values()
        for (let i =0; i < values.length;i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i])
            }
        }
        return differenceSet
    }

    // 10.子集操作
    Set.prototype.subset = function(otherSet){
        let values = this.values()
        for(let i = 0; i < values.length; i++){
            if(!otherSet.has(values[i])) return false
            return true
        }
    }

}

let s1 = new Set()
/* s1.add(1)
s1.add(2)
s1.add(3) */
s1.add(4)
s1.add(5)
s1.add(6)
/* console.log(s1);
console.log(s1.has(3));
console.log(s1.size());
console.log(s1.remove(5));
s.clear()
console.log(s1.values()); */

let s2 = new Set()
s2.add(4)
s2.add(5)
s2.add(6)
s2.add(7)
s2.add(8)
s2.add(9)
s2.add(10)
let unionSet = s1.union(s2)
let intersection1 = s1.intersection(s2)
let different = s1.difference(s2)
let sub = s1.subset(s2)
console.log(unionSet);
console.log(intersection1);
console.log(different);
console.log(sub);


