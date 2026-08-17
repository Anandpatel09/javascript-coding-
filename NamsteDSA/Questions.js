//write a function that search for an element in an array and return the index value if the element is not present then return -1


//1) solution:

// function searchElement(arr, num) {

//     for (let i = 0; i < arr.length; i++) {

//         if (num === arr[i]) {
//             return i;
//         }
//     }
//     return -1;
// }
// let arr = [2, 5, 7, 4, 1, 8, 2];
// console.log(searchElement(arr, 8));


//2) WAP that returns negative number in an array.

// function negativeNumber(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             count++;
//         }
//     }
//     return count;
// }
// let arr = [3, -5, 7, -2, -1]
// console.log(negativeNumber(arr))
//



//3) write a function that return larget number in the array

// function LargestNumber(arr) {
//     let max = arr[0];
//     or
//     let max = -Infinity;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let arr = [3, -5, 7, -2, -1, 8, 34, 2]
// console.log(LargestNumber(arr))


//4) write a function that return minimum number in the array

// function SmallestNumber(arr) {
//     let min = arr[0];
//     // or
//     // let max = -Infinity;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// let arr = [3, -5, 7, -2, -1, 8, 34, 2]
// console.log(SmallestNumber(arr))



//5) Find the second largest Element in the Array
// function SecondLargest(arr) {
//     // let max = arr[0];
//     // or
// we can put checks also if array has only one elelmentin array.
//     let max = -Infinity;
//     let secMax = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             secMax = max;
//             max = arr[i];
//         }
//         else if (arr[i] > secMax && arr[i] != max) {
//             secMax = arr[i];
//         }
//     } return secMax;
// }
// let arr = [10, 20, 8, 9, 3, 5, 20]
// console.log(SecondLargest(arr))



