// 1,2,3,5,7,11,13,17,19

// 2..n-1

const isPrime = (n) =>{
    for(let i=2; i<=n-1; i++){ 
        if(n%i==0){
            return false
        }
    }
    return true; 
}

console.log(isPrime(4)); //false

console.log(isPrime(2)); //true

console.log(isPrime(9)); //false

console.log(isPrime(7)); //true

// const func = () => {
//     return 3;
//     var x = 5
//     x = x+1;
// }

// console.log(func())