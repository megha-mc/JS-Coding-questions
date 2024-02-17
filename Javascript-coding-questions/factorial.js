
// 0! = 1 // factorial(0) --> 1

// 1! = 1 * 0! factorial(1)  ----> 1

// 2! = 2 * 1! factorial(2)  ----> 2

// 3! = 3 * 2! factorial(3)  ----> 6

// 4! = 4 * 3! factorial(4)  ----> 24

// 5! = 5 * 4! factorial(5)  ----> 120

const factorial = (n) => {

    if(n==0){
        return 1;
    }
     else{
        return n*factorial(n-1)
    }
}

console.log(factorial(0)) //120

console.log(factorial(3)) //6