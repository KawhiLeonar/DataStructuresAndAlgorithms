function isPrime(num){
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
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));