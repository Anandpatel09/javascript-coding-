// //  Find the largest number in an array in JavaScript.

// //without inbuild function
// function largestNumber(arr){
//     let largest =arr[0];

//     for(let i=0;i<arr.length;i++){
         
//         if (largest < arr[i]){
//             largest= arr[i]
//         }
//     }
//     return largest

// }

// console.log(largestNumber([7,9,3,2,8,9,3]))

// // with inbuild function
  

// function largestNumber(arr){
// return Math.max(...arr)
// }
// console.log(largestNumber([7,9,3,2,8,9,3]))


// // using reduce

// function largestNumber(arr){
// return arr.reduce((max,current) =>current > max ? current : max)
// }
// console.log(largestNumber([7,9,3,2,8,9,3]))



// sum of natural number

// let a =5;
// let sum=0;
// for( let i=1;i<=a; i++){
//      sum = sum+i;
// }
// console.log(sum);

// sum of natural number  using reccursion


// function rec(num){
//     if(num < 1)
//         return 0;
//     else
//         return num + rec(num -1);

// }
// const a=5
// console.log(rec(a));
