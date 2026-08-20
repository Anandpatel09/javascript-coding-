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


// Star Pattern :-
// 1)
// * * * *
// * * * *
// * * * *
// * * * *

// function square() {
//     for (let i = 0; i < 4; i++) {

//         for (let j = 0; j < 4; j++) {
//             // process.stdout.write("* ")
//         }
//         console.log();
//     }
// }
// square();

// or

// function square() {
//     for (let i = 0; i < 4; i++) {
//         let row = "o";
//         for (let j = 0; j < 4; j++) {

//             row = row + "* ";
//         }
//         console.log(row);
//     }
// }
// square();

//2)
// *
// * *
// * * *
// * * * *

// function star() {
//     for (let i = 0; i < 4; i++) {
//         for (j = 0; j <= i; j++) {
//             process.stdout.write("* ")
//         }
//         console.log();
//     }
// }
// star();

//3)
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// function pat3(n) {
//     for (let i = 0; i < n; i++) {
//         let x = "";
//         for (let j = 0; j <= i; j++) {
//             x = x + (j + 1) + " ";
//         }
//         console.log(x);
//     }
// }
// pat3(5)

//4)
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// let n = 5
// for (let i = 0; i <= n; i++) {
//     let m = "";

//     for (let j = 0; j < i; j++) {
//         m = m + i+" ";
//     }
//     console.log(m)
// }

//5)
// 1, 2, 3, 4, 5
// 1, 2, 3, 4
// 1, 2, 3
// 1, 2
// 1


// for (let i = 5; i > 0; i--) {
//     let x = "";
//     for (let j = 0; j < i; j++) {
//         x = x + (j + 1) + " "
//     }
//     console.log(x);
// }

//6)
// * * * * *
// * * * *
// * * *
// * *
// *

// for (let i = 5; i > 0; i--) {
//     let x = "";
//     for (let j = 0; j < i; j++) {
//         x = x + "*" + " "
//     }
//     console.log(x);
// }


//7)
// - - - - *
// - - - * *
// - - * * *
// - * * * *
// * * * * *

//my solution
// let a = 10;
// let d = 1;
// for (let i = a; i > 0; i--) {
//     let b = ""
//     let c = ""
//     for (let j = 0; j < i - 1; j++) {
//         b = b + " ";
//     }

//     for (let k = 1; k <= d; k++) {
//         c = c + "*";
//     }
//     d = d + 1;
//     console.log(b, c)

// }

//Akshay saini's solution


// let n = 5;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     //adding empty spaces
//     for (let j = 0; j < n - (i + 1); j++) {
//         row = row + " ";
//     }
//     //adding stars
//     for (let k = 0; k < i + 1; k++) {
//         row = row + "*";
//     }
//     console.log(row)
// }


///8)

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0

//my

// let n = 6
// for (let i = 0; i <= n; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//         if (j % 2 != 0) {
//             row = row + "0"
//         }
//         else {
//             row = row + "1"
//         }
//     }
//     console.log(row);
// }
// let n = 6

// akshay

// let n = 9;
// for (let i = 0; i < n; i++) {
//     let row = "";
//     let toggle = 1;
//     for (let j = 0; j < i; j++) {
//         row = row + toggle
//         if (toggle == 1) {
//             toggle = 0
//         }
//         else {
//             toggle = 1
//         }

//     }
//     console.log(row);

// }


// write a fnction to count number of didgit


function countDigit(x) {
    //corner case if the number is 0

    if (x == 0) return 1;
    let count = 0;

    //corner case if the number is negative
    let num = Math.abs(x);


    while (num > 0) {
        num = Math.floor(num / 10)
        count++;
    }
    return count;
}
let a = -357
console.log(countDigit(a))