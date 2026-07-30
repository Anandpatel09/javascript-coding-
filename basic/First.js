//  Find the largest number in an array in JavaScript.

//without inbuild function
function largestNumber(arr){
    let largest =arr[0];

    for(let i=0;i<arr.length;i++){
         
        if (largest < arr[i]){
            largest= arr[i]
        }
    }
    return largest

}

console.log(largestNumber([7,9,3,2,8,9,3]))

// with inbuild function
  

function largestNumber(arr){
return Math.max(...arr)
}
console.log(largestNumber([7,9,3,2,8,9,3]))