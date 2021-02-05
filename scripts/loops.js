// For of

const arr = [4,5,9,8,5];
for (let i of arr) {
    console.log(i);                 // 4 5 9 8 5
}

for (let i in arr) {
    console.log(i);                 // 0 1 2 3 4
}
// for in returns keys of the object