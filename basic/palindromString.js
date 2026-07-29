// Write a Program to check whether a string is a palindrome string.

// with inbuild function 
 
// function palindrom(str){
//     let palin=str.split("").reverse().join("");

//     if (str === palin) {
//         console.log("Palindrome");
//     } else {
//         console.log("Not Palindrome");
//     }
// }
// palindrom("anand patel")

// without inbuild function

function palindrom(str){
    let rev=""
    for(let i=str.length;i<=0;i--){
        rev=rev+str[i];
    }
     if (str === rev) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }
}
palindrom("anand pppaaatteell")