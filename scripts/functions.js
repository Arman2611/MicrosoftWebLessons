// for  my nodejs version
"use strict";

// Function Declaration
// funkcian a,b-in avtomat let-ov e haytararum
function foo(a, b) {                                    // a,b are arguments
    var sum = a + b;
    return sum;
    // return-ic nerqev grvac kod@ chi katarvelu
};
// funkciayum var-ov haytararvac@ drcum chi erevum
// console.log(sum);                                    // kta error

// funkciayi kanchum
let value = foo(5,9);                                    // 5,9 are parameters
// console.log(value);                                     // 14

// ete funkcian return chi anum, kochvum e void

// Function Expression
let a = 56;
let bar = function (a,b) {
    console.log(a);                    // 52, knayi skzbic ir scope-@, heto global@
    return a - b;
};
console.log(a);                        // 56

// console.log(bar(52,43));


// -------- function declaration and expression differences ----------
// tarberutyun@ kapvac e hoistingi het

