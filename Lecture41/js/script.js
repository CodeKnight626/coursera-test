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

//	Lecture 44

function orderChickenWith(sideDish = "pizza") {
	//Use this instead?
	//sideDish = sideDish || "Whatever!"
	console.log("Chicke with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();