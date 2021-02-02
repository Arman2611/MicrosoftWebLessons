// for  my nodejs version
"use strict";

// let vs var
// let@ local scopeum e, haytararum e lokal popoxakan
// karox enq kanchel, arjeq@ klini undefined
// var value;
// console.log(value);

// value = 0;
// console.log(value);

// // chi kareli kanchel min4ev haytararel@, error kta
// let val = 56;
// console.log(val);

for (var i = 0; i < 5; ++i) {};
console.log(i);                                                 // 5

for (let j = 0; j < 5; ++j) {
    console.log(j);                                             // 0 1 2 3 4
};
// console.log(j);                                // kta error, j is not defined
// j-n hasaneli e miajn blok scopei nersum {}

// -------------- const vs (let var) -------------------

// cant re-assign an value to constant variable
const a = 5;
// a = 6                                            // error

// objectner@, masivner@ const haytarareluc heto karox enq popoxel
const obj2 = {
    text: "Barev",
    time: "12:00",
};
obj2.isValid = true;

const arr11 = [2,3,4,5];
arr11.pop();