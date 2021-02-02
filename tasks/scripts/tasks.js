
// Task 1: Create a function, that uppercases first letter of a string

function upFirstLetter (str) {
	let arr = Array.from(str);
	arr[0] = arr[0].toUpperCase();
	arr = arr.join("");
	return arr;
};
var str1 = 'sometext';
console.log( str1 + " => " + upFirstLetter(str1));		// "Sometext"			

// Task 2: Create a function, that copies the given array

var arr1 = [1,3,4];
var clone;

function cloneArr (arr) {
	return arr.map((x) => x);
};

clone = cloneArr(arr1);									
console.log(clone);										// [1,3,4]
