

// ---------------- ARRAYS IN JAVASCRIPT ---------------------

// An array is an ordered collection of values
// each element of an array has its position called index
// indexes are non-negative integers, start from 0 (0,1,2,..)

// Creating an array
var arr = [8,true, ,false + 5,{},'sometext'];

//Adding or changing an element of an array
arr[0] = 'eight';
arr[arr.length] = 'IamAnewElement';

// How to get index of an element?
var index1 = arr.indexOf('sometext');			// 5 
// if there is no element with that name, returns  -1

// What is type of an array and why?
// Arrays are a specialized form of JS object
console.log(typeof arr);						// object

// How to check if arr is array or a regular object?
// Arrays inherit directly from JS Array object
console.log(arr instanceof Array);				// true

// Arrays can have properties like objects
// They aren't indexes and dont change the lenght of that array
arr['prop'] = 'machine';




// ------------- OTHER WATS OF CREATING ARRAYS -----------------

// Creating an array by using Array constructor
// Note that new Array(3) will create an array with 3 empty elements
var arr1 = new Array('some','wrong','text');

// Array.of method creates array from several values
var arr2 = Array.of(2,6,5)					

// Array.from method can make array from strings
var arr3 = Array.from('day');				// ['d','a','y']

