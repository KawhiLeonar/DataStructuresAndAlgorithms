/* 
    设计哈希函数
        1.将字符串转成比较大的数字hashCode
        2.将大的数字hashCode压缩到数字范围之内
*/  
function hashFunc (str,size){
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

// 测试hash函数
console.log(hashFunc('cats',7));
console.log(hashFunc('hkal',7));
console.log(hashFunc('kald',7));
console.log(hashFunc('lrio',7));
console.log(hashFunc('qwer',7));
console.log(hashFunc('zxcv',7));