/*var message = "In global";
console.log("global: message = " + message);

var a = function () {
	var message = "inside a";
	console.log("a: message = " + message);
	b();
}

function b () {
	console.log("b: message = " + message);
}

a();*/

/*Lecture 42
var x;
console.log(x);

if (x == undefined) {
	console.log("x is undefined");
}

x = 5;
if (x == undefined) {
	console.log("x is undefined")
}
else {
	console.log("x has been defined")
}  */


/*
//Lecture 43

//*******String concatination
var string = "Hello";
string += " World";
console.log(string + "!")

//*******Regular math operators
console.log((5 + 4) / 3);
console.log(undefined / 5);


// //*********Equality
var x = 4, y = 4;
if (x == y) {
	console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
	console.log("x='4' is equal to y=4");
}
else {
	console.log("x='4' is equal to y=4");
}

//*****Strict equality
if (x === y) {
	console.log("Strict: x='4' is equal to y=4");
}
else {
	console.log("Strict: x='4' is NOT equal to y=4");
}

// // ***** If statement (all false)
if (false || null || undefined || "" || 0 || NaN) {
	console.log("This line won't ever execute")
}
else {
	console.log("All false")
}

// // ****** If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
	console.log("All true")
}




// // ***** Best practice for {} style
// // Curly brace on the same or next line...
// // Is it just a style?
function a()
{
	return
	{
		name:"Yaakov"
	};
}

function b() {
	return{
		name: "Yaakov"
	};
}

console.log(a());
console.log(b());

// For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
	console.log(sum)
	sum = sum + i;
}
console.log("Sum of 0 through 9 is:" + sum);
*/


/*
//	Lecture 44

function orderChickenWith(sideDish = "pizza") {
	//Use this instead?
	//sideDish = sideDish || "Whatever!"
	console.log("Chicke with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

*/


/*
// Lecture 45
var company = new Object();

company.name = "Facebook";
console.log(company);
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "Blue";

console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName);

console.log(company["name"]);

//company.$stock = 110;
//Another way of definig it
company["stock of company"] = 110


console.log("Stock of company is " + company["stock of company"]);


//Way to create objects with a more readable code: Object literal it means the var has curly braces


var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "Blue"
	},
//	$stock: 110
	"stock of company": 110
};

console.log(facebook.ceo.firstName);
*/


/*
//Lecture 46
//Functions

//Functions are objects
function multiply(x,y) {
	return x * y;
}

multiply.version = "v.1.0.0";
console.log(multiply.version);

//function factory

function makeMultiplayer(multiplier) {
	var myFunc = function (x) {
		//console.log(x);
		return multiplier * x
	};

	return myFunc;
}

var multiplyBy3 = makeMultiplayer(3);
//console.log(multiplyBy3(10));

var doubleAll = makeMultiplayer(2);
//console.log(doubleAll(100));


//Passing functions as an argument
function doOperationOn(x, operation) {
	return operation(x);
}

var result = doOperationOn(5, multiplyBy3);

console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result)

*/


/*
//Lecture 47

//Passed by reference
var a = {x: 7};
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("After update b.x: ")

console.log(a);
console.log(b);



//Passed vy reference
var a = 7;
var b = a;

console.log(b);

*/

/*
//Lecture 48
//Prototypes, function constructors, and "this"
 
function test() {
	console.log(this);
	this.myName = "Cesar";
}

test();
console.log(window.myName);


//Function constructor /////We can't return anything form a constructor
function Circle (radius) {
	//console.log(this);
	this.radius = radius;

	//Creating a method, this will be constructed every time for a new object
	this.getArea = function () {
		return Math.PI * Math.pow(this.radius, 2);
	};

	//Creating a method with prototype, it will be the same location 
	//in memory for every single new object and should be outside the constructor
	//to avoid constructing it everytime we declare a new object
	/*Circle.prototype.getArea = function () {
		return Math.PI * Math.pow(this.radius, 2);
	};
}

//Like this
Circle.prototype.getArea = function () {
	return Math.PI * Math.pow(this.radius, 2);
};

var myCircle = new Circle(10);  //new Object
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);


*/

/*
//Lecture 49 
//Objects Literals and the "this" keyword

var literalCircle = {
	radius: 10,
	getArea: function () {

		//Javascript bug
		var self = this;
		console.log(this);
		

		var increaseRadius = function () {
			//Javascript bug, if we type...
			//this.radius = 20;
			//it won't update the property radius
			//We need to declare a new variablke called "self"
			//var self = this;

			//and then refer to the var not like "this" but like "self"
			self.radius = 20;
		}


		increaseRadius();
		
		console.log(this.radius);
		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());
*/

//Lecture 50
//Arrays

/*
var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
	console.log("Hello: " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);

console.log(array[1]);
array[2](array[0]);

console.log(array[3].course);




///Short hand array creation
var names = ["Yaakov", "Jhon", "Joe"];
console.log(names);

names[100] = "Jim"

for (var i = 0; i < names.length; i++) {
	console.log("Hello " + names[i]);
}



var names2 = ["Yaakov", "Jhon", "Joe"];

var myObj = {
	name: "Yaakov",
	course: "HTML/CSS/JS",
	plataform: "Coursera"
};

for (var prop in myObj){
	console.log(prop + ": " + myObj[prop]);
}

for (var name in names2) {
	console.log("Hello " + names2[name]);
}


names2.greeting = "Hi! "
for (var name in names2) {
	console.log("Hello " + names2[name]);
}

*/


//Lecture 51 clousers
/*
function makeMultiplier (multiplier ) {
	return (
		function (x) {
			return multiplier * x;
		}
	);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));  //its own execution enviorment
*/



//Lecture 52 Fake namespaces