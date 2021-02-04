// Spread operator (սփռել, տարածել)

let arr1 = [1,5,7];
let str = "Hello World"
let arr2 = [6,8, ...arr1, ...str];

console.log(arr2);


function addNum(a,b,c) {
    return a + b + c;
}
// let params = [7,8];              // NaN

console.log(addNum(...params));
