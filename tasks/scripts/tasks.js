
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
	// Other ways`
	// return arr.slice(0);
	// return [...arr];
	// return [].concat(arr);
	/*let copy = [];
		for (let i = 0; i < arr.length; i++) {
			copy.push(arr[i]);
		}
	return copy;*/
};

clone = cloneArr(arr1);									
console.log(clone);										// [1,3,4]

function deepClone(arr) {
	let clonedArr = arr;
	arr.push(56);
	return clonedArr;
}

// Task 3: Create a function, that checks if the given strings are anagrams or not

function checkForAnagrams (str1, str2) {
	// console.log(str1, typeof str1, str1.length);
	// console.log(str2, typeof str2, str2.length);

	// if this variable is reassigned as 'true', it means, 
	// that arguments are anagrams
	let areAnagrams = false;
	
	// arguments must be strings to be compared
	if ( (typeof str1 !== 'string') || (typeof str2 !== 'string') ) {
		console.log('Arguments must be strings');
		return;
	};

	// anagrams must have the same length
	if (str1.length != str2.length) {
		console.log('wrong lengths')
		return areAnagrams;
	};

	// arguments sould not be empty strings
	if (str1 === '' || str2 === '') {
		console.log("Can't compare empty strings");
		return;
	};

	let arr1 = Array.from(str1);
	let arr2 = Array.from(str2);
	
	for (let i = 0; i < arr1.length; i++) {
		// when this variable is reassigned as 'true', means, that 
		// we have found matching for arr1[i] element in arr2 array
		let foundForLetter = false;

		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				foundForLetter = true;

				// we assign undefined to arr2 element to avoid 
				// double matching for 1 element
				arr2[j] = undefined;

				if (i === (arr1.length - 1)) {
					// if all the elements of arr1 found their matchings,
					// then arguments are anagrams
					areAnagrams = true;
					return areAnagrams;
				}
				break;
			};
		};

		// if found matching for arr[i], search for arr[i+1]
		if (foundForLetter === true) {
			continue;
		} else {
			return areAnagrams;
		};
	}
};
console.log( checkForAnagrams('melon','lemon') );

/*
// another solution without nested loops
function validAnagram(str1,str2) {
	if(str1.length !== str2.length) {return false};
	const lookup = {};
	for(let i = 0; i < str1.length; i++) {
		let letters = str1[i];
		// if letter exists increment, else set to 1;
		lookup[letters] ? lookup[letters] += 1 : lookup[letters] = 1;
	};
	for(let i = 0; i < str2.length; i++) {
		let letters = str2[i];
		if(!lookup[letters]) {
			return false;
		} else {
			lookup[letters] -= 1;
		}
	};
	return true;
};

console.log(validAnagram("abc", "abc"));
console.log(validAnagram("", ""));
console.log(validAnagram("abcd", "abc"));
console.log(validAnagram("aac", "cca"));
*/

// Task 3: Create functions, that will convert temperature from Celcius to Farenheit and from Farenheit to Celcius

function toFahrenheit(C) {
	let F;
	F = C * 1.8 + 32;
	return F;
};

function toCelsius(F) {
	let C;
	C = (F - 32) / 1.8;
	return C;
};

console.log(toFahrenheit(25));			// 77
console.log(toCelsius(32));				// 0

// Task 5: Create a function, that checks if the given string is palindrom or not

function checkForPalindrom(str) {
	// arguments should not be empty string
	if (str === '') {
		console.log("Don't use empty strings");
		return;
	};
	str = str.toLowerCase();
	console.log(str)
	let isPalindrom = false;
	for (let i = 0; i < (str.length/2 + 1); i++) {
		if (str[i] === str[str.length-1-i]) {
			continue;
		} else {return isPalindrom};
	};
	isPalindrom = true;
	return isPalindrom;
};

console.log(checkForPalindrom('Radar'))				// true
