

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




// -------------- SOME COMMON ARRAY METHODS ------------------

// Push method adds several elements from end of an array
// returns new length of that array
var arr4 = [2,4,5];
arr4.push(7,8);								// [2,4,5,7,8]

// Pop method cuts and returns last element of an array 
// That element is deleted from array
arr4.pop();									// [2,4,5,7]

// Unshift method adds elements at the start of an array
// returns new length of that array
arr4.unshift(1,9);							// [1,9,2,4,5,7]

// Shift method cuts and returns first element of an array
// That element is deleted from array
arr4.shift();								// [9,2,4,5,7]

// Concat method is used to unite 2 arrays
// unlike push, concat doesn't change the initial array
var arr5 = [3,5];
var concatedArray = arr5.concat([7,9]);		// [3,5,7,9]

// We can use push method with spread(...) operator to 
// unite arrays and change the initial array 
arr5.push(...[4,6]);						// [3,5,4,6]

// length property sets new length for array
// it can delete some elements or create empty slots in array
var arr6 = [3,5];
arr6.length = 4;							// [3,5,empty,empty]

// (in) operator shows if array has the given index or not
// console.log( 3 in arr6 )					// false

// if we set an element as undefined, (in) operator will return true
arr6[3] = undefined;
// console.log( 3 in arr6 )					// true

// Slice method returns part of the initial array
// Note that initial array isn't changed
var arr7 = [3,5,7,9];
var slicedPart = arr7.slice(0,2);			// [3,5]

// Splice method can delete and add elements to an array
// returns the cutted part of initial array

// Sintax is splice(start,deleteCount)
var arr8 = [3,5,7,9,11,13];
var splicedPart = arr8.splice(2,2);			// [7,9]

// or splice(start,deleteCount,new elements for adding)
var arr9 = [3,5,7,9,11,13];
arr9.splice(2,2,'new','items');      		// [3,5,'new','items',11,13]

