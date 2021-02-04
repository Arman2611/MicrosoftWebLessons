// Rest operator

function multy() {
    let numbers = Array.from(arguments);
    console.log(
        numbers.reduce(function(value,currentValue){
            return value * currentValue;
        })
    );
}

// multy(2,5);                  //10
// multy(3,5,6);                //90

// ... Rest operator array e sarqum
function multy2(...numbers) {
    console.log(
        numbers.reduce(function(value,currentValue){
            return value * currentValue;
        })
    );
}

multy2(4,5,9);