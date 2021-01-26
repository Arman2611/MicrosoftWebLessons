
// ----------------- OBJECTS IN JAVASCRIPT ---------------------

// An object is an unordered collection of properties,
// each of which has a name and a value

// Creating an object
var user = {
	name: {
		firstName: 'Diego',
		lastName: 'Forlan',
	},
	age: 41,
	gender: 'male',
	isWorking: true,
	hobbies: ['football', 'boxing', 'driving'],
};

// Adding or changing a property of the object
user.nationality = 'uruguayan';

// delete operator deletes a property of the object
delete user.nationality;




// -------------- OBJECT CONSTRUCTOR -----------------

// Objects can be created by Object constructor function
var obj = new Object();
obj.content = 'Do homework';
obj.time = "12:00";

var car = new Object();
type = "Nissan";
year = "2015";
car["carType"] = type;
car["carYear"] = year;
