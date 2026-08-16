//maximum from array with in build function.

// function arr(a) {
//     let max = Math.max(...a)
//     return max
// }
// let m = [3, 6, 2, 8, 4, 9, 2, 1,]
// console.log(arr(m));

//without inbuild function

// function a(b) {
//     b.sort((x, y) => x - y);
//     return b[b.length - 1]
// }
// console.log(a([3, 6, 2, 8, 4, 9, 2, 1,]));

// without inbuild function 
function aeee(arr) {
    let mix = arr[0];
    let max;
    for (let i = 0; i < arr.length; i++) {
        if (mix < arr[i]) {
            min = arr[i];
            max = min;
        }
    }
    console.log(max);
}
aeee([3, 6, 2, 8, 4, 9, 2, 1])


