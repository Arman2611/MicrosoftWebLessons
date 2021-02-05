
// console.log(this);               // Window

function foo() {
    console.log(this);              
};
foo();                                 // Window, undefined if strict mode

const bar = () => console.log(this);
bar();                                 // Window, Window if strict mode

const obj = {
    name: "Ani",
    age: 32,
    display: function () {
        console.log(this.name);
    },
    display2: () => {
        console.log(this.name)
    }
}

obj.display();                          // Ani
obj.display2();                         // strict-um undefined

