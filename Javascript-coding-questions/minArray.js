const arr = ['1','2','3','18','13']

//using map method to convert each array elements fro string to Number
const numArr=arr.map((x)=>Number(x)) // returns [1,2,3,18,13]

//min takes only set of elements not array
//spread operator converts array to its set of elements
//hence using spread operator and finding min value
const minNum=Math.min(...numArr); 

console.log(minNum);

/* const arrNum=Number(arr) */
/* let strArr =  [1,2,3,4,5] */

/* let str1 = "2";
let strNum = Number(str1) // converts "2" to 2
console.log(strNum) */
