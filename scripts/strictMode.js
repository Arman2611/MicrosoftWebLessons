"use strict"
// cant define a variable without var/let/const

function sum() {
    // "use strict"
    var number = 5;
    console.log(number);
};
sum();

const person = {
    age: 19,
    name: "Samson",
}

// darcnel object@ readonly
const otherPerson = Object.freeze(person);

// use strict-i depqum error kta`
// otherPerson.age = 56;
// otherPerson.otherName = 'Mark';
// aranc use stricti error chi ta, bayc 19 kmna, prop chi avelacni

