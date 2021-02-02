// for  my nodejs version
// "use strict";
// strict modum aranc vari leti chenq karox haytararel

console.log(val);       // undefined, error chi talis
var val = 4;

// HOISTING _ minchev popoxakan@ haytararel@ karox enq ayn kirarel
// Interpretator@ minchev kod@ arajin toxic kardal sksel@
// ancnum e kodi vrayov ev var-er@ katarum

// Function declaration@ hoisting anum e, karox enq kanchel minchev haytararel@
console.log(foo(5,9));                                  // 14
function foo(a, b) {                                    
    var sum = a + b;
    return sum;
};

// Function expression@ hoisting chi linum
// console.log(bar(10,5));                         // error, bar is not a function
var bar = function (a,b) {
    console.log(a);                   
    return a - b;
};
