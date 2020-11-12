function isPrime(num){
    
    for(let i =2; i < num-1;i++){
        if(num % i == 0){
            return false
        }
    }

    return true
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));